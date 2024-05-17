"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[688],{4167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(4848),o=n(8453);const r={},a="Persistance Without Event Sourcing",i={id:"other/non-event-sourced",title:"Persistance Without Event Sourcing",description:"While workflows4s was designed to work through event-sourcing, where each change to the workflow is persisted through a",source:"@site/docs/other/non-event-sourced.md",sourceDirName:"other",slug:"/other/non-event-sourced",permalink:"/workflows4s/docs/other/non-event-sourced",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating Workflows",permalink:"/workflows4s/docs/other/migrating"}},c={},l=[{value:"Append-only state persistance",id:"append-only-state-persistance",level:2},{value:"Updatable state persistance",id:"updatable-state-persistance",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"persistance-without-event-sourcing",children:"Persistance Without Event Sourcing"}),"\n",(0,s.jsx)(t.p,{children:"While workflows4s was designed to work through event-sourcing, where each change to the workflow is persisted through a\ndedicated event, it's possible to run it in slightly different, possibly simpler, ways."}),"\n",(0,s.jsx)(t.h2,{id:"append-only-state-persistance",children:"Append-only state persistance"}),"\n",(0,s.jsx)(t.p,{children:"If you want to persist your state directly, and you're fine with doing it through append-only storage, it should work\njust fine with\nexisting workflows4s mechanisms."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",metastring:"file=./main/scala/workflow4s/example/docs/AppendOnlyPersistance.scala start=start_example end=end_example",children:"object Context extends WorkflowContext {\n  override type State = MyState\n  override type Event = MyState\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This should work but has not been battle-tested yet."}),"\n",(0,s.jsx)(t.h2,{id:"updatable-state-persistance",children:"Updatable state persistance"}),"\n",(0,s.jsx)(t.p,{children:"If you want to persist your state directly, and you apply your changes to the database directly (like in a standard\nCRUD-based applications), it's theoretically possible to make it work if a checkpoint follows up every persistent action."}),"\n",(0,s.jsx)(t.p,{children:"At the moment, checkpoints are not yet available, although they are on the short-term roadmap."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);