"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[891],{9891:function(r,e,t){t.r(e),t.d(e,{default:function(){return u}});var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-card",{staticClass:"provider",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[t("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:r.id,expression:"id"}],attrs:{block:"",variant:"provider",squared:""}},[t("span",{staticClass:"name"},[t("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[r.expanded?t("b-icon-chevron-down"):t("b-icon-chevron-right")],1),r._v(" "+r._s(r.provider.name)+" ")]),Array.isArray(r.provider.roles)?t("div",{staticClass:"roles ml-1"},r._l(r.provider.roles,(function(e){return t("b-badge",{key:e,staticClass:"ml-1 mb-1",attrs:{variant:"secondary"}},[r._v(r._s(e))])})),1):r._e()])],1),t("b-collapse",{attrs:{id:r.id,accordion:"providers",role:"tabpanel"},model:{value:r.expanded,callback:function(e){r.expanded=e},expression:"expanded"}},[t("b-card-body",[r.provider.url?t("b-button-group",[t("b-button",{attrs:{href:r.provider.url,target:"_blank",variant:"outline-primary"}},[r._v(" Go to homepage ")]),r.provider.email||r.provider.mail?t("b-button",{attrs:{href:"mailto:"+(r.provider.email||r.provider.mail),target:"_blank",variant:"outline-primary"}},[r._v(" Send e-mail ")]):r._e()],1):r._e(),r.provider.description?t("b-card-text",{staticClass:"mt-4"},[t("Description",{attrs:{description:r.provider.description,compact:!0}})],1):r._e(),t("Metadata",{staticClass:"mt-4",attrs:{data:r.provider,ignoreFields:r.ignore,title:"",type:"Provider"}})],1)],1)],1)},i=[],o=t(1688),n=t(2466),s=t(1808),d=t(3819),l={name:"Provider",components:{BCollapse:o.k,BIconChevronDown:n.VIw,BIconChevronRight:n.xkg,Description:s.Z,Metadata:d.Z},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data:function(){return{expanded:!1,ignore:["url","name","description","roles"]}}},p=l,c=t(1001),v=(0,c.Z)(p,a,i,!1,null,null,null),u=v.exports}}]);
//# sourceMappingURL=891-legacy.ed34f303.js.map