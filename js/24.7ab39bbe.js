"use strict";(self["webpackChunkhex_vue_week6"]=self["webpackChunkhex_vue_week6"]||[]).push([[24],{2024:function(t,e,o){o.r(e),o.d(e,{default:function(){return i}});var r=o(3396),u=o(7139);const c={class:"container | p-3"};function s(t,e,o,s,n,h){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("h1",null,(0,u.zw)(n.product.title),1)])}var n={data(){return{product:{}}},methods:{get_product(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/sihle/product/${t}`;this.$http.get(e).then((t=>{this.product=t.data.product})).catch((t=>{console.log(t.response)}))}},mounted(){this.get_product()}},h=o(89);const a=(0,h.Z)(n,[["render",s]]);var i=a}}]);
//# sourceMappingURL=24.7ab39bbe.js.map