(this.webpackJsonpcompassouol=this.webpackJsonpcompassouol||[]).push([[0],{13:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return o}));var c=function(e){e.push("/")},s=function(e,t){e.push("/search?username=".concat(t))},n=function(e,t){e.push("/users/".concat(t))},r=function(e,t){e.push("/users/".concat(t,"/repos"))},o=function(e,t){e.push("/users/".concat(t,"/starred"))}},16:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c="  https://api.github.com"},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0),s=a(6),n=a(13),r=function(){var e=Object(s.f)();Object(c.useEffect)((function(){window.localStorage.getItem("token")||Object(n.a)(e)}),[e])}},18:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(20),s=a(0),n=a(25),r=a.n(n);function o(e,t){var a=Object(s.useState)(t),n=Object(c.a)(a,2),o=n[0],i=n[1];return Object(s.useEffect)((function(){var t=localStorage.getItem("token");r.a.get(e,{headers:{Authorization:t}}).then((function(e){i(e.data)})).catch((function(e){console.log(e.message)}))}),[e]),o}},56:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(21),r=a.n(n),o=(a(56),a(20)),i=a(12),l=a(6),d=a(1),j=function(){return Object(d.jsxs)("div",{className:"container my-5 px-3",children:[Object(d.jsx)("h1",{className:"display-4 text-center mb-2 title",children:"Github API"}),Object(d.jsxs)("div",{className:"row my-5 gy-5",children:[Object(d.jsx)("p",{className:"display-5 text-center",children:"Sorry :/"}),Object(d.jsx)("p",{className:"display-6 text-center",children:"This page doesn't exist"})]})]})},u=a(22);var h=function(e){return Object(d.jsxs)(u.a,{className:"features-item",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"".concat(e.svgClass," features-icon"),viewBox:"0 0 16 16",children:e.paths.map((function(e){return Object(d.jsx)("path",{d:e.d,"fill-role":e.fillRole?e.fillRole:null},e.d)}))}),Object(d.jsxs)(u.a.Body,{children:[Object(d.jsx)(u.a.Title,{className:"text-center",children:e.cardTitle}),Object(d.jsx)(u.a.Text,{className:"text-center",children:e.cardText})]})]})};var m=function(){return Object(d.jsxs)("div",{className:"container my-5 my-3 px-3 row mx-auto",children:[Object(d.jsx)("h1",{className:"display-4 text-center mb-2 title",children:"Github API"}),Object(d.jsx)("h2",{className:"features display-6 h3 gy-5 my-4 text-center subtitle",children:"A API do Github para obter dados de usu\xe1rio e reposit\xf3rios"}),Object(d.jsxs)("ul",{className:"card-group mx-0 row my-5",children:[Object(d.jsx)(h,{cardTitle:"Buscar por um usu\xe1rio",cardText:"Saiba mais sobre um usu\xe1rio",svgClass:"bi bi-person-lines-fill mx-auto",svgPath:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z",paths:[{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z",fillRole:"evenood"}]}),Object(d.jsx)(h,{cardTitle:"Exibir um reposit\xf3rio",cardText:"Acesse um reposit\xf3rio, assim como voc\xea faria no site do Github",svgClass:"bi bi-archive-fill mx-auto",svgPath:"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z",paths:[{d:"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z",fillRole:"evenood"}]}),Object(d.jsx)(h,{cardTitle:"Exibir reposit\xf3rios mais visitados por um usu\xe1rio",cardText:"Descubra o que mais um usu\xe1rio mais v\xea",svgClass:"bi bi-list-task mx-auto",svgPath:"M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z",paths:[{d:"M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z",fillRole:"evenood"},{d:"M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"},{d:"M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z",fillRole:"evenood"}]})]}),Object(d.jsxs)("div",{className:"mx-auto text-center",children:[Object(d.jsx)("p",{className:"fw-light fs-5 text",children:"Comece agora"}),Object(d.jsx)("a",{className:"btn btn-primary",href:"http://localhost:3003/user/login/auth",children:"Login pelo Github"})]})]})},b=a(25),x=a.n(b),O=a(13),p=s.a.createContext();var f=function(){var e=Object(l.f)(),t=Object(c.useContext)(p);return Object(c.useEffect)((function(){localStorage.getItem("token")?(localStorage.removeItem("token"),t.setLogged(!1)):function(e,t,a){x.a.get("http://localhost:3003/user/login/callback?code=".concat(e)).then((function(e){localStorage.setItem("token",e.data.token),a(!0),Object(O.a)(t)})).catch((function(e){console.log(e.message),alert(e.message)}))}(window.location.href.match(/\?code=(.*)/)&&window.location.href.match(/\?code=(.*)/)[1],e,t.setLogged);Object(O.a)(e)}),[]),null},g=a(36),v=a.n(g),y=a(27),N=function(e){return Object(d.jsxs)(y.a.Item,{className:"col-md-5 col-xl-4 lead",children:[e.text," ",e.data]})},w=function(e){return Object(d.jsxs)(y.a,{horizontal:!0,className:"card-body row grid gap-3 justify-content-center my-5",children:[Object(d.jsx)(N,{text:"Id",data:e.data.id}),Object(d.jsx)(N,{text:"Name",data:e.data.name}),Object(d.jsx)(N,{text:"Login",data:e.data.login}),Object(d.jsx)(N,{text:"URL",data:e.data.html_url}),Object(d.jsx)(N,{text:"Biografia",data:e.data.bio}),Object(d.jsx)(N,{text:"Blog",data:e.data.blog}),Object(d.jsx)(N,{text:"Empresa",data:e.data.company}),Object(d.jsx)(N,{text:"Email",data:e.data.email}),Object(d.jsx)(N,{text:"Criado em",data:v()(e.data.created_at).format("DD/MM/YYYY")}),Object(d.jsx)(N,{text:"Node id",data:e.data.node_id}),Object(d.jsx)(N,{text:"Seguidores",data:e.data.followers}),Object(d.jsx)(N,{text:"Seguindo",data:e.data.following}),Object(d.jsx)(N,{text:"Contrat\xe1vel",data:e.data.hirable}),Object(d.jsx)(N,{text:"Localiza\xe7\xe3o",data:e.data.location}),Object(d.jsx)(N,{text:"Atualizado em",data:v()(e.data.updated_at).format("DD/MM/YYYY")}),Object(d.jsx)(N,{text:"Nome de usu\xe1rio do Twitter",data:e.data.twitter_username}),Object(d.jsx)(N,{text:"Gists p\xfablicos",data:e.data.public_gists}),Object(d.jsx)(N,{text:"Reposit\xf3rios p\xfablicos",data:e.data.public_repos}),Object(d.jsx)(N,{text:"Pontua\xe7\xe3o",data:e.data.score}),Object(d.jsx)(N,{text:"Tipo",data:e.data.type})]})},z=a(16),C=a(17),M=a(18),k=function(){Object(C.a)();var e=Object(l.h)(),t=Object(M.a)("".concat(z.a,"/users/").concat(e.username),[]);return Object(d.jsxs)("div",{className:"card row container col col-lg-7 mx-auto my-5 px-3",children:[Object(d.jsx)("div",{className:"card-body col",children:Object(d.jsx)("h1",{className:"card-title display-6 text-center my-5",children:e.username})}),Object(d.jsx)("img",{src:t.avatar_url,className:" col-5 my-5 mx-auto",alt:"User avatar"}),Object(d.jsx)(w,{data:t})]})},S=function(){Object(C.a)();var e=Object(l.h)(),t=Object(M.a)("".concat(z.a,"/users/").concat(e.username,"/repos"),[]);return Object(d.jsxs)("div",{className:"card row container col col-lg-7 px-3 mx-auto my-5",children:[Object(d.jsx)("div",{className:"card-body col",children:Object(d.jsx)("h1",{className:"card-title display-6 text-center my-5",children:e.username})}),Object(d.jsx)("h2",{className:"card-title display-6 text-center my-5",children:"Reposit\xf3rios"}),Object(d.jsx)("div",{className:"card-body row grid gap-3 justify-content-center my-5",children:Object(d.jsx)("ul",{className:"row my-5 gap-4 justify-content-center",children:t&&t.map((function(e){return Object(d.jsx)("li",{className:"col-md-2 lead",children:e.name},e.id)}))})})]})},H=function(){Object(C.a)();var e=Object(l.h)(),t=Object(M.a)("".concat(z.a,"/users/").concat(e.username,"/starred"),[]);return Object(d.jsxs)("div",{className:"card row container col col-lg-7 px-3 mx-auto my-5",children:[Object(d.jsx)("div",{className:"card-body col",children:Object(d.jsx)("h1",{className:"card-title display-6 text-center my-5",children:e.username})}),Object(d.jsx)("h2",{className:"card-title display-6 text-center my-5",children:"Reposit\xf3rios mais visitados"}),Object(d.jsx)("div",{className:"card-body row grid gap-3 justify-content-center my-5",children:Object(d.jsx)("ul",{className:"row my-5 gap-4 justify-content-center",children:t&&t.map((function(e){return Object(d.jsxs)("li",{className:"col-md-2 lead",children:[e.name," ",Object(d.jsx)("a",{href:e.html_url,target:"_blank",children:"Github link"})]},e.id)}))})})]})},I=a(49),T=s.a.lazy((function(){return a.e(3).then(a.bind(null,86))})),P=function(){Object(C.a)();var e=new URLSearchParams(Object(l.g)().search),t=Object(M.a)("".concat(z.a,"/search/users?q=").concat(e.get("username")),[]);return Object(d.jsxs)("div",{className:"my-5 px-3 gy-3 row",children:[Object(d.jsx)("h1",{className:"display-4 text-center mb-5 title",children:"Github API Search"}),!e.get("username")&&Object(d.jsx)("p",{className:"text-center lead",children:"Pesquise por usu\xe1rio, reposit\xf3rio ou reposit\xf3rios mais visitados no campo de pesquisa"}),t&&!t.items&&Object(d.jsx)("p",{className:"text-center lead",children:"Nenhum resultado encontrado."}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(I.a,{className:"loading-spinner mx-auto",animation:"border",variant:"secondary"}),children:Object(d.jsx)(T,{})})]})},A=function(){return Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(l.a,{exact:!0,path:"/login/callback",component:f}),Object(d.jsx)(l.a,{exact:!0,path:"/search",component:P}),Object(d.jsx)(l.a,{exact:!0,path:"/users/:username",component:k}),Object(d.jsx)(l.a,{exact:!0,path:"/users/:username/repos",component:S}),Object(d.jsx)(l.a,{exact:!0,path:"/users/:username/starred",component:H}),Object(d.jsx)(l.a,{component:j})]})},V=a(51),G=a(50),L=function(e){var t=Object(c.useContext)(p);return Object(d.jsx)(G.a,{onClick:e.signupClick,className:"col-3 offset-5 offset-md-0 col-md-2 col-xl-1",children:Object(d.jsx)("a",{className:"btn btn-success me-2",href:"http://localhost:3003/user/login/auth",children:t&&t.logged?"Sair":"Login"})})},R=a(38),_=a(24),E=a(26),B=a(37),Y=function(){var e=Object(l.f)(),t=function(e){var t=Object(c.useState)(e),a=Object(o.a)(t,2),s=a[0],n=a[1];return{form:s,onChange:function(e,t){n(Object(B.a)(Object(B.a)({},s),{},Object(E.a)({},t,e)))},resetForm:function(){n(e)}}}({search:""}),a=t.form,s=t.onChange;return Object(d.jsxs)(R.a.Group,{className:"row gx-0 col-8 col-md-5 col-lg-4",children:[Object(d.jsx)(R.a.Control,{type:"search",className:"col",id:"formGroupExampleInput",placeholder:"Search",name:"search",onChange:function(e){var t=e.target,a=t.value,c=t.name;s(a,c)},value:a.search,"aria-label":"Search"}),Object(d.jsx)(_.a,{variant:"outline-success",className:"col-3 col-sm-2",onClick:function(t){t.preventDefault(),Object(O.b)(e,a.search)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]})},D=function(e){return Object(d.jsx)(_.a,{variant:"link",onClick:e.logoClick,className:"nav-link col-2 p-0 col-md-1",children:"Github API"})},F=function(){var e=Object(l.f)(),t=Object(c.useContext)(p);return Object(d.jsxs)(V.a,{bg:"light",expand:"2xl",className:"row p-4 g-2",children:[Object(d.jsx)(D,{logoClick:function(){Object(O.a)(e)}}),Object(d.jsx)(Y,{}),Object(d.jsx)(L,{loggedContext:t})]})};a(82);var q=function(){var e=Object(c.useState)(!!localStorage.getItem("token")),t=Object(o.a)(e,2),a={logged:t[0],setLogged:t[1]};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(p.Provider,{value:a,children:[Object(d.jsx)(F,{}),Object(d.jsx)(A,{})]})})})},U=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,85)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),U()}},[[83,1,2]]]);
//# sourceMappingURL=main.b3a711f3.chunk.js.map