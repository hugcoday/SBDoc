webpackJsonp([1],{124:function(e,t,a){(function(e,t,r,n){var i=a(6),o=a(24),c=a(23),d=a(21),f=a(20),s=a(25),u=a(13),m=a(28),h=a(27),p=a(22),l=a(41),y=a(10);e.get("id")?e.get("projectId")||(location.href="../project/project.html"):location.href="../login/login.html";new t({el:"#app",data:{session:r.clone(e.raw()),savePending:!1,mockUrl:y.baseUrl+"/mock/"+e.get("projectId")},store:l,components:{mainnav:i,interfacelist:o,inparamquery:c,inparamheader:d,inparambody:f,outparam:s,valuelist:u,restparam:m,rawtext:h,inparaminject:p},watch:{preview:function(e){l.commit("changePreview",e)},"interfaceEdit.url":function(e){/http\:\/\/|https\:\/\//i.test(e)&&r.tip("请不要在路径里面包含baseUrl",0)}},computed:{preview:function(){return l.state.preview},drawMix:function(){return l.state.drawMix},interfaceEdit:function(){return l.state.interfaceEdit},interfaceList:function(){return l.state.interfaceList},outInfo:function(){return l.state.outInfo},bodyInfo:function(){return l.state.bodyInfo},param:function(){return l.state.param},querySave:function(){return l.getters.querySave},headerSave:function(){return l.getters.headerSave},bodySave:function(){return l.getters.bodySave},paramTab:function(){return"Param ("+l.getters.paramCount+")"},queryTab:function(){return"Query ("+l.getters.queryCount+")"},headerTab:function(){return"Header ("+l.getters.headerCount+")"},bodyTab:function(){return"Body ("+(0==l.state.bodyInfo.type?l.getters.bodyCount:"Raw")+")"},editInfo:function(){return this.interfaceEdit?this.interfaceEdit.createdAt?(this.interfaceEdit.owner?this.interfaceEdit.owner.name:"")+"在"+this.interfaceEdit.createdAt+"创建，最近修改被"+(this.interfaceEdit.editor?this.interfaceEdit.editor.name:"")+"在"+this.interfaceEdit.updatedAt+"改动":"接口尚未保存":""},rawMock:function(){return l.getters.rawMock}},methods:{addGroup:function(){r.input("请输入分组名称",function(t){if(!t.value)return r.tip("请输入分组名称",0),!1;var a={};a.id=e.get("projectId"),a.name=t.value,r.startHud("#body"),l.dispatch("addGroup",a).then(function(e){r.stopHud(),200==e.code?r.notify("新建成功",1):r.notify(e.msg,0)})})},importJSON:function(){r.inputMul(this,"请输入JSON",function(e){if(!e)return r.tip("请输入JSON",0),!1;var t;try{t=JSON.parse(e)}catch(e){return r.tip("JSON不符合格式",0),!1}return l.commit("importResult",t),!0})},importQuery:function(){r.inputMul(this,"请输入Query字符串，比如:name=sx&pwd=111",function(e){return e?(l.commit("importQuery",e),!0):(r.tip("请输入Query字符串",0),!1)})},importHeader:function(){r.inputMul(this,"请输入HTTP Header字符串，以回车分割，比如:\nRequest Method:GET\nStatus Code:200",function(e){return e?(l.commit("importHeader",e),!0):(r.tip("请输入HTTP Header字符串",0),!1)})},importBody:function(){r.inputMul(this,"请输入Body Key-Value字符串,文件类型的值用[FILE]代替,比如:name=sx&pwd=111&file=[FILE]",function(e){return e?(l.commit("importBody",e),!0):(r.tip("请输入Body Key-Value字符串",0),!1)})},changeMethod:function(){l.commit("changeMethod")},save:function(){if(!this.interfaceEdit.name)return void r.tip("请填入接口名称",0);if(!this.interfaceEdit.url)return void r.tip("请填入接口地址",0);this.savePending=!0;var e=this;l.dispatch("save").then(function(t){e.savePending=!1,200==t.code?r.notify("保存成功",1):r.notify(t.msg,0)})},changeUrl:function(e){l.commit("changeUrl",e)},changePreview:function(e){l.commit("setPreview",e)},run:function(){if(!this.interfaceEdit._id)return void r.tip("请先保存接口！",0);e.set("interfaceId",this.interfaceEdit._id),e.set("groupId",this.interfaceEdit.group._id),window.open("../run/run.html","_blank")},methodColor:function(e){return n.methodColor(e)}},created:function(){l.dispatch("getAllInterface").then(function(){r.stopLoading()})}});r.ready(function(){r.startLoading()})}).call(t,a(3),a(0),a(2),a(9))},41:function(e,t,a){(function(t,a,r,n,i,o){e.exports=new t.Store({state:{interfaceList:[],interface:null,interfaceEdit:null,query:[{name:"",must:0,remark:""}],header:[{name:"",value:"",remark:""}],body:[{name:"",type:0,must:0,remark:""}],param:[],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},outInfo:{type:0,rawRemark:"",rawMock:""},result:[{name:"",must:0,type:0,remark:"",show:0,mock:"",drag:1}],preview:"",drawMix:[]},getters:{querySave:function(e,t){return e.query.filter(function(e){return!!e.name})},headerSave:function(e,t){return e.header.filter(function(e){return!!e.name})},bodySave:function(e,t){return e.body.filter(function(e){return!!e.name})},queryCount:function(e,t){return t.querySave.length},headerCount:function(e,t){return t.headerSave.length},bodyCount:function(e,t){return t.bodySave.length},paramCount:function(e,t){return e.param.length},rawMock:function(e){return a.mock(e.outInfo.rawMock)}},mutations:{initInterfaceList:function(e,t){for(var a=[],r=0;r<t.length;r++){t[r].show=0;for(var n=0;n<t[r].data.length;n++)t[r].data[n].select=0;a.push(t[r])}e.interfaceList=a},setPreview:function(e,t){e.preview=t},setDrawMix:function(e,t){e.drawMix=t},setInterface:function(e,t){e.interface=t},setInterfaceEdit:function(e,t){e.interfaceEdit=t},setInterfaceList:function(e,t){e.interfaceList=t},initParam:function(e,t){e.query.splice(0,e.query.length),e.header.splice(0,e.header.length),e.body.splice(0,e.body.length),e.result.splice(0,e.result.length),e.param.splice(0,e.param.length),e.query.push({name:"",must:0,remark:""}),e.header.push({name:"",value:"",remark:""}),e.body.push({name:"",type:0,must:0,remark:""}),e.result.push({name:"",must:1,type:0,remark:"",show:1,drag:1,mock:""}),e.bodyInfo={type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},e.outInfo={type:0,rawRemark:"",rawMock:""}},initInterface:function(e,t){e.interfaceEdit.queryParam.length>0&&(e.query=e.interfaceEdit.queryParam),e.interfaceEdit.bodyParam.length>0&&(e.body=e.interfaceEdit.bodyParam),e.interfaceEdit.header.length>0&&(e.header=e.interfaceEdit.header),e.interfaceEdit.outParam.length>0&&(a.initResultShow(e.interfaceEdit.outParam),e.result=e.interfaceEdit.outParam),e.interfaceEdit.restParam.length>0&&(e.param=e.interfaceEdit.restParam),e.interfaceEdit.bodyInfo&&(e.bodyInfo=e.interfaceEdit.bodyInfo,void 0===e.bodyInfo.rawText&&r.set(e.bodyInfo,"rawText",""),void 0===e.bodyInfo.rawTextRemark&&r.set(e.bodyInfo,"rawTextRemark",""),void 0===e.bodyInfo.rawFileRemark&&r.set(e.bodyInfo,"rawFileRemark","")),e.interfaceEdit.outInfo&&(e.outInfo=e.interfaceEdit.outInfo)},moveInterface:function(e,t){e.interfaceEdit&&(e.interfaceEdit.group._id=t)},importResult:function(e,t){var r=[];for(var n in t)a.handleResultData(n,t[n],r,null,1);e.result=r},importQuery:function(e,t){for(var a=decodeURI(n.trim(t)),r=[],i=a.split("&"),o=0;o<i.length;o++){var c=i[o].split("=");c.length>0&&r.push({name:c[0],must:1,remark:"",value:c[1]?[c[1]]:[]})}e.query=r},importHeader:function(e,t){for(var a=n.trim(t).split("\n"),r=[],i=0;i<a.length;i++){var o=n.trim(a[i]),c=o.indexOf(":"),d="",f="";c==-1?d=o:(d=n.trim(o.substr(0,c)),f=n.trim(o.substr(c+1))),d&&r.push({name:d,value:f,remark:""})}0==r.length&&r.push({name:"",value:"",remark:""}),e.header=r},importBody:function(e,t){for(var a=decodeURI(n.trim(t)),r=[],i=a.split("&"),o=0;o<i.length;o++){var c=i[o].split("=");c.length>0&&r.push({name:c[0],type:"[FILE]"==c[1]?1:0,must:1,remark:"",value:"[FILE]"!=c[1]&&c[1]?[c[1]]:[]})}e.body=r},changeMethod:function(e){if("POST"==e.interfaceEdit.method||"PUT"==e.interfaceEdit.method)if(1!=e.header.length||e.header[0].name){for(var t=!1,a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){t=!0;break}}t||e.header.push({name:"Content-Type",value:"application/x-www-form-urlencoded",remark:""})}else e.header[0].name="Content-Type",e.header[0].value="application/x-www-form-urlencoded";else for(var a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){e.header.length>1?e.header.splice(a,1):(e.header[0].name="",e.header[0].value="",e.header[0].remark="");break}}},changeUrl:function(e,t){if(t){var a=[],r=t.match(/\{([^\s]+?)\}/g);if(r)for(var n=0;n<r.length;n++){for(var i=r[n].substr(1,r[n].length-2),o=!1,c=0;c<e.param.length;c++)if(i==e.param[c].name){o=!0,a.push(e.param[c]);break}o||a.push({name:i,remark:"",value:[]})}e.param=a}},changePreview:function(e,t){if(1==t&&0==i.get("role")){var r={},n=a.resultSave(e.result);a.convertToJSON(n,r),e.drawMix=a.format(JSON.stringify(r),1,n).draw}}},actions:{add:function(e,t){e.state.interface&&(e.state.interface.select=0),e.commit("initParam"),e.commit("setInterface",null),t.item?(e.commit("setInterfaceEdit",t.item),e.commit("initInterface")):e.commit("setInterfaceEdit",{name:"",group:{_id:t.id},url:"",remark:"",method:"GET",finish:0,outParam:[],bodyParam:[],queryParam:[],header:[],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},outInfo:{type:0,rawRemark:"",rawMock:""},restParam:[],before:"",after:""})},getAllInterface:function(e){return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){if(200==t.code){if(e.commit("initInterfaceList",t.data),i.get("newInterface")){var a=JSON.parse(i.get("newInterface"));if(a._id){for(var r=0;r<e.state.interfaceList.length;r++){for(var n=e.state.interfaceList[r],o=!1,c=0;c<n.data.length;c++){var d=n.data[c];if(d._id==a._id){n.show=1,e.commit("setInterface",d),d.select=1,e.commit("setInterfaceEdit",a),o=!0;break}}if(o)break}e.commit("initParam"),e.state.interface?e.commit("initInterface"):e.commit("setInterfaceEdit",null)}else e.dispatch("add",{id:a.group._id,item:a});i.remove("newInterface")}}else setTimeout(function(){window.close()},1200)})},refreshData:function(e,t){e.commit("setInterfaceList",a.refreshInterface(e.state.interfaceList,t)),e.state.interface&&(e.state.interface.select=0),e.commit("setInterface",null),e.commit("setInterfaceEdit",null)},refresh:function(e){return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},renameGroup:function(e,t){return o.post("/group/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},removeGroup:function(e,t){return o.delete("/group/item",t).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},clear:function(e){return o.delete("/project/clear",{id:i.get("projectId")}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},removeInterface:function(e,t){return o.delete("/interface/item",{id:t}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},destroyInterface:function(e,t){return o.delete("/interface/destroyitem",{id:t}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},info:function(e,t){var a;return o.get("/interface/item",{id:t.item1._id,group:t.item._id}).then(function(r){if(200==r.code){if(t.item1.name=r.data.name,t.item1.method=r.data.method,a=r.data,r.data.change)return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){return 200==t.code&&(e.dispatch("refreshData",t.data),e.dispatch("showInfo",{data:a._id,data1:a})),t});e.dispatch("showInfo",{data:r.data,data1:t.item1})}else item.splice(t.index,1),e.dispatch("showInfo",{data:null,data1:null});return r})},showInfo:function(e,t){if(e.state.interface&&(e.state.interface.select=0),null==t.data)e.commit("setInterface",null);else if("string"==typeof t.data)for(var r=0;r<e.state.interfaceList.length;r++){for(var n=e.state.interfaceList[r],o=!1,c=0;c<n.data.length;c++){var d=n.data[c];if(d._id==t.data){n.show=1,e.commit("setInterface",d),d.select=1,e.commit("setInterfaceEdit",t.data1),o=!0;break}}if(o)break}else e.commit("setInterface",t.data1),e.state.interface.select=1,e.commit("setInterfaceEdit",t.data);if(e.commit("initParam"),e.state.interface?e.commit("initInterface"):e.commit("setInterfaceEdit",null),0==i.get("role"))e.commit("setPreview",0);else{e.commit("setPreview",1);var n={},f=a.resultSave(e.state.result);a.convertToJSON(f,n),e.commit("setDrawMix",a.format(JSON.stringify(n),1,f).draw)}},move:function(e,t){return o.put("/interface/move",{id:t.obj.id,group:t.group._id},{"content-type":"application/x-www-form-urlencoded"}).then(function(a){if(200==a.code){t.group.show=1;for(var r=0;r<e.state.interfaceList.length;r++){var n=e.state.interfaceList[r];if(n._id==t.obj.group){var i=n.data[t.obj.index];i.select&&e.commit("moveInterface",t.group._id),n.data.splice(t.obj.index,1),t.group.data.push(i);break}}}return a})},addGroup:function(e,t){return o.post("/group/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){return 200==t.code&&e.commit("initInterfaceList",t.data),t})},save:function(e){var t={name:e.state.interfaceEdit.name,url:e.state.interfaceEdit.url,group:e.state.interfaceEdit.group._id,remark:e.state.interfaceEdit.remark,project:i.get("projectId"),method:e.state.interfaceEdit.method,finish:e.state.interfaceEdit.finish,before:e.state.interfaceEdit.before,after:e.state.interfaceEdit.after};if(e.state.interfaceEdit._id&&(t.id=e.state.interfaceEdit._id),t.header=JSON.stringify(e.getters.headerSave),t.queryparam=JSON.stringify(e.getters.querySave),"POST"==e.state.interfaceEdit.method||"PUT"==e.state.interfaceEdit.method){0==e.state.bodyInfo.type?t.bodyparam=JSON.stringify(e.getters.bodySave):t.bodyparam="[]";var c=n.clone(e.state.bodyInfo);1==c.type&&(0==c.rawType?c.rawFileRemark="":(c.rawText="",c.rawTextRemark="")),t.bodyinfo=JSON.stringify(c)}if(0==e.state.outInfo.type){t.outparam=JSON.stringify(a.resultSave(e.state.result));var d=n.clone(e.state.outInfo);d.rawRemark="",d.rawMock="",t.outinfo=JSON.stringify(d)}else t.outparam="[]",t.outinfo=JSON.stringify(e.state.outInfo);return t.restparam=JSON.stringify(e.state.param),o.post("/interface/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){if(200==t.code)if("string"==typeof t.data)e.state.interface.name=e.state.interfaceEdit.name,e.state.interface.method=e.state.interfaceEdit.method,r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"updatedAt",n.getNowFormatDate("yyyy-MM-dd hh:mm:ss"));else if(t.data instanceof Array){r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"updatedAt",n.getNowFormatDate("yyyy-MM-dd hh:mm:ss")),e.state.interfaceList=a.refreshInterface(e.state.interfaceList,t.data);for(var o=0;o<e.state.interfaceList.length;o++){for(var c=e.state.interfaceList[o],d=!1,f=0;f<c.data.length;f++){var s=c.data[f];if(s._id==e.state.interfaceEdit._id){c.show=1,e.state.interface=s,s.select=1,d=!0;break}}if(d)break}}else{e.state.interfaceEdit._id=t.data._id,r.set(e.state.interfaceEdit,"owner",{name:i.get("name")}),r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"createdAt",t.data.createdAt),r.set(e.state.interfaceEdit,"updatedAt",t.data.updatedAt);for(var o=0;o<e.state.interfaceList.length;o++){var c=e.state.interfaceList[o];if(c._id==e.state.interfaceEdit.group._id){var u={_id:t.data._id,name:t.data.name,method:t.data.method,select:1};c.data.push(u),c.show=1,e.state.interface=u;break}}}return t})}}})}).call(t,a(14),a(9),a(0),a(2),a(3),a(5))}},[124]);