"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19232],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},h=t.createContext(r);function s(e){const n=t.useContext(h);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(h.Provider,{value:n},e.children)}},91824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>h,metadata:()=>l,toc:()=>u});var t=i(74848),r=i(28453);const h={},s="\u5982\u4f55\u8d21\u732e",l={id:"contributor-manual/contributing",title:"\u5982\u4f55\u8d21\u732e",description:"1. \u524d\u8a00",source:"@site/versions/version-4.3.0/zh-CN/source/12.contributor-manual/1.contributing.md",sourceDirName:"12.contributor-manual",slug:"/contributor-manual/contributing",permalink:"/tugraph-db/en-US/zh/4.3.0/contributor-manual/contributing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210\u6d4b\u8bd5",permalink:"/tugraph-db/en-US/zh/4.3.0/quality/integration-testing"},next:{title:"\u793e\u533a\u89d2\u8272",permalink:"/tugraph-db/en-US/zh/4.3.0/contributor-manual/community-roles"}},a={},u=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2. \u8d21\u732e\u4ec0\u4e48",id:"2-\u8d21\u732e\u4ec0\u4e48",level:2},{value:"3. \u51c6\u5907\u5de5\u4f5c",id:"3-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"3.1. \u4e86\u89e3TuGraph",id:"31-\u4e86\u89e3tugraph",level:3},{value:"3.2. \u51c6\u5907\u73af\u5883",id:"32-\u51c6\u5907\u73af\u5883",level:3},{value:"3.3. \u8bb8\u53ef\u534f\u8bae",id:"33-\u8bb8\u53ef\u534f\u8bae",level:3},{value:"4. \u8d21\u732e\u4ee3\u7801\u6d41\u7a0b",id:"4-\u8d21\u732e\u4ee3\u7801\u6d41\u7a0b",level:2},{value:"4.1. \u63d0\u4ea4issue",id:"41-\u63d0\u4ea4issue",level:3},{value:"4.2. \u83b7\u53d6\u6e90\u7801",id:"42-\u83b7\u53d6\u6e90\u7801",level:3},{value:"4.3. \u62c9\u5206\u652f",id:"43-\u62c9\u5206\u652f",level:3},{value:"4.4. \u7f16\u8bd1\u8fd0\u884c",id:"44-\u7f16\u8bd1\u8fd0\u884c",level:3},{value:"4.5. \u914d\u7f6e Github \u4fe1\u606f",id:"45-\u914d\u7f6e-github-\u4fe1\u606f",level:3},{value:"4.6. \u4fee\u6539\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730",id:"46-\u4fee\u6539\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730",level:3},{value:"4.7. \u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"47-\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"4.8. \u4ee3\u7801 Review",id:"48-\u4ee3\u7801-review",level:3},{value:"4.9. \u5408\u5e76\u4ee3\u7801\u5230Master",id:"49-\u5408\u5e76\u4ee3\u7801\u5230master",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5982\u4f55\u8d21\u732e",children:"\u5982\u4f55\u8d21\u732e"})}),"\n",(0,t.jsx)(n.h2,{id:"1-\u524d\u8a00",children:"1. \u524d\u8a00"}),"\n",(0,t.jsx)(n.p,{children:"\u611f\u8c22\u60a8\u4e3aTuGraph\u505a\u51fa\u8d21\u732e\uff0c\u6211\u4eec\u7531\u8877\u5730\u5e0c\u671b\u6709\u66f4\u591a\u793e\u533a\u7684\u540c\u5b66\u52a0\u5165\u8fdb\u6765\uff0c\u4e00\u8d77\u5efa\u8bbe\u4e00\u4e2a\u66f4\u597d\u7684\u56fe\u6570\u636e\u5e93\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u4f18\u79c0\u793e\u533a\u8d21\u732e\u8005\uff0c\u6211\u4eec\u5c06\u9881\u53d1TuGraph\u4f18\u79c0\u793e\u533a\u8d21\u732e\u8005\u8bc1\u4e66\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"2-\u8d21\u732e\u4ec0\u4e48",children:"2. \u8d21\u732e\u4ec0\u4e48"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u968f\u65f6\u90fd\u6b22\u8fce\u4efb\u4f55\u8d21\u732e\uff0c\u65e0\u8bba\u662f\u7b80\u5355\u7684\u9519\u522b\u5b57\u4fee\u6b63\uff0cBUG \u4fee\u590d\u8fd8\u662f\u589e\u52a0\u65b0\u529f\u80fd\u3002\u8bf7\u8e0a\u8dc3\u63d0\u51fa\u95ee\u9898\u6216\u53d1\u8d77 PR\u3002\u6211\u4eec\u540c\u6837\u91cd\u89c6\u6587\u6863\u4ee5\u53ca\u4e0e\u5176\u5b83\u5f00\u6e90\u9879\u76ee\u7684\u6574\u5408\uff0c\u6b22\u8fce\u5728\u8fd9\u65b9\u9762\u505a\u51fa\u8d21\u732e\u3002\n\u5bf9\u4e8e\u4efb\u4f55\u4fee\u6539\uff0c\u5c24\u5176\u662f\u8f83\u4e3a\u590d\u6742\u7684\u4fee\u6539\uff0c\u5efa\u8bae\u65b0\u5efa\u4e00\u4e2aissue \uff0c\u6309\u7167BUG\u6216\u8005PR\u7684\u6a21\u677f\u586b\u5199\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"3-\u51c6\u5907\u5de5\u4f5c",children:"3. \u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.h3,{id:"31-\u4e86\u89e3tugraph",children:"3.1. \u4e86\u89e3TuGraph"}),"\n",(0,t.jsxs)(n.p,{children:["\u5efa\u8bae\u60a8\u4ece",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.3.0/guide",children:"\u6587\u6863\u5730\u56fe"}),"\u5f00\u59cb\uff0c\u4e86\u89e3TuGraph\u7684\u7279\u6027\u548c\u63a5\u53e3\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"32-\u51c6\u5907\u73af\u5883",children:"3.2. \u51c6\u5907\u73af\u5883"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6587\u6863\u8d21\u732e\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,t.jsx)(n.a,{href:"https://tugraph-db.readthedocs.io/zh_CN/latest",children:"\u6587\u6863"}),'\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684"\u5728GitHub\u4e0a\u7f16\u8bd1"\u76f4\u63a5\u4fee\u6539\u5e76\u63d0PR\u3002']}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4ee3\u7801\u8d21\u732e\uff0c\u901a\u5e38\u9700\u8981\u5728\u642d\u5efa\u7f16\u8bd1\u6267\u884c\u7684\u73af\u5883\uff0c\u53ef\u4ee5\u91c7\u7528",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.3.0/installation&running/docker-deployment",children:"Docker\u90e8\u7f72"}),"\u6216",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.3.0/installation&running/local-package-deployment",children:"\u672c\u5730\u90e8\u7f72"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"33-\u8bb8\u53ef\u534f\u8bae",children:"3.3. \u8bb8\u53ef\u534f\u8bae"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8d21\u732e\u4ee3\u7801\u4e4b\u524d\uff0c\u8bf7\u60a8\u7a0d\u5fae\u82b1\u4e00\u4e9b\u65f6\u95f4\u4e86\u89e3\u4e3aTuGraph\u8d21\u732e\u4ee3\u7801\u7684\u6d41\u7a0b\uff0c\u5e76\u9605\u8bfb ",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.3.0/contributor-manual/individual-cla",children:"\u4e2a\u4eba\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae"})," \u6216 ",(0,t.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.3.0/contributor-manual/corporate-cla",children:"\u516c\u53f8\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae"}),"\uff0c\u53c2\u4e0e\u8d21\u732e\u5219\u89c6\u4e3a\u540c\u610f\u4e0a\u8ff0\u534f\u8bae\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"4-\u8d21\u732e\u4ee3\u7801\u6d41\u7a0b",children:"4. \u8d21\u732e\u4ee3\u7801\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.h3,{id:"41-\u63d0\u4ea4issue",children:"4.1. \u63d0\u4ea4issue"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u8bba\u60a8\u662f\u4fee\u590d TuGraph \u7684 bug \u8fd8\u662f\u65b0\u589e TuGraph \u7684\u529f\u80fd\uff0c\u5728\u60a8\u63d0\u4ea4\u4ee3\u7801\u4e4b\u524d\uff0c\u8bf7\u5728 TuGraph \u7684 GitHub \u4e0a\u63d0\u4ea4\u4e00\u4e2a issue\uff0c\u63cf\u8ff0\u60a8\u8981\u4fee\u590d\u7684\u95ee\u9898\u6216\u8005\u8981\u589e\u52a0\u7684\u529f\u80fd\u3002\u8fd9\u4e48\u505a\u6709\u51e0\u4e2a\u597d\u5904:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u4f1a\u4e0e\u5176\u5b83\u5f00\u53d1\u8005\u6216\u662f\u4ed6\u4eec\u5bf9\u8fd9\u4e2a\u9879\u76ee\u7684\u8ba1\u5212\u53d1\u751f\u51b2\u7a81\uff0c\u4ea7\u751f\u91cd\u590d\u5de5\u4f5c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"TuGraph \u7684\u7ef4\u62a4\u4eba\u5458\u4f1a\u5bf9\u60a8\u63d0\u7684 bug \u6216\u8005\u65b0\u589e\u529f\u80fd\u8fdb\u884c\u76f8\u5173\u8ba8\u8bba\uff0c\u786e\u5b9a\u8be5\u4fee\u6539\u662f\u4e0d\u662f\u5fc5\u8981\uff0c\u6709\u6ca1\u6709\u63d0\u5347\u7684\u7a7a\u95f4\u6216\u66f4\u597d\u7684\u529e\u6cd5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u8fbe\u6210\u4e00\u81f4\u540e\u518d\u5f00\u53d1\uff0c\u5e76\u63d0\u4ea4\u4ee3\u7801\uff0c\u51cf\u5c11\u53cc\u65b9\u6c9f\u901a\u6210\u672c\uff0c\u4e5f\u51cf\u5c11 pull request \u88ab\u62d2\u7edd\u7684\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"42-\u83b7\u53d6\u6e90\u7801",children:"4.2. \u83b7\u53d6\u6e90\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u4fee\u6539\u6216\u65b0\u589e\u529f\u80fd\uff0c\u5728\u63d0\u4ea4 issue \u540e\uff0cfork\u4e00\u4efd TuGraph  Master\u4ee3\u7801\u5230\u60a8\u7684\u4ee3\u7801\u4ed3\u5e93\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"43-\u62c9\u5206\u652f",children:"4.3. \u62c9\u5206\u652f"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph \u6240\u6709\u4fee\u6539\u90fd\u5728\u5206\u652f\u4e0a\u8fdb\u884c\uff0c\u4fee\u6539\u5b8c\u6210\u540e\u63d0\u4ea4 pull request\uff0c\u5728 Code Review \u540e\u7531\u9879\u76ee\u7ef4\u62a4\u4eba\u5458 Merge \u5230 Master\u3002 \u56e0\u6b64\uff0c\u5728\u83b7\u53d6\u6e90\u7801\u6b65\u9aa4\u4ecb\u7ecd\u540e\uff0c\u60a8\u9700\u8981:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e0b\u8f7d\u4ee3\u7801\u5230\u672c\u5730\uff0c\u8fd9\u4e00\u6b65\u60a8\u53ef\u4ee5\u9009\u62e9git/https\u65b9\u5f0f\uff0c\u8fd1\u5e74github\u7684\u6743\u9650\u8981\u6c42\u66f4\u52a0\u4e25\u683c\uff0c\u6bd4\u5982git\u65b9\u5f0f\u9700\u8981\u66f4\u590d\u6742\u7684ssh key(",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),")\uff0chttps\u65b9\u5f0f\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u540d\u5bc6\u7801\u9a8c\u8bc1\uff0c\u8bf7\u6309\u7167\u6307\u5f15\u6388\u6743\u3002 git clone ",(0,t.jsx)(n.a,{href:"https://github.com/%E6%82%A8%E7%9A%84%E8%B4%A6%E5%8F%B7%E5%90%8D/tugraph-db",children:"https://github.com/\u60a8\u7684\u8d26\u53f7\u540d/tugraph-db"})]}),"\n",(0,t.jsx)(n.li,{children:"\u62c9\u5206\u652f\u51c6\u5907\u4fee\u6539\u4ee3\u7801:\ngit branch add_xxx_feature"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u60a8\u7684\u4ee3\u7801\u4ed3\u5e93\u5c31\u5207\u6362\u5230\u76f8\u5e94\u5206\u652f\u4e86\u3002\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u60a8\u5f53\u524d\u5206\u652f: git branch -a"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u60a8\u60f3\u5207\u6362\u56de Master\uff0c\u6267\u884c\u4e0b\u9762\u547d\u4ee4: git checkout -b master"}),"\n",(0,t.jsx)(n.li,{children:'\u5982\u679c\u60a8\u60f3\u5207\u6362\u56de\u5206\u652f\uff0c\u6267\u884c\u4e0b\u9762\u547d\u4ee4: git checkout -b "branchName"'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"44-\u7f16\u8bd1\u8fd0\u884c",children:"4.4. \u7f16\u8bd1\u8fd0\u884c"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee3\u7801\u7684\u7f16\u8bd1\u8fd0\u884c\u6d41\u7a0b\u53ef\u4ee5\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://github.com/TuGraph-family/tugraph-db/blob/master/ci/github_ci.sh",children:"ci\u811a\u672c"})]}),"\n",(0,t.jsx)(n.h3,{id:"45-\u914d\u7f6e-github-\u4fe1\u606f",children:"4.5. \u914d\u7f6e Github \u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u60a8\u7684\u673a\u5668\u6267\u884c git config  --list \uff0c\u67e5\u770b git \u7684\u5168\u5c40\u7528\u6237\u540d\u548c\u90ae\u7bb1\u3002\u68c0\u67e5\u663e\u793a\u7684 user.name \u548c user.email \u662f\u4e0d\u662f\u4e0e\u81ea\u5df1 github \u7684\u7528\u6237\u540d\u548c\u90ae\u7bb1\u76f8\u5339\u914d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u516c\u53f8\u5185\u90e8\u6709\u81ea\u5df1\u7684 gitlab \u6216\u8005\u4f7f\u7528\u4e86\u5176\u4ed6\u5546\u4e1a\u5316\u7684 gitlab\uff0c\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u5339\u914d\u7684\u60c5\u51b5\u3002\u8fd9\u65f6\u5019\uff0c\u60a8\u9700\u8981\u4e3a TuGraph DB \u9879\u76ee\u5355\u72ec\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u90ae\u7bb1\u3002\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u90ae\u7bb1\u7684\u65b9\u5f0f\u8bf7\u53c2\u8003 github \u5b98\u65b9\u6587\u6863\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"46-\u4fee\u6539\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730",children:"4.6. \u4fee\u6539\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730"}),"\n",(0,t.jsx)(n.p,{children:"\u62c9\u5b8c\u5206\u652f\u540e\uff0c\u5c31\u53ef\u4ee5\u4fee\u6539\u4ee3\u7801\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"**\u4fee\u6539\u4ee3\u7801\u6ce8\u610f\u4e8b\u9879 **"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee3\u7801\u2edb\u683c\u4fdd\u6301\u4e00\u81f4\uff1aTuGraph \u901a\u8fc7 cpplint \u6765\u4fdd\u6301\u4ee3\u7801\u683c\u5f0f\u4e00\u81f4\uff0cIDE\u53ef\u4ee5\u901a\u8fc7.clang\u6765\u914d\u7f6e\u98ce\u683c\u3002\u5728\u63d0\u4ea4\u4ee3\u7801\u524d\uff0c\u52a1\u5fc5\u672c\u5730\u68c0\u67e5\u4ee3\u7801\u98ce\u683c\uff0c\u5426\u5219ACI\u5c06\u62a5\u9519\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8865\u5145\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\uff1a\u65b0\u6709\u4fee\u6539\u5e94\u8be5\u901a\u8fc7\u5df2\u6709\u7684\u5355\u5143\u6d4b\u8bd5,\u5e94\u8be5\u63d0\u4f9b\u65b0\u7684\u5355\u5143\u6d4b\u8bd5\u6765\u8bc1\u660e\u4ee5\u524d\u7684\u4ee3\u7801\u5b58\u5728 bug\uff0c\u800c\u65b0\u7684\u4ee3\u7801\u5df2\u7ecf\u89e3\u51b3\u4e86\u8fd9\u4e9b bug ,\u60a8\u53ef\u4ee5\u7528\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c\u6240\u6709\u6d4b\u8bd5: ./unit_test\n\u4e5f\u53ef\u4ee5\u901a\u8fc7IDE\u6765\u8f85\u52a9\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"**\u5176\u5b83\u6ce8\u610f\u4e8b\u9879 **"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u4fdd\u6301\u60a8\u7f16\u8f91\u7684\u4ee3\u7801\u7684\u539f\u6709\u2edb\u683c\uff0c\u5c24\u5176\u662f\u7a7a\u683c\u3001\u6362\u884c\u7b49\u3002 \u5bf9\u4e8e\u65e0\u7528\u7684\u6ce8\u91ca\uff0c\u8bf7\u76f4\u63a5\u5220\u9664\u3002 \u5bf9\u903b\u8f91\u548c\u529f\u80fd\u4e0d\u5bb9\u6613\u88ab\u7406\u89e3\u7684\u5730\u65b9\u6dfb\u52a0\u6ce8\u91ca\u3002 \u53ca\u65f6\u66f4\u65b0\u6587\u6863\u3002 \u4fee\u6539\u5b8c\u4ee3\u7801\u540e\uff0c\u8bf7\u6309\u7167\u5982\u4e0b\u683c\u5f0f\u6267\u884c\u547d\u4ee4\u63d0\u4ea4\u6240\u6709\u7684\u4fee\u6539\u5230\u672c\u5730:\ngit commit -am '(feat) \u6dfb\u52a0xx\u529f\u80fd' git commit -am '(fix) \u4fee\u590dxx\u95ee\u9898'`"}),"\n",(0,t.jsx)(n.h3,{id:"47-\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93",children:"4.7. \u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.p,{children:'\u5728\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u4e0e\u8fdc\u7a0b\u4ed3\u5e93\u540c\u6b65\u4ee3\u7801\u4e86\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u63d0\u4ea4\u672c\u5730\u4fee\u6539\u5230 github \u4e0a: git push origin "branchname"'}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u524d\u9762\u60a8\u662f\u901a\u8fc7 fork \u6765\u505a\u7684\uff0c\u90a3\u4e48\u8fd9\u91cc\u7684 origin \u662f push \u5230\u60a8\u7684\u4ee3\u7801\u4ed3\u5e93\uff0c\u800c\u4e0d\u662f TuGraph \u7684\u4ee3\u7801\u4ed3\u5e93\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u4ea4\u5408\u5e76\u4ee3\u7801\u5230 Master \u7684\u8bf7\u6c42 \u5728\u7684\u4ee3\u7801\u63d0\u4ea4\u5230 GitHub \u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u53d1\u9001\u8bf7\u6c42\u6765\u628a\u60a8\u6539\u597d\u7684\u4ee3\u7801\u5408\u5165 TuGraph Master \u4ee3\u7801\u4e86\u3002\u6b64\u65f6\u60a8\u9700\u8981\u8fdb\u5165\u60a8\u5728 GitHub \u4e0a\u7684\u5bf9\u5e94\u4ed3\u5e93\uff0c\u6309\u53f3\u4e0a\u2ec6\u7684 pull request \u6309\u94ae\u3002\u9009\u62e9\u76ee\u6807\u5206\u652f\uff0c\u4e00\u822c\u5c31\u662f master\uff0c\u7cfb\u7edf\u4f1a\u901a\u77e5 TuGraph \u7684\u4eba\u5458\uff0c TuGraph \u4eba\u5458\u4f1a Review \u60a8\u7684\u4ee3\u7801\uff0c\u7b26\u5408\u8981\u6c42\u540e\u5c31\u4f1a\u5408\u5165\u4e3b\u5e72\uff0c\u6210\u4e3a TuGraph \u7684\u4e00\u90e8\u5206\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\u4f1a\u81ea\u52a8\u68c0\u67e5CI\uff0c\u4ee5\u53ca\u6240\u6709Commits\u4e2d\u7684\u8d21\u732e\u8005\u662f\u5426\u7b7e\u7f72\u4e86cla\uff0c\u901a\u8fc7\u540e\u4f1a\u6709\u7eff\u8272\u7684\u6807\u8bc6\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"48-\u4ee3\u7801-review",children:"4.8. \u4ee3\u7801 Review"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u60a8\u63d0\u4ea4\u4ee3\u7801\u540e\uff0c\u60a8\u7684\u4ee3\u7801\u4f1a\u88ab\u6307\u6d3e\u7ed9\u7ef4\u62a4\u4eba\u5458 Review\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002\u5982\u679c\u4e24\u4e2a\u5de5\u4f5c\u65e5\u540e\uff0c\u4ecd\u7136\u6ca1\u6709\u4eba\u5bf9\u60a8\u7684\u63d0\u4ea4\u7ed9\u4e88\u4efb\u4f55\u56de\u590d\uff0c\u53ef\u4ee5\u5728 PR \u4e0b\u9762\u7559\u8a00\uff0c\u5e76 @ \u5bf9\u5e94\u7684\u4eba\u5458\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u4ee3\u7801 Review \u7684\u610f\u2ec5\u4f1a\u76f4\u63a5\u5907\u6ce8\u5230\u5230\u5bf9\u5e94 PR \u6216\u8005 Issue\u3002\u5982\u679c\u89c9\u5f97\u5efa\u8bae\u662f\u5408\u7406\u7684\uff0c\u4e5f\u8bf7\u60a8\u628a\u8fd9\u4e9b\u5efa\u8bae\u66f4\u65b0\u5230\u60a8\u7684\u4ee3\u7801\u4e2d\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"49-\u5408\u5e76\u4ee3\u7801\u5230master",children:"4.9. \u5408\u5e76\u4ee3\u7801\u5230Master"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4ee3\u7801 Review \u901a\u8fc7\u540e\uff0c\u5c31\u7531 TuGraph \u7ef4\u62a4\u4eba\u5458\u64cd\u4f5c\u5408\u5165 Master\uff0c\u5728\u6b64\u8fc7\u7a0b\u4e2d\u7ef4\u62a4\u4eba\u5458\u53ef\u80fd\u4f1a\u6307\u5b9a\u65b0\u7684Reviewer\uff0c\u63d0\u51fa\u65b0\u7684\u610f\u89c1\u9700\u8981\u4fee\u6539\u3002\u4e00\u822c\u8fd9\u4e00\u6b65\u4e0d\u7528\u53c2\u4e0e\uff0c\u4ee3\u7801\u5408\u5e76\u4e4b\u540e\uff0c\u60a8\u4f1a\u6536\u5230\u5408\u5e76\u6210\u529f\u7684\u63d0\u793a\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);