(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2zoVD",card:"Cards_card__1QDT5",infected:"Cards_infected__2Hs4z",recovered:"Cards_recovered__2Dtyc",deaths:"Cards_deaths__2cHPF"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),l=a.n(u),s=a(10),i=a(71),d=a(72),m=a(81),p=a(80),f=a(225),v=a(229),h=a(226),E=a(227),b=a(30),g=a.n(b),y=a(31),C=a.n(y),_=a(13),x=a.n(_),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"primary",variant:"h5",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(g.a,{start:0,end:a.value,duration:3,separator:","})),r.a.createElement("br",null),r.a.createElement(E.a,{color:"primary"},"Last Updated : ",new Date(o).toDateString()),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Total Number Of Cases From Covid-19 "))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",variant:"h5",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(g.a,{start:0,end:n.value,duration:3,separator:","})),r.a.createElement("br",null),r.a.createElement(E.a,{color:"textSecondary"},"Last Updated : ",new Date(o).toDateString()),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Total Number Of Recoveries From COVID-19 "))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"error",variant:"h5",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h4"},r.a.createElement(g.a,{start:0,end:c.value,duration:3,separator:","})),r.a.createElement("br",null),r.a.createElement(E.a,{color:"error"},"Last Updated : ",new Date(o).toDateString()),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Total Number Of Deaths From COVID-19"))))):"Loading..."},w=a(29),j=a(230),k=a(228),D=a(77),N=a.n(D),S=a(32),I=a.n(S),B=" https://covid19.mathdro.id/api",L=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,u,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B,t&&(a="".concat(B,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(B,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(B,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,F();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:N.a.FormControl},r.a.createElement(k.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},H=a(44),R=a(78),T=a.n(R),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)({}),d=Object(w.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(H.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State In ".concat(u)}}}):null,v=m[0]?r.a.createElement(H.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",backgroundColor:"rgba(0, 0, 255, 0.5)",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Death",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:T.a.container},u?f:v)},P=a(33),z=a.n(P),J=a(79),M=a.n(J),W=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{alt:"Covid_Logo",className:z.a.logo,src:M.a}),r.a.createElement(O,{data:t}),r.a.createElement(V,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}),r.a.createElement("div",{className:z.a.footer},r.a.createElement("p",null,"Made With",r.a.createElement("span",null," \u2764 "),"In India | By Shivdhan Chauhan")))}}]),a}(n.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))},33:function(e,t,a){e.exports={container:"App_container__RvgV5",logo:"App_logo__3cdHp"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__33tWH"}},78:function(e,t,a){e.exports={container:"Charts_container__2I0cf"}},79:function(e,t,a){e.exports=a.p+"static/media/logo.32f944ee.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.5c5436df.chunk.js.map