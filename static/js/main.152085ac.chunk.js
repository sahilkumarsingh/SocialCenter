(this.webpackJsonpviewgit=this.webpackJsonpviewgit||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(35),c=n.n(r),s=(n(108),n(109),n(69)),o=n.n(s),j=n(15),l=n(79),d=n(13),b=n(187),x=n(177),u=n(170),h=n(173),O=n(83),p=n.n(O),g=n(179),f=n(178),m=n(2);function v(e){return Object(m.jsx)(m.Fragment,{children:e.userDetailsJson.map((function(e,t){return Object(m.jsxs)(x.a,{container:!0,item:!0,xs:12,children:[Object(m.jsx)(x.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},item:!0,xs:2,children:Object(m.jsx)("img",{style:{height:"100px",borderRadius:"50%"},alt:"user_image",src:e.avatar_url})}),Object(m.jsxs)(x.a,{style:{backgroundColor:"#71DFE7",padding:"1%",borderRadius:"12px"},item:!0,xs:6,children:[Object(m.jsx)(x.a,{item:!0,xs:12,children:Object(m.jsxs)(f.a,{variant:"h5",children:["Name: ",e.name]})}),Object(m.jsx)(x.a,{item:!0,xs:12,children:Object(m.jsxs)(f.a,{variant:"h5",children:["Location: ",e.location]})}),Object(m.jsx)(x.a,{item:!0,xs:12,children:Object(m.jsxs)(f.a,{variant:"h5",children:["Bio: ",e.bio]})}),Object(m.jsx)(x.a,{item:!0,xs:12,children:Object(m.jsxs)(f.a,{variant:"h5",children:["Followers: ",e.followers]})})]})]})}))})}function w(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),c=Object(d.a)(r,2),s=c[0],O=c[1],f=Object(a.useState)([]),w=Object(d.a)(f,2),y=w[0],C=w[1];function k(){return(k=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://api.github.com/users/".concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),C([].concat(Object(j.a)(y),[a])),O(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsxs)(b.a,{style:{marginLeft:"70px",backgroundColor:"#C2FFF9"},children:[Object(m.jsx)(g.a,{}),Object(m.jsxs)(x.a,{container:!0,spacing:2,children:[Object(m.jsx)(x.a,{item:!0,xs:4,style:{display:"flex",justifyContent:"right"},children:Object(m.jsx)("h1",{style:{color:"#FFC900",WebkitTextStroke:"1px black"},children:"Hello"})}),Object(m.jsx)(x.a,{item:!0,xs:8,style:{display:"flex",alignItems:"center"},children:Object(m.jsxs)("form",{style:{justifyContent:"space-between"},children:[Object(m.jsx)(u.a,{label:"Name",variant:"outlined",size:"small",value:n,onChange:function(e){i(e.target.value)}}),Object(m.jsx)(h.a,{onClick:function(){return k.apply(this,arguments)},endIcon:Object(m.jsx)(p.a,{}),loading:s,loadingPosition:"end",variant:"contained",style:{marginLeft:"10px",backgroundColor:"#FFC900",color:"black"},children:"Show"})]})}),y&&Object(m.jsx)(v,{userDetailsJson:y})]})]})})}var y=n(27),C=n(5),k=n(4),F=n(25),S=n(182),I=n(176),D=n(181),L=n(180),P=n(169),z=n(184),J=n(183),B=n(84),H=n.n(B),M=n(86),R=n.n(M),T=n(85),A=n.n(T),E=n(174),G=n(185),N=n(186),W=n(88),X=n.n(W),_=n(87),q=n.n(_),K=n(47),Q=240,U=function(e){return{width:Q,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},V=function(e){return Object(C.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},Y=Object(k.a)("div")((function(e){var t=e.theme;return Object(y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),Z=Object(k.a)(D.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(y.a)(Object(y.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:Q,width:"calc(100% - ".concat(Q,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}),{},{backgroundColor:"#1A5F7A"})})),$=Object(k.a)(I.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(y.a)(Object(y.a)({width:Q,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},n&&Object(y.a)(Object(y.a)({},U(t)),{},{"& .MuiDrawer-paper":U(t)})),!n&&Object(y.a)(Object(y.a)({},V(t)),{},{"& .MuiDrawer-paper":V(t)}))}));function ee(){var e=Object(F.a)(),t=a.useState(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],c=function(){r(!1)};return Object(m.jsxs)(S.a,{sx:{display:"flex"},children:[Object(m.jsx)(P.a,{}),Object(m.jsx)(Z,{position:"fixed",open:i,children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",sx:Object(y.a)({marginRight:"36px"},i&&{display:"none"}),children:Object(m.jsx)(H.a,{})}),Object(m.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",children:"Social Center"})]})}),Object(m.jsxs)($,{variant:"permanent",open:i,children:[Object(m.jsx)(Y,{children:Object(m.jsx)(J.a,{onClick:c,children:"rtl"===e.direction?Object(m.jsx)(A.a,{}):Object(m.jsx)(R.a,{})})}),Object(m.jsx)(z.a,{}),Object(m.jsx)(L.a,{children:["GitHub","Saved"].map((function(e,t){return Object(m.jsx)(K.b,{style:{textDecoration:"none",color:"inherit"},to:e,onClick:c,children:Object(m.jsxs)(E.a,{button:!0,children:[Object(m.jsx)(G.a,{children:t%2!==0?Object(m.jsx)(q.a,{}):Object(m.jsx)(X.a,{})}),Object(m.jsx)(N.a,{primary:e})]},e)})}))})]})]})}var te=n(89),ne=n(14);Object(te.a)({});var ae=function(){return Object(m.jsxs)("div",{id:"app",children:[Object(m.jsx)(ee,{}),";",Object(m.jsx)(ne.c,{children:Object(m.jsx)(ne.a,{path:"/GitHub",element:Object(m.jsx)(w,{})})})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(K.a,{children:Object(m.jsx)(ae,{})})}),document.getElementById("root")),ie()}},[[117,1,2]]]);
//# sourceMappingURL=main.152085ac.chunk.js.map