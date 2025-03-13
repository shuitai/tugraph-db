"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92058],{23972:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var h=r(74848),i=r(28453);const l={},d="\u529f\u80fd\u6982\u89c8",s={id:"introduction/functionality",title:"\u529f\u80fd\u6982\u89c8",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u6027\u3002",source:"@site/versions/version-4.3.2/zh-CN/source/2.introduction/7.functionality.md",sourceDirName:"2.introduction",slug:"/introduction/functionality",permalink:"/tugraph-db/en-US/zh/4.3.2/introduction/functionality",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph\u4ea7\u54c1\u67b6\u6784",permalink:"/tugraph-db/en-US/zh/4.3.2/introduction/architecture"},next:{title:"\u5e94\u7528\u573a\u666f",permalink:"/tugraph-db/en-US/zh/4.3.2/introduction/scenarios"}},c={},a=[{value:"1.\u5b89\u88c5\u90e8\u7f72",id:"1\u5b89\u88c5\u90e8\u7f72",level:2},{value:"1.1.\u90e8\u7f72\u65b9\u5f0f",id:"11\u90e8\u7f72\u65b9\u5f0f",level:2},{value:"1.2.\u8f6f\u786c\u4ef6\u73af\u5883",id:"12\u8f6f\u786c\u4ef6\u73af\u5883",level:2},{value:"2.\u5b58\u50a8\u5c42",id:"2\u5b58\u50a8\u5c42",level:2},{value:"3.\u8ba1\u7b97\u5c42",id:"3\u8ba1\u7b97\u5c42",level:2},{value:"4.\u6838\u5fc3\u529f\u80fd",id:"4\u6838\u5fc3\u529f\u80fd",level:2},{value:"4.1.\u67e5\u8be2\u8bed\u8a00",id:"41\u67e5\u8be2\u8bed\u8a00",level:3},{value:"4.2.\u5b58\u50a8\u8fc7\u7a0b",id:"42\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"4.3.\u6570\u636e\u5bfc\u5165\u5bfc\u51fa",id:"43\u6570\u636e\u5bfc\u5165\u5bfc\u51fa",level:3},{value:"4.4.\u5907\u4efd\u6062\u590d",id:"44\u5907\u4efd\u6062\u590d",level:3},{value:"4.5 \u6570\u636e\u9884\u70ed",id:"45-\u6570\u636e\u9884\u70ed",level:3},{value:"4.6 \u9ad8\u53ef\u7528",id:"46-\u9ad8\u53ef\u7528",level:3},{value:"5.\u5ba2\u6237\u7aef\u5de5\u5177",id:"5\u5ba2\u6237\u7aef\u5de5\u5177",level:2},{value:"6.\u751f\u6001\u5de5\u5177",id:"6\u751f\u6001\u5de5\u5177",level:2},{value:"6.1.TuGraph DataX",id:"61tugraph-datax",level:3},{value:"6.2.\u53ef\u89c6\u5316\u4ea4\u4e92",id:"62\u53ef\u89c6\u5316\u4ea4\u4e92",level:3},{value:"6.3.\u8fd0\u7ef4\u76d1\u63a7",id:"63\u8fd0\u7ef4\u76d1\u63a7",level:3}];function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.header,{children:(0,h.jsx)(e.h1,{id:"\u529f\u80fd\u6982\u89c8",children:"\u529f\u80fd\u6982\u89c8"})}),"\n",(0,h.jsxs)(e.blockquote,{children:["\n",(0,h.jsx)(e.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u6027\u3002"}),"\n"]}),"\n",(0,h.jsx)(e.h2,{id:"1\u5b89\u88c5\u90e8\u7f72",children:"1.\u5b89\u88c5\u90e8\u7f72"}),"\n",(0,h.jsx)(e.h2,{id:"11\u90e8\u7f72\u65b9\u5f0f",children:"1.1.\u90e8\u7f72\u65b9\u5f0f"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph\u76ee\u524d\u63d0\u4f9b\u4e91\u90e8\u7f72\u3001Docker\u90e8\u7f72\u4ee5\u53ca\u5b89\u88c5\u5305\u90e8\u7f72\u4e09\u79cd\u90e8\u7f72\u65b9\u5f0f\uff0c\u7528\u6237\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u9002\u5408\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"12\u8f6f\u786c\u4ef6\u73af\u5883",children:"1.2.\u8f6f\u786c\u4ef6\u73af\u5883"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph\u6838\u5fc3\u662f\u7531C++\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u7f16\u8bd1\u5668\u4e3aGCC8.4\uff0c\u4f7f\u7528c++17\u6807\u51c6\u3002\u6b64\u5916\uff0c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u989d\u5916\u63d0\u4f9b\u4e86Python Procedure API\uff0c\u8be5\u529f\u80fd\u9700\u8981Python\u73af\u5883\u3002TuGraph\u4e0d\u9700\u8981\u7279\u6b8a\u7684\u786c\u4ef6\u6bd4\u5982GPU\uff0c\u5bf9RDMA\u3001HBM\u7b49\u9ad8\u5ef6\u8fdf\u4f4e\u5e26\u5bbd\u7684\u901a\u7528\u786c\u4ef6\u5347\u7ea7\u53ef\u4ee5\u5929\u7136\u9002\u914d\u3002"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph\u6d4b\u8bd5\u8fc7\u57fa\u4e8eX86\u548cARM\u7684CPU\uff0c\u5305\u62ecIntel\u3001AMD\u3001Kunpeng\u3001Hygon\u3001\u98de\u817e\u7b49\uff0c\u4e5f\u540c\u65f6\u5728\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u5305\u62ecUbuntu\u3001CentOS\u3001SUSE\u3001\u94f6\u6cb3\u9e92\u9e9f\u3001\u4e2d\u6807\u9e92\u9e9f\u3001UOS\u7684\u4e3b\u6d41\u7248\u672c\uff0c\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u548cCPU\u6ca1\u6709\u7279\u6b8a\u7684\u8981\u6c42\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u8f6f\u786c\u4ef6\u73af\u5883\u4e5f\u5305\u62ec\u4f9d\u8d56\u5e93\u7684\u73af\u5883\uff0c\u7531\u4e8eTuGraph\u7684\u5b58\u50a8\u5c42\u4e2d\u9ed8\u8ba4\u7684KV\u5b58\u50a8\u662fLMDB\uff0c\u9700\u8981\u6587\u4ef6\u7cfb\u7edf\u80fd\u591f\u652f\u6301POSIX\u63a5\u53e3\u3002\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e0b\u7f16\u8bd1\u548c\u53c2\u6570\u914d\u7f6e\u4f1a\u7565\u6709\u4e0d\u540c\uff0c\u6bd4\u5982\u5728\u56fe\u5b58\u50a8\u7684\u70b9\u8fb9\u6570\u636e\u6253\u5305\u4e2d\uff0c\u5e94\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u9875\u8868\u5927\u5c0f\u5339\u914d\uff0c\u9ed8\u8ba4\u4e3a4KB\uff0c\u5efa\u8bae\u5c06\u7cfb\u7edf\u7684\u9875\u8868\u5927\u5c0f\u4e5f\u8bbe\u7f6e\u4e3a4KB\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"2\u5b58\u50a8\u5c42",children:"2.\u5b58\u50a8\u5c42"}),"\n",(0,h.jsx)(e.p,{children:"\u5728\u56fe\u6570\u636e\u6a21\u578b\u4e0a\uff0cTuGraph\u652f\u6301\u5c5e\u6027\u56fe\u6a21\u578b\uff0c\u6309\u7167\u5c42\u6b21\u53ef\u4ee5\u5206\u4e3a\u5b50\u56fe\u3001\u6807\u7b7e\uff08\u5305\u62ec\u70b9\u6807\u7b7e\u548c\u8fb9\u6807\u7b7e\uff09\u3001\u5c5e\u6027\u3002\u4ece\u5b58\u50a8\u5c42\u770b\uff0cTuGraph\u4f7f\u7528\u4f7f\u7528\u76f4\u89c2\u7684\u591a\u5c42\u7684\u6811\u72b6\u6a21\u578b\uff0c\u6ca1\u6709\u8de8\u5b50\u56fe\u7684\u6807\u7b7e\uff0c\u4e5f\u6ca1\u6709\u8de8\u6807\u7b7e\u7684\u5c5e\u6027\uff0c\u4ec5\u4fdd\u7559\u56fe\u6a21\u578b\u7684\u6838\u5fc3\u903b\u8f91\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u5728\u5b50\u56fe\u7684\u5b58\u50a8\u4e0a\uff0cTuGraph\u5bf9\u591a\u56fe\u505a\u4e86\u6570\u636e\u7684\u7269\u7406\u9694\u79bb\uff0c\u6bcf\u4e2a\u56fe\u5bf9\u5e94\u4e00\u4e2aLMDB\u7684\u5b9e\u4f8b\u3002\u591a\u56fe\u7684\u5143\u6570\u636e\u63cf\u8ff0\u4fe1\u606f\uff0c\u4fdd\u5b58\u5728meta\u7684\u7279\u6b8a\u7684\u516c\u5171LMDB\u5b9e\u4f8b\u4e2d\u3002\u70b9\u8fb9\u6807\u7b7e\u53ca\u5176\u5c5e\u6027\u7684\u5b58\u50a8\uff0c\u901a\u8fc7\u5c06\u56fe\u6570\u636e\u81ea\u9002\u5e94\u5730\u6620\u5c04\u5230KV\u952e\u503c\u5bf9\uff0c\u6700\u5927\u7a0b\u5ea6\u53d1\u6325\u8bfb\u6027\u80fd\u3002\u540c\u65f6\u5728KV\u5c42\u5b9e\u73b0\u4e86\u591a\u7ebf\u7a0b\u5199\uff0c\u89e3\u51b3\u4e86LMDB\u5199\u6027\u80fd\u8f83\u4f4e\u7684\u52a3\u52bf\u3002\u4e3b\u952e\u7d22\u5f15\u548c\u4e8c\u7ea7\u7d22\u5f15\uff0c\u5bf9\u5e94LMDB\u4e2dB+\u7684\u8868\uff0c\u652f\u6301\u57fa\u4e8e\u6bd4\u8f83\u7684\u7d22\u5f15\u503c\u589e\u5220\u67e5\u6539\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u5b58\u50a8\u5c42\u8fd8\u4fdd\u7559\u4e86\u4e00\u4e9b\u5176\u4ed6\u975e\u6838\u5fc3\u529f\u80fd\u7684\u6570\u636e\uff0c\u5305\u62ec\u6743\u9650\u6570\u636e\u3001\u9884\u7f16\u8bd1\u7684\u63d2\u4ef6\u6570\u636e\u3001\u76d1\u63a7\u6570\u636e\u7b49\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"3\u8ba1\u7b97\u5c42",children:"3.\u8ba1\u7b97\u5c42"}),"\n",(0,h.jsx)(e.p,{children:"\u8ba1\u7b97\u5c42\u5728\u529f\u80fd\u4e0a\u5206\u6210\u4e09\u4e2a\u90e8\u5206\uff0c\u5305\u62ecTP\u7c7b\u7684\u56fe\u4e8b\u52a1\u5f15\u64ce\uff0cAP\u7c7b\u7684\u56fe\u5206\u6790\u5f15\u64ce\u548c\u56fe\u795e\u7ecf\u7f51\u7edc\u5f15\u64ce\u3002"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u56fe\u4e8b\u52a1\u5f15\u64ce"}),"\uff0c\u4e3b\u8981\u7528\u6765\u5904\u7406\u5e76\u53d1\u7684\u56fe\u64cd\u4f5c\uff0c\u5305\u62ec\u5355\u70b9\u67e5\u8be2\u3001\u90bb\u5c45\u67e5\u8be2\u3001\u8def\u5f84\u904d\u5386\u3002\u56fe\u4e8b\u52a1\u5f15\u64ce\u4fa7\u91cd\u5e76\u53d1\u64cd\u4f5c\u7684ACID\u4e8b\u52a1\uff0c\u786e\u4fdd\u64cd\u4f5c\u903b\u8f91\u4e0d\u4f1a\u4e92\u76f8\u5e72\u6270\uff0c\u4e3b\u8981\u6027\u80fd\u6307\u6807\u4e3a QPS\uff0c\u5373\u6bcf\u79d2\u5b8c\u6210\u7684\u67e5\u8be2\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u56fe\u5206\u6790\u5f15\u64ce"}),"\uff0c\u64cd\u4f5c\u7c7b\u578b\u901a\u5e38\u4e3a\u5168\u56fe\u8fed\u4ee3\u3002\u90e8\u5206\u7b80\u5355\u7684\u5206\u6790\u4efb\u52a1\uff08\u6bd4\u5982SPSP\uff09\u53ef\u4ee5\u7531\u56fe\u4e8b\u52a1\u5f15\u64ce\u5b8c\u6210\uff0c\u590d\u6742\u7684\u5206\u6790\u4efb\u52a1\u5747\u7531\u56fe\u5206\u6790\u5f15\u64ce\u5b8c\u6210\uff0c\u5355\u4e2a\u4efb\u52a1\u901a\u5e38\u9700\u8981\u6570\u79d2\u81f3\u6570\u5c0f\u65f6\u3002\u56e0\u6b64\u5355\u4e2a\u56fe\u5206\u6790\u4efb\u52a1\u8981\u5e76\u53d1\u5229\u7528\u6240\u6709\u7684\u786c\u4ef6\u8d44\u6e90\uff0c\u6027\u80fd\u6307\u6807\u4e3a\u4efb\u52a1\u5b8c\u6210\u7684\u603b\u65f6\u957f\u3002"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u56fe\u795e\u7ecf\u7f51\u7edc\u5f15\u64ce"}),"\uff0c\u901a\u5e38\u4e5f\u4e3a\u5168\u56fe\u8fed\u4ee3\u3002\u56fe\u795e\u7ecf\u7f51\u7edc\u5f15\u64ce\u9664\u4e86\u57fa\u4e8e\u56fe\u62d3\u6251\u7684\u64cd\u4f5c\uff0c\u4e5f\u9700\u8981\u96c6\u6210\u4e00\u4e2a\u673a\u5668\u5b66\u4e60\u7684\u6846\u67b6\u6765\u5904\u7406\u5411\u91cf\u64cd\u4f5c\uff0c\u6bd4\u5982 PyTorch\u3001MXNet\u3001TenserFlow\u3002"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"\u4e09\u4e2a\u5f15\u64ce\u7684\u64cd\u4f5c\u903b\u8f91\u4e0d\u5c3d\u76f8\u540c\uff0c\u72ec\u7acb\u914d\u7f6e\u8d44\u6e90\u6c60\u3002\u4e8b\u56fe\u4e8b\u52a1\u5f15\u64ce\u57fa\u4e8eRPC\u64cd\u4f5c\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u6bcf\u63a5\u53d7\u5ba2\u6237\u7aef\u7684\u4e00\u4e2a\u64cd\u4f5c\uff0c\u4ece\u7ebf\u7a0b\u4e2d\u53d6\u4e00\u4e2a\u7ebf\u7a0b\u6765\u5904\u7406\uff0c\u5e76\u53d1\u6267\u884c\u7684\u6570\u91cf\u7b49\u4e8eRPC\u7ebf\u7a0b\u6c60\u7684\u5bb9\u91cf\uff0c\u901a\u5e38\u914d\u7f6e\u4e3a\u670d\u52a1\u5668\u7684\u6838\u6570\u3002\u56fe\u5206\u6790\u5f15\u64ce\u6709\u4e00\u4e2a\u5206\u6790\u7ebf\u7a0b\u6c60\uff0c\u6bcf\u4e2a\u56fe\u5206\u6790\u4efb\u52a1\u4f1a\u5e76\u53d1\u6267\u884c\uff0c\u5373\u7528\u6240\u6709\u7684\u7ebf\u7a0b\u6765\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\uff0c\u6765\u52a0\u901f\u64cd\u4f5c\u7684\u6027\u80fd\u3002TuGraph\u56fe\u5206\u6790\u64cd\u4f5c\u4e32\u884c\u6267\u884c\u7684\u7279\u6027\u4f1a\u4e00\u5b9a\u7a0b\u5ea6\u9650\u5236\u7528\u6237\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u5e76\u53d1\u7684\u56fe\u5206\u6790\u7684\u9700\u6c42\u53ef\u4ee5\u901a\u8fc7\u9ad8\u53ef\u7528\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u589e\u52a0\u673a\u5668\u8d44\u6e90\u6765\u5904\u7406\uff0c\u6216\u8005\u63a5\u5165\u5916\u90e8\u7684\u4efb\u52a1\u8c03\u5ea6\u5668\uff0c\u5c06\u6570\u636e\u4f20\u5230\u5b9e\u65f6\u8c03\u5ea6\u7684\u5bb9\u5668\u6765\u8ba1\u7b97\u3002\u56fe\u795e\u7ecf\u7f51\u7edc\u64cd\u4f5c\u5728\u56fe\u4e0a\u7684\u64cd\u4f5c\u4f1a\u590d\u7528\u56fe\u4e8b\u52a1\u5f15\u64ce\u6216\u56fe\u5206\u6790\u5f15\u64ce\u7684\u8d44\u6e90\uff0c\u5411\u91cf\u7684\u64cd\u4f5c\u4f1a\u8d77\u5355\u72ec\u7684\u8d44\u6e90\uff0c\u5728\u673a\u5668\u5b66\u4e60\u6846\u67b6\u4e2d\u53ef\u4ee5\u4f7f\u7528GPU\u7b49\u5355\u72ec\u7684\u52a0\u901f\u786c\u4ef6\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"4\u6838\u5fc3\u529f\u80fd",children:"4.\u6838\u5fc3\u529f\u80fd"}),"\n",(0,h.jsx)(e.h3,{id:"41\u67e5\u8be2\u8bed\u8a00",children:"4.1.\u67e5\u8be2\u8bed\u8a00"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u63d0\u4f9b Cypher \u56fe\u67e5\u8be2\u8bed\u8a00\uff0c\u9075\u5faaOpenCypher\u6807\u51c6\u3002"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"\u652f\u6301Procedure\u5d4c\u5165"})}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u53ef\u63d2\u62d4\u4f18\u5316\u6846\u67b6"})," \u5404\u7c7b\u4f18\u5316\u529f\u80fd"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u53ef\u6269\u5c55\u5b89\u5168\u6027\u68c0\u67e5\u6846\u67b6"})," \u5bf9\u4e8ecypher\u8fdb\u884c"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:"42\u5b58\u50a8\u8fc7\u7a0b",children:"4.2.\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,h.jsx)(e.p,{children:"\u5f53\u7528\u6237\u9700\u8981\u8868\u8fbe\u7684\u67e5\u8be2/\u66f4\u65b0\u903b\u8f91\u8f83\u4e3a\u590d\u6742\uff08\u4f8b\u5982 Cypher \u65e0\u6cd5\u63cf\u8ff0\uff0c\u6216\u662f\u5bf9\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\uff09\u65f6\uff0c\u76f8\u6bd4\u8c03\u7528\u591a\u4e2a REST \u8bf7\u6c42\u5e76\u5728\u5ba2\u6237\u7aef\u5b8c\u6210\u6574\u4e2a\n\u5904\u7406\u6d41\u7a0b\u7684\u65b9\u5f0f\uff0cTuGraph \u63d0\u4f9b\u7684\u5b58\u50a8\u8fc7\u7a0b\uff08Procedure\uff09\u662f\u66f4\u7b80\u6d01\u548c\u9ad8\u6548\u7684\u9009\u62e9\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u4ece 3.5 \u7248\u672c\u5f00\u59cb\uff0cTuGraph \u91cd\u65b0\u8bbe\u8ba1\u4e86\u65b0\u7684\u5b58\u50a8\u8fc7\u7a0b\u7f16\u7a0b\u8303\u5f0f\uff0c\u652f\u6301\u5b9a\u4e49\u6807\u51c6\u7684\u7b7e\u540d\u548c\u7ed3\u679c\uff0c\u652f\u6301POG\u7f16\u7a0b\u3002"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u652f\u6301 POG (Procedres on Graph Query Languages) \u7f16\u7a0b\u548c POG \u5e93\uff0c\u5176\u4e2d\u201cGraph Query Languages\u201d\u5305\u542b Cypher \u4ee5\u53ca\n\u5236\u5b9a\u4e2d\u7684 ISO GQL \u7b49\u56fe\u67e5\u8be2\u8bed\u8a00\u3002POG \u5e93\u63d0\u4f9b\u5728\u67e5\u8be2\u8bed\u8a00\u4e2d\u5bf9\u7528\u6237\u5b9a\u4e49\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u8bbf\u95ee\uff0c\u6253\u7834\u4e86\u67e5\u8be2\u8bed\u8a00\u548c\u5b58\u50a8\u8fc7\u7a0b\u4e4b\u95f4\u7684\u754c\u9650\uff0c\u6269\u5c55\u4e86\u67e5\u8be2\n\u8bed\u8a00\u7684\u4f7f\u7528\u8303\u56f4\u3002"}),"\n",(0,h.jsxs)(e.blockquote,{children:["\n",(0,h.jsxs)(e.p,{children:["\u8fd9\u4e2a\u6587\u6863\u63cf\u8ff0\u4e86 ",(0,h.jsx)(e.a,{href:"/tugraph-db/en-US/zh/4.3.2/olap&procedure/procedure/",children:"\u65b0\u7684 Procedure \u7f16\u7a0b\u8303\u5f0f\u4ee5\u53ca POG"}),"\u3002"]}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:"43\u6570\u636e\u5bfc\u5165\u5bfc\u51fa",children:"4.3.\u6570\u636e\u5bfc\u5165\u5bfc\u51fa"}),"\n",(0,h.jsx)(e.p,{children:"\u5c3d\u7ba1TuGraph\u672c\u8eab\u652f\u6301\u6570\u636e\u7684\u63d2\u5165\uff0c\u4f46\u6279\u91cf\u5bfc\u5165\u80fd\u591f\u5927\u5e45\u63d0\u5347\u7684\u6548\u7387\u3002\u5bfc\u5165\u7684\u529f\u80fd\u53ef\u4ee5\u5206\u4e3a\u7a7a\u5e93\u5bfc\u5165\uff08\u79bb\u7ebf\u5bfc\u5165\uff09\u548c\u589e\u91cf\u5bfc\u5165\uff0c\u524d\u8005\u6307\u5b50\u56fe\u662f\u7a7a\u7684\u65f6\u5019\u8fdb\u884c\u5bfc\u5165\uff0c\u989d\u5916\u7684\u5047\u8bbe\u80fd\u591f\u5927\u5e45\u63d0\u5347\u5bfc\u5165\u7684\u6027\u80fd\uff0c\u5728 TuGraph \u4e2d\uff0c\u7a7a\u5e93\u5bfc\u5165\u548c\u589e\u91cf\u5bfc\u5165\u7684\u541e\u5410\u7387\u5dee\u4e8610 \u500d\u3002\u5728\u6570\u636e\u5bfc\u51fa\u4e2d\uff0c\u9700\u8981\u8003\u8651\u5bfc\u51fa\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u5373\u662f\u57fa\u4e8e\u4e00\u4e2a\u5feb\u7167\u6570\u636e\u5bfc\u51fa\u7684\u3002"}),"\n",(0,h.jsxs)(e.p,{children:["TuGraph \u53ef\u4ee5\u901a\u8fc7 \u547d\u4ee4\u884c\u5de5\u5177",(0,h.jsx)(e.code,{children:"lgraph_export"})," \u6765\u5bf9\u5df2\u7ecf\u5b58\u653e\u5728TuGraph\u7684\u56fe\u6570\u636e\u8fdb\u884c\u6570\u636e\u5bfc\u51fa\uff0c\u5bfc\u51fa\u683c\u5f0f\u652f\u6301CSV\u548cJSON\u3002"]}),"\n",(0,h.jsx)(e.h3,{id:"44\u5907\u4efd\u6062\u590d",children:"4.4.\u5907\u4efd\u6062\u590d"}),"\n",(0,h.jsx)(e.p,{children:"TUGraph\u7684\u5907\u4efd\u5728\u529f\u80fd\u4e0a\u53ef\u5206\u4e3a\u4e3b\u52a8/\u5b9a\u65f6\u3001\u79bb\u7ebf/\u5728\u7ebf\u3001\u5168\u91cf/\u589e\u91cf\u5907\u4efd\uff0c\u7528\u5c3d\u91cf\u5c0f\u7684\u5b58\u50a8\u548c\u8ba1\u7b97\u4ee3\u4ef7\u6765\u5b8c\u6210\u5907\u4efd\u3002\u6062\u590d\u529f\u80fd\u53ef\u4ee5\u6062\u590d\u5230\u6700\u65b0\u7684\u72b6\u6001\uff0c\u6216\u8005\u5386\u53f2\u6807\u6ce8\u7684\u65f6\u95f4\u70b9\uff0c\u9700\u8981\u4fdd\u8bc1\u6570\u636e\u5e93\u662f\u4e00\u81f4\u7684\u72b6\u6001\u3002"}),"\n",(0,h.jsx)(e.h3,{id:"45-\u6570\u636e\u9884\u70ed",children:"4.5 \u6570\u636e\u9884\u70ed"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u662f\u57fa\u4e8e\u78c1\u76d8\u7684\u56fe\u6570\u636e\u5e93\uff0c\u4ec5\u5f53\u8bbf\u95ee\u6570\u636e\u65f6\uff0c\u6570\u636e\u624d\u4f1a\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u3002\u56e0\u6b64\u5728\u670d\u52a1\u5668\u521a\u5f00\u542f\u540e\u7684\u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u7cfb\u7edf\u6027\u80fd\u53ef\u80fd\u4f1a\u7531\u4e8e\u9891\u7e41\u7684 IO \u64cd\u4f5c\u800c\u53d8\u5dee\u3002\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e8b\u5148\u8fdb\u884c\u6570\u636e\u9884\u70ed\u6765\u6539\u5584\u8fd9\u4e00\u95ee\u9898\u3002"}),"\n",(0,h.jsx)(e.h3,{id:"46-\u9ad8\u53ef\u7528",children:"4.6 \u9ad8\u53ef\u7528"}),"\n",(0,h.jsx)(e.p,{children:"\u9ad8\u53ef\u7528\u662f\u6307\u901a\u8fc7\u901a\u8fc7\u96c6\u7fa4\u914d\u7f6e\uff0c\u505a\u5230\u5b9e\u65f6\u591a\u526f\u672c\u6570\u636e\u70ed\u5907\uff0c\u5728\u90e8\u5206\u526f\u672c\u4e0d\u7528\u65f6\uff0c\u96c6\u7fa4\u4ecd\u7136\u80fd\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\uff0cTuGraph\u91c7\u7528 RAFT \u534f\u8bae\u7684\u591a\u673a\u70ed\u5907\u673a\u5236\uff0c\u80fd\u591f\u5c06 RPO \u964d\u4f4e\u5230\u63a5\u8fd1 0 \u7684\u7a0b\u5ea6\u3002TuGraph \u9009\u62e9\u5728\u8ba1\u7b97\u5c42\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u540c\u6b65\u7684\u5bf9\u8c61\u662f\u5199\u64cd\u4f5c\uff0c\u901a\u8fc7 RPC \u63a5\u53e3\u5feb\u901f\u540c\u6b65\u3002TuGraph \u7684\u9ad8\u53ef\u7528\u96c6\u7fa4\u91c7\u7528\u4e3b\u4ece\u6a21\u5f0f\uff0c\u53ea\u6709\u4e3b\u8282\u70b9\u5904\u7406\u5199\u8bf7\u6c42\uff0c\u4e3b\u4ece\u8282\u70b9\u5747\u80fd\u5904\u7406\u8bfb\u8bf7\u6c42\u3002\u4e3b\u8282\u70b9\u7684\u5199\u8bf7\u6c42\u5904\u7406\u9700\u8981\u540c\u6b65\u5230\u591a\u4e8e\u4e8c\u5206\u4e4b\u4e00\u7684\u603b\u8282\u70b9\u4e0a\uff0c\u591a\u6570\u8282\u70b9\u5199\u6210\u529f\uff0c\u8be5\u5199\u8bf7\u6c42\u624d\u7b97\u5b8c\u6210\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"5\u5ba2\u6237\u7aef\u5de5\u5177",children:"5.\u5ba2\u6237\u7aef\u5de5\u5177"}),"\n",(0,h.jsx)(e.p,{children:"\u5ba2\u6237\u7aef\u4e3b\u8981\u5206\u4e3a\u5404\u79cd\u7f16\u7a0b\u8bed\u8a00\u7684SDK\uff0cOGM\u4ee5\u53ca\u547d\u4ee4\u884c\u5de5\u5177\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u5ba2\u6237\u7aef SDK \u4e3b\u8981\u7528\u4e8e\u4e8c\u6b21\u5f00\u53d1\uff0c\u53ef\u4ee5\u901a\u8fc7 RPC \u6216 REST \u534f\u8bae\u94fe\u63a5\u670d\u52a1\u7aef\u3002RPC \u57fa\u4e8e\u957f\u94fe\u63a5\u6709\u8f83\u597d\u7684\u6027\u80fd\uff0c\u6570\u636e\u9700\u8981\u901a\u8fc7 protobuf \u7edf\u4e00\u5e8f\u5217\u5316\u3002TuGraph \u4f7f\u7528brpc\uff0c\u652f\u6301 Java\u3001Python\u3001C++ \u7684 rpc \u5ba2\u6237\u7aef\u3002REST \u7684\u534f\u8bae\u6bd4\u8f83\u5bbd\u6cdb\uff0c\u80fd\u591f\u7b80\u5355\u9002\u914d\u66f4\u52a0\u591a\u6837\u7684\u73af\u5883\uff0c\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u80fd\u591f\u7b80\u5355\u5bf9\u63a5\u3002TuGraph \u7ed9\u51fa\u4e86 Python \u7684REST \u5ba2\u6237\u7aef\u5b9e\u4f8b\uff0c\u547d\u4ee4\u884c\u7684\u4ea4\u4e92\u4e5f\u662f\u7528 REST \u5b9e\u73b0\u3002"}),"\n",(0,h.jsx)(e.p,{children:"OGM(Object Graph Mapping)\u4e3a\u9762\u5411 TuGraph \u7684\u56fe\u5bf9\u8c61\u6620\u5c04\u5de5\u5177\uff0c\u652f\u6301\u5c06 JAVA \u5bf9\u8c61\uff08POJO\uff09\u6620\u5c04\u5230 TuGraph \u4e2d\uff0cJAVA \u4e2d\u7684\u7c7b\u6620\u5c04\u4e3a\u56fe\u4e2d\u7684\u8282\u70b9\u3001\u7c7b\u4e2d\u7684\u96c6\u5408\u6620\u5c04\u4e3a\u8fb9\u3001\u7c7b\u7684\u5c5e\u6027\u6620\u5c04\u4e3a\u56fe\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5e76\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u51fd\u6570\u64cd\u4f5c\u56fe\u6570\u636e\u5e93\uff0c\u56e0\u6b64 JAVA \u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u719f\u6089\u7684\u751f\u6001\u4e2d\u8f7b\u677e\u5730\u4f7f\u7528 TuGraph \u6570\u636e\u5e93\u3002"}),"\n",(0,h.jsxs)(e.p,{children:["\u547d\u4ee4\u884c\u5de5\u5177",(0,h.jsx)(e.code,{children:"lgraph_cypher"}),"\u662f\u67e5\u8be2\u5ba2\u6237\u7aef\uff0c\u53ef\u7528\u4e8e\u5411 TuGraph \u670d\u52a1\u5668\u63d0\u4ea4 OpenCypher \u8bf7\u6c42\u3002",(0,h.jsx)(e.code,{children:"lgraph_cypher"}),"\u5ba2\u6237\u7aef\u6709\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a\u5355\u547d\u4ee4\u6a21\u5f0f\u548c\u4ea4\u4e92\u5f0f\u6a21\u5f0f\u3002"]}),"\n",(0,h.jsx)(e.h2,{id:"6\u751f\u6001\u5de5\u5177",children:"6.\u751f\u6001\u5de5\u5177"}),"\n",(0,h.jsx)(e.p,{children:"\u751f\u6001\u5de5\u5177\u662f\u4f01\u4e1a\u7ea7\u6570\u636e\u5e93\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u4e30\u5bcc\u7684\u751f\u6001\u5de5\u5177\u80fd\u591f\u5927\u5927\u63d0\u5347\u56fe\u6570\u636e\u5e93\u7684\u53ef\u7528\u6027\uff0c\u7a33\u5b9a\u6027\u3002"}),"\n",(0,h.jsx)(e.h3,{id:"61tugraph-datax",children:"6.1.TuGraph DataX"}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.img,{alt:"\u5bfc\u5165\u5bfc\u51fa",src:r(57363).A+"",width:"1288",height:"404"})}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u6838\u5fc3\u652f\u6301 CSV \u548c JSON \u5408\u9002\u7684\u5bfc\u5165\u5bfc\u51fa\uff0c\u63d0\u4f9b\u7a7a\u5e93\u5bfc\u5165\u548c\u589e\u91cf\u5bfc\u5165\u7684\u6a21\u5f0f\u3002\u5b9e\u9645\u4e2d\u4f1a\u5b58\u5728 MySQL\u3001Kafka\u3001Hive \u7b49\u591a\u6570\u636e\u6e90\u5bfc\u5165\u7684\u9700\u6c42\uff0cTuGraph \u901a\u8fc7 DataX \u505a\u591a\u6570\u636e\u6e90\u7684\u5bf9\u63a5\u3002\u7531\u4e8e\u5173\u7cfb\u6a21\u578b\u548c\u56fe\u6a21\u578b\u5b58\u5728\u7684\u5dee\u5f02\uff0c\u6570\u636e\u6e05\u6d17\u7684\u6d41\u7a0b\u53ef\u4ee5\u4f7f\u7528 SparkSQL \u5feb\u901f\u5904\u7406\uff0cTuGraph \u672c\u8eab\u4ec5\u5173\u6ce8 CSV \u548c JSON \u7684\u7b80\u5355\u573a\u666f\u5bfc\u5165\u53ef\u9760\u6027\u548c\u6027\u80fd\u3002"}),"\n",(0,h.jsx)(e.h3,{id:"62\u53ef\u89c6\u5316\u4ea4\u4e92",children:"6.2.\u53ef\u89c6\u5316\u4ea4\u4e92"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph Browser \u662f\u9762\u5411\u56fe\u6570\u636e\u5e93\u76f4\u63a5\u4f7f\u7528\u8005\u7684\u53ef\u89c6\u5316\u4ea4\u4e92\u754c\u9762\uff0c\u529f\u80fd\u4e0a\u8986\u76d6\u4e86 TuGraph \u7684\u7edd\u5927\u90e8\u5206\u80fd\u529b\uff0c\u5305\u62ec\u6570\u636e\u5bfc\u5165\u3001\u56fe\u6a21\u578b\u5efa\u7acb\u3001\u6570\u636e\u589e\u5220\u67e5\u6539\u3001\u76d1\u63a7\u8fd0\u7ef4\u7b49\u64cd\u4f5c\u94fe\u8def\u3002"}),"\n",(0,h.jsx)(e.h3,{id:"63\u8fd0\u7ef4\u76d1\u63a7",children:"6.3.\u8fd0\u7ef4\u76d1\u63a7"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u4f7f\u7528 Prometheus \u52a0 Grafana \u7684\u76d1\u63a7\u6846\u67b6\uff0c\u91c7\u7528\u677e\u8026\u5408\u7684\u65b9\u5f0f\u3002Prometheus \u4ece TuGraph \u7684\u76d1\u63a7\u63a5\u53e3\u83b7\u53d6\u76d1\u63a7\u4fe1\u606f\uff0c\u5b58\u50a8\u5728\u672c\u5730\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u901a\u8fc7 Grafana \u5728\u7f51\u9875\u7aef\u4ea4\u4e92\u5c55\u793a\u3002"}),"\n",(0,h.jsx)(e.p,{children:"TuGraph \u63d0\u4f9b\u7684\u76d1\u63a7\u7684\u72b6\u6001\u5305\u62ec\u56fe\u6570\u636e\u5e93\u7684\u72b6\u6001\u548c\u670d\u52a1\u5668\u7684\u72b6\u6001\uff0c\u524d\u8005\u5305\u62ec\u8bfb\u5199\u8d1f\u8f7d\u3001\u70b9\u8fb9\u6570\u91cf\u7b49\u6570\u636e\u5e93\u7aef\u7684\u72b6\u6001\uff0c\u540e\u8005\u5305\u62ec\u5185\u5b58\u3001CPU\u3001\u786c\u76d8\u7b49\u670d\u52a1\u5668\u7684\u5b9e\u65f6\u72b6\u6001\u3002\u5982\u679c\u67d0\u4e9b\u76d1\u63a7\u72b6\u6001\u8d85\u8fc7\u4e86\u9884\u671f\u7684\u9608\u503c\uff0c\u5c31\u9700\u8981\u4e3b\u52a8\u544a\u8b66\uff0c\u901a\u5e38\u9700\u8981\u5bf9\u63a5\u5176\u4ed6\u8fd0\u7ef4\u7ba1\u63a7\u7cfb\u7edf\uff0c\u6bd4\u5982\u7fa4\u6d88\u606f\u3001\u90ae\u4ef6\u544a\u8b66\u7b49\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,h.jsx)(e,{...n,children:(0,h.jsx)(t,{...n})}):t(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>s});var h=r(96540);const i={},l=h.createContext(i);function d(n){const e=h.useContext(l);return h.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),h.createElement(l.Provider,{value:e},n.children)}},57363:(n,e,r)=>{r.d(e,{A:()=>h});const h=r.p+"assets/images/tugraph-datax-0f6f140ea310beb2c90460c3d6d0c08d.png"}}]);