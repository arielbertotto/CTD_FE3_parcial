(this.webpackJsonpCTD_FE_PARCIAL=this.webpackJsonpCTD_FE_PARCIAL||[]).push([[0],{14:function(e,a,o){},16:function(e,a,o){"use strict";o.r(a);var r=o(1),n=o.n(r),s=o(8),t=o.n(s),i=(o(14),o(2)),c=o(3),l=o(5),u=o(4),d=o(6),p=o(9),b=o(0),h=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={historial:[]},e}return Object(c.a)(o,[{key:"render",value:function(){var e=this.props.previa;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{children:["Seleccion anterior: ",e]}),Object(b.jsx)("h4",{children:"Historial de opciones elegidas:"}),Object(b.jsx)("ul",{children:this.state.historial.slice(0,-1).map((function(e,a){return Object(b.jsx)("li",{children:e},a)}))})]})}}],[{key:"getDerivedStateFromProps",value:function(e,a){return null===e.previa?null:{historial:[].concat(Object(p.a)(a.historial),[e.previa])}}}]),o}(n.a.Component),v=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){return Object(i.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){var e=this.props,a=e.texto,o=e.onClick,r=e.descripcion;return Object(b.jsxs)("div",{className:"opcion",children:[Object(b.jsx)("button",{className:"botones",value:a,onClick:o,children:a}),Object(b.jsx)("h2",{children:r})]})}}]),o}(n.a.Component),m=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={contador:1,narracion:d[0],opciones:[d[0].opciones.a,d[0].opciones.b],opcion:null},e.handleClick=function(a){if(e.state.contador<5){var o=d.find((function(o){return o.id===String(e.state.contador+1)+a.target.value.toLowerCase()}));e.setState((function(e){return{contador:e.contador+1,narracion:o,opciones:[o.opciones.a,o.opciones.b],opcion:a.target.value}}))}else alert("Fin de la Historia")},e}return Object(c.a)(o,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"layout",children:[Object(b.jsx)("h1",{className:"historia",children:this.state.narracion.historia}),Object(b.jsx)("div",{className:"opciones",children:this.state.opciones.map((function(a,o){return Object(b.jsx)(v,{texto:o?"B":"A",descripcion:a,onClick:e.handleClick},o)}))}),Object(b.jsx)("div",{className:"recordatorio",children:Object(b.jsx)(h,{previa:this.state.opcion})})]})}}]),o}(n.a.Component);var j=function(){return Object(b.jsx)(m,{})};t.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.51cfc2c1.chunk.js.map