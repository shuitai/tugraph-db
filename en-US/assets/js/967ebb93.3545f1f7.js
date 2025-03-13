"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96366],{10604:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-cypher3-5d7837e0c354f6d6f0b7a7343a05b12d.png"},22229:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-cypher2-d345fe10f1310a6c86fdf81afaf7a860.png"},28453:(e,i,n)=>{n.d(i,{R:()=>h,x:()=>r});var o=n(96540);const t={},a=o.createContext(t);function h(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),o.createElement(a.Provider,{value:i},e.children)}},51155:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-schema-86cedb325b48b2d0b9d4ccbd4ffd4ffd.png"},60003:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-cypher4-b4ee597e34a8b026d14f09b83862f8bb.png"},69502:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>h,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(74848),t=n(28453);const a={},h="Three Kingdoms",r={id:"quick-start/demo/three-kingdoms",title:"Three Kingdoms",description:"This document mainly introduces the usage of the Three Kingdoms demo.",source:"@site/versions/version-4.2.0/en-US/source/3.quick-start/2.demo/4.three-kingdoms.md",sourceDirName:"3.quick-start/2.demo",slug:"/quick-start/demo/three-kingdoms",permalink:"/tugraph-db/en-US/en/4.2.0/quick-start/demo/three-kingdoms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Three Body",permalink:"/tugraph-db/en-US/en/4.2.0/quick-start/demo/the-three-body"},next:{title:"Demo:Round The World",permalink:"/tugraph-db/en-US/en/4.2.0/quick-start/demo/round-the-world"}},s={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Data Modeling",id:"2-data-modeling",level:2},{value:"3. Data Import",id:"3-data-import",level:2},{value:"4. Cypher Query",id:"4-cypher-query",level:2},{value:"4.1. Why did Zhuge Liang Choose Liu Bei?",id:"41-why-did-zhuge-liang-choose-liu-bei",level:3},{value:"4.2. Why Did Cao Cao Achieve More Than Liu Bei?",id:"42-why-did-cao-cao-achieve-more-than-liu-bei",level:3},{value:"4.3. Why Did the Most Powerful Wei Kingdom in the Three Kingdoms Perish First?",id:"43-why-did-the-most-powerful-wei-kingdom-in-the-three-kingdoms-perish-first",level:3},{value:"4.4. What Were the Strengths of Each of the Three Kingdoms?",id:"44-what-were-the-strengths-of-each-of-the-three-kingdoms",level:3},{value:"4.5. How Should Cao Cao&#39;s Military Ability Be Evaluated?",id:"45-how-should-cao-caos-military-ability-be-evaluated",level:3},{value:"5. Remarks",id:"5-remarks",level:2}];function l(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"three-kingdoms",children:"Three Kingdoms"})}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"This document mainly introduces the usage of the Three Kingdoms demo."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,o.jsx)(i.p,{children:"Due to the lack of historical records, there are often many mysteries surrounding even well-known historical events. Taking the history of the Three Kingdoms as an example, why did Zhuge Liang come out of seclusion to help Liu Bei, and why there was a huge gap in achievements between Cao Cao and Liu Bei, both heroes of the time, are some of the unsolved mysteries. Historians in the past often used two-dimensional relationship analysis of history, and the conclusions drawn were often one-sided. Using TuGraph to import historical figures and events of the Three Kingdoms into a graph model, and analyzing them using graph calculation methods can help us obtain more valuable knowledge from limited information, which is a very meaningful interdisciplinary attempt."}),"\n",(0,o.jsx)(i.h2,{id:"2-data-modeling",children:"2. Data Modeling"}),"\n",(0,o.jsxs)(i.p,{children:['We designed 5 types of vertices and 5 types of edges. The vertices include "Lord", "Province", "Civilian", "Military Officer", and "Battle"; the edges include "Father", "Brother", "Belongs To", "Native Place", and "Participate In". The specific modeling information is shown below:\n',(0,o.jsx)(i.img,{alt:"image.png",src:n(51155).A+"",width:"1124",height:"1160"})]}),"\n",(0,o.jsx)(i.h2,{id:"3-data-import",children:"3. Data Import"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Manual import\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"To import data into TuGraph, you can use the lgraph_import tool to import it offline. The import command of lgraph_import is as follows:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:"lgraph_import -c import.json --overwrite true --continue_on_error true\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Automatic creation\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Click ",(0,o.jsx)(i.code,{children:"New Graph Project"}),", select the Three Kingdoms data, fill in the graph project configuration, and the system will automatically create the Three Kingdoms scene graph project."]}),"\n",(0,o.jsx)(i.li,{children:"Or use the built-in Three Kingdoms graph project provided by the product directly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"4-cypher-query",children:"4. Cypher Query"}),"\n",(0,o.jsx)(i.h3,{id:"41-why-did-zhuge-liang-choose-liu-bei",children:"4.1. Why did Zhuge Liang Choose Liu Bei?"}),"\n",(0,o.jsx)(i.p,{children:"The following Cypher command can be used to view the relationship between Zhuge Liang, Cao Cao, and Liu Bei:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"MATCH p = (cc:\u4e3b\u516c {name: '\u66f9\u64cd'})-[*1..3]-(zgl:\u6587\u81e3 {name: '\u8bf8\u845b\u4eae'}) RETURN p\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The query result is shown in the following figure:\n",(0,o.jsx)(i.img,{alt:"image.png",src:n(85502).A+"",width:"1527",height:"999"}),"\nFrom the graph, we can intuitively see that one of the shortest paths between Cao Cao and Zhuge Liang includes the battle of Xuzhou. Cao Cao once committed a massacre in Xuzhou because his father was killed, and nobody would choose a warlord who had previously massacred their hometown as their lord. In contrast, Liu Bei once prevented Cao Cao's violence during the battle of Xuzhou, which should be one of the reasons why Zhuge Liang had a good impression of Liu Bei."]}),"\n",(0,o.jsx)(i.h3,{id:"42-why-did-cao-cao-achieve-more-than-liu-bei",children:"4.2. Why Did Cao Cao Achieve More Than Liu Bei?"}),"\n",(0,o.jsx)(i.p,{children:"The following Cypher command can be used to view the family's support for Cao Cao's career:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'MATCH (cc:\u4e3b\u516c{name:"\u66f9\u64cd"})<-[r:\u96b6\u5c5e]-(wj:\u6b66\u5c06) WHERE wj.name REGEXP "\u66f9.*" OR wj.name REGEXP "\u590f\u4faf.*" return cc,wj,r\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The query result is shown in the following figure:\n",(0,o.jsx)(i.img,{alt:"image.png",src:n(22229).A+"",width:"1527",height:"999"}),"\nThe most important thing for pacifying the world is military talent. Cao Cao's father originally had the surname Xiahou, but was adopted into the Cao family. The Cao and Xiahou families were both local big clans in Qiao County, providing Cao Cao with a large number of military talents such as Xiahou Dun, Xiahou Yuan, Cao Ren, and Cao Hong in the early days of his career. In contrast, Liu Bei's father died early and he didn't have any family support. He only gathered his Five Tiger Generals when he was over 50 years old, by which time the best time to fight for land in the chaotic world had passed. Cao Cao had already controlled six of the nine provinces in the world."]}),"\n",(0,o.jsx)(i.h3,{id:"43-why-did-the-most-powerful-wei-kingdom-in-the-three-kingdoms-perish-first",children:"4.3. Why Did the Most Powerful Wei Kingdom in the Three Kingdoms Perish First?"}),"\n",(0,o.jsx)(i.p,{children:"The following Cypher command can be used to view the important civilian officials of the Cao Cao group:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'MATCH (cc:\u4e3b\u516c)<-[r:\u96b6\u5c5e]-(wc) WHERE cc.name REGEXP "\u66f9.*" AND (label(wc) = "\u6587\u81e3" OR label(wc) = "\u4e3b\u516c") return cc,wc,r\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The query result is shown in the following figure:\n",(0,o.jsx)(i.img,{alt:"image.png",src:n(10604).A+"",width:"1527",height:"999"}),"\nIn fact, Cao Wei was overthrown in the Gao Ping Ling incident in 249 AD, after only 29 years of existence, which was shorter than Shu Han (43 years) and Dong Wu (51 years). The reason why the most powerful Wei Kingdom in the Three Kingdoms perished first was that the civilian official system of Cao Wei (the nine-rank system) made it easy for power to be concentrated in the hands of aristocratic families. From the graph, we can see that almost all the important civilian officials of Cao Cao and Cao Pi's generations were from aristocratic families, such as Xun Clan of Yingchuan, Zhong Clan of Yingchuan, Chen Clan of Yingchuan, Jia Clan of Wuxi, etc. There was even a trend of regionalization, centered on Yingchuan. Ultimately, the regime was usurped by the Sima family of Henei, which had close ties with the Xun Clan of Yingchuan."]}),"\n",(0,o.jsx)(i.h3,{id:"44-what-were-the-strengths-of-each-of-the-three-kingdoms",children:"4.4. What Were the Strengths of Each of the Three Kingdoms?"}),"\n",(0,o.jsx)(i.p,{children:"The following Cypher command can be used to view the population strength of each group in the Three Kingdoms:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'MATCH (p) WHERE (label(p)="\u4e3b\u516c" OR label(p)="\u6587\u81e3" OR label(p)="\u6b66\u5c06") AND p.hometown IN ["\u5e7d\u5dde","\u5180\u5dde","\u9752\u5dde","\u5e76\u5dde","\u51c9\u5dde","\u53f8\u5dde","\u8c6b\u5dde","\u5156\u5dde","\u5f90\u5dde"] WITH COUNT(p) AS w\nMATCH (p) WHERE (label(p)="\u4e3b\u516c" OR label(p)="\u6587\u81e3" OR label(p)="\u6b66\u5c06") AND p.hometown IN ["\u76ca\u5dde"] WITH COUNT(p) AS s,w\nMATCH (p) WHERE (label(p)="\u4e3b\u516c" OR label(p)="\u6587\u81e3" OR label(p)="\u6b66\u5c06") AND p.hometown IN ["\u626c\u5dde","\u8346\u5dde","\u4ea4\u5dde"]\nRETURN w as \u9b4f\u4eba\u53e3,s as \u8700\u4eba\u53e3,count(p) as \u5434\u4eba\u53e3\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The query result is shown in the following table:\n",(0,o.jsx)(i.img,{alt:"image.png",src:n(60003).A+"",width:"1527",height:"999"}),"\nIn ancient society, an important indicator of a country's strength was its population. Since population data is missing, we estimate the population of each province using the birthplace data of all lords, civilians, and military officers in the Three Kingdoms. It is found that among the main characters of the Three Kingdoms, 60 belong to Wei, 23 belong to Wu, and only 2 belong to Shu, which proves that Wei was indeed the most powerful country in the Three Kingdoms."]}),"\n",(0,o.jsx)(i.h3,{id:"45-how-should-cao-caos-military-ability-be-evaluated",children:"4.5. How Should Cao Cao's Military Ability Be Evaluated?"}),"\n",(0,o.jsx)(i.p,{children:"The following Cypher command can be used to view the main battles that Cao Cao participated in:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:'MATCH (cc:\u4e3b\u516c{name:"\u66f9\u64cd"})-[e]-(zy:\u6218\u5f79) RETURN cc,zy,e\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The query result is shown in the following figure:\n",(0,o.jsx)(i.img,{alt:"image.png",src:n(70170).A+"",width:"1527",height:"999"}),"\nFrom the graph, we can see that Cao Cao participated in 8 out of the 15 major battles in the Three Kingdoms, with a high participation rate. However, Cao Cao only won the battles of Xuzhou, Yanzhou, Guandu, and Xiangyang, while losing the battles of Hanzhong, Wancheng, the Campaign against Dong Zhuo and the Battle of Red Cliffs. His overall win rate was 50%, which proves that Cao Cao was not a very outstanding military strategist."]}),"\n",(0,o.jsx)(i.h2,{id:"5-remarks",children:"5. Remarks"}),"\n",(0,o.jsx)(i.p,{children:"More analysis is needed and encouraged to be added by everyone!"})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},70170:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-cypher5-531165798a411a41937056e72136cfc9.png"},85502:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/three-kingdoms-cypher1-959ef771556fbe22ad88314b24b7e6e7.png"}}]);