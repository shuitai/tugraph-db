"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44955],{28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(a.Provider,{value:e},n.children)}},29564:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(74848),o=t(28453);const a={},s="\u8fd0\u7ef4\u76d1\u63a7",i={id:"permission/monitoring",title:"\u8fd0\u7ef4\u76d1\u63a7",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u53ef\u89c6\u5316\u8fd0\u7ef4\u76d1\u63a7",source:"@site/versions/version-4.3.2/zh-CN/source/10.permission/4.monitoring.md",sourceDirName:"10.permission",slug:"/permission/monitoring",permalink:"/tugraph-db/en-US/zh/4.3.2/permission/monitoring",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5fd8\u8bb0'admin'\u5bc6\u7801",permalink:"/tugraph-db/en-US/zh/4.3.2/permission/reset_admin_password"},next:{title:"\u65e5\u5fd7\u4fe1\u606f",permalink:"/tugraph-db/en-US/zh/4.3.2/permission/log"}},l={},d=[{value:"1.\u8bbe\u8ba1\u601d\u8def",id:"1\u8bbe\u8ba1\u601d\u8def",level:2},{value:"1.1.TuGraph",id:"11tugraph",level:3},{value:"1.2.TuGraph Monitor",id:"12tugraph-monitor",level:3},{value:"1.3.Prometheus",id:"13prometheus",level:3},{value:"1.4.Grafana",id:"14grafana",level:3},{value:"2.\u90e8\u7f72\u65b9\u6848",id:"2\u90e8\u7f72\u65b9\u6848",level:2},{value:"2.1.\u7b2c\u4e00\u6b65",id:"21\u7b2c\u4e00\u6b65",level:3},{value:"2.2.\u7b2c\u4e8c\u6b65",id:"22\u7b2c\u4e8c\u6b65",level:3},{value:"2.3.\u7b2c\u4e09\u6b65",id:"23\u7b2c\u4e09\u6b65",level:3},{value:"2.4.\u7b2c\u56db\u6b65",id:"24\u7b2c\u56db\u6b65",level:3},{value:"3.\u672a\u6765\u8ba1\u5212",id:"3\u672a\u6765\u8ba1\u5212",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u8fd0\u7ef4\u76d1\u63a7",children:"\u8fd0\u7ef4\u76d1\u63a7"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u53ef\u89c6\u5316\u8fd0\u7ef4\u76d1\u63a7"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1\u8bbe\u8ba1\u601d\u8def",children:"1.\u8bbe\u8ba1\u601d\u8def"}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u89c6\u5316\u76d1\u63a7\u5e76\u4e0d\u662fTuGraph\u81ea\u8eab\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u5728\u8bbe\u8ba1\u65f6\u5c06\u53ef\u89c6\u5316\u76d1\u63a7\u4f5c\u4e3aTuGraph\u5468\u8fb9\u751f\u6001\u4e2d\u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u6765\u51cf\u5c11\u548cTuGraph\u6570\u636e\u5e93\u7684\u8026\u5408\u5ea6\uff0c\u4ee5\u53ca\u5bf9\u4e8eTuGraph\u81ea\u8eab\u7684\u5f71\u54cd\u3002TuGraph\u53ef\u89c6\u5316\u76d1\u63a7\u91c7\u7528\u76ee\u524d\u6700\u706b\u70ed\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\uff0cTuGraph Monitor + Prometheus + Grafana\u6765\u5b9e\u73b0\u3002\u5176\u4e2dTuGraph Monitor\u4f5c\u4e3aTuGraph\u670d\u52a1\u7684\u5ba2\u6237\u7aef\uff0c\u901a\u8fc7TCP\u94fe\u63a5\u5411TuGraph\u670d\u52a1\u53d1\u8d77Procedure\u8bf7\u6c42\uff0cTuGraph\u670d\u52a1\u5728\u63a5\u6536\u5230\u8bf7\u6c42\u540e\u6536\u96c6\u81ea\u8eab\u6240\u5728\u673a\u5668\u7684cpu\uff0cmemory\uff0cdisk\uff0cio\uff0c\u4ee5\u53ca\u8bf7\u6c42\u6570\u91cf\u7b49\u6307\u6807\u7684\u7edf\u8ba1\u7ed3\u679c\u8fdb\u884c\u54cd\u5e94\u3002TuGraph Monitor\u5728\u63a5\u6536\u5230TuGraph\u54cd\u5e94\u7684\u6307\u6807\u6570\u636e\u540e\uff0c\u5c06\u6570\u636e\u5305\u88c5\u6210prometheus\u9700\u8981\u7684\u683c\u5f0f\uff0c\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u7b49\u5f85Prometheus\u670d\u52a1\u901a\u8fc7http\u8bf7\u6c42\u83b7\u53d6\u3002Prometheus\u670d\u52a1\u4f1a\u5b9a\u671f\u901a\u8fc7http\u8bf7\u6c42\u4eceTuGraph Monitor\u83b7\u53d6\u5c01\u88c5\u597d\u7684\u8bf7\u6c42\u6570\u636e\uff0c\u6309\u7167\u83b7\u53d6\u7684\u65f6\u95f4\u4fdd\u5b58\u5728\u81ea\u5df1\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u3002Grafana\u53ef\u4ee5\u6839\u636e\u7528\u6237\u7684\u914d\u7f6e\uff0c\u4ecePrometheus\u5904\u83b7\u53d6\u67d0\u4e2a\u65f6\u95f4\u6bb5\u5185\u7684\u7edf\u8ba1\u6570\u636e\uff0c\u5e76\u5728web\u754c\u9762\u4e0a\u7ed8\u5236\u6d45\u663e\u6613\u61c2\u7684\u56fe\u5f62\u6765\u5c55\u793a\u6700\u7ec8\u7ed3\u679c\u3002\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u4e2d\uff0c\u90fd\u91c7\u7528\u4e86\u4e3b\u52a8\u83b7\u53d6\uff0c\u5373PULL\u7684\u6a21\u578b\uff0c\u597d\u5904\u4e4b\u4e00\u662f\u5b83\u80fd\u6700\u5927\u9650\u5ea6\u7684\u907f\u514d\u6570\u636e\u751f\u4ea7\u8005\u548c\u6570\u636e\u6d88\u8d39\u8005\u4e4b\u95f4\u7684\u8026\u5408\u5ea6\uff0c\u4f7f\u5f97\u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u597d\u5904\u4e4b\u4e8c\u662f\u6570\u636e\u751f\u4ea7\u8005\u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u6d88\u8d39\u8005\u7684\u6570\u636e\u5904\u7406\u80fd\u529b\uff0c\u5373\u4f7f\u67d0\u4e2a\u6d88\u8d39\u8005\u7684\u6570\u636e\u5904\u7406\u80fd\u529b\u8f83\u5f31\uff0c\u4e5f\u4e0d\u4f1a\u56e0\u4e3a\u751f\u4ea7\u8005\u751f\u4ea7\u6570\u636e\u8fc7\u5feb\u800c\u538b\u57ae\u6d88\u8d39\u8005\u3002\u4e3b\u52a8\u62c9\u53d6\u6a21\u578b\u7684\u4e0d\u8db3\u4e4b\u5904\u5728\u4e8e\u6570\u636e\u7684\u5b9e\u65f6\u6027\u4e0d\u591f\uff0c\u4f46\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u6570\u636e\u5e76\u6ca1\u6709\u5f88\u9ad8\u7684\u5b9e\u65f6\u6027\u8981\u6c42\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"11tugraph",children:"1.1.TuGraph"}),"\n",(0,r.jsx)(e.p,{children:"TuGraph\u6570\u636e\u5e93\u63d0\u4f9b\u4e86\u6536\u96c6\u670d\u52a1\u6240\u5728\u673a\u5668\u4e2d\u78c1\u76d8\uff0c\u5185\u5b58\uff0c\u7f51\u7edcIO\uff0c\u4ee5\u53ca\u67e5\u8be2\u8bf7\u6c42\u7b49\u591a\u79cd\u6570\u636e\u4fe1\u606f\u7684\u80fd\u529b\uff0c\u5e76\u901a\u8fc7\u6807\u51c6Procedure\u65b9\u5f0f\u63d0\u4f9b\u67e5\u8be2\u3002\u6536\u96c6\u6570\u636e\u8fd9\u4e00\u52a8\u4f5c\u4ec5\u5728\u6709\u7528\u6237\u901a\u8fc7\u63a5\u53e3\u67e5\u8be2\u65f6\u624d\u4f1a\u53d1\u751f\uff0c\u907f\u514d\u4e86\u5728\u7528\u6237\u4e0d\u9700\u8981TuGraph\u76d1\u63a7\u670d\u52a1\u6240\u5728\u673a\u5668\u7684\u6307\u6807\u65f6\u5bf9\u7528\u6237\u4e1a\u52a1\u67e5\u8be2\u8bf7\u6c42\u5e26\u6765\u7684\u5f71\u54cd\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"12tugraph-monitor",children:"1.2.TuGraph Monitor"}),"\n",(0,r.jsx)(e.p,{children:"TuGraph Monitor\u662fTuGraph\u5468\u8fb9\u751f\u6001\u4e2d\u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u5b83\u4f5c\u4e3aTuGraph\u4f17\u591a\u7528\u6237\u4e2d\u7684\u4e00\u4e2a\uff0c\u901a\u8fc7C++ RPC Client\u4e0eTuGraph\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u8fc7Procedure\u67e5\u8be2\u63a5\u53e3\u6765\u67e5\u8be2TuGraph\u670d\u52a1\u6240\u5728\u673a\u5668\u7684\u6027\u80fd\u6307\u6807\uff0c\u5e76\u5c06TuGraph\u8fd4\u56de\u7684\u7ed3\u679c\u5305\u88c5\u6210Prometheus\u9700\u8981\u7684\u6570\u636e\u6a21\u578b\uff0c\u7b49\u5f85Prometheus\u83b7\u53d6\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u67e5\u8be2\u65f6\u95f4\u95f4\u9694\u6765\u4fdd\u8bc1\u83b7\u53d6\u76d1\u63a7\u6307\u6807\u5bf9\u4e8e\u4e1a\u52a1\u67e5\u8be2\u7684\u5f71\u54cd\u6700\u5c0f\u5316\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"13prometheus",children:"1.3.Prometheus"}),"\n",(0,r.jsxs)(e.p,{children:["Prometheus\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u76d1\u63a7\u5e73\u53f0\uff0c\u5e76\u914d\u5907\u6709\u4e13\u5c5e\u7684\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u5b83\u4f1a\u5b9a\u671f\u901a\u8fc7http\u8bf7\u6c42\u4eceTuGraph Monitor\u670d\u52a1\u83b7\u53d6\u7edf\u8ba1\u6307\u6807\uff0c\u5e76\u4fdd\u5b58\u5728\u81ea\u5df1\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003\u5b98\u7f51: ",(0,r.jsx)(e.a,{href:"https://prometheus.io/docs/introduction/first_steps",children:"https://prometheus.io/docs/introduction/first_steps"})]}),"\n",(0,r.jsx)(e.h3,{id:"14grafana",children:"1.4.Grafana"}),"\n",(0,r.jsxs)(e.p,{children:["Grafana\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u53ef\u89c6\u5316\u548c\u5206\u6790\u8f6f\u4ef6\uff0c\u5b83\u53ef\u4ee5\u4ece\u5305\u542bPrometheus\u5728\u5185\u7684\u591a\u4e2a\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u4e14\u53ef\u4ee5\u5c06\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u7cbe\u7f8e\u56fe\u5f62\u548c\u53ef\u89c6\u5316\u6548\u679c\u7684\u5de5\u5177\u3002\u5177\u4f53\u4fe1\u606f\u8bf7\u53c2\u8003\u5b98\u7f51: ",(0,r.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/getting-started/",children:"https://grafana.com/docs/grafana/v7.5/getting-started/"})]}),"\n",(0,r.jsx)(e.h2,{id:"2\u90e8\u7f72\u65b9\u6848",children:"2.\u90e8\u7f72\u65b9\u6848"}),"\n",(0,r.jsx)(e.h3,{id:"21\u7b2c\u4e00\u6b65",children:"2.1.\u7b2c\u4e00\u6b65"}),"\n",(0,r.jsxs)(e.p,{children:["\u542f\u52a8TuGraph\u670d\u52a1\uff0c\u8be6\u7ec6\u65b9\u6cd5\u8bf7\u53c2\u8003\u6587\u6863: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-db/tugraph-db/blob/master/doc/zh-CN/1.guide/3.quick-start.md",children:"https://github.com/TuGraph-db/tugraph-db/blob/master/doc/zh-CN/1.guide/3.quick-start.md"})]}),"\n",(0,r.jsx)(e.h3,{id:"22\u7b2c\u4e8c\u6b65",children:"2.2.\u7b2c\u4e8c\u6b65"}),"\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8TuGraph Monitor\u5de5\u5177\uff0c\u542f\u52a8\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"./lgraph_monitor --server_host 127.0.0.1:9091 -u admin -p your_password \\\n\t\t\t--monitor_host 127.0.0.1:9999  --sampling_interval_ms 1000\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53c2\u6570\u542b\u4e49\u5982\u4e0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"Available command line options:\n    --server_host       Host on which the tugraph rpc server runs.\n                        Default=127.0.0.1:9091.\n    -u, --user          DB username.\n    -p, --password      DB password.\n    --monitor_host      Host on which the monitor restful server runs.\n                        Default=127.0.0.1:9999.\n    --sampling_interval_ms\n                        sampling interval in millisecond. Default=1.5e2.\n    -h, --help          Print this help message. Default=0.\n"})}),"\n",(0,r.jsx)(e.h3,{id:"23\u7b2c\u4e09\u6b65",children:"2.3.\u7b2c\u4e09\u6b65"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u8f7d\u7b26\u5408\u60a8\u673a\u5668\u67b6\u6784\u4ee5\u53ca\u7cfb\u7edf\u7248\u672c\u7684Prometheus tar\u5305\uff0c\u4e0b\u8f7d\u5730\u5740: ",(0,r.jsx)(e.a,{href:"https://prometheus.io/download/",children:"https://prometheus.io/download/"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u89e3\u538btar\u5305\uff0c\u547d\u4ee4\u5982\u4e0b"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"tar -zxvf prometheus-2.37.5.linux-amd64.tar.gz\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6prometheus.yml\uff0c\u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff0c\u4f7f\u5176\u53ef\u4ee5\u6293\u53d6TuGraph Monitor\u5305\u88c5\u597d\u7684\u6027\u80fd\u6570\u636e"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: \"tugraph\"\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: [\"localhost:9111\"]\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u542f\u52a8prometheus\uff0c\u5177\u4f53\u7684\u542f\u52a8\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u83b7\u53d6"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"./prometheus -h\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9a8c\u8bc1prometheus\u670d\u52a1\u662f\u5426\u6b63\u5e38\uff0c\u53ef\u4ee5\u901a\u8fc7web\u7aef\u767b\u9646prometheus\u670d\u52a1\uff0c\u67e5\u8be2\u76d1\u63a7\u6307\u6807resources_report\u662f\u5426\u5df2\u7ecf\u83b7\u53d6\u5230\uff0c\u80fd\u6210\u529f\u67e5\u8be2\u5230\u6570\u636e\u5219\u6b63\u786e"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"24\u7b2c\u56db\u6b65",children:"2.4.\u7b2c\u56db\u6b65"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u8f7d\u7b26\u5408\u60a8\u673a\u5668\u67b6\u6784\u4ee5\u53ca\u7cfb\u7edf\u7248\u672c\u7684Grafana\u5b89\u88c5\u5305\uff0c\u4e0b\u8f7d\u5730\u5740: ",(0,r.jsx)(e.a,{href:"https://grafana.com/grafana/download",children:"https://grafana.com/grafana/download"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5b89\u88c5Grafana\uff0c\u7ec6\u8282\u8bf7\u53c2\u8003: ",(0,r.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/installation/",children:" https://grafana.com/docs/grafana/v7.5/installation/"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u542f\u52a8Grafana\uff0c\u7ec6\u8282\u8bf7\u53c2\u8003: ",(0,r.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/installation/",children:" https://grafana.com/docs/grafana/v7.5/installation/"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6eGrafana\uff0c\u9996\u5148\u5728\u6570\u636e\u6e90\u8bbe\u7f6e\u4e2d\u914d\u7f6ePrometheus\u7684IP\u5730\u5740\uff0c\u914d\u7f6e\u5b8c\u6210\u540e\u53ef\u4ee5\u901a\u8fc7\u6d4b\u8bd5\u8fde\u63a5\u529f\u80fd\uff0c\u9a8c\u8bc1\u662f\u5426\u6210\u529f\u8fde\u63a5\u6570\u636e\u6e90\u3002\u7136\u540e\uff0c\u5bfc\u5165\u5982\u4e0b\u6a21\u7248\uff0c\u5e76\u5728\u9875\u9762\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u4fee\u6539\u6b63\u786e\u7684\u63a5\u53e3IP\u548c\u7aef\u53e3\u3002\u6700\u540e\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8bbe\u7f6e\u5237\u65b0\u65f6\u95f4\u548c\u76d1\u63a7\u65f6\u95f4\u8303\u56f4"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "annotations": {\n    "list": [\n      {\n        "builtIn": 1,\n        "datasource": {\n          "type": "grafana"\n        },\n        "enable": true,\n        "hide": true,\n        "iconColor": "rgba(0, 211, 255, 1)",\n        "name": "Annotations & Alerts",\n        "target": {\n          "limit": 100,\n          "matchAny": false,\n          "tags": [],\n          "type": "dashboard"\n        },\n        "type": "dashboard"\n      }\n    ]\n  },\n  "editable": true,\n  "fiscalYearStartMonth": 0,\n  "graphTooltip": 0,\n  "id": 2,\n  "links": [],\n  "liveNow": false,\n  "panels": [\n    {\n      "datasource": {\n        "type": "prometheus"\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            }\n          },\n          "mappings": [],\n          "unit": "kbytes"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D {instance=\\"localhost:7010\\", job=\\"TuGraph\\", resouces_type=\\"memory\\", type=\\"available\\"}"\n            },\n            "properties": [\n              {\n                "id": "displayName",\n                "value": "others"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D {__name__=\\"resources_report\\", instance=\\"localhost:7010\\", job=\\"TuGraph\\", resouces_type=\\"memory\\", type=\\"available\\"}"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-green",\n                  "mode": "fixed"\n                }\n              },\n              {\n                "id": "displayName",\n                "value": "others"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "others"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-blue",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 6,\n        "x": 0,\n        "y": 0\n      },\n      "id": 14,\n      "options": {\n        "displayLabels": [\n          "name",\n          "value"\n        ],\n        "legend": {\n          "displayMode": "table",\n          "placement": "bottom",\n          "values": [\n            "percent",\n            "value"\n          ]\n        },\n        "pieType": "pie",\n        "reduceOptions": {\n          "calcs": [\n            "lastNotNull"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"self\\"}",\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "A"\n        },\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"available\\"}",\n          "hide": false,\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "B"\n        },\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"total\\"}",\n          "hide": true,\n          "legendFormat": "{ {label_name} }",\n          "range": true,\n          "refId": "C"\n        },\n        {\n          "datasource": {\n            "type": "__expr__"\n          },\n          "expression": "$C -$A - $B",\n          "hide": false,\n          "refId": "D",\n          "type": "math"\n        }\n      ],\n      "title": "\u5185\u5b58",\n      "type": "piechart"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                1000\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "\u3010\u751f\u4ea7\u56fe\u6570\u636e\u5e93Grafana\u3011\\n  QPS\u8d85\u8fc71000",\n        "name": "\u8bf7\u6c42\u7edf\u8ba1 alert",\n        "noDataState": "no_data",\n        "notifications": []\n      },\n      "datasource": {\n        "type": "prometheus"\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 7,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "smooth",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": " "\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "write"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-blue",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 12,\n        "x": 6,\n        "y": 0\n      },\n      "id": 4,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"request\\",type=~\\"total|write\\"}",\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 1000,\n          "visible": true\n        }\n      ],\n      "title": "\u8bf7\u6c42\u7edf\u8ba1",\n      "type": "timeseries"\n    },\n    {\n      "datasource": {\n        "type": "prometheus"\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            }\n          },\n          "mappings": [],\n          "unit": "decbits"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-red",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "available"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D"\n            },\n            "properties": [\n              {\n                "id": "displayName",\n                "value": "other"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "other"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 6,\n        "x": 18,\n        "y": 0\n      },\n      "id": 12,\n      "options": {\n        "displayLabels": [\n          "name",\n          "value"\n        ],\n        "legend": {\n          "displayMode": "table",\n          "placement": "bottom",\n          "sortBy": "Value",\n          "sortDesc": true,\n          "values": [\n            "value",\n            "percent"\n          ]\n        },\n        "pieType": "pie",\n        "reduceOptions": {\n          "calcs": [\n            "lastNotNull"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "exemplar": false,\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"available\\"}",\n          "format": "time_series",\n          "instant": false,\n          "interval": "",\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "A"\n        },\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"self\\"}",\n          "hide": false,\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "B"\n        },\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"total\\"}",\n          "hide": true,\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "C"\n        },\n        {\n          "datasource": {\n            "type": "__expr__"\n          },\n          "expression": "$C - $A - $B",\n          "hide": false,\n          "refId": "D",\n          "type": "math"\n        }\n      ],\n      "title": "\u78c1\u76d8",\n      "transformations": [\n        {\n          "id": "configFromData",\n          "options": {\n            "applyTo": {\n              "id": "byFrameRefID"\n            },\n            "configRefId": "config",\n            "mappings": []\n          }\n        }\n      ],\n      "type": "piechart"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                90\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "\u3010\u751f\u4ea7\u56fe\u6570\u636e\u5e93Grafana\u3011\\nCPU\u4f7f\u7528\u7387\u8d85\u8fc790%",\n        "name": "CPU\u4f7f\u7528\u7387 alert",\n        "noDataState": "no_data",\n        "notifications": [\n          {\n          }\n        ]\n      },\n      "datasource": {\n        "type": "prometheus"\n      },\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 4,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "linear",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": "percent"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "total_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "self"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-green",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "total"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 14,\n        "w": 12,\n        "x": 0,\n        "y": 16\n      },\n      "id": 6,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"cpu\\",type=~\\"total|self\\"}",\n          "hide": false,\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 90,\n          "visible": true\n        }\n      ],\n      "title": "CPU\u4f7f\u7528\u7387",\n      "type": "timeseries"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                10000\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "\u3010\u751f\u4ea7\u56fe\u6570\u636e\u5e93Grafana\u3011\\n  \u78c1\u76d8IO\u8d85\u8fc710MB/S",\n        "name": "\u78c1\u76d8IO alert",\n        "noDataState": "no_data",\n        "notifications": []\n      },\n      "datasource": {\n        "type": "prometheus"\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 7,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "smooth",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": "bps"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "read"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "super-light-green",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "write"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "super-light-red",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 14,\n        "w": 12,\n        "x": 12,\n        "y": 16\n      },\n      "id": 2,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus"\n          },\n          "editorMode": "builder",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk_rate\\",type=~\\"read|write\\"}",\n          "hide": false,\n          "legendFormat": "{ {type} }",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 10000,\n          "visible": true\n        }\n      ],\n      "title": "\u78c1\u76d8IO",\n      "type": "timeseries"\n    }\n  ],\n  "refresh": "",\n  "schemaVersion": 36,\n  "style": "dark",\n  "tags": [],\n  "templating": {\n    "list": []\n  },\n  "time": {\n    "from": "now-24h",\n    "to": "now"\n  },\n  "timepicker": {\n    "hidden": false,\n    "refresh_intervals": [\n      "10s"\n    ]\n  },\n  "timezone": "",\n  "title": "TuGraph\u76d1\u63a7\u9875\u9762",\n  "version": 20,\n  "weekStart": ""\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u9a8c\u8bc1\u6548\u679c\uff0c\u5237\u65b0\u6d4f\u89c8\u5668\u9875\u9762\u3002\u5982\u679c\u6b63\u786e\u663e\u793a\u997c\u56fe\u548c\u6298\u7ebf\u56fe\uff0c\u5219\u914d\u7f6e\u5b8c\u6210\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"3\u672a\u6765\u8ba1\u5212",children:"3.\u672a\u6765\u8ba1\u5212"}),"\n",(0,r.jsx)(e.p,{children:"\u76ee\u524d\u53ef\u89c6\u5316\u76d1\u63a7\u53ea\u652f\u6301\u5355\u673a\u76d1\u63a7\uff0c\u80fd\u76d1\u63a7\u670d\u52a1\u6240\u5728\u673a\u5668\u7684cpu\uff0c\u78c1\u76d8\uff0c\u7f51\u7edcio\uff0c\u8bf7\u6c42qps\u7b49\u6027\u80fd\u6307\u6807\uff0c\u672a\u6765\u5c06\u4f1a\u5b9e\u73b0\u76d1\u63a7ha\u96c6\u7fa4\u7684\u529f\u80fd\uff0c\u4e5f\u4f1a\u5c06\u66f4\u591a\u6709\u610f\u4e49\u7684\u6307\u6807\u7eb3\u5165\u76d1\u63a7\u8303\u56f4"})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}}}]);