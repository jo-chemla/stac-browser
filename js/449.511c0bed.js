"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[449],{90449:function(t,e,s){s.r(e),s.d(e,{default:function(){return M}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"assets mb-4"},[t.displayTitle?e("h2",[t._v(t._s(t.displayTitle))]):t._e(),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(s,a){return e("Asset",{key:a,attrs:{asset:s,expand:t.expand,context:t.context,definition:t.definition,shown:t.shown.includes(a),id:a},on:{show:t.show}})})),1)])},n=[],i=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"asset expandable-card",attrs:{"no-body":""}},[e("b-card-header",{attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.uid,expression:"uid"}],attrs:{block:"",variant:"asset",squared:""}},[e("span",{staticClass:"chevron",attrs:{"aria-hidden":"true"}},[t.expanded?e("b-icon-chevron-down"):e("b-icon-chevron-right")],1),e("span",{staticClass:"title"},[t._v(t._s(t.asset.title||t.id))]),Array.isArray(t.asset.roles)?e("div",{staticClass:"badges ml-1"},[t.shown?e("b-badge",{staticClass:"shown",attrs:{variant:"success",title:t.$t("assets.currentlyShown")}},[e("b-icon-check"),t._v(" "+t._s(t.$t("assets.shown"))+" ")],1):t._e(),t.asset.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e(),t._l(t.asset.roles,(function(s){return e("b-badge",{key:s,staticClass:"role",attrs:{variant:"data"===s?"primary":"secondary"}},[t._v(t._s(t.displayRole(s)))])})),t.shortFileFormat?e("b-badge",{staticClass:"format",attrs:{variant:"dark",title:t.fileFormat}},[e("span",{domProps:{innerHTML:t._s(t.shortFileFormat)}})]):t._e()],2):t._e()])],1),e("b-collapse",{attrs:{id:t.uid,accordion:t.type,role:"tabpanel"},on:{input:t.collapseToggled},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[t.hasAlternatives?[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:t.asset.name||t.$t("assets.alternate.main"),active:""}},[e("AssetAlternative",{attrs:{asset:t.asset,context:t.context,shown:t.shown,hasAlternatives:""}})],1),t._l(t.alternatives,(function(s,a){return e("b-tab",{key:a,attrs:{title:s.name||a}},[e("AssetAlternative",{key:a,attrs:{asset:s,context:t.context,shown:t.shown,hasAlternatives:""}})],1)}))],2)]:e("AssetAlternative",{attrs:{asset:t.asset,context:t.context}})],2)],1)},r=[],o=s(48883),l=s(82948),d=s(95050),c=s(63405),p=s(50735),h=s(95353),u=function(){var t=this,e=t._self._c;return e(t.component,{tag:"component"},[e("b-card-title",[e("span",{domProps:{innerHTML:t._s(t.fileFormat)}})]),e("HrefActions",{attrs:{isAsset:"",data:t.asset,shown:t.shown},on:{show:t.show}}),t.asset.description?e("b-card-text",{staticClass:"mt-4"},[e("Description",{attrs:{description:t.asset.description,compact:""}})],1):t._e(),e("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)},y=[],b=s(41526),m=s(14997),f=s(67467),v={name:"Asset",components:{Description:b["default"],HrefActions:m.A,Metadata:()=>Promise.all([s.e(9710),s.e(537),s.e(4870),s.e(3147)]).then(s.bind(s,73147))},mixins:[(0,f.A)({formatMediaType:p.formatMediaType})],props:{asset:{type:Object,required:!0},context:{type:Object,default:null},hasAlternatives:{type:Boolean,default:!1},shown:{type:Boolean,default:!1}},data(){return{ignore:["href","title","description","type","roles","proj:bbox","proj:geometry","table:storage_options","xarray:open_kwargs","xarray:storage_options","alternate","name"]}},computed:{...(0,h.aH)(["buildTileUrlTemplate","useTileLayerAsFallback"]),component(){return this.hasAlternatives?"div":"b-card-body"},tileRendererType(){return this.buildTileUrlTemplate&&!this.useTileLayerAsFallback?"server":"client"},fileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type):null}},methods:{show(){this.$emit("show",...arguments)}}},x=v,A=s(81656),_=(0,A.A)(x,u,y,!1,null,null,null),g=_.exports,w=s(2566),T={name:"Asset",components:{AssetAlternative:g,BCollapse:o.K,BIconCheck:l.GSz,BIconChevronDown:l.rc_,BIconChevronRight:l.f4q,BTabs:d.r,BTab:c.a},mixins:[(0,f.A)({formatMediaType:p.formatMediaType})],props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},definition:{type:Boolean,default:!1},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data(){return{expanded:!1}},computed:{...(0,h.aH)(["stateQueryParameters"]),type(){return this.definition?"itemdef":"asset"},uid(){return`${this.type}-${this.id}`},fileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type):null},shortFileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type,null,{shorten:!0}):null},alternatives(){if(!w.Ay.isObject(this.asset.alternate))return{};const t=Object.assign({},this.asset);delete t.alternate;const e={};for(const s in this.asset.alternate)e[s]=Object.assign({},t,this.asset.alternate[s]);return e},hasAlternatives(){return w.Ay.size(this.alternatives)>0}},created(){this.stateQueryParameters[this.type].indexOf(this.uid)>-1?this.expanded=!0:"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=!1},methods:{displayRole(t){let e=`assets.role.${t}`;return this.$te(e)?this.$t(e):t},collapseToggled(t){let e=t?"openCollapsible":"closeCollapsible";this.$store.commit(e,{type:this.type,uid:this.uid})}}},C=T,k=(0,A.A)(C,i,r,!1,null,null,null),F=k.exports,$={name:"Assets",components:{Asset:F},props:{assets:{type:Object,required:!0},shown:{type:Array,default:()=>[]},context:{type:Object,default:null},definition:{type:Boolean,default:!1},title:{type:String,default:null}},computed:{count(){return w.Ay.size(this.assets)},displayTitle(){if(null===this.title){let t=this.definition?"assets.inItems":"stacAssets";return this.$tc(t,this.count)}return this.title},expand(){return!this.definition&&(!(1!==this.count||!this.stac||!this.stac.isItem())||null)}},methods:{show(t,e,s){this.$emit("showAsset",t,e,s)}}},B=$,j=(0,A.A)(B,a,n,!1,null,null,null),M=j.exports}}]);
//# sourceMappingURL=449.511c0bed.js.map