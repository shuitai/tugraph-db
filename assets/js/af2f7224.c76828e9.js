"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41023],{28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>d});var t=a(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}},74751:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=a(74848),r=a(28453);const i={},o="Learning Tutorial",d={id:"developer-manual/interface/learn/tutorial",title:"Learning Tutorial",description:"This document is designed as a guide for TuGraph users. Before reading the detailed documentation, users should first read this document to have a general understanding of the graph learning process of TuGraph, which will make it easier to read the detailed documentation later. The guide program is based on a simple program instance of TuGraph, and we will focus on its usage.",source:"@site/versions/version-4.1.0/en-US/source/5.developer-manual/6.interface/5.learn/1.tutorial.md",sourceDirName:"5.developer-manual/6.interface/5.learn",slug:"/developer-manual/interface/learn/tutorial",permalink:"/tugraph-db/en/4.1.0/developer-manual/interface/learn/tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph RESTful API",permalink:"/tugraph-db/en/4.1.0/developer-manual/interface/protocol/restful-api"},next:{title:"Sampling API",permalink:"/tugraph-db/en/4.1.0/developer-manual/interface/learn/sampling_api"}},s={},l=[{value:"1. Introduction to TuGraph Graph Learning Module",id:"1-introduction-to-tugraph-graph-learning-module",level:2},{value:"2. Run Process",id:"2-run-process",level:2},{value:"3. TuGraph compilation and data preparation",id:"3-tugraph-compilation-and-data-preparation",level:2},{value:"4. Data Import",id:"4-data-import",level:2},{value:"5. Feature Conversion",id:"5-feature-conversion",level:2},{value:"6. Sampling Operators and Compilation",id:"6-sampling-operators-and-compilation",level:2},{value:"6.1.Sampling Operator Introduction",id:"61sampling-operator-introduction",level:3},{value:"6.2.Compilation",id:"62compilation",level:3},{value:"7. Model Training and Storage",id:"7-model-training-and-storage",level:2},{value:"8. Model Loading",id:"8-model-loading",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"learning-tutorial",children:"Learning Tutorial"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document is designed as a guide for TuGraph users. Before reading the detailed documentation, users should first read this document to have a general understanding of the graph learning process of TuGraph, which will make it easier to read the detailed documentation later. The guide program is based on a simple program instance of TuGraph, and we will focus on its usage."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction-to-tugraph-graph-learning-module",children:"1. Introduction to TuGraph Graph Learning Module"}),"\n",(0,t.jsx)(n.p,{children:"Graph learning is a machine learning method that utilizes the topological information of a graph structure to analyze and model data. Unlike traditional machine learning methods, graph learning uses graph structures where vertices represent entities in data and edges represent relationships between entities. By extracting features and patterns from these vertices and edges, deep associations and patterns can be revealed in data that can be used in various practical applications."}),"\n",(0,t.jsx)(n.p,{children:"The TuGraph Graph Learning Module is a graph learning module based on a graph database that provides four sampling operators: Neighbor Sampling, Edge Sampling, Random Walk Sampling, and Negative Sampling. These operators can be used to sample vertices and edges in a graph to generate training data. The sampling process is performed in a parallel computing environment, providing high efficiency and scalability."}),"\n",(0,t.jsx)(n.p,{children:"After sampling, the obtained training data can be used to train a model that can be used for various graph learning tasks such as prediction and classification. Through training, the model can learn the relationships between vertices and edges in the graph, allowing for prediction and classification of new vertices and edges. In practical applications, this module can be used to handle large-scale graph data such as social networks, recommendation systems, and bioinformatics."}),"\n",(0,t.jsx)(n.h2,{id:"2-run-process",children:"2. Run Process"}),"\n",(0,t.jsx)(n.p,{children:"The TuGraph graph learning module samples graph data in TuGraph, and the sampled vertices and edges are used as graph learning features for learning and training. The operation process is shown in the figure below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:a(79961).A+"",width:"746",height:"984"})}),"\n",(0,t.jsx)(n.h2,{id:"3-tugraph-compilation-and-data-preparation",children:"3. TuGraph compilation and data preparation"}),"\n",(0,t.jsxs)(n.p,{children:["For TuGraph compilation, please refer to: ",(0,t.jsx)(n.a,{href:"/tugraph-db/en/4.1.0/developer-manual/running/compile",children:"Compile"}),"\nExecute in the build/output directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp -r ../../test/integration/data/ ./ && cp -r ../../learn/examples/* ./\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command copies the relevant files of the dataset to the build/output directory."}),"\n",(0,t.jsx)(n.h2,{id:"4-data-import",children:"4. Data Import"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/tugraph-db/en/4.1.0/developer-manual/server-tools/data-import",children:"Data Import"})," for data import."]}),"\n",(0,t.jsx)(n.p,{children:"Taking the cora dataset as an example for the import process:"}),"\n",(0,t.jsx)(n.p,{children:"Execute in the build/output directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./lgraph_import -c ./data/algo/cora.conf --dir ./coradb --overwrite 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where cora.conf is the graph schema file representing the format of the graph data. coradb is the imported graph data file name representing the storage location of the graph data."}),"\n",(0,t.jsx)(n.h2,{id:"5-feature-conversion",children:"5. Feature Conversion"}),"\n",(0,t.jsx)(n.p,{children:"Since the features in graph learning are generally represented as long float arrays, TuGraph does not support loading float array types, so they can be imported as string types and converted to char* for subsequent storage and access, and the implementation details can refer to the feature_float.cpp file."}),"\n",(0,t.jsx)(n.p,{children:"The specific execution process is as follows:"}),"\n",(0,t.jsx)(n.p,{children:"Compile the imported plugin in the build directory.\uff08Skip if TuGraph has been compiled\uff09:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"make feature_float_embed"})}),"\n",(0,t.jsx)(n.p,{children:"Execute in the build/output directory:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./algo/feature_float_embed ./coradb"})}),"\n",(0,t.jsx)(n.p,{children:"Then the conversion can be performed."}),"\n",(0,t.jsx)(n.h2,{id:"6-sampling-operators-and-compilation",children:"6. Sampling Operators and Compilation"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph implements an operator for obtaining the full graph data and four sampling operators at the cython layer, as follows:"}),"\n",(0,t.jsx)(n.h3,{id:"61sampling-operator-introduction",children:"6.1.Sampling Operator Introduction"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sampling Operator"}),(0,t.jsx)(n.th,{children:"Sampling Method"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GetDB"}),(0,t.jsx)(n.td,{children:"Get the graph data from the database and convert it into the required data structure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Neighbor Sampling"}),(0,t.jsx)(n.td,{children:"Sample the neighboring nodes of the given node to obtain the sampling subgraph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Edge Sampling"}),(0,t.jsx)(n.td,{children:"Sample the edges in the graph according to the sampling rate to obtain the sampling subgraph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Random Walk Sampling"}),(0,t.jsx)(n.td,{children:"Conduct a random walk based on the given node to obtain the sampling subgraph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Negative Sampling"}),(0,t.jsx)(n.td,{children:"Generate a subgraph of non-existent edges"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"62compilation",children:"6.2.Compilation"}),"\n",(0,t.jsx)(n.p,{children:"Skip if TuGraph has been compiled.\nExecute in the tugraph-db/build folder:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"make -j2"})}),"\n",(0,t.jsx)(n.p,{children:"Or execute in the tugraph-db/learn/procedures folder:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"python3 setup.py build_ext -i"})}),"\n",(0,t.jsx)(n.p,{children:"Once the algorithm so is obtained, it can be used by importing it in Python."}),"\n",(0,t.jsx)(n.h2,{id:"7-model-training-and-storage",children:"7. Model Training and Storage"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph calls the cython layer operator at the Python layer to implement graph learning and training."}),"\n",(0,t.jsx)(n.p,{children:"The usage of the TuGraph graph learning module is as follows:"}),"\n",(0,t.jsx)(n.p,{children:"Execute in the build/output folder:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"python3 train_full_cora.py --model_save_path ./cora_model"})}),"\n",(0,t.jsx)(n.p,{children:"Then training can be performed."}),"\n",(0,t.jsx)(n.p,{children:"If the final printed loss value is less than 0.9, the training is successful. So far, the graph model training is completed, and the model is saved in the cora_model file."}),"\n",(0,t.jsx)(n.h2,{id:"8-model-loading",children:"8. Model Loading"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model = build_model()\nmodel.load_state_dict(torch.load(model_save_path))\nmodel.eval()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Before using a saved model, it is necessary to load it first. In the code above, the trained model is loaded using the provided code."}),"\n",(0,t.jsx)(n.p,{children:"After loading the model, we can use it to make predictions and classifications for new vertices and edges. For prediction, we can input one or multiple vertices and the model will output corresponding prediction results. For classification, we can input the whole graph, and the model will classify the vertices and edges in the graph to achieve the task goal."}),"\n",(0,t.jsx)(n.p,{children:"Using a trained model can save time and resources compared to retraining the model. Additionally, since the model has already learned the relationships between vertices and edges in the graph, it can adapt well to new data and improve the accuracy of predictions and classifications."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},79961:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/learn_flow_chart_en-4a77be5d31e739c6855f132fdc7bcd8a.png"}}]);