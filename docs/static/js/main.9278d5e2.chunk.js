(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){e.exports={addTitle:"List_addTitle__r_pqQ",completed:"List_completed__3CCIH",description:"List_description__tZeLi",deleteIcon:"List_deleteIcon__2aELS",listContainer:"List_listContainer__-c3K8"}},26:function(e,t,n){e.exports={addTitle:"Form_addTitle__1kd8e",form:"Form_form__3m25P",formContainer:"Form_formContainer__1RRHE",input:"Form_input__39fnv"}},27:function(e,t,n){e.exports={dividerContainer:"App_dividerContainer__2RvQx",subtitle:"App_subtitle__3xZwZ",title:"App_title__bTwlX",verticalDivider:"App_verticalDivider__34o1g"}},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(15),r=n.n(c),o=n(18),d=n(19),s=n(45),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(s.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{done:!e.done}):e}));default:return e}},j=n(87),p=n(80),u=n(85),b=n(36),O=n(81),m=n(30),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(o.a)(t,2),i=n[0],c=n[1],r=function(){c(e)},s=function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},i),{},Object(m.a)({},t.name,t.value)))};return[i,s,r]},x=n(26),f=n.n(x),_=n(2),v=function(e){var t=e.dispatch,n=h({description:""}),a=Object(o.a)(n,3),i=a[0].description,c=a[1],r=a[2];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(b.a,{variant:"h5",className:f.a.addTitle,children:"Agregar TODO"}),Object(_.jsx)("form",{onSubmit:function(e){(e.preventDefault(),i.trim().length<=1)||(!function(e){t({type:"add",payload:e})}({id:(new Date).getTime(),desc:i,done:!1}),r())},className:f.a.form,children:Object(_.jsxs)(p.a,{container:!0,direction:"column",className:f.a.formContainer,children:[Object(_.jsx)("input",{type:"text",name:"description",placeholder:"add a new todo...",autoComplete:"off",value:i,onChange:c,className:f.a.input}),Object(_.jsx)(O.a,{type:"submit",children:"Agregar"})]})})]})},g=n(84),C=n(82),y=n(83),N=n(44),T=n.n(N),w=n(14),D=n.n(w),A=function(e){var t=e.todo,n=e.handleDelete,a=e.handleToggle;return Object(_.jsx)(p.a,{children:Object(_.jsx)(C.a,{children:Object(_.jsxs)(p.a,{container:!0,direction:"row",children:[Object(_.jsx)(p.a,{item:!0,xs:!0,children:Object(_.jsx)(b.a,{variant:"h5",className:!1===t.done?D.a.description:D.a.completed,onClick:function(){return a(t.id)},children:t.desc})}),Object(_.jsx)(p.a,{item:!0,xs:!0,children:Object(_.jsx)(y.a,{onClick:function(){return n(t.id)},children:Object(_.jsx)(T.a,{className:D.a.deleteIcon})})})]})})},t.id)},S=function(e){var t=e.todos,n=e.dispatch,a=function(e){n({type:"delete",payload:e})},i=function(e){n({type:"toggle",payload:e})};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(b.a,{variant:"h5",className:D.a.addTitle,children:"Listado de TODOS"}),Object(_.jsx)(g.a,{className:D.a.listContainer,children:t.map((function(e){return Object(_.jsx)(A,{todo:e,handleDelete:a,handleToggle:i},e.id)}))})]})},L=n(27),I=n.n(L),F=function(){return JSON.parse(localStorage.getItem("todos"))||[]},k=function(){var e=Object(a.useReducer)(l,[],F),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(_.jsxs)(j.a,{children:[Object(_.jsx)(p.a,{className:I.a.title,children:"ToDo App"}),Object(_.jsx)(p.a,{className:I.a.subtitle,children:"A simple and powerfull Todo App on React!"}),Object(_.jsx)(p.a,{className:I.a.dividerContainer,children:Object(_.jsx)(u.a,{})}),Object(_.jsxs)(p.a,{container:!0,direction:"row",spacing:5,children:[Object(_.jsx)(p.a,{item:!0,xs:!0,children:Object(_.jsx)(v,{dispatch:i})}),Object(_.jsx)(p.a,{className:I.a.verticalDivider,children:Object(_.jsx)(u.a,{orientation:"vertical"})}),Object(_.jsx)(p.a,{item:!0,xs:!0,children:Object(_.jsx)(S,{dispatch:i,todos:n})})]})]})};n(67);r.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.9278d5e2.chunk.js.map