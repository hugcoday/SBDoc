webpackJsonp([0],{128:function(e,t,a){(function(e,t,r){var n=a(6),o=a(33),i=a(30),u=a(29),s=a(32),f=a(19),c=a(31),l=a(42);e.get("interfaceId")&&e.get("groupId")||!(location.hash.length<=1)||(alert("请从项目详情页进来!"),location.href="../projectinfo/projectinfo.html");new t({el:"#app",data:{session:r.clone(e.raw()),runPending:!1},components:{mainnav:n,runquery:o,runheader:i,runbody:u,runparam:s,encrypt:f,runinject:c},store:l,computed:{interface:function(){return l.state.interface},baseUrl:{get:function(){return l.state.baseUrl},set:function(e){l.commit("setBaseUrl",e)}},paramTab:function(){return"Param ("+l.getters.paramCount+")"},queryTab:function(){return"Query ("+l.getters.queryCount+")"},headerTab:function(){return"Header ("+l.getters.headerCount+")"},bodyTab:function(){return"Body ("+(0==l.state.bodyInfo.type?l.getters.bodyCount:"Raw")+")"},param:function(){return l.state.param},querySave:function(){return l.getters.querySave},headerSave:function(){return l.getters.headerSave},bodySave:function(){return l.getters.bodySave},drawMix:function(){return l.state.drawMix},bodyInfo:function(){return l.state.bodyInfo},queryRawShow:function(){return l.state.queryRawShow},headerRawShow:function(){return l.state.headerRawShow},bodyRawShow:function(){return l.state.bodyRawShow},status:function(){return l.state.status},second:function(){return l.state.second},type:function(){return l.state.type},draw:function(){return l.state.draw},drawMix:function(){return l.state.drawMix},imgUrl:function(){return l.state.imgUrl},rawData:function(){return l.state.rawData},resHeader:function(){return l.state.resHeader},errorCount:function(){return l.state.errorCount},queryRawStr:{get:function(){return l.state.queryRawStr},set:function(e){l.commit("setQueryRawStr",e)}},headerRawStr:{get:function(){return l.state.headerRawStr},set:function(e){l.commit("setHeaderRawStr",e)}},bodyRawStr:{get:function(){return l.state.bodyRawStr},set:function(e){l.commit("setBodyRawStr",e)}}},methods:{run:function(){var e=this;this.runPending=!0,l.dispatch("run").then(function(t){e.runPending=!1,200==t.code?r.notify("运行成功",1):r.notify(t.msg,0)})},save:function(){l.dispatch("save").then(function(e){e&&0==e.code&&r.notify(e.msg,0)})},toggleQuery:function(){l.commit("toggleQuery")},toggleHeader:function(){l.commit("toggleHeader")},toggleBody:function(){l.commit("toggleBody")},changeUrl:function(e){l.commit("changeUrl",e)},querySearch:function(e,t){var a=this;setTimeout(function(){var r=a.interface.baseUrl.map(function(e){return{value:e}});l.state.hash||r.push({value:"MockServer"}),e&&(r=r.filter(function(t){return t.value.toLowerCase().indexOf(e.toLowerCase())>-1})),t(r)},100)},showAutoComplete:function(e){this.baseUrl="",setTimeout(function(){e.target.nextSibling.focus()},100)},getError:function(e){var t=document.createElement("div");return t.innerHTML=e,t.querySelector("[err]").getAttribute("err")},existError:function(e){var t=document.createElement("div");return t.innerHTML=e,!!t.querySelector("[err]")},changeMethod:function(){l.commit("changeMethod")}},created:function(){l.dispatch("init").then(function(e){r.stopLoading(),200!=e.code&&r.notify(e.msg,0)})}});r.ready(function(){r.startLoading()})}).call(t,a(3),a(0),a(2))},42:function(e,t,a){(function(t,r,n,o,i,u){var s=a(10);e.exports=new t.Store({state:{interface:{},baseUrl:"",query:[{name:"",must:0,remark:"",value:"",selValue:"",enable:1}],header:[{name:"",value:"",remark:""}],body:[{name:"",type:0,must:0,remark:"",value:"",selValue:"",enable:1}],param:[],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},fileResult:"",resHeader:[],status:"",second:"",draw:[],drawMix:[],type:"object",imgUrl:"",hash:"",resultData:"",queryRawShow:0,headerRawShow:0,bodyRawShow:0,queryRawStr:"",headerRawStr:"",bodyRawStr:"",rawData:"",encryptType:"",errorCount:0},getters:{querySave:function(e,t){return e.query.filter(function(e){return!(!e.name||!e.enable)})},headerSave:function(e,t){return e.header.filter(function(e){return!!e.name})},bodySave:function(e,t){return e.body.filter(function(e){return!(!e.name||!e.enable)})},queryCount:function(e,t){return t.querySave.length},headerCount:function(e,t){return t.headerSave.length},bodyCount:function(e,t){return t.bodySave.length},paramCount:function(e,t){return e.param.length}},mutations:{initData:function(e,t){if(e.interface=t,e.baseUrl=t.baseUrl.length>0?t.baseUrl[0]:"",e.interface.queryParam.length>0){for(var a=0;a<e.interface.queryParam.length;a++)r.set(e.interface.queryParam[a],"enable",1),r.set(e.interface.queryParam[a],"selValue",""),e.interface.queryParam[a].value&&e.interface.queryParam[a].value.length>0?e.interface.queryParam[a].selValue=e.interface.queryParam[a].value[0]:e.interface.queryParam[a].selValue="";e.query=e.interface.queryParam}if(e.interface.bodyParam.length>0){for(var a=0;a<e.interface.bodyParam.length;a++)r.set(e.interface.bodyParam[a],"enable",1),r.set(e.interface.bodyParam[a],"selValue",""),e.interface.bodyParam[a].value&&e.interface.bodyParam[a].value.length>0?e.interface.bodyParam[a].selValue=e.interface.bodyParam[a].value[0]:e.interface.bodyParam[a].selValue="";e.body=e.interface.bodyParam}if(e.interface.header.length>0&&(e.header=e.interface.header),e.interface.restParam.length>0){for(var a=0;a<e.interface.restParam.length;a++)r.set(e.interface.restParam[a],"selValue",""),e.interface.restParam[a].value&&e.interface.restParam[a].value.length>0?e.interface.restParam[a].selValue=e.interface.restParam[a].value[0]:e.interface.restParam[a].selValue="";e.param=e.interface.restParam}e.interface.bodyInfo&&(e.bodyInfo=e.interface.bodyInfo,void 0===e.bodyInfo.rawText&&r.set(e.bodyInfo,"rawText",""),void 0===e.bodyInfo.rawTextRemark&&r.set(e.bodyInfo,"rawTextRemark",""),void 0===e.bodyInfo.rawFileRemark&&r.set(e.bodyInfo,"rawFileRemark",""))},setFileResult:function(e,t){e.fileResult=t},toggleQuery:function(e){if(e.queryRawShow){e.queryRawShow=0;for(var t=decodeURI(n.trim(e.queryRawStr)),a=[],r=t.split("&"),i=0;i<r.length;i++){var u=r[i].split("=");if(u.length>0){var s=o.findValue(e.query,u[0]);a.push({name:u[0],must:s?s.must:1,remark:s?s.remark:"",selValue:u[1]?u[1]:"",enable:s?s.enable:1,value:s?s.value:null,encrypt:s&&s.encrypt?s.encrypt:{type:"",salt:"",key:0}})}}e.query=a}else{e.queryRawShow=1;for(var t="",a=e.query,i=0;i<a.length;i++)a[i].name&&(t+=a[i].name+"="+a[i].selValue+(i!=a.length-1?"&":""));e.queryRawStr=t}},toggleHeader:function(e){if(e.headerRawShow){e.headerRawShow=0;for(var t=n.trim(e.headerRawStr).split("\n"),a=[],r=0;r<t.length;r++){var i=n.trim(t[r]),u=i.indexOf(":"),s="",f="";if(u==-1?s=i:(s=n.trim(i.substr(0,u)),f=n.trim(i.substr(u+1))),s){var c=o.findValue(e.header,s);a.push({name:s,value:f,remark:c?c.remark:"",encrypt:c&&c.encrypt?c.encrypt:{type:"",salt:"",key:0}})}}0==a.length&&a.push({name:"",value:"",remark:""}),e.header=a}else{e.headerRawShow=1;for(var l="",t=e.header,r=0;r<t.length;r++)t[r].name&&(l+=t[r].name+":"+(t[r].value?t[r].value:"")+(r!=t.length-1?"\n":""));e.headerRawStr=l}},toggleBody:function(e){if(e.bodyRawShow){e.bodyRawShow=0;for(var t=decodeURI(n.trim(e.bodyRawStr)),a=[],r=t.split("&"),i=0;i<r.length;i++){var u=r[i].split("=");if(u.length>0){var s=o.findValue(e.body,u[0]),f=u[1]?u[1]:"";s&&1!=s.type&&(s.selValue=f),a.push({name:u[0],type:s?s.type:"[FILE]"==f?1:0,must:s?s.must:1,remark:s?s.remark:"",selValue:f,enable:s?s.enable:1,value:s?s.value:null,encrypt:s&&s.encrypt?s.encrypt:{type:"",salt:"",key:0}})}}e.body=a}else{e.bodyRawShow=1;for(var t="",a=e.body,i=0;i<a.length;i++)a[i].name&&(t+=a[i].name+"="+(1==a[i].type?"[FILE]":a[i].selValue)+(i!=a.length-1?"&":""));e.bodyRawStr=t}},changeMethod:function(e){if("POST"==e.interface.method||"PUT"==e.interface.method)if(1!=e.header.length||e.header[0].name){for(var t=!1,a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){t=!0;break}}t||e.header.push({name:"Content-Type",value:"application/x-www-form-urlencoded",remark:""})}else e.header[0].name="Content-Type",e.header[0].value="application/x-www-form-urlencoded";else for(var a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){e.header.length>1?e.header.splice(a,1):(e.header[0].name="",e.header[0].value="",e.header[0].remark="");break}}},changeUrl:function(e,t){if(t){var a=[],r=t.match(/\{([^\s]+?)\}/g);if(r)for(var n=0;n<r.length;n++){for(var o=r[n].substr(1,r[n].length-2),i=!1,u=0;u<e.param.length;u++)if(o==e.param[u].name){i=!0,a.push(e.param[u]);break}i||a.push({name:o,remark:"",value:[]})}e.param=a}},setBaseUrl:function(e,t){e.baseUrl=t},setQueryRawStr:function(e,t){e.queryRawStr=t},setHeaderRawStr:function(e,t){e.headerRawStr=t},setBodyRawStr:function(e,t){e.bodyRawStr=t}},actions:{run:function(e){var t=e.state.interface.method,a=n.trim(e.state.baseUrl),r=n.trim(e.state.interface.url);if(!t||!a||!r)return new Promise(function(e,t){var a={};a.code=0,a.msg="方法，url和路由地址不能为空!",e(a)});var f=!1;if("MockServer"!=a){var c,l=a.indexOf("://");if((c=l==-1?a.indexOf("/"):a.indexOf("/",l+3))>-1){var d=a.substring(0,c),m=a.substr(c);"/"==m[m.length-1]&&"/"==r[0]?m=m.substr(0,m.length-1):"/"!=m[m.length-1]&&"/"!=r[0]&&m.indexOf("?")==-1&&m.indexOf("#")==-1&&(m+="/"),a=d,r=m+r}else"/"!=r[0]&&(r="/"+r)}else f=!0,a=s.baseUrl,r="/mock/"+i.get("projectId")+("/"!=r[0]?"/"+r:r);e.state.param.forEach(function(e){e.name&&(r=r.replace("{"+e.name+"}",e.selValue))});var y={};e.getters.querySave.forEach(function(e){if(e.encrypt&&e.encrypt.type){var t=o.encrypt(e.encrypt.type,e.selValue,e.encrypt.salt),a=e.name;e.encrypt.key&&(a=o.encrypt(e.encrypt.type,a,e.encrypt.salt)),y[a]=t}else y[e.name]=e.selValue});var h={},p=["host","connection","origin","referer","user-agent"],v={};e.getters.headerSave.forEach(function(e){if(e.encrypt&&e.encrypt.type){var t=o.encrypt(e.encrypt.type,e.value,e.encrypt.salt),a=e.name;n.inArr(a,p)?v[a]=t:h[a]=t}else n.inArr(e.name,p)?v[e.name]=e.value:h[e.name]=e.value});var w={},g=!1;if("POST"==t||"PUT"==t)if(0==e.state.bodyInfo.type){var b=document.getElementById("bodyTable").querySelectorAll("[custom]");e.getters.bodySave.forEach(function(e,t){if(0==e.type)if(e.encrypt&&e.encrypt.type){var a=o.encrypt(e.encrypt.type,e.selValue,e.encrypt.salt),r=e.name;e.encrypt.key&&(r=o.encrypt(e.encrypt.type,r,e.encrypt.salt)),w[r]=a}else w[e.name]=e.selValue;else if(1==e.type)if(b[t].files.length>0){if(e.encrypt&&e.encrypt.type&&e.encrypt.key){var r=o.encrypt(e.encrypt.type,e.name,e.encrypt.salt);w[r]=b[t].files[0]}else w[e.name]=b[t].files[0];g=!0}else if(e.encrypt&&e.encrypt.type&&e.encrypt.key){var r=o.encrypt(e.encrypt.type,e.name,e.encrypt.salt);w[r]=""}else w[e.name]=""})}else if(0==e.state.bodyInfo.rawType){var S=e.state.encryptType;w=S?o.encrypt(S,e.state.bodyInfo.rawText,document.getElementById("bodyRawEncryptSalt").querySelector("input").value):e.state.bodyInfo.rawText}else{if(!e.state.fileResult)return new Promise(function(e,t){var a={};a.code=0,a.msg="上传内容不能为空！",e(a)});w=e.state.fileResult}var R=n.trim(e.state.interface.before);R&&o.runBefore(R,a,r,t,y,h,w),y=n.param(y),y.length>0&&(r=r+"?"+y),h.__url=a,h.__path=r,h.__method=t,h.__user=i.get("id"),h.__headers=JSON.stringify(v);var k="/proxy",P=!1;(/10\./i.test(a)||/192\.168\./i.test(a)||/127\.0\.0\.1/i.test(a)||/172\.(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)\./.test(a)||/localhost/i.test(a)&&!f)&&(P=!0,k="http://127.0.0.1:36742");var q,I=new Date,T=!1;for(var x in h)if("content-type"==x.toLowerCase()){T=!0,q=x,/multipart\/form-data/i.test(h[q])&&(g=!0);break}e.state.resultData="";var U;return g||1==e.state.bodyInfo.type?(T&&0==e.state.bodyInfo.type&&delete h[q],U=u.upload("POST",k,w,h,null,1,P)):U=u.post(k,w,h,null,1,P),U.then(function(t){if(e.state.resHeader=t.header,e.state.status=String(t.status),e.state.second=((new Date-I)/1e3).toFixed(3),e.state.type=typeof t.data,"object"!=e.state.type||t.data instanceof Blob)t.header["content-type"]&&t.header["content-type"].indexOf("image/")>-1?(e.state.type="img",e.state.rawData="",e.state.imgUrl=a+r,e.state.errorCount=0):(e.state.rawData=t.data,e.state.draw=t.data,e.state.drawMix=t.data,e.state.errorCount=0);else{e.state.type="object",e.state.resultData=t.data,e.state.rawData=JSON.stringify(t.data),e.state.draw=o.format(e.state.rawData,0,e.state.interface.outParam).draw;var i=o.format(e.state.rawData,1,e.state.interface.outParam);e.state.drawMix=i.draw,e.state.errorCount=i.error}var u=n.trim(e.state.interface.after);return u&&o.runAfter(u,t.status,t.header,t.data),{code:200}})},save:function(e){var t=e.state.interface.method,a=n.trim(e.state.baseUrl),r=n.trim(e.state.interface.url);if(!t||!a||!r)return new Promise(function(e,t){var a={};a.code=0,a.msg="方法，url和路由地址不能为空!",e(a)});var s=[];e.state.param.forEach(function(e){if(e.name){var t=e.value;if(e.selValue)if(t){var a=e.selValue;t.indexOf(a)==-1&&t.push(a)}else t=[e.selValue];else t||(t=[]);s.push({name:e.name,remark:e.remark,value:t})}});var f=[];e.getters.querySave.forEach(function(e){var t=e.value;if(e.selValue)if(t){var a=e.selValue;t.indexOf(a)==-1&&t.push(a)}else t=[e.selValue];else t||(t=[]);f.push({name:e.name,must:e.must,remark:e.remark,value:t})});var c=[];e.getters.headerSave.forEach(function(e){c.push({name:e.name,value:e.value,remark:e.remark})});var l=[],d=!1;if(("POST"==t||"PUT"==t)&&0==e.state.bodyInfo.type){e.getters.bodySave.forEach(function(e){if(0==e.type){var t=e.value;if(e.selValue)if(t){var a=e.selValue;t.indexOf(a)==-1&&t.push(a)}else t=[e.selValue];else t||(t=[]);l.push({name:e.name,type:0,must:e.must,remark:e.remark,value:t})}else 1==e.type&&(l.push({name:e.name,type:1,must:e.must,remark:e.remark}),d=!0)});var m;for(var y in c)if("content-type"==y.toLowerCase()){m=y;break}d&&(c[m?m:"content-type"]="multipart/form-data")}var h=[];if(e.state.resultData)for(var y in e.state.resultData){var p=o.findObj(e.state.interface.outParam,y);o.handleResultData(y,e.state.resultData[y],h,p)}var v;v="object"==e.state.type?{type:0,rawRemark:"",rawMock:""}:{type:1,rawRemark:e.state.interface.outInfo?e.state.interface.outInfo.rawRemark:"",rawMock:e.state.interface.outInfo?e.state.interface.outInfo.rawMock:""};var w={_id:e.state.interface._id?e.state.interface._id:null,method:t,url:r,queryParam:f,header:c,bodyParam:l,outParam:h,restParam:s,group:{_id:e.state.hash?e.state.hash:e.state.interface.group._id},name:e.state.hash?"":e.state.interface.name,remark:e.state.hash?"":e.state.interface.remark,owner:e.state.hash?"":e.state.interface.owner,editor:e.state.hash?"":e.state.interface.editor,createdAt:e.state.hash?"":e.state.interface.createdAt,updatedAt:e.state.hash?"":e.state.interface.updatedAt,finish:e.state.interface.finish,outInfo:v,before:e.state.interface.before,after:e.state.interface.after};"POST"!=t&&"PUT"!=t||(w.bodyInfo=e.state.bodyInfo),i.set("newInterface",JSON.stringify(w));var g=!1;if("MockServer"!=a)for(var b=0;b<e.state.interface.baseUrl.length;b++){var S=new RegExp(e.state.interface.baseUrl[b]);if(S.test(a)){g=!0;break}}else g=!0;g?location.href="../projectinfo/projectinfo.html":n.confirm("检测到当前根Url不在BaseUrl之内，是否自动添加",function(){n.startHud(),u.put("/project/addurl",{id:i.get("projectId"),url:a}).then(function(e){n.stopHud(),200==e.code?(n.notify("添加baseUrl成功",1),setTimeout(function(){location.href="../projectinfo/projectinfo.html"},1200)):location.href="../projectinfo/projectinfo.html"})},function(){location.href="../projectinfo/projectinfo.html"})},init:function(e){var t=location.hash.substr(1);return t?(e.state.hash=t,u.get("/project/info",{id:i.get("projectId")}).then(function(t){return 200==t.code&&e.commit("initData",{url:"",baseUrl:t.data.baseUrls,queryParam:[],restParam:[],bodyParam:[],header:[],outParam:[],param:[],method:"GET",bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},finish:0,before:"",after:""}),t})):u.get("/interface/item",{id:i.get("interfaceId"),group:i.get("groupId"),run:1}).then(function(t){return 200==t.code?e.commit("initData",t.data):setTimeout(function(){location.href="../projectinfo/projectinfo.html"},1200),t})}}})}).call(t,a(14),a(0),a(2),a(9),a(3),a(5))}},[128]);