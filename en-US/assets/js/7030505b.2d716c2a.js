"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50177],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>h});var l=r(96540);const d={},c=l.createContext(d);function s(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(c.Provider,{value:n},e.children)}},40526:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>t,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var l=r(74848),d=r(28453);const c={},s="\u90e8\u7f72\u9ad8\u53ef\u7528\u6a21\u5f0f",h={id:"developer-manual/running/high-availability-mode",title:"\u90e8\u7f72\u9ad8\u53ef\u7528\u6a21\u5f0f",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\u6a21\u5f0f\u7684\u539f\u7406\u3001\u51c6\u5907\u5de5\u4f5c\u3001\u4ee5\u53ca\u670d\u52a1\u5668\u7684\u64cd\u4f5c\u8bf4\u660e",source:"@site/versions/version-4.1.0/zh-CN/source/5.developer-manual/2.running/3.high-availability-mode.md",sourceDirName:"5.developer-manual/2.running",slug:"/developer-manual/running/high-availability-mode",permalink:"/tugraph-db/en-US/zh/4.1.0/developer-manual/running/high-availability-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u8fd0\u884c",permalink:"/tugraph-db/en-US/zh/4.1.0/developer-manual/running/tugraph-running"},next:{title:"\u6570\u636e\u5bfc\u5165",permalink:"/tugraph-db/en-US/zh/4.1.0/developer-manual/server-tools/data-import"}},i={},o=[{value:"1.\u539f\u7406",id:"1\u539f\u7406",level:2},{value:"2.\u51c6\u5907\u5de5\u4f5c",id:"2\u51c6\u5907\u5de5\u4f5c",level:2},{value:"3.\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4",id:"3\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4",level:2},{value:"3.1.\u521d\u59cb\u6570\u636e\u4e00\u81f4",id:"31\u521d\u59cb\u6570\u636e\u4e00\u81f4",level:3},{value:"3.2.\u521d\u59cb\u6570\u636e\u4e0d\u4e00\u81f4",id:"32\u521d\u59cb\u6570\u636e\u4e0d\u4e00\u81f4",level:3},{value:"4.\u6a2a\u5411\u6269\u5c55\u5176\u4ed6\u670d\u52a1\u5668",id:"4\u6a2a\u5411\u6269\u5c55\u5176\u4ed6\u670d\u52a1\u5668",level:2},{value:"5.\u505c\u6b62\u670d\u52a1\u5668",id:"5\u505c\u6b62\u670d\u52a1\u5668",level:2},{value:"6.\u91cd\u542f\u670d\u52a1\u5668",id:"6\u91cd\u542f\u670d\u52a1\u5668",level:2},{value:"7.docker\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4",id:"7docker\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4",level:2},{value:"7.1.\u5b89\u88c5\u955c\u50cf",id:"71\u5b89\u88c5\u955c\u50cf",level:3},{value:"7.2.\u521b\u5efa\u5bb9\u5668",id:"72\u521b\u5efa\u5bb9\u5668",level:3},{value:"7.3.\u542f\u52a8\u670d\u52a1",id:"73\u542f\u52a8\u670d\u52a1",level:3},{value:"8.\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001",id:"8\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001",level:2},{value:"9.\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u6570\u636e\u540c\u6b65\u95ee\u9898",id:"9\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u6570\u636e\u540c\u6b65\u95ee\u9898",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u90e8\u7f72\u9ad8\u53ef\u7528\u6a21\u5f0f",children:"\u90e8\u7f72\u9ad8\u53ef\u7528\u6a21\u5f0f"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\u6a21\u5f0f\u7684\u539f\u7406\u3001\u51c6\u5907\u5de5\u4f5c\u3001\u4ee5\u53ca\u670d\u52a1\u5668\u7684\u64cd\u4f5c\u8bf4\u660e"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"1\u539f\u7406",children:"1.\u539f\u7406"}),"\n",(0,l.jsx)(n.p,{children:"TuGraph \u901a\u8fc7\u591a\u673a\u70ed\u5907\u4efd\u6765\u63d0\u4f9b\u9ad8\u53ef\u7528\u6a21\u5f0f\uff08HA \u6a21\u5f0f\uff09\u3002\u5728\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\uff0c\u5bf9\u6570\u636e\u5e93\u7684\u5199\u64cd\u4f5c\u4f1a\u88ab\u540c\u6b65\u5230\u6240\u6709\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u6837\u5373\u4f7f\u6709\u90e8\u5206\u670d\u52a1\u5668\u5b95\u673a\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u670d\u52a1\u7684\u53ef\u7528\u6027\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\uff0c\u591a\u4e2a TuGraph \u670d\u52a1\u5668\u7ec4\u6210\u4e00\u4e2a\u5907\u4efd\u7ec4\u3002\u6bcf\u4e2a\u5907\u4efd\u7ec4\u7531\u4e09\u4e2a\u6216\u66f4\u591a TuGraph \u670d\u52a1\u5668\u7ec4\u6210\uff0c\u5176\u4e2d\u67d0\u53f0\u670d\u52a1\u5668\u4f1a\u4f5c\u4e3a",(0,l.jsx)(n.code,{children:"leader"}),"\uff0c\u800c\u5176\u4ed6\u590d\u5236\u7ec4\u670d\u52a1\u5668\u5219\u4f5c\u4e3a",(0,l.jsx)(n.code,{children:"follower"}),"\u3002\u5199\u5165\u8bf7\u6c42\u7531",(0,l.jsx)(n.code,{children:"leader"}),"\n\u63d0\u4f9b\u670d\u52a1\uff0c\u8be5",(0,l.jsx)(n.code,{children:"leader"}),"\u5c06\u6bcf\u4e2a\u8bf7\u6c42\u590d\u5236\u540c\u6b65\u5230",(0,l.jsx)(n.code,{children:"follower"}),"\uff0c\u5e76\u5728\u8bf7\u6c42\u540c\u6b65\u5230\u670d\u52a1\u5668\u540e\u624d\u80fd\u54cd\u5e94\u5ba2\u6237\u7aef\u3002\u8fd9\u6837\uff0c\u5982\u679c\u4efb\u4f55\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\uff0c\u5176\u4ed6\u670d\u52a1\u5668\u4ecd\u5c06\u5177\u6709\u5230\u76ee\u524d\u4e3a\u6b62\u5df2\u5199\u5165\u7684\u6240\u6709\u6570\u636e\u3002\u5982\u679c",(0,l.jsx)(n.code,{children:"leader"}),"\n\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\uff0c\u5176\u4ed6\u670d\u52a1\u5668\u5c06\u81ea\u52a8\u9009\u62e9\u51fa\u65b0\u7684",(0,l.jsx)(n.code,{children:"leader"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u9ad8\u53ef\u7528\u6a21\u5f0f\u4ec5\u4f01\u4e1a\u7248\u53ef\u7528\uff0c\u5f00\u6e90\u793e\u533a\u7248\u4e0d\u542b\u6b64\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"2\u51c6\u5907\u5de5\u4f5c",children:"2.\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u542f\u7528\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u7528\u6237\u9700\u8981\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e09\u53f0\u53ca\u4ee5\u4e0a\u7684 TuGraph \u670d\u52a1\u5668\u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u542f\u52a8 lgraph_server \u65f6\u6253\u5f00\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u547d\u4ee4\u884c\u5c06",(0,l.jsx)(n.code,{children:"enable_ha"}),"\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,l.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8bbe\u7f6e\u6b63\u786e\u7684",(0,l.jsx)(n.code,{children:"rpc_port"}),"\uff0c\u53ef\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u547d\u4ee4\u884c\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4",children:"3.\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4"}),"\n",(0,l.jsx)(n.h3,{id:"31\u521d\u59cb\u6570\u636e\u4e00\u81f4",children:"3.1.\u521d\u59cb\u6570\u636e\u4e00\u81f4"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u542f\u52a8\u65f6\u6240\u6709\u670d\u52a1\u5668\u4e2d\u7684\u6570\u636e\u76f8\u540c\u6216\u6ca1\u6709\u6570\u636e\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\n\u6307\u5b9a",(0,l.jsx)(n.code,{children:"--conf host1:port1,host2:port2"}),"\u542f\u52a8\u670d\u52a1\u5668\u3002\n\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5c06\u51c6\u5907\u597d\u7684\u6240\u6709TuGraph\u5b9e\u4f8b\u4e00\u6b21\u6027\u52a0\u5165\u521d\u59cb\u5907\u4efd\u7ec4\uff0c\n\u7531\u5907\u4efd\u7ec4\u4e2d\u7684\u6240\u6709\u670d\u52a1\u5668\u6839\u636eraft\u534f\u8bae\u9009\u4e3e\u51fa",(0,l.jsx)(n.code,{children:"leader"}),"\uff0c\u5e76\u5c06\u5176\u4ed6\n\u670d\u52a1\u5668\u4ee5",(0,l.jsx)(n.code,{children:"follower"}),"\u7684\u89d2\u8272\u52a0\u5165\u5907\u4efd\u7ec4\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4\u7684\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090,172.22.224.16:9090,172.22.224.17:9090\n"})}),"\n",(0,l.jsx)(n.h3,{id:"32\u521d\u59cb\u6570\u636e\u4e0d\u4e00\u81f4",children:"3.2.\u521d\u59cb\u6570\u636e\u4e0d\u4e00\u81f4"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u7b2c\u4e00\u53f0\u670d\u52a1\u5668\u4e2d\u5df2\u6709\u6570\u636e\uff08\u4ee5",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u5de5\u5177\u5bfc\u5165\u6216\u4ece\u975e\u9ad8\u53ef\u7528\u6a21\u5f0f\u7684\u670d\u52a1\u5668\u4f20\u8f93\u5f97\u5230\uff09\uff0c\n\u5e76\u4e14\u4e4b\u524d\u5e76\u672a\u5728\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u4f7f\u7528\uff0c\u5219\u7528\u6237\u5e94\u4f7f\u7528boostrap\u65b9\u5f0f\u542f\u52a8\u3002\n\u4ee5",(0,l.jsx)(n.code,{children:"ha_bootstrap_role"}),"\u53c2\u6570\u4e3a1\u5728bootstrap\u6a21\u5f0f\u4e0b\u542f\u52a8\u6709\u6570\u636e\u7684\u670d\u52a1\u5668\uff0c\u5e76\u901a\u8fc7",(0,l.jsx)(n.code,{children:"conf"}),"\u53c2\u6570\u6307\u5b9a\u672c\u673a\u4e3a",(0,l.jsx)(n.code,{children:"leader"}),"\u3002\n\u5728bootstrap\u6a21\u5f0f\u4e0b\uff0c\u670d\u52a1\u5668\u5728\u5c06\u65b0\u52a0\u5165\u7684\u670d\u52a1\u5668\u6dfb\u52a0\u5230\u5907\u4efd\u7ec4\u4e4b\u524d\u4f1a\u5c06\u81ea\u5df1\u7684\n\u6570\u636e\u590d\u5236\u5230\u65b0\u670d\u52a1\u5668\u4e2d\uff0c\u4ee5\u4f7f\u6bcf\u4e2a\u670d\u52a1\u5668\u4e2d\u7684\u6570\u636e\u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8\u6709\u6570\u636e\u670d\u52a1\u5668\u7684\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090 --ha_bootstrap_role 1\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4ed6\u65e0\u6570\u636e\u7684\u670d\u52a1\u5668\u9700\u8981\u6307\u5b9a",(0,l.jsx)(n.code,{children:"ha_bootstrap_role"}),"\u53c2\u6570\u4e3a2\uff0c\u5e76\u901a\u8fc7",(0,l.jsx)(n.code,{children:"conf"}),"\u53c2\u6570\u6307\u5b9a",(0,l.jsx)(n.code,{children:"leader"}),"\u5373\u53ef\uff0c\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\u6240\u793a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090 --ha_bootstrap_role 2\n"})}),"\n",(0,l.jsx)(n.h2,{id:"4\u6a2a\u5411\u6269\u5c55\u5176\u4ed6\u670d\u52a1\u5668",children:"4.\u6a2a\u5411\u6269\u5c55\u5176\u4ed6\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u542f\u52a8\u521d\u59cb\u5907\u4efd\u7ec4\u540e\uff0c\u5982\u679c\u60f3\u5bf9\u5907\u4efd\u7ec4\u8fdb\u884c\u6a2a\u5411\u6269\u5c55\uff0c\u8981\u5c06\u65b0\u670d\u52a1\u5668\u6dfb\u52a0\u5230\u5907\u4efd\u7ec4\uff0c\n\u5e94\u4f7f\u7528",(0,l.jsx)(n.code,{children:"--conf HOST\uff1aPORT"}),"\u9009\u9879\uff0c\u5176\u4e2d",(0,l.jsx)(n.code,{children:"HOST"}),"\u53ef\u4ee5\u662f\u8be5\u5907\u4efd\u7ec4\u4e2d\u5df2\u6709\u7684\u4efb\u4f55\u670d\u52a1\u5668\u7684 IP \u5730\u5740\uff0c\n\u800c",(0,l.jsx)(n.code,{children:"PORT"}),"\u662f\u5176 RPC \u7aef\u53e3\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u542f\u52a8\u4e00\u53f0\u9ad8\u53ef\u7528\u6a21\u5f0f\u7684 TuGraph \u670d\u52a1\u5668\uff0c\u5e76\u5c1d\u8bd5\u5c06\u5176\u6dfb\u52a0\u5230\u5305\u542b\u670d\u52a1\u5668",(0,l.jsx)(n.code,{children:"172.22.224.15:9090"}),"\u7684\u5907\u4efd\u7ec4\u4e2d\u3002\n\u8bf7\u6ce8\u610f\uff0c\u52a0\u5165\u5907\u4efd\u7ec4\u9700\u8981\u670d\u52a1\u5668\u5c06\u5176\u6570\u636e\u4e0e\u5907\u4efd\u7ec4\u7684",(0,l.jsx)(n.code,{children:"leader"}),"\u670d\u52a1\u5668\u540c\u6b65\uff0c\u6b64\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u76f8\u5f53\u957f\u7684\u65f6\u95f4\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u6570\u636e\u7684\u5927\u5c0f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"5\u505c\u6b62\u670d\u52a1\u5668",children:"5.\u505c\u6b62\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u670d\u52a1\u5668\u901a\u8fc7",(0,l.jsx)(n.code,{children:"CTRL-C"}),"\u4e0b\u7ebf\u65f6\uff0c\u5b83\u5c06\u901a\u77e5\u5f53\u524d\u7684",(0,l.jsx)(n.code,{children:"leader"}),"\u670d\u52a1\u5668\uff0c\u544a\u77e5\u5176\u4ece\u5907\u4efd\u7ec4\u4e2d\u5220\u9664\u8be5\u4e0b\u7ebf\u7684\u670d\u52a1\u5668\u3002\u5982\u679c",(0,l.jsx)(n.code,{children:"leader"}),"\u670d\u52a1\u5668\u4e0b\u7ebf\uff0c\n\u5b83\u5c06\u5728\u4e0b\u7ebf\u524d\u5c06",(0,l.jsx)(n.code,{children:"leader"}),"\u8eab\u4efd\u6743\u9650\u4f20\u7ed9\u53e6\u4e00\u53f0\u670d\u52a1\u5668\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u670d\u52a1\u5668\u88ab\u7ec8\u6b62\u6216\u8005\u4e0e\u5907\u4efd\u7ec4\u4e2d\u7684\u5176\u4ed6\u670d\u52a1\u5668\u5931\u53bb\u8fde\u63a5\uff0c\u5219\u8be5\u670d\u52a1\u5668\u5c06\u88ab\u89c6\u4e3a\u5931\u8d25\u8282\u70b9\uff0c",(0,l.jsx)(n.code,{children:"leader"}),"\u670d\u52a1\u5668\u5c06\u5728\u7279\u5b9a\u65f6\u9650\u540e\u5c06\u5176\u4ece\u5907\u4efd\u7ec4\u4e2d\u5220\u9664\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4efb\u4f55\u670d\u52a1\u5668\u79bb\u5f00\u5907\u4efd\u7ec4\u5e76\u5e0c\u671b\u91cd\u65b0\u52a0\u5165\uff0c\u5219\u5fc5\u987b\u4ece",(0,l.jsx)(n.code,{children:"--conf HOST:PORT"}),"\u9009\u9879\u5f00\u59cb\uff0c\u5176\u4e2d",(0,l.jsx)(n.code,{children:"HOST"}),"\u662f\u5f53\u524d\u5907\u4efd\u7ec4\u4e2d\u7684\u67d0\u53f0\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"6\u91cd\u542f\u670d\u52a1\u5668",children:"6.\u91cd\u542f\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0d\u5efa\u8bae\u91cd\u65b0\u542f\u52a8\u6574\u4e2a\u5907\u4efd\u7ec4\uff0c\u56e0\u4e3a\u5b83\u4f1a\u4e2d\u65ad\u670d\u52a1\u3002\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u5173\u95ed\u6240\u6709\u670d\u52a1\u5668\u3002\u4f46\u5728\u91cd\u65b0\u542f\u52a8\u65f6\uff0c\n\u5fc5\u987b\u4fdd\u8bc1\u5173\u95ed\u65f6\u7684\u5907\u4efd\u7ec4\u4e2d\u81f3\u5c11\u6709N/2+1\u7684\u670d\u52a1\u5668\u80fd\u6b63\u5e38\u542f\u52a8\uff0c\u5426\u5219\u542f\u52a8\u5931\u8d25\u3002 \u5e76\u4e14\uff0c\n\u65e0\u8bba\u521d\u59cb\u542f\u52a8\u590d\u5236\u7ec4\u65f6\u662f\u5426\u6307\u5b9a",(0,l.jsx)(n.code,{children:"enable_bootstrap"}),"\u4e3atrue\uff0c\u91cd\u542f\u670d\u52a1\u5668\u65f6\u90fd\u53ea\u9700\u901a\u8fc7\n\u6307\u5b9a",(0,l.jsx)(n.code,{children:"--conf host1:port1,host2:port2"}),"\u53c2\u6570\u4e00\u6b21\u6027\u91cd\u542f\u6240\u6709\u670d\u52a1\u5668\u5373\u53ef\uff0c\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./lgraph_server -c lgraph.json --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090,172.22.224.16:9090,172.22.224.17:9090\n"})}),"\n",(0,l.jsx)(n.h2,{id:"7docker\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4",children:"7.docker\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5f88\u53ef\u80fd\u9047\u5230\u5728\u591a\u79cd\u64cd\u4f5c\u7cfb\u7edf\u6216\u67b6\u6784\u4e0a\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4\u7684\u9700\u6c42\u3002\n\u5dee\u5f02\u5316\u7684\u73af\u5883\u53ef\u80fd\u5bfc\u81f4\u7f16\u8bd1TuGraph\u65f6\u7f3a\u5c11\u67d0\u4e9b\u4f9d\u8d56\u3002\u56e0\u6b64\uff0c\n\u5728docker\u4e2d\u7f16\u8bd1\u8f6f\u4ef6\u5e76\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4\u662f\u975e\u5e38\u6709\u5e94\u7528\u4ef7\u503c\u7684\u3002\u4ee5centos7\u7248\u672c\u7684docker\u4e3a\u4f8b\uff0c\n\u90e8\u7f72\u9ad8\u53ef\u7528\u96c6\u7fa4\u7684\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"71\u5b89\u88c5\u955c\u50cf",children:"7.1.\u5b89\u88c5\u955c\u50cf"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u4e0b\u8f7dTuGraph\u7684\u7f16\u8bd1docker\u955c\u50cf\u73af\u5883"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker pull tugraph/tugraph-compile-centos7\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7136\u540e\u62c9\u53d6TuGraph\u6e90\u7801\u5e76\u7f16\u8bd1\u5b89\u88c5"}),"\n",(0,l.jsx)(n.h3,{id:"72\u521b\u5efa\u5bb9\u5668",children:"7.2.\u521b\u5efa\u5bb9\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u5bb9\u5668\uff0c\u4f7f\u7528",(0,l.jsx)(n.code,{children:"--net=host"}),"\u4f7f\u5f97\u5bb9\u5668\u8fd0\u884c\u5728host\u6a21\u5f0f\uff0c\u6b64\u6a21\u5f0f\u4e0b\ndocker\u548c\u5bbf\u4e3b\u673a\u548c\u5171\u4eab\u7f51\u7edcnamespace\uff0c\u5373\u5171\u7528\u540c\u4e00\u4e2aIP\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker run --net=host -itd -p -v {src_dir}:{dst_dir} --name tugraph_ha tugraph/tugraph-compile-centos7 /bin/bash\n"})}),"\n",(0,l.jsx)(n.h3,{id:"73\u542f\u52a8\u670d\u52a1",children:"7.3.\u542f\u52a8\u670d\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6bcf\u53f0\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\uff0c\u56e0\u4e3adocker\u548c\u5bbf\u4e3b\u673a\u5171\u4eabIP\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a\u5728\u5bbf\u4e3b\u673aIP\u4e0a\u542f\u52a8\u670d\u52a1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ lgraph_server -c lgraph.json --host 172.22.224.15 --rpc_port 9090 --enable_ha true --conf 172.22.224.15:9090,172.22.224.16:9090,172.22.224.17:9090\n"})}),"\n",(0,l.jsx)(n.h2,{id:"8\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001",children:"8.\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001"}),"\n",(0,l.jsx)(n.p,{children:"\u5907\u4efd\u7ec4\u7684\u5f53\u524d\u72b6\u6001\u53ef\u4ee5\u5728 TuGraph \u53ef\u89c6\u5316\u5de5\u5177\u3001REST API \u4ee5\u53ca Cypher \u67e5\u8be2\u4e2d\u83b7\u53d6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 TuGraph \u53ef\u89c6\u5316\u5de5\u5177\u4e2d\uff0c\u53ef\u4ee5\u5728 DBInfo \u90e8\u5206\u4e2d\u627e\u5230\u5907\u4efd\u7ec4\u4e2d\u7684\u670d\u52a1\u5668\u53ca\u5176\u89d2\u8272\u5217\u8868\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 REST API \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"GET /info/peers"})," \u8bf7\u6c42\u83b7\u53d6\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Cypher \u4e2d\uff0c\u4f7f\u7528",(0,l.jsx)(n.code,{children:"CALL dbms.listServers()"}),"\u8bed\u53e5\u6765\u67e5\u8be2\u5f53\u524d\u5907\u4efd\u7ec4\u7684\u72b6\u6001\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"9\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u6570\u636e\u540c\u6b65\u95ee\u9898",children:"9.\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u6570\u636e\u540c\u6b65\u95ee\u9898"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\uff0c\u540c\u4e00\u5907\u4efd\u7ec4\u4e2d\u7684\u4e0d\u540c\u670d\u52a1\u5668\u53ef\u80fd\u5e76\u4e0d\u603b\u662f\u5904\u4e8e\u76f8\u540c\u7684\u72b6\u6001\u3002\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u5982\u679c\u8bf7\u6c42\u5df2\u540c\u6b65\u5230\u8d85\u8fc7\u4e00\u534a\u7684\u670d\u52a1\u5668\uff0c\u5219",(0,l.jsx)(n.code,{children:"leader"}),"\u670d\u52a1\u5668\u5c06\u8ba4\u4e3a\u8be5\u8bf7\u6c42\u5c5e\u4e8e",(0,l.jsx)(n.code,{children:"committed"}),"\u72b6\u6001\u3002\u5c3d\u7ba1\u5176\u4f59\u670d\u52a1\u5668\u6700\u7ec8\u5c06\u6536\u5230\u65b0\u8bf7\u6c42\uff0c\u4f46\u670d\u52a1\u5668\u7684\u72b6\u6001\u4e0d\u4e00\u81f4\u5c06\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\u3002\u5ba2\u6237\u7aef\u4e5f\u53ef\u80fd\u5411\u521a\u521a\u91cd\u65b0\u542f\u52a8\u7684\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u4ece\u800c\u5177\u6709\u8f83\u65e7\u7684\u72b6\u6001\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u5ba2\u6237\u7aef\u770b\u5230\u4e00\u81f4\u8fde\u7eed\u7684\u6570\u636e\uff0c\u7279\u522b\u662f\u4e3a\u4e86\u6446\u8131",(0,l.jsx)(n.code,{children:"\u53cd\u5411\u65f6\u95f4\u65c5\u884c"}),"\u95ee\u9898\uff08\u5176\u4e2d\u5ba2\u6237\u7aef\u8bfb\u53d6\u6bd4\u4ee5\u524d\u770b\u5230\u7684\u72b6\u6001\u66f4\u65e7\u7684\u72b6\u6001\uff09\uff0c\u6bcf\u4e2a TuGraph \u670d\u52a1\u5668\u90fd\u4f1a\u4fdd\u6301\u4e00\u4e2a\u5355\u8c03\u589e\u52a0\u7684\u6570\u636e\u7248\u672c\u53f7\u3002\u5907\u4efd\u7ec4\u4e2d\u6570\u636e\u7248\u672c\u53f7\u5230\u6570\u636e\u5e93\u72b6\u6001\u7684\u6620\u5c04\u5168\u5c40\u4e00\u81f4\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4e24\u53f0\u670d\u52a1\u5668\u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u7248\u672c\u53f7\uff0c\u5219\u5b83\u4eec\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u3002\u54cd\u5e94\u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u5668\u5728\u54cd\u5e94\u4e2d\u5305\u542b\u4e86\u5176\u6570\u636e\u7248\u672c\u53f7\u3002\u56e0\u6b64\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u77e5\u9053\u5b83\u770b\u5230\u4e86\u54ea\u4e2a\u7248\u672c\u3002\u5ba2\u6237\u7aef\u6536\u5230\u65e7\u7248\u672c\u7684\u6570\u636e\u4e4b\u540e\u53ef\u4ee5\u91cd\u65b0\u5411Leader\u53d1\u9001\u8bf7\u6c42\uff0c\u4ece\u800c\u83b7\u53d6\u5230\u6700\u65b0\u7684\u6570\u636e\u3002"]})]})}function t(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}}}]);