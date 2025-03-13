"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12946],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var l=r(96540);const i={},d=l.createContext(i);function s(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(d.Provider,{value:n},e.children)}},30947:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var l=r(74848),i=r(28453);const d={},s="ISO GQL",a={id:"query/gql",title:"ISO GQL",description:"1.GQL\u7b80\u4ecb",source:"@site/versions/version-4.3.1/zh-CN/source/8.query/2.gql.md",sourceDirName:"8.query",slug:"/query/gql",permalink:"/tugraph-db/en-US/zh/4.3.1/query/gql",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cypher API",permalink:"/tugraph-db/en-US/zh/4.3.1/query/cypher"},next:{title:"Procedure API",permalink:"/tugraph-db/en-US/zh/4.3.1/olap&procedure/procedure/"}},c={},h=[{value:"1.GQL\u7b80\u4ecb",id:"1gql\u7b80\u4ecb",level:2},{value:"2.Clauses",id:"2clauses",level:2},{value:"2.1.MATCH",id:"21match",level:3},{value:"\u70b9\u67e5\u8be2",id:"\u70b9\u67e5\u8be2",level:4},{value:"\u67e5\u8be2\u6240\u6709\u70b9",id:"\u67e5\u8be2\u6240\u6709\u70b9",level:5},{value:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",id:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",level:5},{value:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",id:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",level:5},{value:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",id:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",level:5},{value:"\u8fb9\u67e5\u8be2",id:"\u8fb9\u67e5\u8be2",level:4},{value:"\u51fa\u8fb9\u5339\u914d",id:"\u51fa\u8fb9\u5339\u914d",level:5},{value:"\u5165\u8fb9\u5339\u914d",id:"\u5165\u8fb9\u5339\u914d",level:5},{value:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",id:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",level:5},{value:"\u8def\u5f84\u5339\u914d",id:"\u8def\u5f84\u5339\u914d",level:4},{value:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",id:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",level:5},{value:"2.2.OPTIONAL MATCH",id:"22optional-match",level:3},{value:"\u67e5\u8be2\u547d\u4e2d",id:"\u67e5\u8be2\u547d\u4e2d",level:4},{value:"\u67e5\u8be2\u672a\u547d\u4e2d",id:"\u67e5\u8be2\u672a\u547d\u4e2d",level:4},{value:"2.3.RETURN",id:"23return",level:3},{value:"\u8fd4\u56de\u70b9",id:"\u8fd4\u56de\u70b9",level:4},{value:"\u8fd4\u56de\u8fb9",id:"\u8fd4\u56de\u8fb9",level:4},{value:"\u8fd4\u56de\u5c5e\u6027",id:"\u8fd4\u56de\u5c5e\u6027",level:4},{value:"\u4e0d\u5e38\u89c1\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53d8\u91cf\u540d",id:"\u4e0d\u5e38\u89c1\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53d8\u91cf\u540d",level:4},{value:"\u5217\u522b\u540d",id:"\u5217\u522b\u540d",level:4},{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:4},{value:"\u5176\u5b83\u8868\u8fbe\u5f0f",id:"\u5176\u5b83\u8868\u8fbe\u5f0f",level:4},{value:"\u7ed3\u679c\u552f\u4e00\u6027",id:"\u7ed3\u679c\u552f\u4e00\u6027",level:4},{value:"2.4.NEXT",id:"24next",level:3},{value:"\u8fde\u63a5MATCH",id:"\u8fde\u63a5match",level:4},{value:"2.5.WHERE",id:"25where",level:3},{value:"\u8fc7\u6ee4\u70b9",id:"\u8fc7\u6ee4\u70b9",level:4},{value:"\u8fc7\u6ee4\u8fb9",id:"\u8fc7\u6ee4\u8fb9",level:4},{value:"\u5e03\u5c14\u8868\u8fbe\u5f0f",id:"\u5e03\u5c14\u8868\u8fbe\u5f0f",level:4},{value:"2.6.ORDER BY",id:"26order-by",level:3},{value:"\u5bf9\u7ed3\u679c\u6392\u5e8f",id:"\u5bf9\u7ed3\u679c\u6392\u5e8f",level:4},{value:"2.7.SKIP",id:"27skip",level:3},{value:"\u672a\u4f7f\u7528SKIP",id:"\u672a\u4f7f\u7528skip",level:4},{value:"\u4f7f\u7528SKIP",id:"\u4f7f\u7528skip",level:4},{value:"2.8.LIMIT",id:"28limit",level:3},{value:"\u4f7f\u7528LIMIT",id:"\u4f7f\u7528limit",level:4}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"iso-gql",children:"ISO GQL"})}),"\n",(0,l.jsx)(n.h2,{id:"1gql\u7b80\u4ecb",children:"1.GQL\u7b80\u4ecb"}),"\n",(0,l.jsxs)(n.p,{children:["Graph Query Language(GQL, \u56fe\u67e5\u8be2\u8bed\u8a00)\u662f\u4e00\u79cd\u56fd\u9645\u6807\u51c6\u8bed\u8a00\uff0c\u7528\u4e8e\u5c5e\u6027\u56fe\u67e5\u8be2\uff0c\u8be5\u8bed\u8a00\u5efa\u7acb\u5728SQL\u7684\u57fa\u7840\u4e0a\uff0c\u5e76\u6574\u5408\u4e86\u73b0\u6709\u7684",(0,l.jsx)(n.a,{href:"https://gql.today/comparing-cypher-pgql-and-g-core/",children:"openCypher\u3001PGQL\u3001GSQL\u548cG-CORE"}),"\u8bed\u8a00\u7684\u6210\u719f\u601d\u60f3\u3002\u76ee\u524d\u8be5\u6807\u51c6\u4ecd\u7136\u5904\u4e8e\u8349\u7a3f\u9636\u6bb5\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["TuGraph\u57fa\u4e8e",(0,l.jsx)(n.a,{href:"https://github.com/TuGraph-family/gql-grammar",children:"ISO GQL (ISO/IEC 39075) Antlr4 \u8bed\u6cd5\u6587\u4ef6"}),"\u5b9e\u73b0\u4e86GQL\uff0c\u5e76\u505a\u4e86\u4e00\u4e9b\u6269\u5c55\u4e0e\u6539\u9020\u3002\u76ee\u524d\u5e76\u672a\u5b8c\u5168\u652f\u6301\u6240\u6709\u7684GQL\u8bed\u6cd5\uff0c\u6211\u4eec\u4f1a\u5728\u672a\u6765\u9010\u6b65\u5b8c\u5584\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"2clauses",children:"2.Clauses"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u7c7b\u522b"}),(0,l.jsx)(n.th,{children:"\u5b50\u53e5"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Reading clauses"}),(0,l.jsx)(n.td,{children:"MATCH"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"OPTIONAL MATCH"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Projecting clauses"}),(0,l.jsx)(n.td,{children:"RETURN"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"NEXT"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Reading sub-clauses"}),(0,l.jsx)(n.td,{children:"WHERE"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"ORDER BY"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"SKIP"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"LIMIT"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"21match",children:"2.1.MATCH"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MATCH"}),"\u5b50\u53e5\u5f0f\u662fGQL\u6700\u57fa\u7840\u7684\u5b50\u53e5\uff0c\u51e0\u4e4e\u6240\u6709\u67e5\u8be2\u90fd\u662f\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"MATCH"}),"\u5c55\u5f00\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MATCH"}),"\u5b50\u53e5\u7528\u4e8e\u6307\u5b9a\u5728\u56fe\u4e2d\u641c\u7d22\u7684\u5339\u914d\u6a21\u5f0f\uff0c\u7528\u6765\u5339\u914d\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u70b9\u6216\u8005\u8def\u5f84\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u70b9\u67e5\u8be2",children:"\u70b9\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h5,{id:"\u67e5\u8be2\u6240\u6709\u70b9",children:"\u67e5\u8be2\u6240\u6709\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n)\nRETURN n\n"})}),"\n",(0,l.jsx)(n.h5,{id:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9",children:"\u67e5\u8be2\u7279\u5b9a\u6807\u7b7e\u7684\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n\n"})}),"\n",(0,l.jsx)(n.h5,{id:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9",children:"\u901a\u8fc7\u5c5e\u6027\u5339\u914d\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person{name:'Michael Redgrave'})\nRETURN n.birthyear\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.birthyear":1908}]\n'})}),"\n",(0,l.jsx)(n.h5,{id:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9",children:"\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5339\u914d\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear > 1910)\nRETURN n.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8fb9\u67e5\u8be2",children:"\u8fb9\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h5,{id:"\u51fa\u8fb9\u5339\u914d",children:"\u51fa\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear = 1970)-[e]->(m)\nRETURN n.name, label(e), m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"label(e)":"BORN_IN","m.name":"London","n.name":"Christopher Nolan"},{"label(e)":"DIRECTED","m.name":null,"n.name":"Christopher Nolan"}]\n'})}),"\n",(0,l.jsx)(n.h5,{id:"\u5165\u8fb9\u5339\u914d",children:"\u5165\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear = 1939)<-[e]-(m)\nRETURN n.name, label(e), m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"label(e)":"HAS_CHILD","m.name":"Rachel Kempson","n.name":"Corin Redgrave"},{"label(e)":"HAS_CHILD","m.name":"Michael Redgrave","n.name":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h5,{id:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d",children:"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fb9\u5339\u914d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)-[e:BORN_IN WHERE e.weight > 20]->(m)\nRETURN n.name, e.weight, m.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"e.weight":20.549999237060547,"m.name":"New York","n.name":"John Williams"},{"e.weight":20.6200008392334,"m.name":"New York","n.name":"Lindsay Lohan"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8def\u5f84\u5339\u914d",children:"\u8def\u5f84\u5339\u914d"}),"\n",(0,l.jsx)(n.h5,{id:"\u4e0d\u5b9a\u8df3\u67e5\u8be2",children:"\u4e0d\u5b9a\u8df3\u67e5\u8be2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)-[e]->{2,3}(m:Person)\nRETURN m.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"m.name":"Liam Neeson"},{"m.name":"Natasha Richardson"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"22optional-match",children:"2.2.OPTIONAL MATCH"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"OPTIONAL MATCH"}),"\u5339\u914d\u56fe\u6a21\u5f0f\uff0c\u5982\u679c\u672a\u547d\u4e2d\uff0c\u5219\u8fd4\u56de",(0,l.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u67e5\u8be2\u547d\u4e2d",children:"\u67e5\u8be2\u547d\u4e2d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"OPTIONAL MATCH (n:Person{name:'Michael Redgrave'})\nRETURN n.birthyear\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.birthyear":1908}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u67e5\u8be2\u672a\u547d\u4e2d",children:"\u67e5\u8be2\u672a\u547d\u4e2d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"OPTIONAL MATCH (n:Person{name:'Redgrave Michael'})\nRETURN n.birthyear\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.birthyear":null}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"23return",children:"2.3.RETURN"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"RETURN"}),"\u5b50\u53e5\u6307\u5b9a\u8fd4\u56de\u7ed3\u679c\uff0c\u5305\u62ec\u8fd4\u56de\u70b9\u3001\u8fb9\u3001\u8def\u5f84\u3001\u5c5e\u6027\u7b49\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u8fd4\u56de\u70b9",children:"\u8fd4\u56de\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n)\nRETURN n LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n":{"identity":0,"label":"Person","properties":{"birthyear":1910,"name":"Rachel Kempson"}}},{"n":{"identity":1,"label":"Person","properties":{"birthyear":1908,"name":"Michael Redgrave"}}}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8fd4\u56de\u8fb9",children:"\u8fd4\u56de\u8fb9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n)-[e]->(m)\nRETURN e LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"e":{"dst":2,"forward":false,"identity":0,"label":"HAS_CHILD","label_id":0,"src":0,"temporal_id":0}},{"e":{"dst":3,"forward":false,"identity":0,"label":"HAS_CHILD","label_id":0,"src":0,"temporal_id":0}}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8fd4\u56de\u5c5e\u6027",children:"\u8fd4\u56de\u5c5e\u6027"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4e0d\u5e38\u89c1\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53d8\u91cf\u540d",children:"\u4e0d\u5e38\u89c1\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53d8\u91cf\u540d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (`/uncommon variable`:Person)\nRETURN `/uncommon variable`.name LIMIT 3\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"`/uncommon variable`.name":"Christopher Nolan"},{"`/uncommon variable`.name":"Corin Redgrave"},{"`/uncommon variable`.name":"Dennis Quaid"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5217\u522b\u540d",children:"\u5217\u522b\u540d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.name AS nname LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"nname":"Christopher Nolan"},{"nname":"Corin Redgrave"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u53ef\u9009\u5c5e\u6027",children:"\u53ef\u9009\u5c5e\u6027"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.age LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.age":null},{"n.age":null}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5176\u5b83\u8868\u8fbe\u5f0f",children:"\u5176\u5b83\u8868\u8fbe\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MATCH (n:Person)\nRETURN n.birthyear > 1970, "I\'m a literal", 1 + 2, abs(-2)\nLIMIT 2\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"\\"I\'m a literal\\"":"I\'m a literal","1 + 2":3,"abs(-2)":2,"n.birthyear > 1970":false},{"\\"I\'m a literal\\"":"I\'m a literal","1 + 2":3,"abs(-2)":2,"n.birthyear > 1970":false}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u7ed3\u679c\u552f\u4e00\u6027",children:"\u7ed3\u679c\u552f\u4e00\u6027"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n)\nRETURN DISTINCT label(n) AS label\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"label":"Person"},{"label":"City"},{"label":"Film"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"24next",children:"2.4.NEXT"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NEXT"}),"\u5b50\u53e5\u7528\u4e8e\u8fde\u63a5\u591a\u4e2a\u5b50\u53e5\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u8fde\u63a5match",children:"\u8fde\u63a5MATCH"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person) WHERE n.birthyear = 1970\nRETURN n\nNEXT\nMATCH (m:Person) WHERE m.birthyear < 1968\nRETURN n.name, n.birthyear, m.name LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"m.name":"Rachel Kempson","n.birthyear":1970,"n.name":"Christopher Nolan"},{"m.name":"Michael Redgrave","n.birthyear":1970,"n.name":"Christopher Nolan"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"25where",children:"2.5.WHERE"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"WHERE"}),"\u5b50\u53e5\u7528\u4e8e\u8fc7\u6ee4\u8bb0\u5f55\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u8fc7\u6ee4\u70b9",children:"\u8fc7\u6ee4\u70b9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear > 1965)\nRETURN n.name\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Lindsay Lohan"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u8fc7\u6ee4\u8fb9",children:"\u8fc7\u6ee4\u8fb9"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear > 1965)-[e:ACTED_IN]->(m:Film)\nWHERE e.charactername = 'Halle/Annie'\nRETURN m.title\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"m.title":"The Parent Trap"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u5e03\u5c14\u8868\u8fbe\u5f0f",children:"\u5e03\u5c14\u8868\u8fbe\u5f0f"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AND"}),", ",(0,l.jsx)(n.code,{children:"OR"}),", ",(0,l.jsx)(n.code,{children:"XOR"}),"\u548c ",(0,l.jsx)(n.code,{children:"NOT"}),"\u5e03\u5c14\u8868\u8fbe\u5f0f\u53ef\u4ee5\u7528\u5728 ",(0,l.jsx)(n.code,{children:"WHERE"}),"\u4e2d\u7528\u6765\u8fc7\u6ee4\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nWHERE\n\tn.birthyear > 1930 AND (n.birthyear < 1950 OR n.name = 'Corin Redgrave')\nRETURN n LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n":{"identity":3,"label":"Person","properties":{"birthyear":1939,"name":"Corin Redgrave"}}},{"n":{"identity":11,"label":"Person","properties":{"birthyear":1932,"name":"John Williams"}}}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"26order-by",children:"2.6.ORDER BY"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ORDER BY"}),"\u662f",(0,l.jsx)(n.code,{children:"RETURN"}),"\u7684\u5b50\u53e5\uff0c\u5bf9\u8f93\u51fa\u7684\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u5bf9\u7ed3\u679c\u6392\u5e8f",children:"\u5bf9\u7ed3\u679c\u6392\u5e8f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person WHERE n.birthyear < 1970)\nRETURN n.birthyear AS q\nORDER BY q ASC\nLIMIT 5\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"q":1873},{"q":1908},{"q":1910},{"q":1930},{"q":1932}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"27skip",children:"2.7.SKIP"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SKIP"}),"\u6307\u5b9a\u7ed3\u679c\u504f\u79fb\u884c\u6570\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u672a\u4f7f\u7528skip",children:"\u672a\u4f7f\u7528SKIP"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.name LIMIT 3\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Corin Redgrave"},{"n.name":"Dennis Quaid"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528skip",children:"\u4f7f\u7528SKIP"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.name SKIP 1 LIMIT 2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Corin Redgrave"},{"n.name":"Dennis Quaid"}]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"28limit",children:"2.8.LIMIT"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"LIMIT"}),"\u9650\u5236\u7ed3\u679c\u884c\u6570\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528limit",children:"\u4f7f\u7528LIMIT"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MATCH (n:Person)\nRETURN n.name LIMIT 2;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'[{"n.name":"Christopher Nolan"},{"n.name":"Corin Redgrave"}]\n'})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}}}]);