(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{244:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=a(46),s=a(272),m=a(9),u=a(270),l=a(271),p=a(273),d=a(279),h=a(268),b=a(47),g=a(100),f=a.n(g),E=Object(h.a)((function(e){var t,a,n;return{root:(t={flexGrow:1,marginBottom:20},Object(m.a)(t,e.breakpoints.up("xs"),{height:90}),Object(m.a)(t,e.breakpoints.up("sm"),{height:60}),t),appBarClass:(a={backgroundColor:"#de3131"},Object(m.a)(a,e.breakpoints.up("xs"),{height:90}),Object(m.a)(a,e.breakpoints.up("sm"),{height:60}),a),title:{flexGrow:1,display:"block"},search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(n={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(m.a)(n,e.breakpoints.up("xs"),{width:"6ch","&:focus":{width:"8ch"}}),Object(m.a)(n,e.breakpoints.up("sm"),{width:"8ch","&:focus":{width:"10ch"}}),Object(m.a)(n,e.breakpoints.up("md"),{width:"10ch","&:focus":{width:"20ch"}}),Object(m.a)(n,"paddingRight",e.spacing(15)),n)}}));function k(e){var t=e.inputText,a=e.setInputText,n=E();return r.a.createElement("div",{className:n.root},r.a.createElement(u.a,{className:n.appBarClass},r.a.createElement(l.a,null,r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:2,sm:1}),r.a.createElement(s.a,{item:!0,xs:10,sm:3},r.a.createElement(p.a,{className:n.title,variant:"h4",noWrap:!0},"Pok\xe9dex")),r.a.createElement(s.a,{item:!0,xs:2,md:3}),r.a.createElement(s.a,{item:!0},r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(f.a,null)),r.a.createElement(d.a,{value:t,onChange:function(e){a(e.target.value)},placeholder:"Search",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}}))),r.a.createElement(s.a,{item:!0,xs:2,sm:1})))))}var x=a(30),v=a.n(x),j=a(65),w=a(66),O=a(277),y=a(274),N=a(278),I=a(276),C=a(275),P=Object(h.a)((function(){return{card:{borderRadius:14,height:300},cardActionArea:{height:300},pokemonName:{textAlign:"center",textTransform:"capitalize"}}}));function A(e){var t=e.pokemon,a=P(),n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.id,".svg");return r.a.createElement(s.a,{className:"card-parent",item:!0,xs:12,sm:6,md:3,key:t.id},r.a.createElement("div",{className:"card"},r.a.createElement(y.a,{className:a.card,style:{background:t.background},elevation:3},r.a.createElement(N.a,{className:a.cardActionArea},r.a.createElement(C.a,{component:"img",alt:t.name,height:"250",src:n,title:t.name}),r.a.createElement(I.a,null,r.a.createElement(p.a,{gutterBottom:!0,className:a.pokemonName},t.name))))))}var T=a(101);function R(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];function c(){return(c=Object(w.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?limit=648");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,Promise.all(a.results.map(function(){var e=Object(w.a)(v.a.mark((function e(t){var a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=a.substring(34,a.length-1),r=new T("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(n,".svg")),e.next=5,r.getPalette();case 5:return c=e.sent,e.abrupt("return",Object(j.a)(Object(j.a)({},t),{},{background:"rgba(".concat(c.Vibrant._rgb[0],", ").concat(c.Vibrant._rgb[1],", ").concat(c.Vibrant._rgb[2],", 0.6)"),id:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){return c.apply(this,arguments)})().then(r)}),[]),Object(n.useMemo)((function(){return{pokemons:a}}),[a])}function B(e){var t=e.inputText,a=R().pokemons;return r.a.createElement(r.a.Fragment,null,0===a.length?r.a.createElement(O.a,{color:"secondary"}):r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:1}),r.a.createElement(s.a,{item:!0,container:!0,xs:10,spacing:3,justifyContent:"center"},a.map((function(e){return!!e.name.includes(t.toLowerCase())&&r.a.createElement(A,{key:e.id,pokemon:e})}))),r.a.createElement(s.a,{item:!0,xs:1})))}function L(){return r.a.createElement(S,null)}function S(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(s.a,{container:!0,direction:"column"},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(k,{inputText:a,setInputText:c})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(B,{inputText:a})))}a(244);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.4466b6a8.chunk.js.map