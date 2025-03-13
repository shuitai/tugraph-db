"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91769],{28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var r=t(96540);const d={},i=r.createContext(d);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),r.createElement(i.Provider,{value:e},n.children)}},58481:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(74848),d=t(28453);const i={},s="TuGraph Roadmap",o={id:"contributor-manual/roadmap",title:"TuGraph Roadmap",description:"1. Introduction",source:"@site/versions/version-4.5.1/en-US/source/12.contributor-manual/5.roadmap.md",sourceDirName:"12.contributor-manual",slug:"/contributor-manual/roadmap",permalink:"/tugraph-db/en/4.5.1/contributor-manual/roadmap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Corporate Contributor License Agreement",permalink:"/tugraph-db/en/4.5.1/contributor-manual/corporate-cla"},next:{title:"Importing Data from Relational Databases to TuGraph",permalink:"/tugraph-db/en/4.5.1/best-practices/rdbms-to-tugraph"}},l={},a=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Completed Functionalities",id:"2-completed-functionalities",level:2},{value:"3. Functional Updates in 2024",id:"3-functional-updates-in-2024",level:2},{value:"4. Community Collaboration Features",id:"4-community-collaboration-features",level:2}];function c(n){const e={h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"tugraph-roadmap",children:"TuGraph Roadmap"})}),"\n",(0,r.jsx)(e.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsx)(e.p,{children:"This document outlines the future development plans for TuGraph, including features currently under development, those\nnot in the development pipeline, and completed functionalities not included in the open-source version."}),"\n",(0,r.jsx)(e.p,{children:"TuGraph aims to be an open-source, high-performance graph database. It adopts a centralized storage approach for graph\ndata and, in the short term, does not consider data sharding. Instead, it employs a master-slave replication mode to\naddress high-concurrency read scenarios, while utilizing cloud-based storage solutions to address storage capacity\nchallenges."}),"\n",(0,r.jsx)(e.h2,{id:"2-completed-functionalities",children:"2. Completed Functionalities"}),"\n",(0,r.jsx)(e.p,{children:"TuGraph was open-sourced on September 1, 2022, and has received regular bug fixes and enhancements based on community\nfeedback."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Version"}),(0,r.jsx)(e.th,{children:"Functionality"}),(0,r.jsx)(e.th,{children:"Date"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.3.0"}),(0,r.jsx)(e.td,{children:"Initial open-source release"}),(0,r.jsx)(e.td,{children:"2022.9.1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.3.1"}),(0,r.jsx)(e.td,{children:"Refactored graph analysis engine with multi-mode support"}),(0,r.jsx)(e.td,{children:"2022.10.14"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.3.2"}),(0,r.jsx)(e.td,{children:"Added OGM support and improved unit test coverage"}),(0,r.jsx)(e.td,{children:"2022.11.21"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.3.3"}),(0,r.jsx)(e.td,{children:"Iterative improvements to link authentication mechanism and addition of English documentation"}),(0,r.jsx)(e.td,{children:"2022.12.23"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.3.4"}),(0,r.jsx)(e.td,{children:"Cloud deployment support and streamlined LDBC SNB Audit process"}),(0,r.jsx)(e.td,{children:"2023.1.28"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.4.0"}),(0,r.jsx)(e.td,{children:"Added support for OLAP Python API and upgraded offline data import"}),(0,r.jsx)(e.td,{children:"2023.3.11"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.5.0"}),(0,r.jsx)(e.td,{children:"Introduced POG (Procedures On Graph query language), frontend upgrades"}),(0,r.jsx)(e.td,{children:"2023.6.5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.5.1"}),(0,r.jsx)(e.td,{children:"Added learning engine, Procedure Rust API, and storage-property separation"}),(0,r.jsx)(e.td,{children:"2023.7.14"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3.6.0"}),(0,r.jsx)(e.td,{children:"High availability support, log system upgrade"}),(0,r.jsx)(e.td,{children:"2023.8.11"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4.0.0"}),(0,r.jsx)(e.td,{children:"ISO GQL support, 11 new open-source graph algorithms, m1 Docker support"}),(0,r.jsx)(e.td,{children:"2023.9.6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4.0.1"}),(0,r.jsx)(e.td,{children:"Support for temporal edge sorting, 5 new open-source graph algorithms"}),(0,r.jsx)(e.td,{children:"2023.9.28"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4.1.0"}),(0,r.jsx)(e.td,{children:"Bolt protocol support, fast online full import, support for geospatial data types"}),(0,r.jsx)(e.td,{children:"2023.12.25"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"In addition, TuGraph has established a comprehensive quality system, including automated unit testing, integration\ntesting, and performance testing."}),"\n",(0,r.jsx)(e.p,{children:'For more detailed information, refer to the "[root]/release/CHANGELOG.md" file in the source code directory.'}),"\n",(0,r.jsx)(e.h2,{id:"3-functional-updates-in-2024",children:"3. Functional Updates in 2024"}),"\n",(0,r.jsx)(e.p,{children:"In addition to the aforementioned core functionalities, the following components are planned for development in 2024."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Version"}),(0,r.jsx)(e.th,{children:"Functionality"}),(0,r.jsx)(e.th,{children:"Planned Date"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4.2.x"}),(0,r.jsx)(e.td,{children:"HA support for Witness role and management tools"}),(0,r.jsx)(e.td,{children:"2024.3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4.2.x"}),(0,r.jsx)(e.td,{children:"Bolt support for stream processing and parameterized queries"}),(0,r.jsx)(e.td,{children:"2024.3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"GeaX support for Cypher"}),(0,r.jsx)(e.td,{children:"2024.6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support for composite indexes"}),(0,r.jsx)(e.td,{children:"2024.6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Optimization of data import functionality"}),(0,r.jsx)(e.td,{children:"2024.6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"[Community Feature] Support for geospatial data types"}),(0,r.jsx)(e.td,{children:"2024.6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Enhanced Cypher capabilities"}),(0,r.jsx)(e.td,{children:"2024.9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support for rapid schema changes"}),(0,r.jsx)(e.td,{children:"2024.9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Vectorization support"}),(0,r.jsx)(e.td,{children:"2024.12"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"RPQ support"}),(0,r.jsx)(e.td,{children:"2024.12"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"[Optional] Query engine upgrade"}),(0,r.jsx)(e.td,{children:"2024.12"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"[Community Feature] Support for GraphAr"}),(0,r.jsx)(e.td,{children:"2024.12"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"4-community-collaboration-features",children:"4. Community Collaboration Features"}),"\n",(0,r.jsx)(e.p,{children:"Currently, the development team's resources are limited, and we cannot implement all the desired features for TuGraph.\nHowever, during the feature planning process, we have identified a range of ideas worth exploring. The team has\nconducted some initial exploration, and we welcome community collaboration in developing the following features:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Version"}),(0,r.jsx)(e.th,{children:"Functionality"}),(0,r.jsx)(e.th,{children:"Planned Date"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Rich graph algorithm library"}),(0,r.jsx)(e.td,{children:"2024.x"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support for default attribute values"}),(0,r.jsx)(e.td,{children:"2024.x"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Best practice of embedded TuGraph-DB usage"}),(0,r.jsx)(e.td,{children:"2024.x"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support for transaction in Bolt clients"}),(0,r.jsx)(e.td,{children:"2024.x"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support for composite data types like List, Map, and Decimal"}),(0,r.jsx)(e.td,{children:"2024.x"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x.x.x"}),(0,r.jsx)(e.td,{children:"Support of multiple storage engine"}),(0,r.jsx)(e.td,{children:"2024.x"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:'For simpler features, we will label them as "good first issue" on GitHub issues, and we welcome discussions from\ntechnology enthusiasts interested in graph databases.'})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}}}]);