(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e335f45"],{"0160":function(t,e,r){},"11de":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("cf75"),s=Object(o["d"])({id:Object(o["c"])(c["q"]),inline:Object(o["c"])(c["f"],!1),novalidate:Object(o["c"])(c["f"],!1),validated:Object(o["c"])(c["f"],!1)},i["t"]),l=a["a"].extend({name:i["t"],functional:!0,props:s,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t("form",Object(n["a"])(a,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),i)}})},"160f":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"styled-description",class:{compact:t.compact},domProps:{innerHTML:t._s(t.markup(t.description))}})},n=[],i=r("e7d1"),c={name:"Description",props:{description:{type:String,default:""},compact:{type:Boolean,default:!1},allowHTML:{type:Boolean,default:!1}},methods:{markup:function(t){if("string"!==typeof t)return"";var e=new i["Parser"],r=new i["HtmlRenderer"]({safe:!this.allowHTML,smart:!0}),a=e.parse(t);return r.render(a)}}},o=c,s=(r("1719"),r("2877")),l=Object(s["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},1719:function(t,e,r){"use strict";r("e7a4")},"8db4":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",[r("b-form",{on:{submit:t.onSubmit}},[r("b-form-group",{attrs:{id:"select",label:"Please specify a STAC Catalog or API...","label-for":"url","invalid-feedback":t.error,state:t.valid}},[r("b-form-input",{attrs:{id:"url",type:"url",placeholder:"https://..."},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),t.stacIndex.length>0?r("b-form-group",{attrs:{id:"stacIndex",label:"... or select one from STAC Index"}},[r("b-list-group",{staticClass:"stacIndex"},[t._l(t.stacIndex,(function(e){return["private"!==e.access?r("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{button:"",active:t.url===e.url},on:{click:function(r){t.url=e.url}}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("strong",{staticClass:"mb-1"},[t._v(t._s(e.title))]),r("small",[e.isApi?r("b-badge",{attrs:{variant:"dark",pill:""}},[t._v("API")]):r("b-badge",{attrs:{variant:"light",pill:""}},[t._v("Catalog")])],1)]),r("p",{staticClass:"mb-1"},[r("Description",{attrs:{description:e.summary,compact:!0}})],1)]):t._e()]}))],2)],1):t._e(),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Load")])],1)],1)],1)},n=[],i=r("5530"),c=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("11de")),o=r("8226"),s=r("4797"),l=r("2b0e"),u=r("b42e"),b=r("c637"),d=r("a723"),p=r("7b1e"),f=r("cf75");function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(f["d"])({flush:Object(f["c"])(d["f"],!1),horizontal:Object(f["c"])(d["h"],!1),tag:Object(f["c"])(d["q"],"div")},b["K"]),v=l["a"].extend({name:b["K"],functional:!0,props:O,render:function(t,e){var r=e.props,a=e.data,n=e.children,i=""===r.horizontal||r.horizontal;i=!r.flush&&i;var c={staticClass:"list-group",class:m({"list-group-flush":r.flush,"list-group-horizontal":!0===i},"list-group-horizontal-".concat(i),Object(p["m"])(i))};return t(r.tag,Object(u["a"])(a,c),n)}}),h=r("2326"),j=r("906c"),g=r("d82f"),y=r("4a38"),w=r("aa59");function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _=["a","router-link","button","b-link"],C=Object(g["i"])(w["b"],["event","routerTag"]);delete C.href.default,delete C.to.default;var L=Object(f["d"])(Object(g["l"])(x(x({},C),{},{action:Object(f["c"])(d["f"],!1),button:Object(f["c"])(d["f"],!1),tag:Object(f["c"])(d["q"],"div"),variant:Object(f["c"])(d["q"])})),b["L"]),I=l["a"].extend({name:b["L"],functional:!0,props:L,render:function(t,e){var r,a=e.props,n=e.data,i=e.children,c=a.button,o=a.variant,s=a.active,l=a.disabled,b=Object(y["d"])(a),d=c?"button":b?w["a"]:a.tag,p=!!(a.action||b||c||Object(h["a"])(_,a.tag)),m={},O={};return Object(j["s"])(d,"button")?(n.attrs&&n.attrs.type||(m.type="button"),a.disabled&&(m.disabled=!0)):O=Object(f["e"])(C,a),t(d,Object(u["a"])(n,{attrs:m,props:O,staticClass:"list-group-item",class:(r={},k(r,"list-group-item-".concat(o),o),k(r,"list-group-item-action",p),k(r,"active",s),k(r,"disabled",l),r)}),i)}}),S=r("2f62"),B=r("160f"),T={name:"SelectDataSource",components:{BForm:c["a"],BFormGroup:o["a"],BFormInput:s["a"],BListGroup:v,BListGroupItem:I,Description:B["a"]},data:function(){return{url:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(S["c"])(["stacIndex"])),Object(S["b"])(["toBrowserPath"])),{},{valid:function(){return!this.error},error:function(){if(!this.url)return null;try{var t=new URL(this.url);return t.protocol?t.host?null:"The URL is missing a host.":"The URL is missing a protocol."}catch(e){return"The URL is invalid."}}}),created:function(){this.$store.dispatch("loadStacIndex"),this.$store.commit("resetPage")},methods:{onSubmit:function(){this.$router.push({path:this.toBrowserPath(this.url)})}}},D=T,z=(r("f6a4"),r("2877")),A=Object(z["a"])(D,a,n,!1,null,null,null);e["default"]=A.exports},e7a4:function(t,e,r){},f6a4:function(t,e,r){"use strict";r("0160")}}]);
//# sourceMappingURL=chunk-0e335f45.44708df4.js.map