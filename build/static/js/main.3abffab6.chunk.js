(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,n){},174:function(e,t,n){e.exports=n(365)},248:function(e,t){},250:function(e,t){},264:function(e,t){},266:function(e,t){},294:function(e,t){},296:function(e,t){},297:function(e,t){},302:function(e,t){},304:function(e,t){},323:function(e,t){},335:function(e,t){},338:function(e,t){},365:function(e,t,n){"use strict";n.r(t);var a,o,c,r,l,i,s,u,m,d,p,b,f,h,g,E,O,x,j,w,v,k,y,S,T=n(0),N=n.n(T),C=n(29),R=n.n(C),P=n(9),I=n(15),z=n(12),L=n(18),D=n(1),A=n(4),U=n(67),F=n.n(U),B=function(e){"undefined"!==window&&F.a.remove(e,{expires:1})},G=function(e){if("undefined"!==window)return F.a.get(e)},M=function(e,t){"undefined"!==window&&localStorage.removeItem(e,JSON.stringify(t))},V=function(e,t){var n,a;n="token",a=e.data.token,"undefined"!==window&&F.a.set(n,a,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},_=function(e){B("token"),M("user"),e()},H=function(){if("undefined"!==window&&G("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},J=function(e,t){if(console.log("update user in local storage",e),"undefined"!==typeof window){var n=JSON.parse(localStorage.getItem("user"));n=e.data,localStorage.setItem("user",JSON.stringify(n))}t()},q=n(2),W=n(64),K=q.a.ul(a||(a=Object(A.a)(["\n\ttext-align: center;\n\tdisplay: flex;\n\tmargin: 0;\n\tpadding: 0;\n\tflex-grow: 0;\n\tmin-height: 5rem;\n\twidth: 100%;\n\tposition: fixed;\n\tz-index: 1000;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: white;\n\tbox-shadow: 2px 2px 8px rgba(0,0,0,0.2);\n\tlist-style: none;\n\ta { \n\t\tcolor: black; \n\t\tfont-size: 1.25em;\n\t\tpadding 0.5em 0 0 0;\n\t\ttext-decoration: none!important;\n\t\t}\n\t\n\n\tli.form-button {\n\t\tbackground-color: white;\n\t\twidth: 100%;\n\t\tmargin-top: 0px;\n\t\tline-height: 5rem;\n\t\theight: 5rem;\n\t\tbutton {\n\t\t\tborder: none;\n\t\t\tbackground-color: white;\n\t\t\n\t\t}\n\t\t\n\t}\n"]))),Q="375px",X="425px",Y="768px",Z="1024px",$="1440px",ee="2560px",te={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(Q,")"),mobileL:"(min-width: ".concat(X,")"),tablet:"(min-width: ".concat(Y,")"),laptop:"(min-width: ".concat(Z,")"),laptopL:"(min-width: ".concat($,")"),desktop:"(min-width: ".concat(ee,")"),desktopL:"(min-width: ".concat(ee,")")},ne=q.a.span(o||(o=Object(A.a)(["\n  position: fixed;\n  bottom: 88px;\n  right: 8px;\n  z-index: 2000;\n  padding: 2px;\n  border-radius: 150px;\n  background-color: #ccf5ff;\n"]))),ae=Object(q.a)(W.a)(c||(c=Object(A.a)(["\n  width: 30px;\n  height: 30px;\n  color: #b9b7b7;\n  transition: .25s ease color;\n  display: inline-block;\n  padding: 0;\n  transition: color ease 0.5s;\n  &:hover { \n    color: blue;\n  }\n"]))),oe=q.a.li(r||(r=Object(A.a)(["\n  margin-top: 0;\n  list-style: none;\n  transition: 0.5s;\n  padding: 24px 0 0 0;\n  width: 33.3%;\n  transition-property: color, background-color;\n  @media "," {\n    width: 33.3%;\n  }\n  \n  &:hover { background-color: gainsboro; color: blue }\n  span {\n    display: inline-block;\n    font-size: 1.14em;\n  \n    \n    @media "," {\n      font-size: 1.3em;\n      padding-top: 1px;\n    }\n    @media "," {\n      font-size: 1.26em\n    }\n    @media "," {\n      font-size: 1.26em\n    }\n \n  }\n  a {\n    transition: 0.5s;\n    transition-property: color;\n    font-size: 1.15em;\n    @media "," {\n      font-size: 1.35em;\n    }\n    &:hover {\n      color: white;\n    }\n  }\n  span {\n    color: black;\n    transition: 0.5s;\n    transition-property: color;\n    &:hover { \n      color: white;\n    }\n  }\n\n"])),te.tablet,te.laptop,te.tablet,te.tablet,te.tablet),ce=Object(z.h)((function(e){var t=e.children,n=e.history,a=e.match,o=Object(T.useState)(!0),c=Object(P.a)(o,2),r=c[0],l=c[1],i=function(e){if(a.path===e)return{color:"royalblue"}};return N.a.createElement(T.Fragment,null,N.a.createElement(K,{className:r?"showNav":"hideNav"},!H()&&N.a.createElement(T.Fragment,null,N.a.createElement(oe,null,N.a.createElement(I.b,Object(L.a)({style:{textDecoration:"none"},to:"/"},"style",i("/")),"Home")),N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/signin",style:i("/signin")},"Log in")),N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/signup",style:i("/signup")},"Sign up"))),H()&&"admin"===H().role&&N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/admin",style:i("/private")},H().name)),H()&&"subscriber"===H().role&&N.a.createElement(T.Fragment,null,N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/private",style:i("/private")},H().name)),N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/collections",style:i("/collections")},"Collections")),N.a.createElement(oe,null,N.a.createElement(I.b,{to:"/search",style:i("/search")},"Search"))),H()&&N.a.createElement(T.Fragment,null,N.a.createElement(oe,{className:"Layout-item"},N.a.createElement("span",{onClick:function(){return _((function(){n.push("/")}))}},"Signout")))),N.a.createElement("div",null,t),H()&&N.a.createElement(ne,{onClick:function(){l(!r)}},N.a.createElement(ae,null)))})),re=n(10),le=n.n(re),ie=(n(45),n(6)),se=(n(32),q.a.button(l||(l=Object(A.a)(["\n\tdisplay: block;\n\tpadding: 8px;\n\ttext-align: center;\n\tfont-size: 1em;\n\ttext-decoration: none;\n\tletter-spacing: 1.5px;\n\ttransition-property: background-color, color, border;\n\ttransition: 0.5s;\n\tborder: none ;\n\tcolor: black;\n\tbackground-color: white;\n\tflex-grow: 1;\n\tmin-width: 0;\n\ta {\n\t\ttext-decoration: none;\n\t}\n\t&:hover {\n\t\tcolor: royalblue;\n\t\ta { font-weight: bold; }\n\t\tbackground-color: gainsboro;\n\t\tborder-color: cyan;\n\t}\n\t:focus {\n\t\toutline: none;\n\t}\n"])))),ue=q.a.form(i||(i=Object(A.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nwidth: 320px;\npadding: 2.5em 0;\nbackground-color: #fff;\nbox-shadow: 2px 2px 8px rgba(0,0,0,0.2);\nLink {\n\ttext-decoration: none;\n}\n"]))),me=q.a.div(s||(s=Object(A.a)(["\n\tborder: none;\n\tcolor: black;\n\tletter-spacing: 0.7px;\n\tlabel {\n\t\tcolor: grey;\n\t\tdisplay: block;\n\t}\n\tpadding: 4px 0;\n\t\n\ttext-align: center;\n\tinput {\n\t\ttext-align: center;\n\t\theight: 35px;\n\t\twidth: 200px;\n\t\tborder: none;\n\t\tborder: 2px solid lightgrey;\n\t\tborder-radius: 6px;\n\t\tpadding: 10px;\n\t\t@media ","{\n\t\t\twidth: 250px;\n\t\t}\n\t}\n"])),te.tablet),de=q.a.div(u||(u=Object(A.a)(["\ndisplay: flex;\nheight: 90vh;\nflex-direction: column; \njustify-content: center; \nalign-items: center;\n"]))),pe=Object(q.a)(se)(m||(m=Object(A.a)(["\n  border: 2px solid royalblue;\n  border-radius: 6px;\n  color: royalblue;\n  margin: 20px auto 0 auto;\n  width: 200px;\n  @media ","{\n    width: 250px;\n  }\n  &:hover {\n    background-color: white;\n    color: cyan;\n  }\n"])),te.tablet),be=function(){var e=Object(T.useState)({name:"Dan",email:"",password:"",buttonText:"Submit"}),t=Object(P.a)(e,2),n=t[0],a=t[1],o=n.name,c=n.email,r=n.password,l=n.buttonText,i=function(e){return function(t){a(Object(D.a)(Object(D.a)({},n),{},Object(L.a)({},e,t.target.value)))}},s=function(e){e.preventDefault(),a(Object(D.a)(Object(D.a)({},n),{},{buttonText:"Submitting"})),le()({method:"POST",url:"".concat("https://collector-back.herokuapp.com","/api/signup"),data:{name:o,email:c,password:r}}).then((function(e){console.log("SIGNUP SUCCESS",e),a(Object(D.a)(Object(D.a)({},n),{},{name:"",email:"",password:"",buttonText:"Submitted"})),ie.b.success(e.data.message),console.log("signup successful")})).catch((function(e){console.log("SIGNUP ERROR",e),a(Object(D.a)(Object(D.a)({},n),{},{buttonText:"Submit"})),ie.b.error(e.response)}))};return N.a.createElement(ce,null,N.a.createElement(de,null,N.a.createElement(ie.a,null),H()?N.a.createElement(z.a,{to:"/"}):null,N.a.createElement(ue,null,N.a.createElement(me,null,N.a.createElement("label",null,"Name"),N.a.createElement("input",{type:"text",value:o,onChange:i("name")})),N.a.createElement(me,null,N.a.createElement("label",null,"Email"),N.a.createElement("input",{type:"text",value:c,onChange:i("email")})),N.a.createElement(me,null,N.a.createElement("label",null,"Password"),N.a.createElement("input",{type:"text",value:r,onChange:i("password")})),N.a.createElement(me,null,N.a.createElement(pe,{onClick:s},l)),N.a.createElement("br",null),N.a.createElement(I.b,{to:"/auth/password/forgot"},"Forgot Password"))))},fe=function(e){var t=e.history,n=Object(T.useState)({email:"",password:"",buttonText:"Submit"}),a=Object(P.a)(n,2),o=a[0],c=a[1],r=o.email,l=o.password,i=o.buttonText,s=function(e){return function(t){c(Object(D.a)(Object(D.a)({},o),{},Object(L.a)({},e,t.target.value)))}},u=function(e){e.preventDefault(),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submitting"})),le()({method:"Post",url:"".concat("https://collector-back.herokuapp.com","/api/signin"),data:{email:r,password:l}}).then((function(e){console.log("SIGNIN SUCCESS",e),V(e,(function(){c(Object(D.a)(Object(D.a)({},o),{},{name:"",email:"",password:"",buttonText:"Submitted"})),ie.b.success("Hey,".concat(e.data.user.name,", welcome back!")),H()&&"admin"===H().role?t.push("./admin"):t.push("/search")}))})).catch((function(e){console.log("SIGNIN ERROR",e),ie.b.error("Wrong username or password"),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submit"})),ie.b.error(e)}))};return N.a.createElement(ce,null,N.a.createElement(de,null,N.a.createElement(ie.a,null),H()?N.a.createElement(z.a,{to:"/"}):null,N.a.createElement(ue,null,N.a.createElement(me,null,N.a.createElement("label",null,"Email"),N.a.createElement("input",{type:"text",value:r,onChange:s("email")})),N.a.createElement(me,null,N.a.createElement("label",null,"Password"),N.a.createElement("input",{type:"text",value:l,onChange:s("password")})),N.a.createElement(me,null,N.a.createElement(pe,{onClick:u},i)),N.a.createElement("br",null),N.a.createElement(I.b,{to:"/auth/password/forgot"},"Forgot Password"))))},he=n(17),ge=n.n(he),Ee=n(31),Oe=q.a.span(d||(d=Object(A.a)(["\n  position: fixed;\n  top: 98px;\n  right: 8px;\n  z-index: 2000;\n  padding: 2px;\n  border-radius: 150px;\n  background-color: #ccf5ff;\n"]))),xe=Object(q.a)(W.a)(p||(p=Object(A.a)(["\n  width: 30px;\n  height: 30px;\n  color: #b9b7b7;\n  transition: .25s ease color;\n  display: inline-block;\n  padding: 0;\n  transition: color ease 0.5s;\n  &:hover { \n    color: blue;\n  }\n"]))),je=q.a.form(b||(b=Object(A.a)(["\ntext-align: center;\nmargin: 0 auto;\ndisplay: flex;\nmargin: 0;\npadding: 0;\nwidth: 100%;\nheight: 75px;\nposition fixed;\ntop:0;\nright: 0;\nz-index: 100;\nbackground-color: #fff;\nbox-shadow: 2px 2px 8px rgba(0,0,0,0.2);\n"]))),we=q.a.input(f||(f=Object(A.a)(["\nborder: none;\nwidth: 50vw;\ntext-align: center;\n:focus {\n    outline: none;\n}\n"]))),ve=function(e){var t=e.change,n=e.submit,a=e.inputTitle,o=e.button,c=Object(T.useState)(!0),r=Object(P.a)(c,2),l=r[0],i=r[1];return N.a.createElement(T.Fragment,null,N.a.createElement(Oe,{onClick:function(){i(!l)}},N.a.createElement(xe,null)),N.a.createElement(je,{autocomplete:"off",onSubmit:n,className:l?"showNav":"hideNav"},N.a.createElement(we,{id:"input",type:"text",placeholder:a,name:"search",onChange:function(e){var n=e.target.value;console.log("auto",e.target.value),t(n)}}),N.a.createElement(se,{type:"submit",value:"Submit"},o)))},ke=q.a.img(h||(h=Object(A.a)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n"]))),ye=n(27),Se=q.a.div(g||(g=Object(A.a)(["\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  margin-bottom: 50px;\n  border: 2px solid whitesmoke;\n  border-radius: 6px;\n  @media(min-width: 700px) {\n    padding: 15px;\n  }\n  select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n      appearance: none;\n    color: #505050;\n    height: 28px;\n    border: none;\n    border: 2px solid gainsboro;\n    border-radius: 4px;\n    padding: 0 6px;\n    font-size: 1em;\n  }\n  #inline-wrap  {\n    padding-top: 4px;\n    display: flex;\n    max-width: 500px;\n    justify-content: space-between;\n    font-size: 14px;\n    @media "," {\n      font-size: 16px;\n    }\n    @media "," {\n      font-size: 18px;\n    }\n  }\n  p{ font-size: 12px;}\n  h4 { padding-left: 15px;}\n  h5 {\n    font-weight: 400;\n    font-size: 17px;\n    @media "," {\n      font-size: 16px;\n    }\n  }\n  h6{\n    font-weight: 400;\n    font-size: 15px;\n  }\n"])),te.tablet,te.laptop,te.tablet),Te=function(e){var t=e.titles,n=e.values,a=e.item,o=e.setValues,c=e.expandCard,r=Object(z.g)(),l=H()._id,i=G("token"),s=function(){var e=Object(Ee.a)(ge.a.mark((function e(t){var a,c,r,s;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=document.getElementById(t.target.id),c=a.options[a.selectedIndex].text,r=a.parentElement.childNodes,s=r[1].src,e.next=7,le()({method:"POST",url:"".concat("https://collector-back.herokuapp.com","/api/cards"),params:{title:r[0].innerHTML,img:s,name:r[2].childNodes[0].innerHTML,date:r[2].children[1].innerHTML,containerTitle:c,id:l},headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){o(Object(D.a)(Object(D.a)({},n),{},{loading:!1})),ie.b.info("Added to ".concat(c," Collection"))})).catch((function(e){console.log("SAVE CARD ERROR",e)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return N.a.createElement(T.Fragment,null,N.a.createElement(Se,{key:Math.random()},N.a.createElement("h5",null,a.title),N.a.createElement(ke,{id:"card-image",loading:"lazy",src:a.img,onClick:c,className:"item-img"}),N.a.createElement("div",{id:"inline-wrap"},N.a.createElement("h6",null,a.name),N.a.createElement("p",null,a.date)),"/search"===r.pathname&&N.a.createElement("select",{id:Math.random(),onChange:function(e){return s(e)}},N.a.createElement("option",{values:"",defaultValue:!0,key:Math.random()},"Add to collection"),t.titles.map((function(e,t){return N.a.createElement(T.Fragment,null,N.a.createElement("option",{value:e,key:t,id:t},e," "))})))))},Ne=n(38),Ce=n.n(Ne),Re=function(e){var t=e.show,n=e.children,a=Object(T.useState)(t),o=Object(P.a)(a,2),c=o[0],r=o[1];Object(T.useEffect)((function(){t&&r(!0)}),[t]);return c&&N.a.createElement("div",{style:{animation:"".concat(t?"fadeIn":"fadeOut"," 750ms")},onAnimationEnd:function(){t||r(!1)}},n)},Pe=n(170),Ie=n(53),ze=n.n(Ie),Le=n(65),De=n.n(Le),Ae=function(){return N.a.createElement(ye.WaveTopBottomLoading,{color:"#03cffc"})},Ue=n(364),Fe=(Ue.inRange,Ue._,{default:4,1200:3,900:2,675:1}),Be=Object(q.a)(Pe.a)(E||(E=Object(A.a)(["\n  color: black;\n  width: 30px;\n  height: auto;\n  display: inline-block;\n  padding: 0;\n  transition: color ease 0.5s;\n  &:hover {\n    color: cyan;\n  }\n"]))),Ge=q.a.img(O||(O=Object(A.a)(["\n  width: 100%;\n  cursor: pointer;\n"]))),Me=Object(q.a)(Se)(x||(x=Object(A.a)(["\n  width: 90%;\n  margin: 15px auto 15px auto;\n  #inline-wrap {\n    padding-bottom: 10px;\n    max-width: 100%;\n    width: 100%; //\n  }\n  button {\n    border: none;\n    background: white;\n  }\n"]))),Ve=q.a.div(j||(j=Object(A.a)(["\n  margin-top: 125px;\n"]))),_e=function(e){var t=Object(T.useState)({name:"",collections:[],cards:[],buttonText:"Submit",expanded:!1,title:"",selectedImg:"",loading:!1}),n=Object(P.a)(t,2),a=n[0],o=n[1],c=G("token"),r=H(),l=Object(T.useState)(!1),i=Object(P.a)(l,2),s=i[0],u=i[1],m=function(){var e=Object(Ee.a)(ge.a.mark((function e(t){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(T.useEffect)((function(){o(Object(D.a)(Object(D.a)({},a),{},{loading:!1})),u((function(e){return!e})),b(a,o,a.collections)}),[]);var d=function(e){if(e.target){var t=e.target.src;o(Object(D.a)(Object(D.a)({},a),{},{expanded:!a.expanded,selectedImg:t}))}},p=function(e){le()({method:"POST",url:"".concat("https://collector-back.herokuapp.com","/api/collections"),params:{q:a.title},headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){console.log("ADD COLLECTIONS SUCCESS",e),o(Object(D.a)(Object(D.a)({},a),{},{collections:e.data})),b()})).catch((function(e){console.log("ADD COLLECTION ERROR",e.response)}))},b=function(){var e=Object(Ee.a)(ge.a.mark((function e(t){var n;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H()._id,e.next=3,le()({method:"GET",url:"".concat("https://collector-back.herokuapp.com","/api/collections"),params:{id:n}}).then((function(e){o(Object(D.a)(Object(D.a)({},a),{},{collections:e.data}))})).catch((function(e){console.log("GET COLLECTIONS ERROR",e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return N.a.createElement(ce,null,N.a.createElement(ve,{inputTitle:"Collection Name",button:"Add",change:function(e){o(Object(D.a)(Object(D.a)({},a),{},{title:e}))},term:a.searchTerm,submit:m}),N.a.createElement(Re,{show:s},N.a.createElement(ie.a,null),N.a.createElement(Ve,null,a.collections.map((function(e){return N.a.createElement(Me,{className:"collection-card"},N.a.createElement("div",{id:"inline-wrap"},N.a.createElement("h4",null,e.title),N.a.createElement("button",{onClick:function(e){return function(e){if(e.preventDefault(),window.confirm("Are you sure you want to permanently erase this collection?")){var t=e.target.parentNode.parentNode.childNodes[0].innerHTML;console.log("title",t),le()({method:"DELETE",url:"".concat("https://collector-back.herokuapp.com","/api/collections/delete"),data:{title:t,id:r._id},headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){console.log("DELETE COLLECTION",e),o(Object(D.a)(Object(D.a)({},a),{},{collections:e.data})),b()})).catch((function(e){console.log("DELETE COLLECTION ERROR",e.response.data.error)}))}}(e)}},N.a.createElement(Be,null))),a.loading&&N.a.createElement(Ae,{key:Date.now(),width:500,height:500,color:"#03cffc"}),N.a.createElement(De.a,{breakpointCols:Fe,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e.cards.map((function(e,t){return N.a.createElement(T.Fragment,null,N.a.createElement(ze.a,{isOpen:a.expanded,className:"Modal",ariaHideApp:!1,overlayClassName:"Overlay"},N.a.createElement(Ge,{id:"selected-image",onClick:d,src:a.selectedImg})),N.a.createElement(Te,{key:t,values:a,item:e,expandCard:d}))}))))})))))},He=n(171),Je={default:4,1100:3,900:2,600:1},qe=q.a.div(w||(w=Object(A.a)(["\n  margin-top: 150px;\n  "]))),We=(Object(q.a)(He.a)(v||(v=Object(A.a)(["\n  width: 30px;\n"]))),q.a.img(k||(k=Object(A.a)(["\n  width: 100%;\n  cursor: pointer;\n"])))),Ke=function(e){var t=e.data,n=e.setValues,a=e.titles,o=e.values,c=(H()._id,G("token"),function(e){if(e.target){var t=e.target.src;n(Object(D.a)(Object(D.a)({},o),{},{expanded:!o.expanded,selectedImg:t}))}});return N.a.createElement(T.Fragment,null,N.a.createElement(qe,null,N.a.createElement(De.a,{breakpointCols:Je,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t.map((function(e,t){if(e)return N.a.createElement(T.Fragment,{key:Math.random()},N.a.createElement(ze.a,{isOpen:o.expanded,className:"Modal",overlayClassName:"Overlay"},N.a.createElement(We,{id:"selected-image",onClick:c,src:o.selectedImg})),N.a.createElement(Te,{key:t,values:o,titles:a,item:e,setValues:n,expandCard:c}))})))))},Qe=function(){return N.a.createElement(ye.WaveTopBottomLoading,{color:"#03cffc"})},Xe=function(e){var t=e.history,n=(e.match,Object(T.useState)({name:"",buttonText:"Submit",token:"",artData:[],loading:!0,searchTerm:""})),a=Object(P.a)(n,2),o=a[0],c=a[1],r=Object(T.useState)(""),l=Object(P.a)(r,2),i=l[0],s=l[1],u=Object(T.useState)(!1),m=Object(P.a)(u,2),d=m[0],p=m[1];Object(T.useEffect)((function(){setTimeout((function(){c(Object(D.a)(Object(D.a)({},o),{},{loading:!1}))}),3e3),p((function(e){return!e}))}),[]),Object(T.useEffect)((function(){JSON.parse(localStorage.getItem("entries"))||c(Object(D.a)(Object(D.a)({},o),{},{artData:[]})),console.log("useEffect")}),[]);var b=G("token"),f=Ce.a.decode(b).exp,h=H(),g=function(){var e=Object(Ee.a)(ge.a.mark((function e(t){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("onsubmit",o.searchTerm),O(o.searchTerm),E();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(Ee.a)(ge.a.mark((function e(){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H()._id,e.next=3,le()({method:"GET",url:"".concat("https://collector-back.herokuapp.com","/api/collections/titles"),params:{id:t}}).then((function(e){s({titles:e.data})})).catch((function(e){console.log("GET COLLECTION TITLES ERROR",e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(Ee.a)(ge.a.mark((function e(t){var n,a;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("get Art"),c(Object(D.a)(Object(D.a)({},o),{},{loading:!0})),e.prev=2,e.next=5,le()({method:"GET",url:"".concat("https://collector-back.herokuapp.com","/api/search"),params:{q:t},headers:{Authorization:"Bearer ".concat(b)}});case 5:n=e.sent,localStorage.setItem("entries",JSON.stringify(n.data)),a=JSON.parse(localStorage.getItem("entries")),c(Object(D.a)(Object(D.a)({},o),{},{artData:a})),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("GET ART ERROR",e.t0.response),ie.b.error(e.t0.response.data.message),c(Object(D.a)(Object(D.a)({},o),{},{loading:!1}));case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Date.now()>=1e3*f&&(B("token"),M(h),t.push("/")),N.a.createElement(ce,null,N.a.createElement(ie.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),N.a.createElement(ve,{change:function(e){c(Object(D.a)(Object(D.a)({},o),{},{searchTerm:e})),console.log("onchange",o.searchTerm)},term:o.searchTerm,submit:g,inputTitle:"Enter artist fullname",button:"Search"}),o.loading&&N.a.createElement(Qe,{key:Date.now(),width:500,height:500,color:"#03cffc"}),N.a.createElement(Re,{show:d,className:"card"},N.a.createElement(Ke,{data:o.artData,titles:i,setValues:c,values:o})))},Ye=function(e){var t=e.match,n=Object(T.useState)({name:"Dan",token:"",show:!0}),a=Object(P.a)(n,2),o=a[0],c=a[1];Object(T.useEffect)((function(){var e=t.params.token,n=Ce.a.decode(e).name;e&&c(Object(D.a)(Object(D.a)({},o),{},{name:n,token:e}))}),[]);var r=o.name,l=o.token;o.show;console.log(l);var i=function(e){e.preventDefault(),le()({method:"Post",url:"".concat("https://collector-back.herokuapp.com","/api/account-activation"),data:{token:l}}).then((function(e){console.log("ACCOUNT ACTIVATION",e),c(Object(D.a)(Object(D.a)({},o),{},{show:!1})),ie.b.success(e.data.message)})).catch((function(e){console.log("SIGNUP ERROR",e),ie.b.error(e)}))};return N.a.createElement(ce,null,N.a.createElement("div",{className:"col-md-6 offset-md-3"},N.a.createElement(ie.a,null),N.a.createElement("h1",{className:"p-5 text-center"},"Activate Account"),N.a.createElement("div",{className:"text-center"},N.a.createElement("h1",{className:"p-5 "},"Hey ",r,", ready to activate your account?"),N.a.createElement("button",{className:"btn btn-outline-primary",onClick:i},"Activate"))))},Ze=q.a.div(y||(y=Object(A.a)(["\n\n  display: flex;\n  height: 100vh;\n  flex-direction: column; \n  justify-content: center; \n  align-items: center;\n\n  h1 {\n    font-size: 2.5em;\n    color: grey;\n    margin-top: -50px;\n    font-family: 'PT Sans', sans-serif;\n    @media (min-width: 650px){\n      font-size: 3.5em;\n    }\n    @media (min-width: 1000px){\n      font-size: 5em;\n    }\n  }\n  h3{\n    font-size: 1em;\n    font-family: 'PT Sans', sans-serif;\n    margin-top: 1em;\n    @media (min-width: 650px){\n      font-size: 1.35em;\n    }\n    @media (min-width: 1000px){\n      font-size: 1.75em;\n    }\n  }\n \n"]))),$e=(n(164),function(){return N.a.createElement(ye.WaveTopBottomLoading,null)}),et=q.a.div(S||(S=Object(A.a)(["\n  padding: 1em;\n  background-color: white;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n  margin: 0.25em 0;\n  border-radius: 6px;\n  width: 80%;\n  max-width: 800px;\n  @media (min-width: 650px) {\n    padding: 1.75em;\n  }\n  @media (min-width: 1000px) {\n    padding: 2em;\n  }\n  img {\n    width: 100%;\n    height: auto;\n  }\n"])));var tt,nt,at,ot=function(e){e.match;var t=Object(T.useState)(!1),n=Object(P.a)(t,2),a=n[0],o=n[1],c=Object(T.useState)(!1),r=Object(P.a)(c,2),l=r[0],i=r[1];return Object(T.useEffect)((function(){i(Object(D.a)(Object(D.a)({},l),{},{loading:!1})),o((function(e){return!e}))}),[]),N.a.createElement(N.a.Fragment,null,N.a.createElement(Re,{show:a},!0===a?N.a.createElement(ce,null,N.a.createElement(Ze,null,N.a.createElement("h1",null,"The Collector"),N.a.createElement(et,null,N.a.createElement("img",{className:"hero",src:"https://openaccess-cdn.clevelandart.org/1960.81/1960.81_web.jpg"})),N.a.createElement("h3",null,"Collect art from international museums."))):N.a.createElement($e,null)))},ct=(Object(q.a)(ue)(tt||(tt=Object(A.a)(["\n  margin-top: 100px;\n"]))),Object(q.a)(se)(nt||(nt=Object(A.a)(["\n  border: 2px solid royalblue;\n  border-radius: 6px;\n  color: royalblue;\n  margin: 15px auto 0 auto;\n  &:hover {\n    background-color: white;\n    color: cyan;\n  }\n"]))),function(e){e.history;var t=Object(T.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),n=Object(P.a)(t,2),a=n[0],o=n[1],c=G("token"),r=Object(T.useState)(!1),l=Object(P.a)(r,2),i=l[0],s=l[1];Object(T.useEffect)((function(){o(Object(D.a)(Object(D.a)({},a),{},{loading:!1})),s((function(e){return!e})),u()}),[]);var u=function(){le()({method:"GET",url:"".concat("https://collector-back.herokuapp.com","/user/").concat(H()._id),headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){console.log("Profile update",e);var t=e.data,n=t.role,c=t.name,r=t.email;o(Object(D.a)(Object(D.a)({},a),{},{role:n,name:c,email:r}))})).catch((function(e){console.log("Profile update error",e.response.data.error)}))},m=a.role,d=a.name,p=a.email,b=a.password,f=a.buttonText,h=function(e){return function(t){console.log(t.target.value),o(Object(D.a)(Object(D.a)({},a),{},Object(L.a)({},e,t.target.value)))}},g=function(e){e.preventDefault(),o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Submitting"})),le()({method:"PUT",url:"".concat("https://collector-back.herokuapp.com","/user/update"),data:{name:d,password:b},headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){console.log("PROFILE UPDATE SUCCESS",e),J(e,(function(){o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Submitted"})),ie.b.success("Profile updated")}))})).catch((function(e){console.log("PROFILE UPDATE ERROR",e.response.data.error),o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Submit"})),ie.b.error(e.response.data.error)}))};return N.a.createElement(ce,null,N.a.createElement(de,null,N.a.createElement(Re,{show:i},N.a.createElement(ie.a,null),N.a.createElement(ue,null,N.a.createElement("p",null," Profile Update"),N.a.createElement(me,null,N.a.createElement("label",null,"Role"),N.a.createElement("input",{defaultValue:m,type:"text",disabled:!0})),N.a.createElement(me,null,N.a.createElement("label",null,"Name"),N.a.createElement("input",{type:"text",value:d,onChange:h("name")})),N.a.createElement(me,null,N.a.createElement("label",null,"Email"),N.a.createElement("input",{defaultValue:p,type:"text",value:p,disabled:!0})),N.a.createElement(me,null,N.a.createElement("label",null,"Password"),N.a.createElement("input",{type:"text",value:b,onChange:h("password")})),N.a.createElement(me,null,N.a.createElement(pe,{onClick:g},f))))))}),rt=Object(q.a)(se)(at||(at=Object(A.a)(["\n  border: 2px solid royalblue;\n  border-radius: 6px;\n  color: royalblue;\n  margin: 15px auto 0 auto;\n  &:hover {\n    background-color: white;\n    color: cyan;\n  }\n"]))),lt=function(e){var t=e.history,n=Object(T.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),a=Object(P.a)(n,2),o=a[0],c=a[1],r=G("token");Object(T.useEffect)((function(){l()}),[]);var l=function(){le()({method:"GET",url:"".concat("https://collector-back.herokuapp.com","/api/user/").concat(H()._id),headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){console.log("Profile update",e);var t=e.data,n=t.role,a=t.name,r=t.email;c(Object(D.a)(Object(D.a)({},o),{},{role:n,name:a,email:r}))})).catch((function(e){console.log("Profile update error",e.response.data.error),401===e.response.status&&_((function(){t.push("/")}))}))},i=o.role,s=o.name,u=o.email,m=o.password,d=o.buttonText,p=function(e){return function(t){console.log(t.target.value),c(Object(D.a)(Object(D.a)({},o),{},Object(L.a)({},e,t.target.value)))}},b=function(e){e.preventDefault(),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submitting"})),le()({method:"PUT",url:"".concat("https://collector-back.herokuapp.com","/api/admin/update"),data:{name:s,email:u,password:m},headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){console.log("PROFILE UPDATE SUCCESS",e),J(e,(function(){c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submitted"})),ie.b.success("Profile updated")}))})).catch((function(e){console.log("PROFILE UPDATE ERROR",e.response.data.error),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submit"})),ie.b.error(e.response.data.error)}))};return N.a.createElement(ce,null,N.a.createElement("div",{className:"col-md-6 offset-md-3"},N.a.createElement(ie.a,null),N.a.createElement("h1",{className:"p-5 text-center"},"Admin"),N.a.createElement("p",{className:"lead"}," Profile Update"),N.a.createElement("form",null,N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Role"),N.a.createElement("input",{defaultValue:i,className:"form-control",type:"text",disabled:!0})),N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Name"),N.a.createElement("input",{className:"form-control",type:"text",value:s,onChange:p("name")})),N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Email"),N.a.createElement("input",{defaultValue:u,className:"form-control",type:"text",value:u,disabled:!0})),N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Password"),N.a.createElement("input",{className:"form-control",type:"text",value:m,onChange:p("password")})),N.a.createElement("div",null,N.a.createElement(rt,{className:" btn btn-primary",onClick:b},d)))))},it=n(66),st=function(e){var t=e.component,n=Object(it.a)(e,["component"]);return N.a.createElement(z.b,Object.assign({},n,{render:function(e){return H()?N.a.createElement(t,e):N.a.createElement(z.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},ut=function(e){var t=e.component,n=Object(it.a)(e,["component"]);return N.a.createElement(z.b,Object.assign({},n,{render:function(e){return H()&&"admin"===H().role?N.a.createElement(t,e):N.a.createElement(z.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},mt=function(e){e.history;var t=Object(T.useState)({email:"dmbrusky@gmail.com",buttonText:"Request Reset Password Link"}),n=Object(P.a)(t,2),a=n[0],o=n[1],c=a.email,r=a.buttonText,l=function(e){e.preventDefault(),o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Submitting"})),le()({method:"PUT",url:"".concat("https://collector-back.herokuapp.com","/api/forgot-password"),data:{email:c}}).then((function(e){console.log("Forgot Password SUCCESS",e),ie.b.success(e.data.message),o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Requested"}))})).catch((function(e){console.log("RESET ERROR",e),o(Object(D.a)(Object(D.a)({},a),{},{buttonText:"Submit"})),ie.b.error(e)}))};return N.a.createElement(ce,null,N.a.createElement("div",{className:"col-md-6 offset-md-3"},N.a.createElement(ie.a,null),N.a.createElement("h1",{className:"p-5 text-center"},"Forgot Password"),function(){return N.a.createElement("form",null,N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Email"),N.a.createElement("input",{className:"form-control",type:"text",value:c,onChange:(e="email",function(t){console.log(t.target.value),o(Object(D.a)(Object(D.a)({},a),{},Object(L.a)({},e,t.target.value)))})})),N.a.createElement("div",null,N.a.createElement("button",{className:" btn btn-primary",onClick:l},r)));var e}()))},dt=function(e){var t=e.match,n=Object(T.useState)({name:"",token:"",newPassword:"",buttonText:"Reset Password"}),a=Object(P.a)(n,2),o=a[0],c=a[1];Object(T.useEffect)((function(){var e=t.params.token,n=Ce.a.decode(e).name;e&&c(Object(D.a)(Object(D.a)({},o),{},{name:n,token:e}))}),[]);var r=o.name,l=o.token,i=o.newPassword,s=o.buttonText,u=function(e){c(Object(D.a)(Object(D.a)({},o),{},{newPassword:e.target.value}))},m=function(e){e.preventDefault(),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Submitting"})),le()({method:"PUT",url:"".concat("https://collector-back.herokuapp.com","/api/reset-password"),data:{newPassword:i,resetPasswordLink:l}}).then((function(e){console.log("RESET Password SUCCESS",e),ie.b.success(e.data.message),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Done"}))})).catch((function(e){console.log("SIGNIN ERROR",e.response.data),c(Object(D.a)(Object(D.a)({},o),{},{buttonText:"Reset Password"})),ie.b.error(e.response.data.error)}))};return N.a.createElement(ce,null,N.a.createElement("div",{className:"col-md-6 offset-md-3"},N.a.createElement(ie.a,null),N.a.createElement("h1",{className:"p-5 text-center"},"Hey ",r,", type your new password."),N.a.createElement("form",null,N.a.createElement("div",{className:"form-group"},N.a.createElement("label",{className:"text-muted"},"Password"),N.a.createElement("input",{className:"form-control",type:"password",onChange:u,placeholder:"type new password ",required:!0,value:i})),N.a.createElement("div",null,N.a.createElement("button",{className:" btn btn-primary",onClick:m},s)))))},pt=function(e){e.match;var t=Object(T.useState)(!1),n=Object(P.a)(t,2);n[0],n[1];return N.a.createElement(I.a,null,N.a.createElement(z.d,null,N.a.createElement(z.b,{path:"/",exact:!0,component:ot}),N.a.createElement(z.b,{path:"/signup",exact:!0,component:be}),N.a.createElement(z.b,{path:"/signin",exact:!0,component:fe}),N.a.createElement(z.b,{path:"/search",exact:!0,component:Xe}),N.a.createElement(z.b,{path:"/collections",exact:!0,component:_e}),N.a.createElement(z.b,{path:"/auth/activate/:token",exact:!0,component:Ye}),N.a.createElement(st,{path:"/private",exact:!0,component:ct}),N.a.createElement(ut,{path:"/admin",exact:!0,component:lt}),N.a.createElement(z.b,{path:"/auth/password/forgot",exact:!0,component:mt}),N.a.createElement(z.b,{path:"/auth/password/reset/:token",exact:!0,component:dt})))};R.a.render(N.a.createElement("div",null,N.a.createElement(pt,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.3abffab6.chunk.js.map