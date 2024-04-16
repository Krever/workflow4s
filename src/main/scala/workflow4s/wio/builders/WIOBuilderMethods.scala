package workflow4s.wio.builders

import cats.effect.IO
import cats.implicits.catsSyntaxEitherId
import workflow4s.wio.WIO.Branch
import workflow4s.wio.internal.{EventHandler, WorkflowEmbedding}
import workflow4s.wio.*

import scala.concurrent.duration.Duration
import scala.reflect.ClassTag

trait WIOBuilderMethods[Ctx <: WorkflowContext] {

  def runIO[State] = new RunIOPartiallyApplied1[State]

  class RunIOPartiallyApplied1[StIn] {
    def apply[Evt <: WCEvent[Ctx]: ClassTag](f: StIn => IO[Evt]): RunIOPartiallyApplied2[StIn, Evt] = {
      new RunIOPartiallyApplied2[StIn, Evt](f)
    }
  }

  class RunIOPartiallyApplied2[In, Evt <: WCEvent[Ctx]: ClassTag](getIO: In => IO[Evt]) {
    def handleEvent[Out <: WCState[Ctx]](f: (In, Evt) => Out): WIO[In, Nothing, Out, Ctx] = {
      WIO.RunIO[Ctx, In, Nothing, Out, Evt](
        getIO,
        EventHandler(summon[ClassTag[Evt]].unapply, identity, (s, e: Evt) => f(s, e).asRight),
        ErrorMeta.noError,
      )
    }

    def handleEventWithError[Err, Out <: WCState[Ctx]](
        f: (In, Evt) => Either[Err, Out],
    )(implicit errorCt: ErrorMeta[Err]): WIO[In, Err, Out, Ctx] = {
      WIO.RunIO[Ctx, In, Err, Out, Evt](getIO, EventHandler(summon[ClassTag[Evt]].unapply, identity, f), errorCt)
    }
  }

  def getState[St <: WCState[Ctx]]: WIO[St, Nothing, St, Ctx] = WIO.Pure(s => s.asRight, ErrorMeta.noError)

  def pure[St]: PurePartiallyApplied[St] = new PurePartiallyApplied

  class PurePartiallyApplied[In] {
    def apply[O <: WCState[Ctx]](value: O): WIO[In, Nothing, O, Ctx] = WIO.Pure(_ => Right(value), ErrorMeta.noError)

    def make[O <: WCState[Ctx]](f: In => O): WIO[In, Nothing, O, Ctx] = WIO.Pure(s => Right(f(s)), ErrorMeta.noError)

    def makeError[Err, Out >: In <: WCState[Ctx]](f: In => Option[Err])(implicit em: ErrorMeta[Err]): WIO[In, Err, Out, Ctx] = {
      WIO.Pure(s => f(s).map(Left(_)).getOrElse(Right(s: Out)), em)
    }
  }

  //    def unit[In] = pure[In](())

  def raise[In]: RaisePartiallyApplied[In] = new RaisePartiallyApplied

  class RaisePartiallyApplied[In] {
    def apply[Err](value: Err)(implicit ct: ErrorMeta[Err]): WIO[In, Err, Nothing, Ctx] = WIO.Pure(s => Left(value), ct)
  }

  def fork[In]: ForkBuilder[In, Nothing, Nothing] = ForkBuilder(Vector())

  // can be removed and replaced with direct instance of WIO.Fork?
  case class ForkBuilder[-In, +Err, +Out <: WCState[Ctx]](branches: Vector[Branch[In, Err, Out, Ctx]]) {
    def branch[T, Err1 >: Err, Out1 >: Out <: WCState[Ctx], In1 <: In](cond: In1 => Option[T])(
        wio: WIO[(In1, T), Err1, Out1, Ctx],
    ): ForkBuilder[In1, Err1, Out1] = addBranch(Branch(cond, wio))

    def addBranch[T, Err1 >: Err, Out1 >: Out <: WCState[Ctx], In1 <: In](
        b: Branch[In1, Err1, Out1, Ctx],
    ): ForkBuilder[In1, Err1, Out1] = ForkBuilder(branches.appended(b))

    def done: WIO[In, Err, Out, Ctx] = WIO.Fork(branches)
  }

  def branch[In]: BranchBuilder[In] = BranchBuilder()

  case class BranchBuilder[In]() {
    def when[Err, Out <: WCState[Ctx]](cond: In => Boolean)(wio: WIO[In, Err, Out, Ctx]): Branch[In, Err, Out, Ctx] =
      Branch(cond.andThen(Option.when(_)(())), wio.transformInput((x: (In, Any)) => x._1))

    def create[T, Err, Out <: WCState[Ctx]](cond: In => Option[T])(wio: WIO[(In, T), Err, Out, Ctx]): Branch[In, Err, Out, Ctx] =
      Branch(cond, wio)
  }

  def embed[In, Err, Out <: WCState[InnerCtx], InnerCtx <: WorkflowContext, OS[_ <: WCState[InnerCtx]] <: WCState[Ctx]](
      wio: WIO[In, Err, Out, InnerCtx],
  )(
      embedding: WorkflowEmbedding.Aux[InnerCtx, Ctx, OS, In],
      initialState: In => WCState[InnerCtx],
  ): WIO[In, Err, OS[Out], Ctx] = {
    WIO.Embedded(wio, embedding, initialState)
  }

  def noop(): WIO[Any, Nothing, Nothing, Ctx] = WIO.Noop[Ctx]()

}