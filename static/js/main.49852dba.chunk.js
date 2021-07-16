(this["webpackJsonphome-portfolio-react"]=this["webpackJsonphome-portfolio-react"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),o=a(8),s=a(143),l=a(11),d=a(9),p=a(107),j=a(83),m=a.n(j),b=a(32),u=a(155),h=a(158),x=a(145),f=a(3),O=Object(s.a)((function(e){return{NavButton:Object(d.a)({position:"absolute",border:"1px solid ".concat(e.darkMode.darkMode?e.palette.primary.main:e.palette.secondary.main),left:"20px",top:"15px"},e.breakpoints.up("sm"),{left:"50px",top:"50px"})}})),g=i.a.forwardRef((function(e,t){return Object(f.jsx)(x.a,Object(l.a)(Object(l.a)({},e),{},{ref:t}))})),k=i.a.forwardRef((function(e,t){return Object(f.jsx)(u.a,Object(l.a)(Object(l.a)({},e),{},{ref:t}))})),y=i.a.forwardRef((function(e,t){return Object(f.jsx)(h.a,Object(l.a)(Object(l.a)({},e),{},{ref:t}))})),v=function(e){var t=e.setnav,a=O(),n=Object(b.a)().darkMode.darkMode,r=i.a.useState(null),c=Object(o.a)(r,2),s=c[0],d=c[1],j=Boolean(s),u=function(e){switch(e){case"projects":t("projects"),d(null);break;case"home":t("home"),d(null);break;default:d(null)}},h={anchorEl:s,open:j,onClose:u,id:"faded-menu",TransitionComponent:g};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{"aria-controls":"fade-menu","aria-haspopup":"true",className:a.NavButton,onClick:function(e){d(e.currentTarget)},children:Object(f.jsx)(m.a,{color:n?"primary":"secondary"})}),Object(f.jsxs)(k,Object(l.a)(Object(l.a)({keepMounted:!0},h),{},{children:[Object(f.jsx)(y,{onClick:function(){return u("home")},children:" home "}),Object(f.jsx)(y,{onClick:function(){return u("projects")},children:" projects "})]}))]})},M=a(84),N=a.n(M),w=Object(s.a)((function(e){return{root:{position:"relative",color:e.darkMode.darkMode?e.palette.primary.main:e.palette.secondary.main},iconPosition:Object(d.a)({margin:0,position:"absolute",right:"20px",top:"12px"},e.breakpoints.up("sm"),{right:"50px",top:"50px"})}})),C=function(){var e=Object(b.a)(),t=w();return Object(f.jsx)("div",{className:t.iconPosition,children:Object(f.jsx)(p.a,{className:t.root,onClick:function(){return e.darkMode.setDarkMode((function(e){return!e}))},children:Object(f.jsx)(N.a,{fontSize:"large"})})})},S=a(4),D=a(42),B=a(159),I=a(85),W=a.n(I),T=a(156),A=a(150),R=a(151),F=a(86),P=a.n(F),H=a(147),L=a(148),z=["children"],E=["children"],J=["children"],X=function(e){var t=e.children,a=Object(S.a)(e,z),n=Object(b.a)().darkMode.darkMode;return Object(f.jsx)(H.a,Object(l.a)(Object(l.a)({color:n?"textPrimary":"textSecondary"},a),{},{children:t}))},G=function(e){var t=e.children,a=Object(S.a)(e,E),n=Object(b.a)().darkMode.darkMode;return Object(f.jsx)(L.a,Object(l.a)(Object(l.a)({color:n?"primary":"secondary",variant:"contained"},a),{},{children:t}))},U=function(e){var t=e.children,a=Object(S.a)(e,J),n=Object(b.a)().darkMode.darkMode;return Object(f.jsx)(L.a,Object(l.a)(Object(l.a)({color:n?"primary":"secondary",variant:"outlined"},a),{},{children:t}))},_=a(146),Y=a(149),q=Object(s.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",width:"100%"},media:(t={maxHeight:320,minWidth:120,maxWidth:200},Object(d.a)(t,e.breakpoints.up("xs"),{maxHeight:320,maxWidth:400,minWidth:200}),Object(d.a)(t,e.breakpoints.up("md"),{maxHeight:320,maxWidth:400,minWidth:320}),t),cardBodyArea:{display:"flex",flexDirection:"column"},cardDetailsArea:Object(d.a)({display:"grid",gridTemplateRows:"auto",padding:e.spacing(.4),justifyItems:"center"},e.breakpoints.up("md"),{gridTemplateColumns:"auto auto"}),cardTextArea:{padding:e.spacing(.4),margin:e.spacing(.2),display:"flex",flexDirection:"column",textAlign:"center"},cardButtonArea:{padding:e.spacing(.4),margin:e.spacing(.4),display:"flex",justifyContent:"space-evenly"},padding:{padding:e.spacing(.4)}}})),K=function(e){var t=e.imageUri,a=e.content,n=e.siteLink,i=e.codeLink,r=q();return Object(f.jsx)(_.a,{elevation:0,className:r.root,children:Object(f.jsxs)("div",{className:r.cardDetailsArea,children:[t?Object(f.jsx)("img",{className:r.media,alt:"ff",src:t}):Object(f.jsx)(Y.a,{className:r.media,height:30,animation:"wave"}),Object(f.jsxs)("div",{className:r.cardTextArea,children:[Object(f.jsx)("div",{children:Object(f.jsx)(H.a,{variant:"body2",color:"textSecondary",component:"p",children:a||""})}),Object(f.jsxs)("div",{className:r.cardButtonArea,children:[n&&Object(f.jsx)(U,{href:n,target:"_blank",children:"Check It Out"}),Object(f.jsx)(U,{href:i,target:"_blank",children:"Git Code"})]})]})]})})},Q=["setnav","show"],V=["children","title","description"],Z=Object(s.a)((function(e){var t;return{profileCard:(t={display:"none",position:"relative",flexDirection:"column",height:"auto",minWidth:"100%",padding:e.spacing(2),border:e.darkMode.darkMode?"1px solid ".concat(e.palette.primary.light,"21"):"none",boxShadow:e.darkMode.darkMode?"none":"-1px -3px 10px 1px ".concat(e.palette.secondary.light,"21,\n        1px 3px 10px 1px ").concat(e.palette.secondary.light,"21"),borderRadius:"0.9em"},Object(d.a)(t,e.breakpoints.up("xs"),{minWidth:"55%"}),Object(d.a)(t,e.breakpoints.up("sm"),{minWidth:"65%"}),Object(d.a)(t,e.breakpoints.up("xl"),{minWidth:"75%"}),t),profileDiv:{margin:e.spacing(1),display:"flex",flexDirection:"column"},backButton:{alignSelf:"self-start",margin:e.spacing(1),marginBottom:e.spacing(2)},spacing:{margin:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},avatar:{height:"auto",marginRight:e.spacing(1)}}})),$=function(e){var t=e.children,a=e.title,n=e.description,i=Object(S.a)(e,V),r=Z();return Object(f.jsxs)(T.a,Object(l.a)(Object(l.a)({},i),{},{children:[Object(f.jsxs)(A.a,{expandIcon:Object(f.jsx)(P.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(f.jsx)(B.a,{"aria-label":"title",className:r.avatar,variant:"rounded",children:a.slice(0,1)}),Object(f.jsx)(X,{className:r.heading,children:a}),Object(f.jsx)(X,{className:r.secondaryHeading,children:n})]}),Object(f.jsx)(R.a,{children:t})]}))},ee=function(e){var t=e.setnav,a=e.show,n=Object(S.a)(e,Q),r=Z(),c=Object(D.useTransition)(a,{from:{display:"none",transform:"translateX(80%)"},enter:{delay:600,display:"flex",transform:"translateX(0%)"},leave:{transform:"translateX(-250%)"},expires:2}),s=i.a.useState(null),d=Object(o.a)(s,2),p=d[0],j=d[1];i.a.useEffect((function(){fetch("/react-homepage/projectDetails.json").then((function(e){return e.json()})).then((function(e){var t=e.details;j(t)}))}),[]);var m=function(e){t("home")},b=i.a.useState(!1),u=Object(o.a)(b,2),h=u[0],x=u[1];return c((function(e,t){return t&&Object(f.jsx)(D.animated.div,Object(l.a)(Object(l.a)({className:r.profileCard,style:e},n),{},{children:Object(f.jsxs)("div",{className:r.profileDiv,children:[Object(f.jsx)(G,{size:"small",onClick:m,className:r.backButton,startIcon:Object(f.jsx)(W.a,{}),children:"Home"}),p?p.map((function(e,t){return Object(f.jsx)($,{title:e.header,description:e.description,className:r.spacing,expanded:h==="panel".concat(t),onChange:(a="panel".concat(t),function(e,t){x(!!t&&a)}),children:Object(f.jsx)(K,Object(l.a)({},e))},"panel".concat(t));var a})):null]})}))}))},te=a(46),ae=["setnav","show"],ne=Object(s.a)((function(e){var t;return{profileCard:(t={display:"none",position:"relative",flexDirection:"column",height:"auto",padding:e.spacing(2),border:e.darkMode.darkMode?"1px solid ".concat(e.palette.primary.light,"21"):"none",boxShadow:e.darkMode.darkMode?"none":"7px 10px 14px 1px #0000000d,\n        1px 3px 10px 1px #00000021",borderRadius:"0.9em",minWidth:"100%"},Object(d.a)(t,e.breakpoints.up("xs"),{minWidth:"40%"}),Object(d.a)(t,e.breakpoints.up("sm"),{minWidth:"50%"}),Object(d.a)(t,e.breakpoints.up("xl"),{minWidth:"60%"}),t),profileDiv:{margin:e.spacing(.5),marginBottom:e.spacing(5),display:"flex",justifyContent:"space-evenly"},projectBtnSection:{margin:e.spacing(.5),marginBottom:e.spacing(5),display:"flex",justifyContent:"center",alignItems:"baseline"},profileAvatar:{height:"150px",width:"150px"},aboutSection:{margin:e.spacing(.5),marginBottom:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},margin:{margin:e.spacing(.5)}}})),ie=function(e){var t=e.setnav,a=e.show,n=Object(S.a)(e,ae),i=ne(),r=Object(b.a)(),c=Object(D.useTransition)(a,{from:{display:"none",transform:"scale(0.2)"},enter:{delay:500,display:"flex",transform:"scale(1)"},leave:{transform:"scale(0)"},expires:2}),o=r.darkMode.darkMode,s=function(){t("projects")};return c((function(e,t){return t&&Object(f.jsxs)(D.animated.div,Object(l.a)(Object(l.a)({className:i.profileCard,style:e},n),{},{children:[Object(f.jsx)("div",{className:i.profileDiv,children:Object(f.jsx)(B.a,{src:o?"/react-homepage/avi2.png":"/react-homepage/avi.png",alt:"test",className:i.profileAvatar})}),Object(f.jsxs)("div",{className:i.aboutSection,children:[Object(f.jsx)(X,{children:"My name is Mubarak Yahaya, I'm a programmer based in Nigeria."}),Object(f.jsx)(X,{children:"I'm Passionate about web/software development and my current working stack is Python, Javascript and Linux"})]}),Object(f.jsxs)("div",{className:i.projectBtnSection,children:[Object(f.jsx)(X,{className:i.margin,children:"Check out some of my"}),Object(f.jsx)(G,{className:i.margin,onClick:s,children:"Projects"})]}),Object(f.jsxs)("div",{className:i.profileDiv,children:[Object(f.jsx)(te.SocialIcon,{bgColor:o?r.palette.primary.dark:"black",url:"https://github.com/mubrik",title:"Github"}),Object(f.jsx)(te.SocialIcon,{bgColor:o?r.palette.primary.dark:"black",url:"mailto:mubarakg4u@gmail.com",network:"email",title:"Email"}),Object(f.jsx)(te.SocialIcon,{url:"https://t.me/mubrik1",network:"telegram",title:"Telegram"}),Object(f.jsx)(te.SocialIcon,{url:"https://www.linkedin.com/in/mubarak-yahaya-957917163",title:"LinkedIn"})]})]}))}))},re=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",position:"relative",minHeight:"100vh",background:"linear-gradient(\n            180deg,\n            ".concat(e.palette.background.default," 65%,\n            ").concat(e.darkMode.darkMode?e.palette.primary.main:e.palette.secondary.main,"6e 300%)"),alignItems:"center",justifyContent:"center",padding:e.spacing(.8)}}})),ce=function(){var e=re(),t=i.a.useState("home"),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(v,{setnav:r}),Object(f.jsx)(C,{}),Object(f.jsx)(ie,{setnav:r,show:!("home"!==n)}),Object(f.jsx)(ee,{setnav:r,show:!("projects"!==n)})]})})},oe=a(153),se=a(152),le=a(87),de=a(157),pe=function(){var e=Object(se.a)("(prefers-color-scheme: dark)"),t=i.a.useState(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],c=i.a.useMemo((function(){return Object(le.a)({palette:{type:n?"dark":"light",primary:{light:"#6ec6ff",main:"#2196f3",dark:"#0069c0"},secondary:{light:"#ff8038",main:"#c95100",dark:"#912000"},warning:{main:"#b40000"}},typography:{fontFamily:["Ubuntu","sans-serif"].join(","),fontSize:14},breakpoints:{values:{xs:500,sm:600,md:960,lg:1280,xl:1920,phones:450}},darkMode:{darkMode:n,setDarkMode:r}})}),[n]);return c=Object(de.a)(c,{factor:3}),i.a.useEffect((function(){r(e)}),[e]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(oe.a,{theme:c,children:Object(f.jsx)(ce,{})})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))},me=a(154);c.a.render(Object(f.jsxs)(i.a.StrictMode,{children:[Object(f.jsx)(me.a,{}),Object(f.jsx)(pe,{})]}),document.getElementById("root")),je()}},[[106,1,2]]]);
//# sourceMappingURL=main.49852dba.chunk.js.map