"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75274],{28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var o=t(96540);const a={},r=o.createContext(a);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(r.Provider,{value:e},n.children)}},78468:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(74848),a=t(28453);const r={},i="Monitoring",s={id:"permission/monitoring",title:"Monitoring",description:"This document mainly introduces the visualization operation and maintenance monitoring of TuGraph.",source:"@site/versions/version-4.2.0/en-US/source/10.permission/4.monitoring.md",sourceDirName:"10.permission",slug:"/permission/monitoring",permalink:"/tugraph-db/en/4.2.0/permission/monitoring",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forgot Admin Password",permalink:"/tugraph-db/en/4.2.0/permission/reset_admin_password"},next:{title:"Log",permalink:"/tugraph-db/en/4.2.0/permission/log"}},l={},d=[{value:"1.Design Concept",id:"1design-concept",level:2},{value:"1.1.TuGraph",id:"11tugraph",level:3},{value:"1.2.TuGraph Monitor",id:"12tugraph-monitor",level:3},{value:"1.3.Prometheus",id:"13prometheus",level:3},{value:"1.4.Grafana",id:"14grafana",level:3},{value:"2.Deployment Solution",id:"2deployment-solution",level:2},{value:"2.1.Step 1",id:"21step-1",level:3},{value:"2.2.Step 2",id:"22step-2",level:3},{value:"2.3.Step Three",id:"23step-three",level:3},{value:"2.4.Step Four",id:"24step-four",level:3},{value:"3.Future Plans",id:"3future-plans",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"monitoring",children:"Monitoring"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"This document mainly introduces the visualization operation and maintenance monitoring of TuGraph."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"1design-concept",children:"1.Design Concept"}),"\n",(0,o.jsx)(e.p,{children:"Visualization monitoring is not an indispensable part of TuGraph itself. Therefore, in the design, visualization monitoring is regarded as an application in the peripheral ecology of TuGraph to reduce the coupling with TuGraph database and its own impact. TuGraph visualization monitoring adopts the hottest open source solution - TuGraph Monitor + Prometheus + Grafana. Wherein, TuGraph Monitor is the client of TuGraph service, which initiates Procedure requests to TuGraph service through TCP connection. After receiving the request, TuGraph service collects statistics of CPU, memory, disk, IO, and number of requests on its own machine and responds. TuGraph Monitor packages the index data received from TuGraph into the format required by Prometheus and saves it in memory, waiting for Prometheus to obtain it through HTTP request. Prometheus regularly obtains packaged request data from TuGraph Monitor through HTTP requests and saves it in its own time-series database according to the time obtained. Grafana can obtain the statistical data within a certain time period from Prometheus according to user configuration and draw easy-to-understand graphics on the web interface to display the final result. In the entire request chain, the active acquisition, i.e. pull model, is used, which has the advantages of minimizing the coupling between data producers and data consumers, making development simpler, and not requiring data producers to consider the data processing capability of data consumers. Even if the data processing ability of a consumer is weak, it will not be crushed by the data producer producing data too fast. One of the shortcomings of the active pulling model is that the real-time performance of the data is insufficient. However, in this scenario, data does not have high real-time requirements."}),"\n",(0,o.jsx)(e.h3,{id:"11tugraph",children:"1.1.TuGraph"}),"\n",(0,o.jsx)(e.p,{children:"TuGraph database provides the ability to collect multiple data information, such as disk, memory, network IO, and query requests, in the service machine, and provides queries through standard Procedure methods. This action of collecting data only occurs when a user queries through the interface, avoiding the impact of TuGraph monitoring service on user business query requests when users do not need the indicators on TuGraph monitoring service machine."}),"\n",(0,o.jsx)(e.h3,{id:"12tugraph-monitor",children:"1.2.TuGraph Monitor"}),"\n",(0,o.jsx)(e.p,{children:"TuGraph Monitor is a tool in the peripheral ecology of TuGraph. It communicates with TuGraph through C++ RPC Client as one of the many users of TuGraph and queries the performance indicators of the machine where TuGraph service is located through the Procedure query interface. It packages the results returned by TuGraph into the data model required by Prometheus and waits for Prometheus to obtain them. Users can set the query time interval to minimize the impact of obtaining monitoring indicators on business queries."}),"\n",(0,o.jsx)(e.h3,{id:"13prometheus",children:"1.3.Prometheus"}),"\n",(0,o.jsxs)(e.p,{children:["Prometheus is an open-source monitoring platform with a dedicated time-series database. It regularly obtains statistical indicators from the TuGraph Monitor service through HTTP requests and saves them in its own time-series database. For details, please refer to the official website:",(0,o.jsx)(e.a,{href:"https://prometheus.io/docs/introduction/first_steps",children:"https://prometheus.io/docs/introduction/first_steps"})]}),"\n",(0,o.jsx)(e.h3,{id:"14grafana",children:"1.4.Grafana"}),"\n",(0,o.jsxs)(e.p,{children:["Grafana is an open-source visualization and analysis software. It can obtain data from multiple data sources, including Prometheus, and can convert data in the time-series database into tools for beautiful graphics and visual effects. For specific information, please refer to the official website:",(0,o.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/getting-started/",children:"https://grafana.com/docs/grafana/v7.5/getting-started/"})]}),"\n",(0,o.jsx)(e.h2,{id:"2deployment-solution",children:"2.Deployment Solution"}),"\n",(0,o.jsx)(e.h3,{id:"21step-1",children:"2.1.Step 1"}),"\n",(0,o.jsxs)(e.p,{children:["Start the TuGraph service. For details, please refer to the documentation:",(0,o.jsx)(e.a,{href:"https://github.com/TuGraph-db/tugraph-db/blob/master/doc/zh-CN/1.guide/3.quick-start.md",children:"https://github.com/TuGraph-db/tugraph-db/blob/master/doc/zh-CN/1.guide/3.quick-start.md"})]}),"\n",(0,o.jsx)(e.h3,{id:"22step-2",children:"2.2.Step 2"}),"\n",(0,o.jsx)(e.p,{children:"Start the TuGraph Monitor tool. The startup command is as follows:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"./lgraph_monitor --server_host 127.0.0.1:9091 -u admin -p your_password \\\n\t\t\t--monitor_host 127.0.0.1:9999  --sampling_interval_ms 1000\n"})}),"\n",(0,o.jsx)(e.p,{children:"The meanings of the parameters are as follows:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"Available command line options:\n    --server_host       Host on which the tugraph rpc server runs.\n                        Default=127.0.0.1:9091.\n    -u, --user          DB username.\n    -p, --password      DB password.\n    --monitor_host      Host on which the monitor restful server runs.\n                        Default=127.0.0.1:9999.\n    --sampling_interval_ms\n                        sampling interval in millisecond. Default=1.5e2.\n    -h, --help          Print this help message. Default=0.\n"})}),"\n",(0,o.jsx)(e.h3,{id:"23step-three",children:"2.3.Step Three"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Download the Prometheus tarball that matches your machine architecture and system version. Download link:",(0,o.jsx)(e.a,{href:"https://prometheus.io/download/",children:"https://prometheus.io/download/"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Unzip the tarball with the following command:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"tar -zxvf prometheus-2.37.5.linux-amd64.tar.gz\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Modify the configuration file prometheus.yml and add the following configuration to enable Prometheus to scrape performance data packaged by TuGraph Monitor."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: \"tugraph\"\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: [\"localhost:9111\"]\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Start Prometheus. You can obtain specific startup parameters with the following command:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"./prometheus -h\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Verify if the Prometheus service is running properly by logging into the Prometheus service through the web portal, and querying whether the monitoring index resources_report has been obtained. If the data can be successfully queried, the operation is successful."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"24step-four",children:"2.4.Step Four"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Download the Grafana installation package that matches your machine architecture and system version. Download link:",(0,o.jsx)(e.a,{href:"https://grafana.com/grafana/download",children:"https://grafana.com/grafana/download"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Install Grafana. For details, refer to:",(0,o.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/installation/",children:" https://grafana.com/docs/grafana/v7.5/installation/"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Start Grafana. For details, refer to:",(0,o.jsx)(e.a,{href:"https://grafana.com/docs/grafana/v7.5/installation/",children:" https://grafana.com/docs/grafana/v7.5/installation/"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Configure Grafana. First, configure the IP address of Prometheus in the data source settings. After the configuration is completed, verify if the data source is connected successfully by testing the connection function. Then, import the following template and modify the correct interface IP and port in the page according to the actual situation. Finally, set the refresh time and monitoring time range according to the actual situation."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "annotations": {\n    "list": [\n      {\n        "builtIn": 1,\n        "datasource": {\n          "type": "grafana",\n        },\n        "enable": true,\n        "hide": true,\n        "iconColor": "rgba(0, 211, 255, 1)",\n        "name": "Annotations & Alerts",\n        "target": {\n          "limit": 100,\n          "matchAny": false,\n          "tags": [],\n          "type": "dashboard"\n        },\n        "type": "dashboard"\n      }\n    ]\n  },\n  "editable": true,\n  "fiscalYearStartMonth": 0,\n  "graphTooltip": 0,\n  "id": 2,\n  "links": [],\n  "liveNow": false,\n  "panels": [\n    {\n      "datasource": {\n        "type": "prometheus",\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            }\n          },\n          "mappings": [],\n          "unit": "kbytes"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D {instance=\\"localhost:7010\\", job=\\"TuGraph\\", resouces_type=\\"memory\\", type=\\"available\\"}"\n            },\n            "properties": [\n              {\n                "id": "displayName",\n                "value": "others"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D {__name__=\\"resources_report\\", instance=\\"localhost:7010\\", job=\\"TuGraph\\", resouces_type=\\"memory\\", type=\\"available\\"}"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-green",\n                  "mode": "fixed"\n                }\n              },\n              {\n                "id": "displayName",\n                "value": "others"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "others"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-blue",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 6,\n        "x": 0,\n        "y": 0\n      },\n      "id": 14,\n      "options": {\n        "displayLabels": [\n          "name",\n          "value"\n        ],\n        "legend": {\n          "displayMode": "table",\n          "placement": "bottom",\n          "values": [\n            "percent",\n            "value"\n          ]\n        },\n        "pieType": "pie",\n        "reduceOptions": {\n          "calcs": [\n            "lastNotNull"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"self\\"}",\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "A"\n        },\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"available\\"}",\n          "hide": false,\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "B"\n        },\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"memory\\",type=\\"total\\"}",\n          "hide": true,\n          "legendFormat": "{{label_name}}",\n          "range": true,\n          "refId": "C"\n        },\n        {\n          "datasource": {\n            "type": "__expr__",\n          },\n          "expression": "$C -$A - $B",\n          "hide": false,\n          "refId": "D",\n          "type": "math"\n        }\n      ],\n      "title": "memory",\n      "type": "piechart"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                1000\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "[Production Graph Database Grafana] \\n  QPS exceeds 1000",\n        "name": "Request statistics alert",\n        "noDataState": "no_data",\n        "notifications": []\n      },\n      "datasource": {\n        "type": "prometheus",\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 7,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "smooth",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": " "\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "write"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-blue",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 12,\n        "x": 6,\n        "y": 0\n      },\n      "id": 4,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"request\\",type=~\\"total|write\\"}",\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 1000,\n          "visible": true\n        }\n      ],\n      "title": "Request statistics",\n      "type": "timeseries"\n    },\n    {\n      "datasource": {\n        "type": "prometheus",\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            }\n          },\n          "mappings": [],\n          "unit": "decbits"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-red",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "available"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "D"\n            },\n            "properties": [\n              {\n                "id": "displayName",\n                "value": "other"\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "other"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 16,\n        "w": 6,\n        "x": 18,\n        "y": 0\n      },\n      "id": 12,\n      "options": {\n        "displayLabels": [\n          "name",\n          "value"\n        ],\n        "legend": {\n          "displayMode": "table",\n          "placement": "bottom",\n          "sortBy": "Value",\n          "sortDesc": true,\n          "values": [\n            "value",\n            "percent"\n          ]\n        },\n        "pieType": "pie",\n        "reduceOptions": {\n          "calcs": [\n            "lastNotNull"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "exemplar": false,\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"available\\"}",\n          "format": "time_series",\n          "instant": false,\n          "interval": "",\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "A"\n        },\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"self\\"}",\n          "hide": false,\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "B"\n        },\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk\\",type=\\"total\\"}",\n          "hide": true,\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "C"\n        },\n        {\n          "datasource": {\n            "type": "__expr__",\n          },\n          "expression": "$C - $A - $B",\n          "hide": false,\n          "refId": "D",\n          "type": "math"\n        }\n      ],\n      "title": "disk",\n      "transformations": [\n        {\n          "id": "configFromData",\n          "options": {\n            "applyTo": {\n              "id": "byFrameRefID"\n            },\n            "configRefId": "config",\n            "mappings": []\n          }\n        }\n      ],\n      "type": "piechart"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                90\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "[Production Graph Database Grafana] \\nCPU usage rate exceeds 90%",\n        "name": "CPU usage rate alert",\n        "noDataState": "no_data",\n        "notifications": [\n          {\n          }\n        ]\n      },\n      "datasource": {\n        "type": "prometheus",\n      },\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 4,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "linear",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": "percent"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "graph_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-orange",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "total_used"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "self"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-green",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "total"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "light-purple",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 14,\n        "w": 12,\n        "x": 0,\n        "y": 16\n      },\n      "id": 6,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "code",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"cpu\\",type=~\\"total|self\\"}",\n          "hide": false,\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 90,\n          "visible": true\n        }\n      ],\n      "title": "CPU usage rate",\n      "type": "timeseries"\n    },\n    {\n      "alert": {\n        "alertRuleTags": {},\n        "conditions": [\n          {\n            "evaluator": {\n              "params": [\n                10000\n              ],\n              "type": "gt"\n            },\n            "operator": {\n              "type": "and"\n            },\n            "query": {\n              "params": [\n                "A",\n                "5m",\n                "now"\n              ]\n            },\n            "reducer": {\n              "params": [],\n              "type": "avg"\n            },\n            "type": "query"\n          }\n        ],\n        "executionErrorState": "alerting",\n        "for": "5m",\n        "frequency": "1m",\n        "handler": 1,\n        "message": "[Production Graph Database Grafana] Disk IO exceeds 10MB/S",\n        "name": "Disk IO alert",\n        "noDataState": "no_data",\n        "notifications": []\n      },\n      "datasource": {\n        "type": "prometheus",\n      },\n      "fieldConfig": {\n        "defaults": {\n          "color": {\n            "mode": "palette-classic"\n          },\n          "custom": {\n            "axisLabel": "",\n            "axisPlacement": "auto",\n            "barAlignment": 0,\n            "drawStyle": "line",\n            "fillOpacity": 7,\n            "gradientMode": "none",\n            "hideFrom": {\n              "legend": false,\n              "tooltip": false,\n              "viz": false\n            },\n            "lineInterpolation": "smooth",\n            "lineWidth": 1,\n            "pointSize": 5,\n            "scaleDistribution": {\n              "type": "linear"\n            },\n            "showPoints": "auto",\n            "spanNulls": false,\n            "stacking": {\n              "group": "A",\n              "mode": "none"\n            },\n            "thresholdsStyle": {\n              "mode": "off"\n            }\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          },\n          "unit": "bps"\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "read"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "super-light-green",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          },\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "write"\n            },\n            "properties": [\n              {\n                "id": "color",\n                "value": {\n                  "fixedColor": "super-light-red",\n                  "mode": "fixed"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "gridPos": {\n        "h": 14,\n        "w": 12,\n        "x": 12,\n        "y": 16\n      },\n      "id": 2,\n      "options": {\n        "legend": {\n          "calcs": [\n            "min",\n            "max",\n            "mean",\n            "last"\n          ],\n          "displayMode": "table",\n          "placement": "bottom"\n        },\n        "tooltip": {\n          "mode": "single",\n          "sort": "none"\n        }\n      },\n      "targets": [\n        {\n          "datasource": {\n            "type": "prometheus",\n          },\n          "editorMode": "builder",\n          "expr": "resources_report{instance=\\"localhost:7010\\",job=\\"TuGraph\\",resouces_type=\\"disk_rate\\",type=~\\"read|write\\"}",\n          "hide": false,\n          "legendFormat": "{{type}}",\n          "range": true,\n          "refId": "A"\n        }\n      ],\n      "thresholds": [\n        {\n          "colorMode": "critical",\n          "op": "gt",\n          "value": 10000,\n          "visible": true\n        }\n      ],\n      "title": "\u78c1\u76d8IO",\n      "type": "timeseries"\n    }\n  ],\n  "refresh": "",\n  "schemaVersion": 36,\n  "style": "dark",\n  "tags": [],\n  "templating": {\n    "list": []\n  },\n  "time": {\n    "from": "now-24h",\n    "to": "now"\n  },\n  "timepicker": {\n    "hidden": false,\n    "refresh_intervals": [\n      "10s"\n    ]\n  },\n  "timezone": "",\n  "title": "TuGraph Monitoring Web",\n  "version": 20,\n  "weekStart": ""\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Verify the effect by refreshing the browser page. If the pie chart and line chart are displayed correctly, the configuration is completed."}),"\n",(0,o.jsx)(e.h2,{id:"3future-plans",children:"3.Future Plans"}),"\n",(0,o.jsx)(e.p,{children:"Currently, visual monitoring only supports single-machine monitoring and can monitor performance indicators such as CPU, disk, network IO, and request QPS of the machine on which the service is located. In the future, monitoring for HA clusters will be implemented, and more meaningful indicators will be included in the monitoring scope."})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}}}]);