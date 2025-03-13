"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[60434],{28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}},64521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(74848),i=r(28453);const a={},o="Quick Start",s={id:"quick-start/preparation",title:"Quick Start",description:"This document is intended for new users to get started quickly and contains an introduction, features, installation, and use of TuGraph.",source:"@site/versions/version-4.3.1/en-US/source/3.quick-start/1.preparation.md",sourceDirName:"3.quick-start",slug:"/quick-start/preparation",permalink:"/tugraph-db/en-US/en/4.3.1/quick-start/preparation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/tugraph-db/en-US/en/4.3.1/introduction/glossary"},next:{title:"DEMO:Movie",permalink:"/tugraph-db/en-US/en/4.3.1/quick-start/demo/movie"}},l={},d=[{value:"1.Introduction",id:"1introduction",level:2},{value:"1.1.Supported Platforms",id:"11supported-platforms",level:3},{value:"1.2.Hardware requirements",id:"12hardware-requirements",level:3},{value:"2.Installation",id:"2installation",level:2},{value:"2.1.Fast experience through Docker",id:"21fast-experience-through-docker",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document is intended for new users to get started quickly and contains an introduction, features, installation, and use of TuGraph."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph is a large-scale graph computing system independently developed by Ant Group, providing graph database engine and graph analysis engine. Its main features are large data storage and computation, high throughput, and flexible API, while supporting efficient online transaction processing (OLTP) and online analytical processing (OLAP). LightGraph and GeaGraph are former names of TuGraph."}),"\n",(0,t.jsx)(n.p,{children:"The main functional features include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Labeled property Graph Model"}),"\n",(0,t.jsx)(n.li,{children:"Support multiple Graphs"}),"\n",(0,t.jsx)(n.li,{children:"Full ACID transaction processing"}),"\n",(0,t.jsx)(n.li,{children:"Built-in 34 graph analysis algorithm"}),"\n",(0,t.jsx)(n.li,{children:"Graph visualization tool based on Web client"}),"\n",(0,t.jsx)(n.li,{children:"RESTful API and RPC are supported"}),"\n",(0,t.jsx)(n.li,{children:"OpenCypher graph query language"}),"\n",(0,t.jsx)(n.li,{children:"Stored procedure based on C++/Python/Java"}),"\n",(0,t.jsx)(n.li,{children:"The Traversal API for efficient graph algorithm development"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Performance and scalability features include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TB large capacity"}),"\n",(0,t.jsx)(n.li,{children:"High throughput of ten million vertices per second"}),"\n",(0,t.jsx)(n.li,{children:"High Availability Support (Enterprise Edition)"}),"\n",(0,t.jsx)(n.li,{children:"High-performance Batch Import"}),"\n",(0,t.jsx)(n.li,{children:"Online/offline backup"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"11supported-platforms",children:"1.1.Supported Platforms"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph supports both X86_64 and ARM64 architectures in physical, virtual, and containerized environments."}),"\n",(0,t.jsx)(n.h3,{id:"12hardware-requirements",children:"1.2.Hardware requirements"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You are advised to use NVMe SSDS with large memory configurations for optimal performance\u3002"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Hardware"}),(0,t.jsx)(n.th,{children:"Minimum Configuration"}),(0,t.jsx)(n.th,{children:"Recommended configuration"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"X86_64"}),(0,t.jsx)(n.td,{children:"Xeon E5 2670 v4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Memory"}),(0,t.jsx)(n.td,{children:"4GB"}),(0,t.jsx)(n.td,{children:"256GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Disk"}),(0,t.jsx)(n.td,{children:"100GB"}),(0,t.jsx)(n.td,{children:"1TB NVMe SSD"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System"}),(0,t.jsx)(n.td,{children:"Linux 2.6"}),(0,t.jsx)(n.td,{children:"Ubuntu 18.04, CentOS 7.3"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"2installation",children:"2.Installation"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph can be installed quickly via Docker Image or locally via RPM /deb packages.In addition, TuGraph offers community edition services on Alibaba Cloud Computing Nest, which means you don't need to purchase your own cloud host to quickly deploy TuGraph services and achieve operational monitoring, thus building your own graph application."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Installation package/image download: refer to the TuGraph-Latest-Version section in ",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/en/4.3.1/guide",children:"Download address"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Computing Nest Deployment: You can search for it on Alibaba Cloud Computing Nest, or you can quickly access it through [deployment link] (../5.developer-manual/1.installation/5.cloud-deployment.md)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21fast-experience-through-docker",children:"2.1.Fast experience through Docker"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The Docker environment installed locally"}),"\n",(0,t.jsxs)(n.p,{children:["The docker official documentation\uff1a",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-started/",children:"https://docs.docker.com/get-started/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull the docker images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker pull tugraph/tugraph-runtime-centos7\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" docker run -it -d -p 7001:7001 -p 7070:7070 -p 7687:7687 -p 8000:8000 -p 8888:8888 -p 8889:8889 -p 9090:9090 \\\n -v /root/tugraph/data:/var/lib/lgraph/data  -v /root/tugraph/log:/var/log/lgraph_log \\\n --name tugraph_demo tugraph/tugraph-runtime-centos7:${VERSION} /bin/bash\n\ndocker exec -d tugraph_demo bash /setup.sh\n# 8000 is default http port\uff0cfor tugraph-db-browser accessing.\n# 7070 is default http port\uff0cfor legacy tugraph-web accessing.\n# 7687 is bolt port, for neo4j client accessing.\n# 9090 is default RPC port\uff0cfor RPC client accessing.\n\n# The default data directory is /var/lib/lgraph/data and the default log directory is /var/log/lgraph_log,\n# which is configured in the tugraph configuration file at /usr/local/etc/lgraph.json inside the docker.\n# This command mounts the data directory and log directory to /root/tugraph/ on the host for persistence,\n# which you can modify according to your actual situation.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open by browser"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Accessing tugraph-db-browser: ",(0,t.jsx)(n.code,{children:"http://x.x.x.x:8000"}),". Default account is ",(0,t.jsx)(n.code,{children:"admin"})," and default password is ",(0,t.jsx)(n.code,{children:"73@TuGraph"}),".\nThe page will be redirected to the password modification page for the first login. Please modify the password according to the page prompt."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":\nAccess ",(0,t.jsx)(n.code,{children:"http://x.x.x.x:7070"})," if you want to access legacy tugraph-web, with default account ",(0,t.jsx)(n.code,{children:"admin"})," and default password ",(0,t.jsx)(n.code,{children:"73@TuGraph"}),".\nBut please note that legacy web is no longer maintained, it is recommended to use tugraph-db-browser."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);