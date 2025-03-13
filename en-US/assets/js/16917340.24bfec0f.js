"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[71174],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}},41900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(74848),i=s(28453);const t={},a="TuGraph-OGM",o={id:"developer-manual/client-tools/tugraph-ogm",title:"TuGraph-OGM",description:"1.\u7b80\u4ecb",source:"@site/versions/version-3.5.1/zh-CN/source/5.developer-manual/4.client-tools/4.tugraph-ogm.md",sourceDirName:"5.developer-manual/4.client-tools",slug:"/developer-manual/client-tools/tugraph-ogm",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/client-tools/tugraph-ogm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java\u5ba2\u6237\u7aef",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/client-tools/java-client"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/client-tools/tugraph-cli"}},d={},l=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"1.1.TuGraph-OGM \u529f\u80fd",id:"11tugraph-ogm-\u529f\u80fd",level:3},{value:"2.\u7f16\u8bd1 TuGraph-OGM",id:"2\u7f16\u8bd1-tugraph-ogm",level:2},{value:"3.\u4f7f\u7528 TuGraph-OGM",id:"3\u4f7f\u7528-tugraph-ogm",level:2},{value:"3.1.\u6784\u5efa\u56fe\u5bf9\u8c61",id:"31\u6784\u5efa\u56fe\u5bf9\u8c61",level:3},{value:"3.2.\u4e0eTuGraph\u5efa\u7acb\u8fde\u63a5",id:"32\u4e0etugraph\u5efa\u7acb\u8fde\u63a5",level:3},{value:"3.3.\u901a\u8fc7OGM\u8fdb\u884c\u589e\u5220\u6539\u67e5",id:"33\u901a\u8fc7ogm\u8fdb\u884c\u589e\u5220\u6539\u67e5",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",id:"id",p:"p",pre:"pre",t:"t",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tugraph-ogm",children:"TuGraph-OGM"})}),"\n",(0,r.jsx)(n.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"TuGraph-OGM \u9879\u76ee\u5728\u5176\u4ed6\u4ed3\u5e93\u5f00\u6e90\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"TuGraph-OGM(Object Graph Mapping)\u4e3a\u9762\u5411 TuGraph \u7684\u56fe\u5bf9\u8c61\u6620\u5c04\u5de5\u5177\uff0c\u652f\u6301\u5c06 JAVA \u5bf9\u8c61\uff08POJO\uff09\u6620\u5c04\u5230 TuGraph \u4e2d\uff0cJAVA \u4e2d\u7684\u7c7b\u6620\u5c04\u4e3a\u56fe\u4e2d\u7684\u8282\u70b9\u3001\u7c7b\u4e2d\u7684\u96c6\u5408\u6620\u5c04\u4e3a\u8fb9\u3001\u7c7b\u7684\u5c5e\u6027\u6620\u5c04\u4e3a\u56fe\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5e76\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u51fd\u6570\u64cd\u4f5c\u56fe\u6570\u636e\u5e93\uff0c\u56e0\u6b64 JAVA \u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u719f\u6089\u7684\u751f\u6001\u4e2d\u8f7b\u677e\u5730\u4f7f\u7528 TuGraph \u6570\u636e\u5e93\u3002\u540c\u65f6 TuGraph-OGM \u517c\u5bb9 Neo4j-OGM\uff0cNeo4j \u751f\u6001\u7528\u6237\u53ef\u4ee5\u65e0\u7f1d\u8fc1\u79fb\u5230 TuGraph \u6570\u636e\u5e93\u4e0a\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"11tugraph-ogm-\u529f\u80fd",children:"1.1.TuGraph-OGM \u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"TuGraph-OGM \u63d0\u4f9b\u4ee5\u4e0b\u51fd\u6570\u64cd\u4f5c TuGraph\uff1a"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u529f\u80fd"}),(0,r.jsx)(n.th,{children:"\u7528\u6cd5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u63d2\u5165\u5355\u4e2a\u8282\u70b9\\\u8fb9"}),(0,r.jsx)(n.td,{children:"void session.save(T object)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6279\u91cf\u63d2\u5165\u8282\u70b9\\\u8fb9"}),(0,r.jsx)(n.td,{children:"void session.save(T object)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5220\u9664\u8282\u70b9\u4e0e\u5bf9\u5e94\u8fb9"}),(0,r.jsx)(n.td,{children:"void session.delete(T object)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5220\u9664\u6307\u5b9a label \u7684\u5168\u90e8\u8282\u70b9"}),(0,r.jsx)(n.td,{children:"void session.deleteAll(Class<T> type)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6e05\u7a7a\u6570\u636e\u5e93"}),(0,r.jsx)(n.td,{children:"void purgeDatabase()"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u66f4\u65b0\u8282\u70b9"}),(0,r.jsx)(n.td,{children:"void session.save(T newObject)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6839\u636e id \u67e5\u8be2\u5355\u4e2a\u8282\u70b9"}),(0,r.jsxs)(n.td,{children:["T load(Class",(0,r.jsx)(n.t,{children:" type, ID id)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6839\u636e ids \u67e5\u8be2\u591a\u4e2a\u8282\u70b9"}),(0,r.jsxs)(n.td,{children:["Collection<T> loadAll(Class<T> type, Collection",(0,r.jsx)(n.id,{children:" ids)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6839\u636e label \u67e5\u8be2\u5168\u90e8\u8282\u70b9"}),(0,r.jsx)(n.td,{children:"Collection<T> loadAll(Class<T> type)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6761\u4ef6\u67e5\u8be2"}),(0,r.jsx)(n.td,{children:"Collection<T> loadAll(Class<T> type, Filters filters)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cypher \u67e5\u8be2\uff08\u6307\u5b9a\u8fd4\u56de\u7ed3\u679c\u7c7b\u578b\uff09"}),(0,r.jsx)(n.td,{children:"T queryForObject(Class<T> objectType, String cypher, Map<String, ?> parameters)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cypher \u67e5\u8be2"}),(0,r.jsx)(n.td,{children:"Result query(String cypher, Map<String, ?> parameters)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"2\u7f16\u8bd1-tugraph-ogm",children:"2.\u7f16\u8bd1 TuGraph-OGM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd tugraph-ogm\nmvn clean install -DskipTests -Denforcer.skip=true\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3\u4f7f\u7528-tugraph-ogm",children:"3.\u4f7f\u7528 TuGraph-OGM"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u7ec6\u793a\u4f8b\u8bf7\u53c2\u8003 demo \u6587\u4ef6\u5939\u4e0b\u7684 TuGraphOGMDemo ###\u5728",(0,r.jsx)(n.code,{children:"pom.xml"}),"\u4e2d\u5f15\u5165\u4f9d\u8d56"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<dependency>\n        <groupId>org.neo4j</groupId>\n        <artifactId>neo4j-ogm-api</artifactId>\n        <version>0.1.0-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.neo4j</groupId>\n        <artifactId>neo4j-ogm-core</artifactId>\n        <version>0.1.0-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.neo4j</groupId>\n        <artifactId>tugraph-rpc-driver</artifactId>\n        <version>0.1.0-SNAPSHOT</version>\n    </dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"31\u6784\u5efa\u56fe\u5bf9\u8c61",children:"3.1.\u6784\u5efa\u56fe\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@NodeEntity\npublic class Movie {      // \u6784\u5efaMovie\u8282\u70b9\n    @Id\n    private Long id;      // Movie\u8282\u70b9\u7684id\n    private String title; // title\u5c5e\u6027\n    private int released; // released\u5c5e\u6027\n\n    // \u6784\u5efa\u8fb9ACTS_IN    (actor)-[:ACTS_IN]->(movie)\n    @Relationship(type = "ACTS_IN", direction = Relationship.Direction.INCOMING)\n    Set<Actor> actors = new HashSet<>();\n\n    public Movie(String title, int year) {\n        this.title = title;\n        this.released = year;\n    }\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setReleased(int released) {\n        this.released = released;\n    }\n}\n\n@NodeEntity\npublic class Actor {      // \u6784\u5efaActor\u8282\u70b9\n    @Id\n    private Long id;\n    private String name;\n\n    @Relationship(type = "ACTS_IN", direction = Relationship.Direction.OUTGOING)\n    private Set<Movie> movies = new HashSet<>();\n\n    public Actor(String name) {\n        this.name = name;\n    }\n\n    public void actsIn(Movie movie) {\n        movies.add(movie);\n        movie.getActors().add(this);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"32\u4e0etugraph\u5efa\u7acb\u8fde\u63a5",children:"3.2.\u4e0eTuGraph\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// \u914d\u7f6e\nString databaseUri = "list://ip:port";\nString username = "admin";\nString password = "73@TuGraph";\n//\u542f\u52a8driver\nDriver driver = new RpcDriver();\nConfiguration.Builder baseConfigurationBuilder = new Configuration.Builder()\n                            .uri(databaseUri)\n                            .verifyConnection(true)\n                            .credentials(username, password);\n                            driver.configure(baseConfigurationBuilder.build());\ndriver.configure(baseConfigurationBuilder.build());\n// \u5f00\u542fsession\nSessionFactory sessionFactory = new SessionFactory(driver, "entity_path");\nSession session = sessionFactory.openSession();\n'})}),"\n",(0,r.jsx)(n.h3,{id:"33\u901a\u8fc7ogm\u8fdb\u884c\u589e\u5220\u6539\u67e5",children:"3.3.\u901a\u8fc7OGM\u8fdb\u884c\u589e\u5220\u6539\u67e5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// \u589e\nMovie jokes = new Movie("Jokes", 1990);  // \u65b0\u5efaMovie\u8282\u70b9jokes\nsession.save(jokes);                     // \u5c06jokes\u5b58\u50a8\u5728TuGraph\u4e2d\n\nMovie speed = new Movie("Speed", 2019);\nActor alice = new Actor("Alice Neeves");\nalice.actsIn(speed);                    // \u5c06speed\u8282\u70b9\u4e0ealice\u8282\u70b9\u901a\u8fc7ACTS_IN\u8fdb\u884c\u8fde\u63a5\nsession.save(speed);                    // \u5b58\u50a8\u4e24\u4e2a\u8282\u70b9\u4e0e\u4e00\u6761\u8fb9\n\n// \u5220\nsession.delete(alice);                  // \u5220\u9664alice\u8282\u70b9\u4ee5\u53ca\u76f8\u8fde\u7684\u8fb9\nMovie m = session.load(Movie.class, jokes.getId());   // \u6839\u636ejokes\u8282\u70b9\u7684id\u83b7\u53d6jokes\u8282\u70b9\nsession.delete(m);                                    // \u5220\u9664jokes\u8282\u70b9\n\n// \u6539\nspeed.setReleased(2018);\nsession.save(speed);                   // \u66f4\u65b0speed\u8282\u70b9\u5c5e\u6027\n\n// \u67e5\nCollection<Movie> movies = session.loadAll(Movie.class);  // \u83b7\u53d6\u6240\u6709Movie\u8282\u70b9\nCollection<Movie> moviesFilter = session.loadAll(Movie.class,\n        new Filter("released", ComparisonOperator.LESS_THAN, 1995));  // \u67e5\u8be2\u6240\u6709\u5c0f\u4e8e1995\u5e74\u53d1\u5e03\u7684\u7535\u5f71\n\n// \u8c03\u7528Cypher\nHashMap<String, Object> parameters = new HashMap<>();\nparameters.put("Speed", 2018);\nMovie cm = session.queryForObject(Movie.class,\n        "MATCH (cm:Movie{Speed: $Speed}) RETURN *", parameters);      // \u67e5\u8be2Speed\u4e3a2018\u7684Movie\n\nsession.query("CALL db.createVertexLabel(\'Director\', \'name\', \'name\'," +\n        "STRING, false, \'age\', INT16, true)", emptyMap());            // \u521b\u5efa\u8282\u70b9Label Director\nsession.query("CALL db.createEdgeLabel(\'DIRECT\', \'[]\')", emptyMap()); // \u521b\u5efa\u8fb9Label DIRECT\nResult createResult = session.query(\n        "CREATE (n:Movie{title:\\"The Shawshank Redemption\\", released:1994})" +\n        "<-[r:DIRECT]-" +\n        "(n2:Director{name:\\"Frank Darabont\\", age:63})",\n        emptyMap());\nQueryStatistics statistics = createResult.queryStatistics();          // \u83b7\u53d6create\u7ed3\u679c\nSystem.out.println("created " + statistics.getNodesCreated() + " vertices");    // \u67e5\u770b\u521b\u5efa\u8282\u70b9\u6570\u76ee\nSystem.out.println("created " + statistics.getRelationshipsCreated() + " edges");  //\u67e5\u770b\u521b\u5efa\u8fb9\u6570\u76ee\n\n// \u6e05\u7a7a\u6570\u636e\u5e93\nsession.deleteAll(Movie.class);        // \u5220\u9664\u6240\u6709Movie\u8282\u70b9\nsession.purgeDatabase();               // \u5220\u9664\u5168\u90e8\u6570\u636e\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);