(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(15),n(10)),s=n(2),u=n(3),l=n(4),h=n(6),d=n(5),b=n(0),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget.value,a=t.currentTarget.name;e.setState(Object(s.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("h3",{children:"Name"}),Object(b.jsx)("input",{value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(b.jsx)("h3",{children:"Number"}),Object(b.jsx)("input",{value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);var j=function(e){var t=e.contacts;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[e.name,": ",e.number]},e.id)}))})})};var f=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Find Contacts by name"}),Object(b.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},O=n(9),p=n.n(O),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(s.a)({},a,n))},e.addContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{name:t.name,id:p()(),number:t.number}])}}))},e.handleFilterChange=function(t){var n=t.target.value;e.setState({filter:n})},e.filterByName=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.filterByName();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{onSubmit:this.addContact,contacts:t}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(f,{value:n,onChange:this.handleFilterChange}),Object(b.jsx)(j,{contacts:a})]})}}]),n}(a.Component);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.83425379.chunk.js.map