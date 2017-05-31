webpackJsonp([1],{100:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(80),o=s.n(n);e.default={created:function(){var t=this.getUserInfo();this.name=null!==t?t.name:"",this.getTodoList()},data:function(){return{name:"",todos:"",activeName:"first",list:[],count:0}},computed:{Done:function(){var t=0,e=this.list.length;for(var s in this.list)1==this.list[s].status&&(t+=1);return this.count=t,t==e||0==e}},methods:{finished:function(t){this.$set(this.list[t],"status",!0),this.$message({type:"success",message:"任务完成"})},update:function(t){var e=this;this.$http.put("/api/todolist/"+this.name+"/"+this.list[t].content+"/"+this.list[t].status).then(function(t){200===t.status?(e.$message({type:"success",message:"任务状态更新成功！"}),e.getTodoList()):e.$message.error("任务状态更新失败！")},function(t){e.$message.error("任务状态更新失败！"),console.log(t)})},getUserInfo:function(){var t=sessionStorage.getItem("demo-token");if(null!==t){return o()(t)}return null},getTodoList:function(){var t=this;this.$http.get("/api/todolist/"+this.name).then(function(e){200===e.status?t.list=e.data:t.$message.error("获取列表失败！")},function(e){t.$message.error("获取列表失败！"),console.log(e)})},addTodos:function(){var t=this;if(""!==this.todos){var e={status:!1,content:this.todos,username:this.name};console.log(e),this.$http.post("/api/todolist",e).then(function(e){200===e.status?(t.$message({type:"success",message:"创建成功！"}),t.getTodoList()):t.$message.error("创建失败！")},function(e){t.$message.error("创建失败！"),console.log(e)}),this.todos=""}},remove:function(t){var e=this;this.$http.delete("/api/todolist/"+this.name+"/"+this.list[t].content).then(function(t){200===t.status?(e.$message({type:"success",message:"任务删除成功！"}),e.getTodoList()):e.$message.error("任务删除失败！")},function(t){e.$message.error("任务删除失败！"),console.log(t)})}}}},101:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),o=s(35),a=s.n(o),i=s(31),r=s.n(i),l=s(33),u=(s.n(l),s(34)),c=(s.n(u),s(38)),d=s(36),p=s.n(d),f=s(37),m=s.n(f),h=s(32),v=s.n(h);n.default.prototype.$http=v.a,n.default.config.productionTip=!1,n.default.use(r.a),n.default.use(c.a);var g=new c.a({mode:"history",routes:[{path:"/",component:p.a},{path:"/todolist",component:m.a},{path:"*",redirect:"/"}]});g.beforeEach(function(t,e,s){var o=sessionStorage.getItem("demo-token");"/"==t.path?null!==o?s("/todolist"):s():null!==o?(n.default.prototype.$http.defaults.headers.common.Authorization="Bearer "+o,s()):s("/")}),new n.default({el:"#app",router:g,template:"<App/>",components:{App:a.a}})},105:function(t,e){},106:function(t,e){},107:function(t,e){},110:function(t,e,s){t.exports=s.p+"static/img/todo.af9f83e.jpg"},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"content"},[s("el-col",{attrs:{xs:{span:20,offset:2},sm:{span:8,offset:8}}},[s("h1",{staticClass:"animated jello title"},[t._v(" 欢迎："+t._s(t.name)+"！你的待办事项是：")]),t._v(" "),s("el-input",{attrs:{placeholder:"请输入待办事项"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addTodos(e)}},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}}),t._v(" "),s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"待办事项",name:"first"}},[s("el-col",{attrs:{xs:24}},[t.Done?t.Done?s("div",[t._v("\n            暂无待办事项\n          ")]):t._e():[t._l(t.list,function(e,n){return[0==e.status?s("div",{staticClass:"todo-list"},[s("span",{staticClass:"item"},[t._v("\n                  "+t._s(n+1)+". "+t._s(e.content)+"\n                ")]),t._v(" "),s("span",{staticClass:"pull-right"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.finished(n)}}},[t._v("完成")]),t._v(" "),s("el-button",{attrs:{size:"small",plain:!0,type:"danger"},on:{click:function(e){t.remove(n)}}},[t._v("删除")])],1)]):t._e()]})]],2)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"已完成事项",name:"second"}},[t.count>0?[t._l(t.list,function(e,n){return[1==e.status?s("div",{staticClass:"todo-list"},[s("span",{staticClass:"item finished"},[t._v("\n                "+t._s(n+1)+". "+t._s(e.content)+"\n              ")]),t._v(" "),s("span",{staticClass:"pull-right"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.update(n)}}},[t._v("还原")])],1)]):t._e()]})]:s("div",[t._v("\n          暂无已完成事项\n        ")])],2)],1)],1)],1)},staticRenderFns:[]}},112:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticStyle:{width:"200px"},attrs:{src:s(110)}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},113:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{staticClass:"content"},[s("el-col",{attrs:{xs:24,sm:{span:6,offset:9}}},[s("h1",{staticClass:"animated rubberBand title"},[t._v("欢迎登录你的Todo")]),t._v(" "),s("el-row",[s("el-input",{staticClass:"input",attrs:{placeholder:"账号",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("el-input",{staticClass:"input",attrs:{placeholder:"密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.loginToDo}},[t._v("登录")])],1)],1)],1)],1)},staticRenderFns:[]}},33:function(t,e){},34:function(t,e){},35:function(t,e,s){s(106);var n=s(16)(s(98),s(112),null,null);t.exports=n.exports},36:function(t,e,s){s(107);var n=s(16)(s(99),s(113),"data-v-786a95c9",null);t.exports=n.exports},37:function(t,e,s){s(105);var n=s(16)(s(100),s(111),null,null);t.exports=n.exports},98:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},99:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{username:"",password:""}},methods:{loginToDo:function(){var t=this,e={username:this.username,password:this.password};this.$http.post("/auth/user",e).then(function(e){e.data.success?(sessionStorage.setItem("demo-token",e.data.token),console.log(e.data.token),t.$message({type:"success",message:"登录成功！"}),t.$router.push("/todolist")):(t.$message.error(e.data.message),sessionStorage.setItem("demo-token",null))},function(e){t.$message.error("请求错误！"),sessionStorage.setItem("demo-token",null)})}}}}},[101]);
//# sourceMappingURL=app.83bd27315270763a402d.js.map