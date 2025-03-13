"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9212],{28453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>i});var r=t(96540);const n={},s=r.createContext(n);function l(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:o},e.children)}},62488:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(74848),n=t(28453);const s={},l="Log",i={id:"developer-manual/ecosystem-tools/log",title:"Log",description:"This document mainly introduces the logging function of TuGraph.",source:"@site/versions/version-3.5.1/en-US/source/5.developer-manual/5.ecosystem-tools/4.log.md",sourceDirName:"5.developer-manual/5.ecosystem-tools",slug:"/developer-manual/ecosystem-tools/log",permalink:"/tugraph-db/en/3.5.1/developer-manual/ecosystem-tools/log",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph Explorer",permalink:"/tugraph-db/en/3.5.1/developer-manual/ecosystem-tools/tugraph-explorer"},next:{title:"Cypher API",permalink:"/tugraph-db/en/3.5.1/developer-manual/interface/cypher"}},a={},u=[{value:"1.Introduction",id:"1introduction",level:2},{value:"2.Server log",id:"2server-log",level:2},{value:"3.Audit log",id:"3audit-log",level:2}];function d(e){const o={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"log",children:"Log"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"This document mainly introduces the logging function of TuGraph."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,r.jsx)(o.p,{children:"TuGraph keeps two types of logs: server logs and audit logs. Server logs record human-readable server status information, while audit logs maintain encrypted information for every operation performed on the server."}),"\n",(0,r.jsx)(o.h2,{id:"2server-log",children:"2.Server log"}),"\n",(0,r.jsx)(o.p,{children:"Server logs track server status (such as server startup/stop), and the requests that the server has provided and their corresponding responses. The details of server logs can be configured using the 'verbose' option. The log location is specified in the 'log_dir' option."}),"\n",(0,r.jsx)(o.p,{children:"The default 'verbose' level is' 1 '. Under this level, the server only prints logs about major events, such as server startup/stop. Requests and responses are not logged at this level."}),"\n",(0,r.jsx)(o.h2,{id:"3audit-log",children:"3.Audit log"}),"\n",(0,r.jsx)(o.p,{children:"Audit logs record each request and response, as well as the user who sent the request and when the request received. Audit logging can only be turned on or off. The results can be queried using the TuGraph visualization tool and the REST API."})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);