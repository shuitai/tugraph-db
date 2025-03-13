"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[17073],{4424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var i=r(74848),a=r(28453);const l={},t="Docker\u90e8\u7f72",c={id:"developer-manual/installation/docker-deployment",title:"Docker\u90e8\u7f72",description:"\u672c\u6587\u6863\u4ecb\u7ecdTuGraph Compile\u53caTuGraph Runtime\u7684Docker\u955c\u50cf\u7684\u521b\u5efa\u3001\u4e0b\u8f7d\u3002",source:"@site/versions/version-3.5.1/zh-CN/source/5.developer-manual/1.installation/3.docker-deployment.md",sourceDirName:"5.developer-manual/1.installation",slug:"/developer-manual/installation/docker-deployment",permalink:"/tugraph-db/zh/3.5.1/developer-manual/installation/docker-deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u5206\u7c7b",permalink:"/tugraph-db/zh/3.5.1/developer-manual/installation/environment-mode"},next:{title:"\u672c\u5730\u5305\u90e8\u7f72",permalink:"/tugraph-db/zh/3.5.1/developer-manual/installation/local-package-deployment"}},o={},s=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"2.\u73b0\u6709Docker Image",id:"2\u73b0\u6709docker-image",level:2},{value:"2.1.\u955c\u50cf\u4e0b\u8f7d\u65b9\u5f0f",id:"21\u955c\u50cf\u4e0b\u8f7d\u65b9\u5f0f",level:3},{value:"2.2.\u547d\u540d\u89c4\u8303",id:"22\u547d\u540d\u89c4\u8303",level:3},{value:"2.2.1.TuGraph Compile Image",id:"221tugraph-compile-image",level:4},{value:"2.2.2.TuGraph Runtime Image",id:"222tugraph-runtime-image",level:4},{value:"2.2.3.TuGraph Mini Runtime Image",id:"223tugraph-mini-runtime-image",level:4},{value:"2.3.\u5e38\u89c1Docker\u64cd\u4f5c",id:"23\u5e38\u89c1docker\u64cd\u4f5c",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"docker\u90e8\u7f72",children:"Docker\u90e8\u7f72"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecdTuGraph Compile\u53caTuGraph Runtime\u7684Docker\u955c\u50cf\u7684\u521b\u5efa\u3001\u4e0b\u8f7d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TuGraph Compile Image\uff1a\u63d0\u4f9b\u7f16\u8bd1\u73af\u5883\uff0c\u53ef\u4ee5\u7528\u4e8eTuGraph\u7684\u7f16\u8bd1\uff0c\u6d4b\u8bd5\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"TuGraph Runtime Image\uff1a\u63d0\u4f9b\u4e8c\u8fdb\u5236\u53ef\u8fd0\u884c\u73af\u5883\uff0c\u9644\u5e26TuGraph\u5e93\u548c\u53ef\u6267\u884c\u6587\u4ef6\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"TuGraph Mini Runtime Image: \u63d0\u4f9b\u4e8c\u8fdb\u5236\u53ef\u8fd0\u884c\u73af\u5883\uff0c\u4e0d\u5305\u542bTuGraph\u4e2dJava\u3001Python\u76f8\u5173\u7684\u529f\u80fd\uff0c\u65e0C++ plugin\u7f16\u8bd1\u8fd0\u884c\uff0c\u4ec5so\u4e0a\u4f20\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2\u73b0\u6709docker-image",children:"2.\u73b0\u6709Docker Image"}),"\n",(0,i.jsx)(n.h3,{id:"21\u955c\u50cf\u4e0b\u8f7d\u65b9\u5f0f",children:"2.1.\u955c\u50cf\u4e0b\u8f7d\u65b9\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["\u955c\u50cf\u6258\u7ba1\u5728",(0,i.jsx)(n.a,{href:"https://hub.docker.com/u/tugraph",children:"DockerHub"}),"\uff0c\u53ef\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"22\u547d\u540d\u89c4\u8303",children:"2.2.\u547d\u540d\u89c4\u8303"}),"\n",(0,i.jsx)(n.h4,{id:"221tugraph-compile-image",children:"2.2.1.TuGraph Compile Image"}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u4f9b\u7f16\u8bd1\u73af\u5883\uff0c\u53ef\u4ee5\u7528\u4e8eTuGraph\u7684\u7f16\u8bd1\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tugraph/tugraph-compile-[os name & version]:[tugraph compile version]"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a ",(0,i.jsx)(n.code,{children:"tugraph/tugraph-compile-centos7:1.2.0"})]}),"\n",(0,i.jsx)(n.h4,{id:"222tugraph-runtime-image",children:"2.2.2.TuGraph Runtime Image"}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u4f9b\u4e8c\u8fdb\u5236\u53ef\u8fd0\u884c\u73af\u5883\uff0c\u9644\u5e26TuGraph\u5e93\u548c\u53ef\u6267\u884c\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tugraph/tugraph-runtime-[os name & version]:[tugraph-runtime version]"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a",(0,i.jsx)(n.code,{children:"tugraph/tugraph-runtime-centos7:3.4.0"})]}),"\n",(0,i.jsx)(n.h4,{id:"223tugraph-mini-runtime-image",children:"2.2.3.TuGraph Mini Runtime Image"}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u4f9b\u4e8c\u8fdb\u5236\u53ef\u8fd0\u884c\u73af\u5883\uff0c\u4e0d\u5305\u542bTuGraph\u79cdJava\u3001Python\u76f8\u5173\u7684\u529f\u80fd\uff0c\u65e0C++ plugin\u7f16\u8bd1\u8fd0\u884c\uff0c\u4ec5so\u4e0a\u4f20\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tugraph/tugraph-mini-runtime-[os name & version]:[tugraph-runtime version]"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a ",(0,i.jsx)(n.code,{children:"tugraph/tugraph-mini-runtime-centos7:3.4.0"})]}),"\n",(0,i.jsx)(n.h2,{id:"23\u5e38\u89c1docker\u64cd\u4f5c",children:"2.3.\u5e38\u89c1Docker\u64cd\u4f5c"}),"\n",(0,i.jsxs)(n.p,{children:["Docker\u7531Dockerfile\u751f\u6210\uff0c\u6ce8\u610f\u521b\u5efa\u955c\u50cf\u9700\u8981\u4e0b\u8f7d\u4f9d\u8d56\uff0c\u56e0\u6b64\u7f51\u7edc\u95ee\u9898\u53ef\u80fd\u4f1a\u5bfc\u81f4\u521b\u5efa\u8f83\u6162\u6216\u8005\u521b\u5efa\u5931\u8d25\u3002\u6ce8\u610f\u4e0d\u8981\u8986\u76d6\u955c\u50cf\uff0c\u9664\u975etag\u4e3a ",(0,i.jsx)(n.code,{children:"latest"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efaCompile\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f tugraph-compile-centos7-Dockerfile -t tugraph/tugraph-compile-centos7:1.2.0 .\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efaRuntime / Mini Runtine\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker build --build-arg FILEPATH="${rpm_path_in_oss}" --build-arg FILENAME="${rpm_name}" -f tugraph-compile-centos7-Dockerfile -t tugraph/tugraph-runtime-centos7:1.2.0 .\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u955c\u50cf\u540d\u79f0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker tag ${image_name}:${image_tag} tugraph/tugraph-runtime-centos7:3.3.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u4f20\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker push tugraph/tugraph-compile-centos7:1.2.0 .\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u83b7\u53d6\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull tugraph/tugraph-compile-centos7:1.2.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5bfc\u51fa\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker save ${image_name}:${image_tag} | gzip > lgraph_latest.tar.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5bfc\u5165\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker load --input lgraph_latest.tar.gz\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4ed6Docker\u64cd\u4f5c\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/cli",children:"docker\u5b98\u65b9\u6587\u6863"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(96540);const a={},l=i.createContext(a);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);