(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},15:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),o=(a(15),a(1)),s=a(5),u=a.n(s),i=a(6),m=a.n(i),f=a(7),p=a.n(f),E=function(e){var t=e.getColor,a=Object(n.useState)({play:function(){return console.log("can't play yet")}}),l=Object(o.a)(a,2),r=l[0],s=l[1],i=Object(n.useState)(""),f=Object(o.a)(i,2),E=f[0],h=f[1];Object(n.useEffect)((function(){t(E)}),[E]),Object(n.useEffect)((function(){s(new m.a(p.a,{volume:.4,throttleMs:80}))}),[]);return c.a.createElement("div",{className:"color-wheel"},c.a.createElement(u.a,{radius:100,onPreview:function(e){return h(e),void r.play()}}))},h=a(8),b=a.n(h),d=a(2),v=a.n(d),j=function(e){var t=e.hex,a={height:"100px",width:"100px",backgroundColor:t};return c.a.createElement("div",{className:"swatch",style:a},c.a.createElement("p",null,t),c.a.createElement(v.a,{component:"a","data-clipboard-text":t},"Copy"))},O=a(9),g=a.n(O);var y=function(e){var t=e.baseHsl,a=e.scheme,l=Object(n.useState)(null),r=Object(o.a)(l,2),s=r[0],u=r[1];return Object(n.useEffect)((function(){if(t){var e=new b.a;e.from_hue(t.h).scheme(a);var n=(c=e.colors(),l=t.s,r=t.l,c.map((function(e){return g()(e).set("hsl.s",l).set("hsl.l",r).hex()})));u(n)}var c,l,r}),[t]),s?c.a.createElement("div",{className:"palette-info"},console.log(s),c.a.createElement("p",null,a),c.a.createElement("div",{className:"palette"},s.map((function(e,t){return c.a.createElement(j,{key:t,hex:e})}))),c.a.createElement(v.a,{"data-clipboard-text":s.join(", ")},"Copy all")):null};var k=function(e){var t=e.setBgColor,a=Object(n.useState)(""),l=Object(o.a)(a,2),r=l[0],s=l[1],u=Object(n.useState)(null),i=Object(o.a)(u,2),m=i[0],f=i[1];return Object(n.useEffect)((function(){!function(e){if(""!==e){var t=function(e){if(""!==e)return e.match(/\((\d+), (\d+)%, (\d+)%/)}(e.hsl);f({h:t[1],s:t[2]/100,l:t[3]/100})}}(r)}),[r]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"color-picker-container"},c.a.createElement("h2",null,"Pick base color"),c.a.createElement(E,{getColor:function(e){s(e),t(e.hex)}}),c.a.createElement("div",{className:"color-info"},c.a.createElement("p",{style:{height:"1rem"}},r.hex),c.a.createElement("div",{className:"base-color-hsl"},c.a.createElement("p",null,"Hue ",m&&m.h),c.a.createElement("p",null,"Sat ",m&&m.s),c.a.createElement("p",null,"Light ",m&&m.l)))),c.a.createElement("div",{className:"palette-container"},c.a.createElement(y,{baseHsl:m,scheme:"triade"}),c.a.createElement(y,{baseHsl:m,scheme:"mono"}),c.a.createElement(y,{baseHsl:m,scheme:"tetrade"}),c.a.createElement(y,{baseHsl:m,scheme:"analogic"})))};var x=function(){var e=Object(n.useState)("#FFF"),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){document.querySelector("body").style.backgroundColor=a}),[a]),c.a.createElement("div",{className:"App",style:{backgroundColor:a}},c.a.createElement(k,{setBgColor:function(e){l(e)}}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/tick.99031276.mp3"}},[[10,1,2]]]);
//# sourceMappingURL=main.420e3f7c.chunk.js.map