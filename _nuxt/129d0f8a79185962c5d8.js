(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(e,t,o){"use strict";o.r(t);o(66),o(88),o(25);var n=o(3),r=o(91),l=o(188),c=o(189),w=o(181),_=o.n(w),m=o(183),f=o(184),d=o(190),P=o(191),h=o(192),v={layout:"page",components:{Footer:r.a,DeskPost:l.a,Pagination:d.a,DeskBanner:c.a,PasswordRequired:P.a,PopUp:h.a},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,l,c,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.params.page,t.next=3,Object(m.a)(e.$content,{page:o});case 3:return n=t.sent,t.next=6,Object(f.a)(e.$content);case 6:return r=t.sent,t.next=9,e.$content("weiboProfile").fetch();case 9:return l=t.sent,t.next=12,e.$content("posts/weibo-featured").fetch();case 12:return c=t.sent,w=c.body,t.abrupt("return",{posts:n.paginatedArticles,page_total:n.allArticles.length,pageNum:o,totalArticles:n.totalArticles,weiboProfile:l,postsByYear:r,featured_posts:w,myMonths:r[0].months});case 15:case"end":return t.stop()}}),t)})))()},methods:{togglePopUp:function(e){this.myMonths=this.postsByYear[e].months,this.$refs.PopUp.toggle()},jumpToMonth:function(e){this.$refs.PopUp.toggle();var t=window.location.href;if(-1!=t.indexOf("?")&&t.split("?")[0].split("/").pop()==e){var o=t.split("?")[1].split("=")[1];document.querySelectorAll(".desk-unit:not(.featured)")[o-1].scrollIntoView({behavior:"smooth"})}}},mounted:function(){this.$nextTick((function(){_()([[".desk-unit .picture",!0,!0,"img"]]);for(var e=document.querySelectorAll(".desk-unit a"),i=0;i<e.length;i++)e[i].target="_blank",e[i].hostname==window.location.hostname&&(e[i].href="https://weibo.cn"+e[i].href.replace(window.location.origin,""));window.requestAnimationFrame((function(){var e=window.location.href;if(-1!=e.indexOf("?")){var t=e.split("?")[1].split("=")[1];document.querySelectorAll(".desk-unit:not(.featured)")[t-1].scrollIntoView({behavior:"smooth"})}}))}))},head:function(){return{title:this.weiboProfile.weibo_name+"的微博 | 第"+this.pageNum+"页",meta:[{hid:"description",name:"description",content:this.weiboProfile.weibo_name+"的微博(复刻版)"}]}}},k=o(11),component=Object(k.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-content"},[o("div",{staticClass:"blog-wrap"},[o("main",{staticClass:"blog-main"},[1==e.pageNum?o("DeskBanner",{attrs:{weibo_name:e.weiboProfile.weibo_name,weibo_interaction:e.weiboProfile.weibo_interaction,weibo_follower:e.weiboProfile.weibo_follower,weibo_following:e.weiboProfile.weibo_following,weibo_id:e.weiboProfile.weibo_id,weibo_intro:e.weiboProfile.weibo_intro}}):e._e(),e._v(" "),e.pageNum>1?o("Pagination",{attrs:{total:e.page_total,perPage:10}}):e._e(),e._v(" "),o("div",{staticStyle:{margin:"6px"}},[1==e.pageNum?o("p",[e._v("全部微博("+e._s(e.totalArticles)+")")]):e._e(),e._v(" "),o("p",e._l(e.postsByYear,(function(t,n){return o("span",{key:"year"+t.num},[o("span",{staticClass:"year-btn",on:{click:function(t){return e.togglePopUp(n)}}},[e._v(e._s(t.num)+"年("+e._s(t.count)+")\n          ")]),e._v(" "),o("span")])})),0)]),e._v(" "),e._l(e.featured_posts,(function(t){return 1==e.pageNum?o("DeskPost",{key:t.postId,staticClass:"featured",attrs:{author:e.weiboProfile.weibo_name,weibo_id:e.weiboProfile.weibo_id,id:t.postId,time:t.postTime,content:t.postContent,picture:t.picIds,repostSrc:t.repostSrc,repostMsg:t.repostMsg,repostSrcId:t.repostSrcId,repostPicIds:t.repostPicIds,repostCount:t.repostCount,commentCount:t.commentCount,likeCount:t.likeCount}}):e._e()})),e._v(" "),e._l(e.posts,(function(t){return o("DeskPost",{key:t.postId,attrs:{author:e.weiboProfile.weibo_name,weibo_id:e.weiboProfile.weibo_id,id:t.postId,time:t.postTime,content:t.postContent,picture:t.picIds,repostSrc:t.repostSrc,repostMsg:t.repostMsg,repostSrcId:t.repostSrcId,repostPicIds:t.repostPicIds,repostCount:t.repostCount,commentCount:t.commentCount,likeCount:t.likeCount}})})),e._v(" "),o("Pagination",{attrs:{total:e.page_total,perPage:e.weiboProfile.perPage}})],2),e._v(" "),o("Footer",{attrs:{weibo_name:e.weiboProfile.weibo_name,last_update_date:e.weiboProfile.last_update_date,contact_frm_url:e.weiboProfile.contact_frm_url}})],1),e._v(" "),o("PopUp",{ref:"PopUp"},[o("ul",e._l(e.myMonths,(function(t){return o("li",{key:"jumpToMonth"+t.num},[e._v(e._s(t.num)+"("),o("nuxt-link",{attrs:{to:"/page/"+t.pageNum+"?nth="+t.nth},nativeOn:{click:function(o){return e.jumpToMonth(t.pageNum)}}},[e._v(e._s(t.count))]),e._v(")\n      ")],1)})),0)]),e._v(" "),o("PasswordRequired",{attrs:{weibo_name:e.weiboProfile.weibo_name,pw:e.weiboProfile.weibo_pw}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);