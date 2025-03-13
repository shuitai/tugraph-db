"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[60095],{22586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var d=r(74848),s=r(28453);const l={},t="Heterogeneous Graph",o={id:"olap&procedure/learn/heterogeneous_graph",title:"Heterogeneous Graph",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u5f02\u8d28\u56fe\u8fdb\u884c\u8bad\u7ec3\u3002",source:"@site/versions/version-4.3.2/zh-CN/source/9.olap&procedure/3.learn/4.heterogeneous_graph.md",sourceDirName:"9.olap&procedure/3.learn",slug:"/olap&procedure/learn/heterogeneous_graph",permalink:"/tugraph-db/zh/4.3.2/olap&procedure/learn/heterogeneous_graph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Training",permalink:"/tugraph-db/zh/4.3.2/olap&procedure/learn/training"},next:{title:"\u7528\u6237\u6743\u9650",permalink:"/tugraph-db/zh/4.3.2/permission/privilege"}},i={},a=[{value:"1. \u5f02\u8d28\u56fe\u7b80\u4ecb",id:"1-\u5f02\u8d28\u56fe\u7b80\u4ecb",level:2},{value:"2. \u5f02\u8d28\u56fe\u521b\u5efa",id:"2-\u5f02\u8d28\u56fe\u521b\u5efa",level:2},{value:"3. \u5f02\u8d28\u56fe\u67e5\u8be2\u63a5\u53e3",id:"3-\u5f02\u8d28\u56fe\u67e5\u8be2\u63a5\u53e3",level:2},{value:"3.1 \u70b9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",id:"31-\u70b9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",level:3},{value:"3.2 \u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",id:"32-\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",level:3},{value:"3.3 \u70b9\u7c7b\u578b\u548c\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",id:"33-\u70b9\u7c7b\u578b\u548c\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",level:3},{value:"4. \u5f02\u8d28\u56fe\u8f93\u51fa\u683c\u5f0f",id:"4-\u5f02\u8d28\u56fe\u8f93\u51fa\u683c\u5f0f",level:2},{value:"5. \u5f02\u8d28\u56fe\u8bad\u7ec3",id:"5-\u5f02\u8d28\u56fe\u8bad\u7ec3",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"heterogeneous-graph",children:"Heterogeneous Graph"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u5f02\u8d28\u56fe\u8fdb\u884c\u8bad\u7ec3\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"1-\u5f02\u8d28\u56fe\u7b80\u4ecb",children:"1. \u5f02\u8d28\u56fe\u7b80\u4ecb"}),"\n",(0,d.jsx)(n.p,{children:"\u5f02\u8d28\u56fe\uff08Heterogeneous Graph\uff09\u662f\u6307\u7531\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\u548c\u8fb9\u6784\u6210\u7684\u56fe\u7ed3\u6784\u3002\u5728\u5f02\u8d28\u56fe\u4e2d\uff0c\u8282\u70b9\u548c\u8fb9\u53ef\u4ee5\u5177\u6709\u591a\u6837\u5316\u7684\u5c5e\u6027\u548c\u5173\u7cfb\uff0c\u4ee3\u8868\u4e86\u4e0d\u540c\u5b9e\u4f53\u4ee5\u53ca\u5b83\u4eec\u4e4b\u95f4\u7684\u590d\u6742\u5173\u8054\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5f02\u8d28\u56fe\u4e2d\uff0c\u8282\u70b9\u7c7b\u578b\u53ef\u4ee5\u4ee3\u8868\u4e0d\u540c\u7684\u5b9e\u4f53\uff0c\u5982\u7528\u6237\u3001\u5546\u54c1\u3001\u8bdd\u9898\u7b49\uff0c\u800c\u8fb9\u7c7b\u578b\u8868\u793a\u4e0d\u540c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u5982\u7528\u6237\u4e4b\u95f4\u7684\u5173\u6ce8\u5173\u7cfb\u3001\u7528\u6237\u4e0e\u5546\u54c1\u4e4b\u95f4\u7684\u8d2d\u4e70\u5173\u7cfb\u7b49\u3002\u8282\u70b9\u548c\u8fb9\u53ef\u4ee5\u5177\u6709\u4e0d\u540c\u7684\u5c5e\u6027\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5f02\u8d28\u56fe\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f3a\u5927\u7684\u56fe\u6a21\u578b\uff0c\u80fd\u591f\u66f4\u597d\u5730\u8868\u8fbe\u548c\u5206\u6790\u5177\u6709\u591a\u79cd\u7c7b\u578b\u5b9e\u4f53\u548c\u590d\u6742\u5173\u7cfb\u7684\u73b0\u5b9e\u4e16\u754c\u7cfb\u7edf\u3002\u5728\u4e0d\u540c\u9886\u57df\u7684\u6570\u636e\u5206\u6790\u548c\u5e94\u7528\u4e2d\uff0c\u5f02\u8d28\u56fe\u5177\u6709\u5e7f\u6cdb\u7684\u5e94\u7528\u524d\u666f\u548c\u7814\u7a76\u4ef7\u503c\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"2-\u5f02\u8d28\u56fe\u521b\u5efa",children:"2. \u5f02\u8d28\u56fe\u521b\u5efa"}),"\n",(0,d.jsx)(n.p,{children:"\u5728TuGraph\u4e2d\uff0c\u4e00\u4e2a\u5f02\u6784\u56fe\u7531\u4e00\u7cfb\u5217\u8fb9\u5173\u7cfb\u6784\u6210\u3002\u6bcf\u4e2a\u5173\u7cfb\u7531\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e09\u5143\u7ec4\u5b9a\u4e49 (\u6e90\u8282\u70b9\u7c7b\u578b, \u8fb9\u7c7b\u578b, \u76ee\u6807\u8282\u70b9\u7c7b\u578b) \u3002\u5f02\u8d28\u56fe\u7684\u521b\u5efa\u65b9\u5f0f\u4e0e\u540c\u8d28\u56fe\u7c7b\u4f3c\uff0c\u53ea\u662f\u5728\u521b\u5efa\u56fe\u65f6\u9700\u8981\u6307\u5b9a\u5b57\u7b26\u4e32\u4e09\u5143\u7ec4\u5b9a\u4e49\u3002\u5982\u4e0b\u6240\u793a\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'    olapondb = PyOlapOnDB(\'Empty\', db, txn, [("node", "edge", "node")])\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u5f02\u8d28\u56fe\u7684\u8fb9\u5173\u7cfb\u5b9a\u4e49\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\uff0c\u6307\u5b9a\u7b5b\u9009\u7684\u5f02\u8d28\u56fe\u70b9\u8fb9\u7c7b\u578b\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5c06\u5168\u90e8\u70b9\u8fb9\u7c7b\u578b\u7684\u6570\u636e\u8fdb\u884c\u6784\u56fe\u8bad\u7ec3\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"3-\u5f02\u8d28\u56fe\u67e5\u8be2\u63a5\u53e3",children:"3. \u5f02\u8d28\u56fe\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\uff0c\u5f53\u7528\u6237\u7ed9\u5b9a\u7b2c\u56db\u4e2a\u53c2\u6570\u65f6\uff0cTuGraph\u63d0\u4f9b\u4e86\u67e5\u8be2\u5f02\u8d28\u56fe\u70b9\u8fb9\u7c7b\u578b\u7684\u63a5\u53e3\u3002\u793a\u4f8b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,d.jsx)(n.h3,{id:"31-\u70b9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",children:"3.1 \u70b9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"olapondb.ntypes()\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u70b9\u7c7b\u578b\u5217\u8868\uff0c\u5982['node1', 'node2', 'node3']\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"32-\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",children:"3.2 \u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"olapondb.etypes()\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u8fb9\u7c7b\u578b\u5217\u8868\uff0c\u5982['edge1', 'edge2', 'edge3']\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"33-\u70b9\u7c7b\u578b\u548c\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3",children:"3.3 \u70b9\u7c7b\u578b\u548c\u8fb9\u7c7b\u578b\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"olapondb.metagraph()\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u5b57\u7b26\u4e32\u4e09\u5143\u7ec4\u5b9a\u4e49 (\u6e90\u8282\u70b9\u7c7b\u578b, \u8fb9\u7c7b\u578b, \u76ee\u6807\u8282\u70b9\u7c7b\u578b)\uff0c\u5982\n[('node1', 'edge1', 'node2'), ('node2', 'edge2', 'node3')]\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"4-\u5f02\u8d28\u56fe\u8f93\u51fa\u683c\u5f0f",children:"4. \u5f02\u8d28\u56fe\u8f93\u51fa\u683c\u5f0f"}),"\n",(0,d.jsx)(n.p,{children:"\u548c\u540c\u8d28\u56fe\u76f8\u540c\u7684\u662f\uff0c\u5f02\u8d28\u56fe\u7684\u91c7\u6837\u6570\u636e\u7ed3\u679c\u4e5f\u5b58\u50a8\u5728NodeInfo\u548cEdgeInfo\u4e2d\u3002\n\u53ef\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u83b7\u53d6\u8f93\u51fa\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"    NodeInfo = []\n    EdgeInfo = []\n    getdb.Process(db, olapondb, feature_len, NodeInfo, EdgeInfo)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4e2dgetdb\u4e3a\u83b7\u53d6\u5168\u56fe\u6570\u636e\u7684\u51fd\u6570\uff0cdb\u4e3a\u56fe\u6570\u636e\u5e93\u5b9e\u4f8b\uff0colapondb\u4e3a\u56fe\u5206\u6790\u7c7b\u3002feature_len\u4e3a\u8282\u70b9\u7279\u5f81\u957f\u5ea6\uff0cNodeInfo\u548cEdgeInfo\u4e3a\u8f93\u51fa\u7684\u8282\u70b9\u548c\u8fb9\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u5b58\u50a8\u4fe1\u606f\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u56fe\u6570\u636e"}),(0,d.jsx)(n.th,{children:"\u5b58\u50a8\u4fe1\u606f\u4f4d\u7f6e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8fb9\u8d77\u70b9"}),(0,d.jsx)(n.td,{children:"EdgeInfo[0]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8fb9\u7ec8\u70b9"}),(0,d.jsx)(n.td,{children:"EdgeInfo[1]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8fb9\u7c7b\u578b"}),(0,d.jsx)(n.td,{children:"EdgeInfo[2]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u9876\u70b9ID"}),(0,d.jsx)(n.td,{children:"NodeInfo[0]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u9876\u70b9\u7279\u5f81"}),(0,d.jsx)(n.td,{children:"NodeInfo[1]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u9876\u70b9\u6807\u7b7e"}),(0,d.jsx)(n.td,{children:"NodeInfo[2]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u9876\u70b9\u7c7b\u578b"}),(0,d.jsx)(n.td,{children:"NodeInfo[3]"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u5f02\u8d28\u56fe\u8bad\u7ec3",children:"5. \u5f02\u8d28\u56fe\u8bad\u7ec3"}),"\n",(0,d.jsx)(n.p,{children:"\u5f02\u6784\u56fe\u8bad\u7ec3\u7684\u76ee\u6807\u662f\u5b66\u4e60\u56fe\u4e2d\u8282\u70b9\u548c\u8fb9\u7684\u8868\u793a\uff0c\u4ee5\u4fbf\u4e8e\u8fdb\u884c\u540e\u7eed\u7684\u4efb\u52a1\uff0c\u5982\u8282\u70b9\u5206\u7c7b\u3001\u94fe\u63a5\u9884\u6d4b\u3001\u56fe\u805a\u7c7b\u7b49\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u7814\u7a76\u8005\u4eec\u63d0\u51fa\u4e86\u591a\u79cd\u57fa\u4e8e\u56fe\u795e\u7ecf\u7f51\u7edc\uff08Graph Neural Networks\uff0cGNNs\uff09\u7684\u6a21\u578b\u3002\u8fd9\u4e9b\u6a21\u578b\u901a\u8fc7\u805a\u5408\u90bb\u5c45\u8282\u70b9\u7684\u4fe1\u606f\u6765\u66f4\u65b0\u8282\u70b9\u7684\u8868\u793a\uff0c\u8fdb\u800c\u6355\u6349\u56fe\u7ed3\u6784\u4e2d\u7684\u590d\u6742\u5173\u7cfb\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u7531\u4e8e\u5f02\u6784\u56fe\u4e2d\u5305\u542b\u591a\u79cd\u7c7b\u578b\u7684\u8282\u70b9\u548c\u8fb9\uff0c\u56e0\u6b64\u5728\u8bbe\u8ba1GNN\u6a21\u578b\u65f6\u9700\u8981\u8003\u8651\u5982\u4f55\u5904\u7406\u8fd9\u4e9b\u4e0d\u540c\u7c7b\u578b\u7684\u4fe1\u606f\u3002\u4e00\u79cd\u5e38\u89c1\u7684\u65b9\u6cd5\u662f\u8bbe\u8ba1\u4e0d\u540c\u7684\u805a\u5408\u51fd\u6570\u6765\u5206\u522b\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u90bb\u5c45\u8282\u70b9\u3002\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u8003\u8651\u5982\u4f55\u5c06\u8fd9\u4e9b\u4e0d\u540c\u7c7b\u578b\u7684\u4fe1\u606f\u6574\u5408\u5230\u4e00\u8d77\uff0c\u4ee5\u4fbf\u4e8e\u6a21\u578b\u80fd\u591f\u6709\u6548\u5730\u5b66\u4e60\u5230\u8282\u70b9\u548c\u8fb9\u7684\u8868\u793a\u3002"}),"\n",(0,d.jsx)(n.p,{children:"TuGraph \u63d0\u4f9b\u4e86\u4f7f\u7528\u88c1\u526a\u7248ogbn-mag\u6570\u636e\u96c6\u8fdb\u884c\u5f02\u8d28\u56fe\u8bad\u7ec3\u7684\u65b9\u6cd5\uff0c\u53ef\u4f9b\u4f7f\u7528\u8005\u53c2\u8003\u3002"}),"\n",(0,d.jsx)(n.p,{children:"TuGraph\u63d0\u4f9b\u7684\u5b98\u65b9docker\u4e2d\u6682\u672a\u63d0\u4f9b\u5f02\u8d28\u56fe\u8bad\u7ec3\u7684\u73af\u5883\uff0c\u56e0\u6b64\u9700\u8981\u7528\u6237\u81ea\u884c\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u5305\u3002\n\u5728\u8bad\u7ec3\u4e4b\u524d\u9700\u8981\u4e0b\u8f7dogb\u548cpandas\u5305\uff0c\u5177\u4f53\u5b89\u88c5\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"pip3 install ogb\npip3 install pandas==0.24.2\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8bad\u7ec3\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"def train(graph, model, model_save_path):\n    optimizer = torch.optim.Adam(model.parameters(), lr=1e-2, weight_decay=5e-4)\n    model.train()\n    s = time.time()\n    load_time = time.time()\n    graph = dgl.add_self_loop(graph)\n    logits = model(graph, graph.ndata['feat'])\n    loss = loss_fcn(logits, graph.ndata['label'])\n    optimizer.zero_grad()\n    loss.backward()\n    optimizer.step()\n    train_time = time.time()\n    current_loss = float(loss)\n    if model_save_path != \"\":\n        if 'min_loss' not in train.__dict__:\n            train.min_loss = current_loss\n        elif current_loss < train.min_loss:\n            train.min_loss = current_loss\n            model_save_path = 'best_model.pth'\n        torch.save(model.state_dict(), model_save_path)\n    return current_loss\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5168\u90e8\u8bad\u7ec3\u4ee3\u7801\u53ef\u53c2\u8003tugraph/learn/examples/train_full_mag.py\u6587\u4ef6\u3002"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var d=r(96540);const s={},l=d.createContext(s);function t(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);