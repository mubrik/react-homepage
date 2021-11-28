(this["webpackJsonphome-portfolio-react"]=this["webpackJsonphome-portfolio-react"]||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(36),c=n.n(r),o=n(10),s=n(4),l=n(189),d=n(217),u=n(203),j=n(196),p=n(206),m=n(195),x=n(2),h=Object(l.a)("div")((function(e){var t=e.theme;return{position:"relative",border:"1px solid ".concat("dark"==t.palette.type?t.palette.secondary.main:t.palette.primary.main),borderRadius:"15px"}})),b=function(e){var t=e.setNav,n=we().darkMode,i=a.useState(null),r=Object(o.a)(i,2),c=r[0],s=r[1],l=Boolean(c),b=function(e){switch(e){case"projects":t("projects"),s(null);break;case"home":t("home"),s(null);break;case"nowPlaying":t("nowPlaying"),s(null);break;default:s(null)}};return Object(x.jsxs)(h,{children:[Object(x.jsx)(d.a,{"aria-controls":"fade-menu","aria-haspopup":"true",color:n?"secondary":"primary",onClick:function(e){s(e.currentTarget)},children:Object(x.jsx)(m.a,{})}),Object(x.jsxs)(u.a,{open:l,anchorEl:c,onClose:b,id:"faded-menu",TransitionComponent:j.a,children:[Object(x.jsx)(p.a,{onClick:function(){return b("home")},children:" Home "}),Object(x.jsx)(p.a,{onClick:function(){return b("projects")},children:" Projects "}),Object(x.jsx)(p.a,{onClick:function(){return b("nowPlaying")},children:" Now Playing "})]})]})},f=n(198),g=Object(l.a)("div")((function(){return{position:"relative"}})),O=function(){var e=we(),t=e.darkMode,n=e.setDarkMode;return Object(x.jsx)(g,{children:Object(x.jsx)(d.a,{color:t?"secondary":"primary",onClick:function(){return n((function(e){return!e}))},children:Object(x.jsx)(f.a,{fontSize:"large"})})})},v=n(41),y=n(207),k=n(220),w=n(221),C=n(210),S=n(110),P=n.n(S),W=n(111),M=n.n(W),I=n(42),D=n(218),L=n(219),T=n(21),R=n(212),H=n(211),N=["children"],B=["children","href","variant","onClick"],E=function(e){var t=e.children,n=Object(T.a)(e,N),a=we().darkMode;return Object(x.jsx)(R.a,Object(v.a)(Object(v.a)({sx:{color:a?"text.primary":"text.secondary"}},n),{},{children:t}))},F=function(e){var t=e.children,n=e.href,a=e.variant,i=e.onClick,r=Object(T.a)(e,B),c=n||"",o=we().darkMode;return Object(x.jsx)(H.a,Object(v.a)(Object(v.a)({color:o?"secondary":"primary",variant:a||"outlined",onClick:i||function(e){return function(e,t){t&&t.preventDefault(),window.open(e,"_blank")}(c,e)},href:n||""},r),{},{children:t}))},A=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"grid",gridTemplateRows:"auto",padding:t.spacing(.4),justifyItems:"center"},t.breakpoints.up("md"),{gridTemplateColumns:"auto auto"})})),X=Object(l.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(.4),margin:t.spacing(.2),display:"flex",flexDirection:"column",textAlign:"center"}})),z=Object(l.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(.4),margin:t.spacing(.4),display:"flex",justifyContent:"space-evenly"}})),G=Object(l.a)("img")((function(e){var t,n=e.theme;return t={maxHeight:320,minWidth:120,maxWidth:200},Object(s.a)(t,n.breakpoints.up("xs"),{maxHeight:320,maxWidth:400,minWidth:200}),Object(s.a)(t,n.breakpoints.up("md"),{maxHeight:320,maxWidth:400,minWidth:320}),t})),J=function(e){var t=e.imageUri,n=e.content,a=e.siteLink,i=e.codeLink;return Object(x.jsx)(D.a,{elevation:0,sx:{display:"flex",flexDirection:"column",width:"100%"},children:Object(x.jsxs)(A,{children:[t?Object(x.jsx)(G,{alt:"placeholder",src:t}):Object(x.jsx)(L.a,{width:60,height:30,animation:"wave"}),Object(x.jsxs)(X,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(E,{variant:"body2",children:n||""})}),Object(x.jsxs)(z,{children:[a&&Object(x.jsx)(F,{href:a,children:"Check It Out"}),Object(x.jsx)(F,{href:i,children:"Git Code"})]})]})]})})},U=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",padding:n.spacing(2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",boxShadow:"dark"===n.palette.type?"none":"7px 10px 14px 1px #0000000d,\n  1px 3px 10px 1px #00000021",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("xl"),{minWidth:"58vw"}),t})),_=function(e){var t=e.setNav,n=e.show,a=i.a.useState(!1),r=Object(o.a)(a,2),c=r[0],s=r[1],l=i.a.useState(null),d=Object(o.a)(l,2),u=d[0],j=d[1],p=Object(I.useTransition)(n,{from:{display:"none",transform:"translateX(80%)"},enter:{delay:600,display:"flex",transform:"translateX(0%)"},leave:{transform:"translateX(-250%)"},expires:2});i.a.useEffect((function(){fetch("/react-homepage/projectDetails.json").then((function(e){return e.json()})).then((function(e){var t=e.details;j(t)}))}),[]);var m=function(){t("home")};return p((function(e,t){return t&&Object(x.jsx)(I.animated.div,{style:e,children:Object(x.jsxs)(U,{children:[Object(x.jsx)(F,{size:"small",onClick:m,sx:{alignSelf:"self-start",margin:function(e){return e.spacing(1)},marginBottom:function(e){return e.spacing(2)}},startIcon:Object(x.jsx)(P.a,{}),children:"Home"}),u?u.map((function(e,t){return Object(x.jsxs)(y.a,{sx:{margin:function(e){return e.spacing(1)}},expanded:c==="panel".concat(t),onChange:function(e,n){return function(e,t){s(!!t&&e)}("panel".concat(t),n)},children:[Object(x.jsxs)(k.a,{expandIcon:Object(x.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(x.jsx)(C.a,{"aria-label":"title",variant:"rounded",sx:{height:"auto",marginRight:function(e){return e.spacing(1)}},children:e.header.slice(0,1)}),Object(x.jsx)(E,{children:e.header}),Object(x.jsx)(E,{sx:{marginLeft:"auto",marginRight:"auto"},children:e.description})]}),Object(x.jsx)(w.a,{children:Object(x.jsx)(J,Object(v.a)({},e))})]},"panel".concat(t))})):null]})})}))},q=n(70),Y=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.5),marginBottom:t.spacing(2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}})),K=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.1),marginBottom:t.spacing(1.5),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center"}})),Q=Object(l.a)("div")((function(e){return{margin:e.theme.spacing(3),display:"flex",justifyContent:"space-evenly"}})),V=Object(l.a)("div")((function(e){var t=e.theme;return{margin:t.spacing(.5),marginBottom:t.spacing(3),display:"flex",justifyContent:"space-evenly"}})),Z=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",padding:n.spacing(2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",boxShadow:"dark"===n.palette.type?"none":"7px 10px 14px 1px #0000000d,\n  1px 3px 10px 1px #00000021",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("xl"),{minWidth:"58vw"}),t})),$=function(e){var t=e.setNav,n=e.show,a=Object(I.useTransition)(n,{from:{display:"none",transform:"scale(0.2)"},enter:{delay:500,display:"flex",transform:"scale(1)"},leave:{transform:"scale(0)"},expires:2}),i=we().darkMode,r=function(e){t(e)};return a((function(e,t){return t&&Object(x.jsx)(I.animated.div,{style:e,children:Object(x.jsxs)(Z,{children:[Object(x.jsx)(V,{children:Object(x.jsx)(C.a,{src:i?"/react-homepage/avi2.png":"/react-homepage/avi.png",alt:"test",sx:{width:80,height:80}})}),Object(x.jsxs)(Y,{children:[Object(x.jsx)(E,{children:"My name is Mubarak Yahaya, A developer based in Nigeria. "}),Object(x.jsx)(E,{children:"I love good music, coffee and tweaking stuff :) "}),Object(x.jsx)(E,{children:"My current development stack includes Python, javaScript( typeScript ) and Linux "})]}),Object(x.jsxs)(K,{children:[Object(x.jsx)(E,{children:"Check out some of my"}),Object(x.jsx)(F,{variant:"contained",sx:{marginLeft:function(e){return e.spacing(1)}},onClick:function(){return r("projects")},children:"Projects"})]}),Object(x.jsxs)(K,{children:[Object(x.jsx)(E,{children:"What am i "}),Object(x.jsx)(F,{variant:"contained",sx:{marginLeft:function(e){return e.spacing(1)},marginRight:function(e){return e.spacing(1)}},onClick:function(){return r("nowPlaying")},children:"Listening"}),Object(x.jsx)(E,{children:"to?"})]}),Object(x.jsxs)(Q,{children:[Object(x.jsx)(q.SocialIcon,{bgColor:i?"#c95100":"black",url:"https://github.com/mubrik",title:"Github"}),Object(x.jsx)(q.SocialIcon,{bgColor:i?"#c95100":"black",url:"mailto:mubarakg4u@gmail.com",network:"email",title:"Email"}),Object(x.jsx)(q.SocialIcon,{url:"https://t.me/mubrik1",network:"telegram",title:"Telegram"}),Object(x.jsx)(q.SocialIcon,{url:"https://www.linkedin.com/in/mubarak-yahaya-957917163",title:"LinkedIn"})]})]})})}))},ee=n(32),te=n.n(ee),ne=n(16),ae=n(51),ie=n(214),re=n(213),ce=n(216),oe=n(215),se=n(199),le=n(205),de=Object(l.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",flexDirection:"column",height:"auto",maxHeight:"80vh",padding:n.spacing(1.2),border:"dark"===n.palette.type?"1px solid ".concat(n.palette.primary.light,"21"):"none",borderRadius:"0.9em",minWidth:"100%"},Object(s.a)(t,n.breakpoints.up("xs"),{minWidth:"50vw"}),Object(s.a)(t,n.breakpoints.up("sm"),{minWidth:"55vw"}),Object(s.a)(t,n.breakpoints.up("lg"),{minWidth:"58vw"}),t})),ue=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"grid",gridTemplateRows:" auto",overflow:"auto",padding:t.spacing(1)},t.breakpoints.up("sm"),{gridTemplateColumns:"1fr 0.8fr",overflow:"hidden",gap:"10px",padding:t.spacing(.5)})})),je=function(e,t){var n,a,i,r,c=Object(v.a)({},e),o={artist:"",title:"",image:"",date:"",timeMs:""};if((o.artist=(null===c||void 0===c||null===(n=c.artist)||void 0===n?void 0:n["#text"])?c.artist["#text"]:"placeholder",o.date=(null===c||void 0===c||null===(a=c.date)||void 0===a?void 0:a["#text"])?c.date["#text"]:"",o.timeMs=(null===c||void 0===c||null===(i=c.date)||void 0===i?void 0:i.uts)?c.date.uts:"placeholder",o.title=(null===c||void 0===c?void 0:c.name)?c.name:"placeholder",o.image=(null===c||void 0===c?void 0:c.image[2]["#text"])?c.image[2]["#text"]:"","nowPlaying"===t)&&((null===c||void 0===c||null===(r=c.date)||void 0===r?void 0:r.uts)?c.date.uts:null))new Date;return o},pe=function(e){var t=e.pageState,n=e.show,i=a.useState(null),r=Object(o.a)(i,2),c=r[0],s=r[1],l=a.useState(null),d=Object(o.a)(l,2),u=d[0],j=d[1],p=a.useState("idle"),m=Object(o.a)(p,2),h=m[0],b=m[1],f=we().darkMode,g=a.useCallback(Object(ae.a)(te.a.mark((function e(){var t,n,a,i,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b("loading"),e.prev=1,e.next=4,fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mubrik&api_key=ae2c676a4406b4a3afdbe1f31413b72c&format=json&limit=4");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,a=Object(ne.a)(n.recenttracks.track),i=je(a.slice(0,1)[0],"nowPlaying"),r=a.slice(1).map((function(e){return je(e,"recent")})),s(i),j(r),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),s(null),j(null);case 20:b("loaded");case 21:case"end":return e.stop()}}),e,null,[[1,15]])}))),[h]);a.useEffect((function(){"nowPlaying"===t&&"idle"===h&&g()}),[t,h]);var O=Object(I.useTransition)(n,{from:{display:"none",transform:"scale(0.2)"},enter:{delay:500,display:"flex",transform:"scale(1)"},leave:{transform:"scale(0)"},expires:2}),v=function(){b("idle")};return O((function(e,t){return t&&Object(x.jsx)(I.animated.div,{style:e,children:Object(x.jsx)(de,{children:Object(x.jsxs)(se.a,{sx:{gap:1,maxHeight:"97%",position:"relative"},children:[Object(x.jsx)(se.a,{direction:"row",justifyContent:"flex-end",children:Object(x.jsx)(le.a,{onClick:v,loading:"loading"===h,variant:"outlined",color:f?"secondary":"primary",children:"Refresh"})}),Object(x.jsxs)(ue,{children:[Object(x.jsx)(se.a,{children:null!==c&&Object(x.jsx)(re.a,{raised:!0,sx:{display:"flex",justifyContent:"center",maxHeight:"84%",borderRadius:"14px"},children:Object(x.jsxs)(ie.a,{sx:{display:"flex",flexDirection:"column",textAlign:"center",gap:1,paddingTop:"5px"},children:[Object(x.jsx)(R.a,{component:"div",variant:"h4",color:f?"text.primary":"text.secondary",children:"Now Playing"}),Object(x.jsx)(oe.a,{component:"img",image:""===c.image?f?"https://media.giphy.com/media/jx8f8LrkhIOyAy6gcM/giphy.gif":"https://media.giphy.com/media/l46Ci4XuSbWL249fq/giphy.gif":c.image,sx:{maxHeight:"60%"},alt:"Live from space album cover"}),Object(x.jsxs)(ce.a,{sx:{flex:"1 1 auto"},children:[Object(x.jsx)(R.a,{component:"div",variant:"h5",color:f?"text.primary":"text.secondary",children:c.title}),Object(x.jsx)(R.a,{variant:"subtitle1",color:f?"text.primary":"text.secondary",component:"div",children:c.artist}),Object(x.jsx)(R.a,{variant:"subtitle1",color:f?"text.primary":"text.secondary",component:"div",children:c.date})]})]})})}),Object(x.jsx)(se.a,{direction:"column",spacing:{xs:1,sm:2,md:1},children:u&&u.map((function(e,t){return Object(x.jsx)(re.a,{raised:!0,sx:{display:"flex",maxHeight:"21vh",borderRadius:"14px",maxWidth:{xs:"auto",sm:"340px",md:"420px"}},children:Object(x.jsxs)(ce.a,{sx:{flex:"1 1 auto"},children:[Object(x.jsx)(R.a,{component:"div",variant:"h5",color:f?"textPrimary":"textSecondary",sx:{overflow:"hidden"},children:e.title}),Object(x.jsx)(R.a,{variant:"subtitle1",color:f?"textPrimary":"textSecondary",component:"div",children:e.artist}),Object(x.jsx)(R.a,{variant:"subtitle1",color:f?"textPrimary":"textSecondary",component:"div",children:e.date})]})},t)}))})]}),Object(x.jsx)(se.a,{direction:"row",justifyContent:"flex-end",children:Object(x.jsx)(E,{variant:"subtitle1",children:"Powered by LastFm"})})]})})})}))},me=Object(l.a)("div")((function(e){var t=e.theme;return Object(s.a)({display:"flex",flexDirection:"column",position:"relative",minHeight:"92vh",alignItems:"center",justifyContent:"start",padding:t.spacing(.8)},t.breakpoints.up("sm"),{justifyContent:"center"})})),xe=Object(l.a)("nav")((function(e){return{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:e.theme.spacing(1)}})),he=Object(l.a)("div")((function(e){var t=e.theme;return{background:"linear-gradient(\n    180deg,\n    ".concat(t.palette.background.default," 65%,\n    ").concat("dark"===t.palette.type?t.palette.primary.main:t.palette.secondary.main,"6e 300%)")}})),be=function(){var e=a.useState("home"),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(x.jsxs)(he,{children:[Object(x.jsxs)(xe,{children:[Object(x.jsx)(b,{setNav:i}),Object(x.jsx)(O,{})]}),Object(x.jsxs)(me,{children:["home"===n&&Object(x.jsx)($,{setNav:i,show:!("home"!==n)}),"projects"===n&&Object(x.jsx)(_,{setNav:i,show:!("projects"!==n)}),"nowPlaying"===n&&Object(x.jsx)(pe,{setNav:i,pageState:n,show:!("nowPlaying"!==n)})]})]})},fe=n(200),ge=n(112),Oe=n(201),ve=n(209);var ye=function(){var e=a.createContext(void 0);return[function(){var t=a.useContext(e);if(void 0===t)throw new Error("useCtx must be inside a Provider with a value");return t},e.Provider]}(),ke=Object(o.a)(ye,2),we=ke[0],Ce=ke[1],Se=function(){var e=Object(fe.a)("(prefers-color-scheme: dark)"),t=a.useState(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],c=a.useMemo((function(){return{darkMode:i,setDarkMode:r}}),[i]),s=a.useMemo((function(){return Object(ge.a)({palette:{type:i?"dark":"light",mode:i?"dark":"light",primary:{light:"#6ec6ff",main:"#2196f3",dark:"#0069c0"},secondary:{light:"#ff8038",main:"#c95100",dark:"#912000"},warning:{main:"#b40000"}},typography:{fontFamily:["Ubuntu","sans-serif"].join(","),fontSize:14},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1536}}})}),[i]),l=Object(Oe.a)(s,{factor:3});return a.useEffect((function(){r(e)}),[e]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ve.a,{theme:l,children:Object(x.jsx)(Ce,{value:c,children:Object(x.jsx)(be,{})})})})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},We=n(202);c.a.render(Object(x.jsxs)(i.a.StrictMode,{children:[Object(x.jsx)(We.a,{}),Object(x.jsx)(Se,{})]}),document.getElementById("root")),Pe()}},[[140,1,2]]]);
//# sourceMappingURL=main.9399e27f.chunk.js.map