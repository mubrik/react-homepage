(this["webpackJsonphome-portfolio-react"]=this["webpackJsonphome-portfolio-react"]||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(36),c=n.n(r),o=n(10),s=n(4),l=n(191),d=n(219),u=n(205),j=n(198),p=n(208),m=n(197),x=n(2),h=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",border:"1px solid ".concat("dark"==n.palette.type?n.palette.secondary.main:n.palette.primary.main),borderRadius:"18px"},Object(s.a)(t,n.breakpoints.up("md"),{marginLeft:n.spacing(6)}),Object(s.a)(t,n.breakpoints.up("lg"),{marginLeft:n.spacing(8)}),t})),b=function(e){var t=e.setNav,n=Le().darkMode,a=i.useState(null),r=Object(o.a)(a,2),c=r[0],s=r[1],l=Boolean(c),b=function(e){e&&t(e),s(null)};return Object(x.jsxs)(h,{children:[Object(x.jsx)(d.a,{"aria-controls":"fade-menu","aria-haspopup":"true",color:n?"secondary":"primary",onClick:function(e){return t=e,console.log(t),void s(t.currentTarget.parentElement);var t},children:Object(x.jsx)(m.a,{})}),Object(x.jsxs)(u.a,{open:l,anchorEl:c,onClose:function(){return b()},id:"faded-menu",TransitionComponent:j.a,children:[Object(x.jsx)(p.a,{onClick:function(){return b("home")},children:" Home "}),Object(x.jsx)(p.a,{onClick:function(){return b("projects")},children:" Projects "}),Object(x.jsx)(p.a,{onClick:function(){return b("nowPlaying")},children:" Now Playing "})]})]})},f=n(200),g=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative"},Object(s.a)(t,n.breakpoints.up("md"),{marginRight:n.spacing(6)}),Object(s.a)(t,n.breakpoints.up("lg"),{marginRight:n.spacing(8)}),t})),O=function(){var e=Le(),t=e.darkMode,n=e.setDarkMode;return Object(x.jsx)(g,{children:Object(x.jsx)(d.a,{color:t?"secondary":"primary",onClick:function(){return n((function(e){return!e}))},children:Object(x.jsx)(f.a,{fontSize:"large"})})})},v=n(41),y=n(209),k=n(222),w=n(223),C=n(212),S=n(111),P=n.n(S),I=n(88),W=n.n(I),L=n(112),M=n.n(L),R=n(42),D=n(220),T=n(221),H=n(21),N=n(214),E=n(213),z=["children"],F=["children","href","variant","onClick"],A=function(e){var t=e.children,n=Object(H.a)(e,z),i=Le().darkMode;return Object(x.jsx)(N.a,Object(v.a)(Object(v.a)({sx:{color:i?"text.primary":"text.secondary"}},n),{},{children:t}))},B=function(e){var t=e.children,n=e.href,i=e.variant,a=e.onClick,r=Object(H.a)(e,F),c=n||"",o=Le().darkMode;return Object(x.jsx)(E.a,Object(v.a)(Object(v.a)({color:o?"secondary":"primary",variant:i||"outlined",onClick:a||function(e){return function(e,t){t&&t.preventDefault(),window.open(e,"_blank")}(c,e)},href:n||""},r),{},{children:t}))},X=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"grid",gridTemplateRows:"auto",padding:t.spacing(.4),justifyItems:"center"},t.breakpoints.up("md"),{gridTemplateColumns:"auto auto"})})),G=Object(l.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(.4),margin:t.spacing(.2),display:"flex",flexDirection:"column",textAlign:"center"}})),J=Object(l.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(.4),margin:t.spacing(.4),display:"flex",justifyContent:"space-evenly"}})),U=Object(l.a)("img")((function(e){var t,n=e.theme;return t={maxHeight:320,minWidth:120,maxWidth:200},Object(s.a)(t,n.breakpoints.up("xs"),{maxHeight:320,maxWidth:400,minWidth:200}),Object(s.a)(t,n.breakpoints.up("md"),{maxHeight:320,maxWidth:400,minWidth:320}),t})),_=function(e){var t=e.imageUri,n=e.content,i=e.siteLink,a=e.codeLink;return Object(x.jsx)(D.a,{elevation:0,sx:{display:"flex",flexDirection:"column",width:"100%"},children:Object(x.jsxs)(X,{children:[t?Object(x.jsx)(U,{alt:"placeholder",src:t}):Object(x.jsx)(T.a,{width:60,height:30,animation:"wave"}),Object(x.jsxs)(G,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(A,{variant:"body2",children:n||""})}),Object(x.jsxs)(J,{children:[i&&Object(x.jsx)(B,{href:i,children:"Check It Out"}),Object(x.jsx)(B,{href:a,children:"Git Code"})]})]})]})})},q=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",padding:n.spacing(2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",boxShadow:"dark"===n.palette.type?"none":"7px 10px 14px 1px #0000000d,\n  1px 3px 10px 1px #00000021",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("xl"),{minWidth:"58vw"}),t})),Y=Object(l.a)("div")((function(e){return{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:e.theme.spacing(1)}})),K=function(e){var t=e.setNav,n=e.show,i=a.a.useState(!1),r=Object(o.a)(i,2),c=r[0],s=r[1],l=a.a.useState(null),d=Object(o.a)(l,2),u=d[0],j=d[1],p=Object(R.useTransition)(n,{from:{display:"none",transform:"translateX(80%)"},enter:{delay:500,display:"flex",transform:"translateX(0%)"},leave:{transform:"translateX(-250%)"},expires:2});a.a.useEffect((function(){fetch("/react-homepage/projectDetails.json").then((function(e){return e.json()})).then((function(e){var t=e.details;j(t)}))}),[]);var m=function(e){t(e)};return p((function(e,t){return t&&Object(x.jsx)(R.animated.div,{style:e,children:Object(x.jsxs)(q,{children:[Object(x.jsxs)(Y,{children:[Object(x.jsx)(B,{size:"small",onClick:function(){return m("home")},sx:{marginLeft:function(e){return e.spacing(1)}},startIcon:Object(x.jsx)(W.a,{}),children:"Home"}),Object(x.jsx)(B,{size:"small",onClick:function(){return m("nowPlaying")},sx:{marginRight:function(e){return e.spacing(1)}},startIcon:Object(x.jsx)(P.a,{}),children:"Playlist"})]}),u?u.map((function(e,t){return Object(x.jsxs)(y.a,{sx:{margin:function(e){return e.spacing(1)}},expanded:c==="panel".concat(t),onChange:function(e,n){return function(e,t){s(!!t&&e)}("panel".concat(t),n)},children:[Object(x.jsxs)(k.a,{expandIcon:Object(x.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(x.jsx)(C.a,{"aria-label":"title",variant:"rounded",sx:{height:"auto",marginRight:function(e){return e.spacing(1)}},children:e.header.slice(0,1)}),Object(x.jsx)(A,{children:e.header}),Object(x.jsx)(A,{sx:{marginLeft:"auto",marginRight:"auto"},children:e.description})]}),Object(x.jsx)(w.a,{children:Object(x.jsx)(_,Object(v.a)({},e))})]},"panel".concat(t))})):null]})})}))},Q=n(70),V=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.5),marginBottom:t.spacing(2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}})),Z=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.1),marginBottom:t.spacing(1.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center"}})),$=Object(l.a)("div")((function(e){return{margin:e.theme.spacing(3),display:"flex",justifyContent:"space-evenly"}})),ee=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.5),marginBottom:t.spacing(3),display:"flex",justifyContent:"space-evenly"}})),te=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",padding:n.spacing(2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",boxShadow:"dark"===n.palette.type?"none":"7px 10px 14px 1px #0000000d,\n  1px 3px 10px 1px #00000021",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("xl"),{minWidth:"58vw"}),t})),ne=function(e){var t=e.setNav,n=e.show,i=Object(R.useTransition)(n,{from:{display:"none",transform:"scale(0.2)"},enter:{delay:500,display:"flex",transform:"scale(1)"},leave:{transform:"scale(0)"},expires:2}),a=Le().darkMode,r=function(e){t(e)};return i((function(e,t){return t&&Object(x.jsx)(R.animated.div,{style:e,children:Object(x.jsxs)(te,{children:[Object(x.jsx)(ee,{children:Object(x.jsx)(C.a,{src:a?"/react-homepage/avi2.png":"/react-homepage/avi.png",alt:"test",sx:{width:80,height:80}})}),Object(x.jsxs)(V,{children:[Object(x.jsx)(A,{children:"My name is Mubarak Yahaya, A developer based in Nigeria. "}),Object(x.jsx)(A,{children:"I love good music, coffee and tweaking stuff :) "}),Object(x.jsx)(A,{children:"My current development stack includes Python, javaScript( typeScript ) and Linux "})]}),Object(x.jsxs)(Z,{children:[Object(x.jsx)(A,{children:"Check out some of my"}),Object(x.jsx)(B,{variant:"contained",sx:{marginLeft:function(e){return e.spacing(1)}},onClick:function(){return r("projects")},children:"Projects"})]}),Object(x.jsxs)(Z,{children:[Object(x.jsx)(A,{children:"What am i "}),Object(x.jsx)(B,{variant:"contained",sx:{marginLeft:function(e){return e.spacing(1)},marginRight:function(e){return e.spacing(1)}},onClick:function(){return r("nowPlaying")},children:"Listening"}),Object(x.jsx)(A,{children:"to?"})]}),Object(x.jsxs)($,{children:[Object(x.jsx)(Q.SocialIcon,{bgColor:a?"#c95100":"black",url:"https://github.com/mubrik",title:"Github"}),Object(x.jsx)(Q.SocialIcon,{bgColor:a?"#c95100":"black",url:"mailto:mubarakg4u@gmail.com",network:"email",title:"Email"}),Object(x.jsx)(Q.SocialIcon,{url:"https://t.me/mubrik1",network:"telegram",title:"Telegram"}),Object(x.jsx)(Q.SocialIcon,{url:"https://www.linkedin.com/in/mubarak-yahaya-957917163",title:"LinkedIn"})]})]})})}))},ie=n(32),ae=n.n(ie),re=n(16),ce=n(51),oe=n(216),se=n(215),le=n(218),de=n(217),ue=n(201),je=n(207),pe=n(113),me=n.n(pe),xe=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",maxHeight:"80vh",padding:n.spacing(1.2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("lg"),{minWidth:"58vw"}),t})),he=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"grid",gridTemplateRows:" auto",overflow:"auto",padding:t.spacing(1)},t.breakpoints.up("sm"),{gridTemplateColumns:"1fr 0.8fr",overflow:"hidden",gap:"10px",padding:t.spacing(.5)})})),be=Object(l.a)("div")((function(e){return{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:e.theme.spacing(1)}})),fe=function(e,t){var n,i,a,r,c=Object(v.a)({},e),o={artist:"",title:"",image:"",date:"",timeMs:""};if((o.artist=(null===c||void 0===c||null===(n=c.artist)||void 0===n?void 0:n["#text"])?c.artist["#text"]:"placeholder",o.date=(null===c||void 0===c||null===(i=c.date)||void 0===i?void 0:i["#text"])?c.date["#text"]:"",o.timeMs=(null===c||void 0===c||null===(a=c.date)||void 0===a?void 0:a.uts)?c.date.uts:"placeholder",o.title=(null===c||void 0===c?void 0:c.name)?c.name:"placeholder",o.image=(null===c||void 0===c?void 0:c.image[2]["#text"])?c.image[2]["#text"]:"","nowPlaying"===t)&&((null===c||void 0===c||null===(r=c.date)||void 0===r?void 0:r.uts)?c.date.uts:null))new Date;return o},ge=function(e){var t=e.setNav,n=e.pageState,a=e.show,r=i.useState(null),c=Object(o.a)(r,2),s=c[0],l=c[1],d=i.useState(null),u=Object(o.a)(d,2),j=u[0],p=u[1],m=i.useState("idle"),h=Object(o.a)(m,2),b=h[0],f=h[1],g=Le().darkMode,O=i.useCallback(Object(ce.a)(ae.a.mark((function e(){var t,n,i,a,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f("loading"),e.prev=1,e.next=4,fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mubrik&api_key=ae2c676a4406b4a3afdbe1f31413b72c&format=json&limit=4");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,i=Object(re.a)(n.recenttracks.track),a=fe(i.slice(0,1)[0],"nowPlaying"),r=i.slice(1).map((function(e){return fe(e,"recent")})),l(a),p(r),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),l(null),p(null);case 20:f("loaded");case 21:case"end":return e.stop()}}),e,null,[[1,15]])}))),[b]);i.useEffect((function(){"nowPlaying"===n&&"idle"===b&&O()}),[n,b]);var v=Object(R.useTransition)(a,{from:{display:"none",transform:"scale(0.2)"},enter:{delay:500,display:"flex",transform:"scale(1)"},leave:{transform:"scale(0)"},expires:2}),y=function(){f("idle")},k=function(e){t(e)};return v((function(e,t){return t&&Object(x.jsx)(R.animated.div,{style:e,children:Object(x.jsx)(xe,{children:Object(x.jsxs)(ue.a,{sx:{gap:1,maxHeight:"97%",position:"relative"},children:[Object(x.jsxs)(be,{children:[Object(x.jsx)(B,{size:"small",onClick:function(){return k("home")},sx:{marginLeft:function(e){return e.spacing(1)}},startIcon:Object(x.jsx)(W.a,{}),children:"Home"}),Object(x.jsx)(B,{size:"small",onClick:function(){return k("projects")},sx:{marginLeft:function(e){return e.spacing(1)}},startIcon:Object(x.jsx)(me.a,{}),children:"Projects"}),Object(x.jsx)(je.a,{size:"small",onClick:y,loading:"loading"===b,variant:"outlined",color:g?"secondary":"primary",sx:{marginRight:function(e){return e.spacing(1)}},children:"Refresh"})]}),Object(x.jsxs)(he,{children:[Object(x.jsx)(ue.a,{children:null!==s&&Object(x.jsx)(se.a,{raised:!0,sx:{display:"flex",justifyContent:"center",maxHeight:"84%",borderRadius:"14px"},children:Object(x.jsxs)(oe.a,{sx:{display:"flex",flexDirection:"column",textAlign:"center",gap:1,paddingTop:"5px"},children:[Object(x.jsx)(N.a,{component:"div",variant:"h4",color:g?"text.primary":"text.secondary",children:"Now Playing"}),Object(x.jsx)(de.a,{component:"img",image:""===s.image?g?"https://media.giphy.com/media/jx8f8LrkhIOyAy6gcM/giphy.gif":"https://media.giphy.com/media/l46Ci4XuSbWL249fq/giphy.gif":s.image,sx:{maxHeight:"60%"},alt:"Live from space album cover"}),Object(x.jsxs)(le.a,{sx:{flex:"1 1 auto"},children:[Object(x.jsx)(N.a,{component:"div",variant:"h5",color:g?"text.primary":"text.secondary",children:s.title}),Object(x.jsx)(N.a,{variant:"subtitle1",color:g?"text.primary":"text.secondary",component:"div",children:s.artist}),Object(x.jsx)(N.a,{variant:"subtitle1",color:g?"text.primary":"text.secondary",component:"div",children:s.date})]})]})})}),Object(x.jsx)(ue.a,{direction:"column",spacing:{xs:1,sm:2,md:1},children:j&&j.map((function(e,t){return Object(x.jsx)(se.a,{raised:!0,sx:{display:"flex",maxHeight:"21vh",borderRadius:"14px",maxWidth:{xs:"auto",sm:"340px",md:"420px"}},children:Object(x.jsxs)(le.a,{sx:{flex:"1 1 auto"},children:[Object(x.jsx)(N.a,{component:"div",variant:"h5",color:g?"textPrimary":"textSecondary",sx:{overflow:"hidden"},children:e.title}),Object(x.jsx)(N.a,{variant:"subtitle1",color:g?"textPrimary":"textSecondary",component:"div",children:e.artist}),Object(x.jsx)(N.a,{variant:"subtitle1",color:g?"textPrimary":"textSecondary",component:"div",children:e.date})]})},t)}))})]}),Object(x.jsx)(ue.a,{direction:"row",justifyContent:"flex-end",children:Object(x.jsx)(A,{variant:"subtitle1",children:"Powered by LastFm"})})]})})})}))},Oe=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"flex",flexDirection:"column",position:"relative",minHeight:"92vh",alignItems:"center",justifyContent:"start",padding:t.spacing(.8)},t.breakpoints.up("sm"),{justifyContent:"center"})})),ve=Object(l.a)("nav")((function(e){return{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:e.theme.spacing(1)}})),ye=Object(l.a)("div")((function(e){var t=e.theme;return{background:"linear-gradient(\n    180deg,\n    ".concat(t.palette.background.default," 65%,\n    ").concat("dark"===t.palette.type?t.palette.primary.main:t.palette.secondary.main,"6e 300%)")}})),ke=function(){var e=i.useState("home"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)(ye,{children:[Object(x.jsxs)(ve,{children:[Object(x.jsx)(b,{setNav:a}),Object(x.jsx)(O,{})]}),Object(x.jsxs)(Oe,{children:["home"===n&&Object(x.jsx)(ne,{setNav:a,show:!("home"!==n)}),"projects"===n&&Object(x.jsx)(K,{setNav:a,show:!("projects"!==n)}),"nowPlaying"===n&&Object(x.jsx)(ge,{setNav:a,pageState:n,show:!("nowPlaying"!==n)})]})]})},we=n(202),Ce=n(114),Se=n(203),Pe=n(211);var Ie=function(){var e=i.createContext(void 0);return[function(){var t=i.useContext(e);if(void 0===t)throw new Error("useCtx must be inside a Provider with a value");return t},e.Provider]}(),We=Object(o.a)(Ie,2),Le=We[0],Me=We[1],Re=function(){var e=Object(we.a)("(prefers-color-scheme: dark)"),t=i.useState(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],c=i.useMemo((function(){return{darkMode:a,setDarkMode:r}}),[a]),s=i.useMemo((function(){return Object(Ce.a)({palette:{type:a?"dark":"light",mode:a?"dark":"light",primary:{light:"#6ec6ff",main:"#2196f3",dark:"#0069c0"},secondary:{light:"#ff8038",main:"#c95100",dark:"#912000"},warning:{main:"#b40000"}},typography:{fontFamily:["Ubuntu","sans-serif"].join(","),fontSize:14},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1536}}})}),[a]),l=Object(Se.a)(s,{factor:3});return i.useEffect((function(){r(e)}),[e]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(Pe.a,{theme:l,children:Object(x.jsx)(Me,{value:c,children:Object(x.jsx)(ke,{})})})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))},Te=n(204);c.a.render(Object(x.jsxs)(a.a.StrictMode,{children:[Object(x.jsx)(Te.a,{}),Object(x.jsx)(Re,{})]}),document.getElementById("root")),De()}},[[142,1,2]]]);
//# sourceMappingURL=main.49fd34ca.chunk.js.map