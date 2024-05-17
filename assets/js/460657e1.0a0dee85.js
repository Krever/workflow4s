"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[333],{6914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(4848),s=n(8453),o=n(5871);const i={},l="Runtimes",c={id:"runtimes/index",title:"Runtimes",description:"Workflows4s Runtime is responsible for the following tasks:",source:"@site/docs/runtimes/index.mdx",sourceDirName:"runtimes",slug:"/runtimes/",permalink:"/workflows4s/docs/runtimes/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Embedding Sub-Workflows",permalink:"/workflows4s/docs/operations/embedding"},next:{title:"Pekko / Akka",permalink:"/workflows4s/docs/runtimes/pekko"}},a={},u=[];function d(e){const t={h1:"h1",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"runtimes",children:"Runtimes"}),"\n",(0,r.jsx)(t.p,{children:"Workflows4s Runtime is responsible for the following tasks:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Managing workflow state"}),"\n",(0,r.jsx)(t.li,{children:"Persisting events"}),"\n",(0,r.jsx)(t.li,{children:"Recovering state from events"}),"\n",(0,r.jsx)(t.li,{children:"Waking up workflow at the right moments"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"See the list of available runtimes for details"}),"\n",(0,r.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(4164),o=n(4142),i=n(8774),l=n(4586);const c=["zero","one","two","few","many","other"];function a(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}var f=n(6654),h=n(1312),p=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function w(e){let{href:t,children:n}=e;return(0,g.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function k(e){let{href:t,icon:n,title:r,description:o}=e;return(0,g.jsxs)(w,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),o&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:o,children:o})]})}function j(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,h.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(k,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,g.jsx)(k,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(b,{item:t});case"category":return(0,g.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.$S)();return(0,g.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(y,{...e});const r=(0,o.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);