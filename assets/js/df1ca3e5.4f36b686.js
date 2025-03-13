"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88059],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}},72611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const a={},o="TuGraph C++ SDK",i={id:"developer-manual/client-tools/cpp-client",title:"TuGraph C++ SDK",description:"This document is the usage instruction of TuGraph C++ SDK",source:"@site/versions/version-3.6.0/en-US/source/5.developer-manual/4.client-tools/2.cpp-client.md",sourceDirName:"5.developer-manual/4.client-tools",slug:"/developer-manual/client-tools/cpp-client",permalink:"/tugraph-db/en/3.6.0/developer-manual/client-tools/cpp-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph Python SDK",permalink:"/tugraph-db/en/3.6.0/developer-manual/client-tools/python-client"},next:{title:"TuGraph Java SDK",permalink:"/tugraph-db/en/3.6.0/developer-manual/client-tools/java-client"}},l={},c=[{value:"1.Instructions",id:"1instructions",level:2},{value:"2.Demo",id:"2demo",level:2},{value:"2.1.Instantiate the client object",id:"21instantiate-the-client-object",level:3},{value:"2.1.1. Instantiate a single node client object",id:"211-instantiate-a-single-node-client-object",level:4},{value:"2.1.2. Instantiate the HA cluster to directly connect to the client object",id:"212-instantiate-the-ha-cluster-to-directly-connect-to-the-client-object",level:4},{value:"2.1.3. Instantiate the HA cluster to indirectly connect to the client object",id:"213-instantiate-the-ha-cluster-to-indirectly-connect-to-the-client-object",level:4},{value:"2.2.Call cypher",id:"22call-cypher",level:3},{value:"2.3.Call stored procedure",id:"23call-stored-procedure",level:3},{value:"2.4.Load stored procedure",id:"24load-stored-procedure",level:3},{value:"2.5.List stored procedures",id:"25list-stored-procedures",level:3},{value:"2.6.Delete stored procedure",id:"26delete-stored-procedure",level:3},{value:"2.7.Import from a byte stream schema",id:"27import-from-a-byte-stream-schema",level:3},{value:"2.8.Import node and edge data from a byte stream",id:"28import-node-and-edge-data-from-a-byte-stream",level:3},{value:"2.9.Import schema from a file",id:"29import-schema-from-a-file",level:3},{value:"2.10.Import edge data from a file",id:"210import-edge-data-from-a-file",level:3}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"tugraph-c-sdk",children:"TuGraph C++ SDK"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This document is the usage instruction of TuGraph C++ SDK"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"1instructions",children:"1.Instructions"}),"\n",(0,r.jsx)(t.p,{children:"C++ Client can use RPC to connect to lgraph_server to import data, execute stored procedures, call Cypher and other operations."}),"\n",(0,r.jsx)(t.h2,{id:"2demo",children:"2.Demo"}),"\n",(0,r.jsx)(t.h3,{id:"21instantiate-the-client-object",children:"2.1.Instantiate the client object"}),"\n",(0,r.jsx)(t.p,{children:"Introduce dependencies and instantiate"}),"\n",(0,r.jsx)(t.h4,{id:"211-instantiate-a-single-node-client-object",children:"2.1.1. Instantiate a single node client object"}),"\n",(0,r.jsx)(t.p,{children:"When starting the server in single-node mode, the client is instantiated in the following format"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'RpcClient client("127.0.0.1:19099", "admin", "73@TuGraph");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"RpcClient(const std::string& url, const std::string& user, const std::string& password);\n@param url: tugraph host looks like ip:port\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,r.jsx)(t.h4,{id:"212-instantiate-the-ha-cluster-to-directly-connect-to-the-client-object",children:"2.1.2. Instantiate the HA cluster to directly connect to the client object"}),"\n",(0,r.jsx)(t.p,{children:"When the HA cluster deployed on the server can be directly connected using the URL configured in ha_conf, the client is instantiated according to the following format"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'RpcClient client("127.0.0.1:19099", "admin", "73@TuGraph");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"RpcClient(const std::string& url, const std::string& user, const std::string& password);\n@param url: tugraph host looks like ip:port\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,r.jsx)(t.p,{children:"The user only needs to pass in the url of any node in the HA cluster, and the client will automatically maintain the connection pool based on the query information returned by the server, and there is no need to manually restart the client when the HA cluster expands horizontally."}),"\n",(0,r.jsx)(t.h4,{id:"213-instantiate-the-ha-cluster-to-indirectly-connect-to-the-client-object",children:"2.1.3. Instantiate the HA cluster to indirectly connect to the client object"}),"\n",(0,r.jsx)(t.p,{children:"When the HA cluster deployed on the server cannot use the URL configured in ha_conf to connect directly but must use an indirect URL (such as the Alibaba Cloud public network URL), the client is instantiated according to the following format."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'std::vector<std::string> urls = {"189.33.97.23:9091", "189.33.97.24:9091", "189.33.97.25:9091"};\nTuGraphDbRpcClient client = new TuGraphDbRpcClient(urls, "admin", "73@TuGraph");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"RpcClient(std::vector<std::string>& urls, std::string user, std::string password)\n@param urls: tugraph host list\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,r.jsx)(t.p,{children:"Because the URL that the user connects to is different from the information configured when the server starts, the client connection pool cannot be automatically updated by sending a request to the cluster, so it is necessary to manually pass in the URLs of all nodes in the cluster when starting the client, and when the cluster node changes Manually restart the client."}),"\n",(0,r.jsx)(t.h3,{id:"22call-cypher",children:"2.2.Call cypher"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:"    std::string str;\n    bool ret = client.CallCypher(str,\n        \"CALL db.createVertexLabel('actor', 'name', 'name', string, false, 'age', int8, true)\");\n\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool CallCypher(std::string& result, const std::string& cypher,\n                    const std::string& graph = "default", bool json_format = true,\n                    double timeout = 0, const std::string& url = "");\n    @param [out] result      The result.\n    @param [in]  cypher      inquire statement.\n    @param [in]  graph       (Optional) the graph to query.\n    @param [in]  json_format (Optional) Returns the format\uff0c true is json\uff0cOtherwise, binary\n                             format.\n    @param [in]  timeout     (Optional) Maximum execution time, overruns will be interrupted.\n    @param [in]  url         (Optional) Node address of calling cypher.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, a read request can be directed to a certain server."}),"\n",(0,r.jsx)(t.h3,{id:"23call-stored-procedure",children:"2.3.Call stored procedure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string str;\n    bool ret = client.CallProcedure(str, "CPP", "test_plugin1", "bcefg");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool CallProcedure(std::string& result, const std::string& procedure_type,\n                       const std::string& procedure_name, const std::string& param,\n                       double procedure_time_out = 0.0, bool in_process = false,\n                       const std::string& graph = "default", bool json_format = true,\n                       const std::string& url = "");\n    @param [out] result              The result.\n    @param [in]  procedure_type      the procedure type, currently supported CPP and PY.\n    @param [in]  procedure_name      procedure name.\n    @param [in]  param               the execution parameters.\n    @param [in]  procedure_time_out  (Optional) Maximum execution time, overruns will be\n                                     interrupted.\n    @param [in]  in_process          (Optional) support in future.\n    @param [in]  graph               (Optional) the graph to query.\n    @param [in]  json_format         (Optional) Returns the format\uff0c true is json\uff0cOtherwise,\n                                     binary format.\n    @param [in]  url                 (Optional) Node address of calling procedure.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, a read request can be directed to a certain server."}),"\n",(0,r.jsx)(t.h3,{id:"24load-stored-procedure",children:"2.4.Load stored procedure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string str;\n    bool ret = client.LoadProcedure(str, code_sleep, "PY", "python_plugin1", "PY", "this is a test plugin", true)\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool LoadProcedure(std::string& result, const std::string& source_file,\n                       const std::string& procedure_type, const std::string& procedure_name,\n                       const std::string& code_type, const std::string& procedure_description,\n                       bool read_only, const std::string& version = "v1",\n                       const std::string& graph = "default");\n    @param [out] result                  The result.\n    @param [in]  source_file             the source_file contain procedure code.\n    @param [in]  procedure_type          the procedure type, currently supported CPP and PY.\n    @param [in]  procedure_name          procedure name.\n    @param [in]  code_type               code type, currently supported PY, SO, CPP, ZIP.\n    @param [in]  procedure_description   procedure description.\n    @param [in]  read_only               procedure is read only or not.\n    @param [in]  version                 (Optional) the version of procedure.\n    @param [in]  graph                   (Optional) the graph to query.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.h3,{id:"25list-stored-procedures",children:"2.5.List stored procedures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:"    std::string str;\n    bool ret = client.ListProcedures(str);\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool ListProcedures(std::string& result, const std::string& procedure_type,\n                        const std::string& version = "any",\n                        const std::string& graph = "default", const std::string& url = "");\n    @param [out] result          The result.\n    @param [in]  procedure_type  (Optional) the procedure type, "" for all procedures,\n                                 CPP and PY for special type.\n    @param [in]  version         (Optional) the version of procedure.\n    @param [in]  graph           (Optional) the graph to query.\n    @param [in]  url             Node address of calling procedure.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, the request can be directed to a certain server."}),"\n",(0,r.jsx)(t.h3,{id:"26delete-stored-procedure",children:"2.6.Delete stored procedure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string str;\n    bool ret = client.DeleteProcedure(str, "CPP", "test_plugin1");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool DeleteProcedure(std::string& result, const std::string& procedure_type,\n                         const std::string& procedure_name, const std::string& graph = "default");\n    @param [out] result              The result.\n    @param [in]  procedure_type      the procedure type, currently supported CPP and PY.\n    @param [in]  procedure_name      procedure name.\n    @param [in]  graph               (Optional) the graph to query.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.h3,{id:"27import-from-a-byte-stream-schema",children:"2.7.Import from a byte stream schema"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string str;\n    bool ret = client.ImportSchemaFromContent(str, sImportContent["schema"]);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool ImportSchemaFromContent(std::string& result, const std::string& schema,\n                                 const std::string& graph = "default", bool json_format = true,\n                                 double timeout = 0);\n    @param [out] result      The result.\n    @param [in]  schema      the schema to be imported.\n    @param [in]  graph       (Optional) the graph to query.\n    @param [in]  json_format (Optional) Returns the format\uff0c true is json\uff0cOtherwise, binary\n                             format.\n    @param [in]  timeout     (Optional) Maximum execution time, overruns will be interrupted.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.h3,{id:"28import-node-and-edge-data-from-a-byte-stream",children:"2.8.Import node and edge data from a byte stream"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string str;\n    ret = client.ImportDataFromContent(str, sImportContent["person_desc"], sImportContent["person"],",");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool ImportDataFromContent(std::string& result, const std::string& desc,\n                               const std::string& data, const std::string& delimiter,\n                               bool continue_on_error = false, int thread_nums = 8,\n                               const std::string& graph = "default", bool json_format = true,\n                               double timeout = 0);\n    @param [out] result              The result.\n    @param [in]  desc                data format description.\n    @param [in]  data                the data to be imported.\n    @param [in]  delimiter           data separator.\n    @param [in]  continue_on_error   (Optional) whether to continue when importing data fails.\n    @param [in]  thread_nums         (Optional) maximum number of threads.\n    @param [in]  graph               (Optional) the graph to query.\n    @param [in]  json_format         (Optional) Returns the format\uff0c true is json\uff0cOtherwise,\n                                     binary format.\n    @param [in]  timeout             (Optional) Maximum execution time, overruns will be\n                                     interrupted.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.h3,{id:"29import-schema-from-a-file",children:"2.9.Import schema from a file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string conf_file("./yago.conf");\n    std::string str;\n    ret = client.ImportSchemaFromFile(str, conf_file);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool ImportSchemaFromFile(std::string& result, const std::string& schema_file,\n                              const std::string& graph = "default", bool json_format = true,\n                              double timeout = 0);\n    @param [out] result      The result.\n    @param [in]  schema_file the schema_file contain schema.\n    @param [in]  graph       (Optional) the graph to query.\n    @param [in]  json_format (Optional) Returns the format\uff0c true is json\uff0cOtherwise, binary\n                             format.\n    @param [in]  timeout     (Optional) Maximum execution time, overruns will be interrupted.\n    @returns True if it succeeds, false if it fails.\n'})}),"\n",(0,r.jsx)(t.h3,{id:"210import-edge-data-from-a-file",children:"2.10.Import edge data from a file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C++",children:'    std::string conf_file("./yago.conf");\n    std::string str;\n    ret = client.ImportDataFromFile(str, conf_file, ",");\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    bool ImportDataFromFile(std::string& result, const std::string& conf_file,\n                            const std::string& delimiter, bool continue_on_error = false,\n                            int thread_nums = 8, int skip_packages = 0,\n                            const std::string& graph = "default", bool json_format = true,\n                            double timeout = 0);\n    @param [out] result              The result.\n    @param [in]  conf_file           data file contain format description and data.\n    @param [in]  delimiter           data separator.\n    @param [in]  continue_on_error   (Optional) whether to continue when importing data fails.\n    @param [in]  thread_nums         (Optional) maximum number of threads.\n    @param [in]  skip_packages       (Optional) skip packages number.\n    @param [in]  graph               (Optional) the graph to query.\n    @param [in]  json_format         (Optional) Returns the format\uff0c true is json\uff0cOtherwise,\n                                     binary format.\n    @param [in]  timeout             (Optional) Maximum execution time, overruns will be\n                                     interrupted.\n    @returns True if it succeeds, false if it fails.\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);