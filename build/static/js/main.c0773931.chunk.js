(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(81),r=n.n(c),l=(n(93),n(94),n(59)),i=n(4),u=n(5),s=n(7),m=n(6),d=n(8),p=n(82),f=n.n(p),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:this.props.logo,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."))}}]),t}(a.Component),E=n(39),v=n(28),b=n(22),O=3,j=n(87),y=n(86),g=[{id:1,text:"First Todo",completed:!1},{id:2,text:"Second Todo",completed:!0}],k=n(26),T=function(e){function t(e,n){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e,n))).onSubmit=a.onSubmit.bind(Object(k.a)(a)),a.refInput=a.refInput.bind(Object(k.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.input;t.value.trim()&&(this.props.onAdd(t.value),t.value="")}},{key:"refInput",value:function(e){this.input=e}},{key:"render",value:function(){return o.a.createElement("div",{className:"add-todo"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{className:"new-todo",ref:this.refInput}),o.a.createElement("button",{className:"add-btn",type:"submit"},"\u6dfb\u52a0")))}}]),t}(a.Component),w=Object(b.b)(null,function(e){return{onAdd:function(t){e(function(e){return{type:"TODO/ADD",completed:!1,id:O++,text:e}}(t))}}})(T),D=function(e){var t=e.onToggle,n=e.onRemove,a=e.completed,c=e.text,r=a?{checked:!0}:{checked:!1};return o.a.createElement("li",{className:"todo-item",style:{textDecoration:a?"line-through":"none"}},o.a.createElement("input",Object.assign({className:"toggle",type:"checkbox"},r,{readOnly:!0,onClick:t})),o.a.createElement("label",{className:"text"},c),o.a.createElement("button",{className:"remove",onClick:n},"\xd7"))},I="\u5168\u90e8",N="\u5df2\u5b8c\u6210",x="\u672a\u5b8c\u6210",C=function(e,t){switch(t){case I:return e;case N:return e.filter(function(e){return e.completed});case x:return e.filter(function(e){return!e.completed});default:throw new Error("unsupported filter")}},R=Object(b.b)(function(e){return{todos:C(e.todos,e.filter)}},function(e){return{onToggleTodo:function(t){e(function(e){return{type:"TODO/TOGGLE",id:e}}(t))},onRemoveTodo:function(t){e(function(e){return{type:"TODO/REMOVE",id:e}}(t))}}})(function(e){var t=e.todos,n=e.onToggleTodo,a=e.onRemoveTodo;return o.a.createElement("ul",{className:"todo-list"},t.map(function(e){return o.a.createElement(D,{key:e.id,text:e.text,completed:e.completed,onToggle:function(t){return n(e.id)},onRemove:function(t){return a(e.id)}})}))}),S=(n(79),function(){return o.a.createElement("div",{className:"todos"},o.a.createElement(w,null),o.a.createElement(R,null))}),_=Object(b.b)(function(e,t){return{active:e.filter===t.filter}},function(e,t){return{onClick:function(){e({type:"FILTER/SET",filter:t.filter})}}})(function(e){var t=e.active,n=e.children,a=e.onClick;return t?o.a.createElement("b",{className:"filter selected"},n):o.a.createElement("a",{href:"#",className:"filter not-selected",onClick:function(e){e.preventDefault(),a()}},n)}),F=(n(80),function(){return o.a.createElement("p",{className:"filters"},o.a.createElement(_,{filter:I}," ",I," "),o.a.createElement(_,{filter:N}," ",N," "),o.a.createElement(_,{filter:x}," ",x," "))});var A=function(){return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(F,null))},L=n(38),U=Object(L.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO/ADD":return[{id:t.id,text:t.text,completed:!1}].concat(Object(y.a)(e));case"TODO/TOGGLE":return e.map(function(e){return e.id===t.id?Object(j.a)({},e,{completed:!e.completed}):e});case"TODO/REMOVE":return e.filter(function(e){return e.id!==t.id});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER/SET":return t.filter;default:return e}}}),W=Object(L.c)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),G=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(s.a)(this,Object(m.a)(t).call(this,e)),console.log("todoId: ".concat(e.match.params.todoId)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{store:W},o.a.createElement("h1",null,"Todo list Demo"),o.a.createElement(A,null))}}]),t}(a.Component),V=(n(154),n(85));var X=function(e){for(var t={},n=e.search.substring(1).split("&"),a=0;a<n.length;a++){var o=n[a].indexOf("=");if(-1!==o){var c=n[a].substring(0,o),r=n[a].substring(o+1);r=decodeURIComponent(r),t[c]=r}}return t},M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"\u8bf7\u8f93\u5165\u90ae\u7bb1\uff1a",o.a.createElement("input",{ref:this.props.inputRef,value:this.props.email,onChange:this.props.handleEmail}),o.a.createElement("p",null," ",o.a.createElement(V.a,{inline:!0,size:"small",type:"primary",onClick:this.props.inputFocus},"Input Focus")))}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={email:X(e.location).email?X(e.location).email:"me@johnny.cn"},n.textInput=o.a.createRef(),n.inputFocus=n.inputFocus.bind(Object(k.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"inputFocus",value:function(){console.log(this.textInput.current.value),this.textInput.current.focus()}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{style:{margin:"5vh 0"}},o.a.createElement("div",null,"\u7528\u6237\u90ae\u7bb1\uff1a",this.state.email),o.a.createElement(M,{inputRef:this.textInput,inputFocus:this.inputFocus,name:"email",email:this.state.email,handleEmail:this.handleEmail.bind(this)}))}}]),t}(a.Component),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hello, world!"),o.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."))}}]),t}(a.Component),J=(n(144),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e,t,n){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,{logo:f.a}),o.a.createElement(l.a,null),o.a.createElement("div",{className:"link-list"},o.a.createElement(E.b,{to:"/",replace:!0},"Home"),o.a.createElement(E.b,{to:{pathname:"/email",search:"?email=me@johnny.com"},activeClassName:"selected",replace:!0},"Email"),o.a.createElement(E.b,{to:"/todo/1",activeClassName:"selected",replace:!0},"Todo list")),o.a.createElement(l.a,null),o.a.createElement(v.a,{exact:!0,path:"/",component:H}),o.a.createElement(v.a,{path:"/email",component:B}),o.a.createElement(v.a,{path:"/todo/:todoId",component:G})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=document.getElementById("root");r.a.render(o.a.createElement(J,null),z),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},88:function(e,t,n){e.exports=n(153)},93:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.c0773931.chunk.js.map