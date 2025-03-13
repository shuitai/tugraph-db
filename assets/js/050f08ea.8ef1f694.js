"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8506],{28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(96540);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}},39212:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var n=o(74848),l=o(28453);const r={},s="Bolt client",i={id:"client-tools/bolt-client",title:"Bolt client",description:"TuGraph implements Neo4j's bolt protocol, you can use Neo4j's client to access TuGraph.",source:"@site/versions/version-4.2.0/en-US/source/7.client-tools/5.bolt-client.md",sourceDirName:"7.client-tools",slug:"/client-tools/bolt-client",permalink:"/tugraph-db/en/4.2.0/client-tools/bolt-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph-OGM",permalink:"/tugraph-db/en/4.2.0/client-tools/tugraph-ogm"},next:{title:"TuGraph console client",permalink:"/tugraph-db/en/4.2.0/client-tools/bolt-console-client"}},c={},a=[{value:"Enable bolt port",id:"enable-bolt-port",level:2},{value:"Limitations on use",id:"limitations-on-use",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"bolt-client",children:"Bolt client"})}),"\n",(0,n.jsx)(t.p,{children:"TuGraph implements Neo4j's bolt protocol, you can use Neo4j's client to access TuGraph."}),"\n",(0,n.jsx)(t.h2,{id:"enable-bolt-port",children:"Enable bolt port"}),"\n",(0,n.jsxs)(t.p,{children:["If you are using the TuGraph runtime docker image, the config file is ",(0,n.jsx)(t.code,{children:"/usr/local/etc/lgraph.json"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.code,{children:"bolt_port=7687"})," (modify the port) to TuGraph's config file to enable the bolt port, Neo4j clients should connect to the bolt port."]}),"\n",(0,n.jsx)(t.h2,{id:"limitations-on-use",children:"Limitations on use"}),"\n",(0,n.jsx)(t.p,{children:"TuGraph does not implement all the features of neo4j bolt protocol."}),"\n",(0,n.jsx)(t.p,{children:"Explicit transactions are currently not supported and need to avoid using these features."}),"\n",(0,n.jsxs)(t.p,{children:["There are some examples for reference under ",(0,n.jsx)(t.code,{children:"demos/Bolt"})," in the code repository."]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);