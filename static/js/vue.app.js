webpackJsonp([1],{0:function(t,n,e){t.exports=e("x35b")},N4XD:function(t,n){},x35b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("/5sW"),i=e("NYxO");o["default"].use(i["a"]);var r=new i["a"].Store({state:{},mutations:{},actions:{}}),s=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new o["default"]({store:r,render:function(t){return t("m-component",{ref:"mComponent"})},components:{mComponent:t},mounted:function(){this.$nextTick(function(){n.mounted&&n.mounted()})}});return e["getRef"]=function(){return e.$refs["mComponent"]},e},u=s,c=e("Z60a"),a=e.n(c),f=e("C9uT"),p=e.n(f),l=e("T/v0"),d=e.n(l),v=e("j/rp"),m=e.n(v),h=e("Oy1H"),g=e.n(h),y=e("EOM2"),O=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,s=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"===g()(Reflect)&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,n,e,o);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(r<3?i(s):r>3?i(n,e,s):i(n,e))||s);return r>3&&s&&Object.defineProperty(n,e,s),s},b=function(t){function n(){var t;return a()(this,n),t=d()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments)),t.postListUi=[],t}return m()(n,t),p()(n,[{key:"init",value:function(t){var n=this,e=setInterval(function(){n.postListUi.length===t.length?clearInterval(e):n.postListUi.push(t[n.postListUi.length])},100)}},{key:"render",value:function(t){return console.log(this.postListUi),t("div",null,["list:",t("transition-group",{attrs:{name:"post-list",tag:"div",appear:!0}},[this.postListUi.map(function(n,e){return t("div",{key:n.content},[n.config.description])})])])}}]),n}(o["default"]);b=O([y["Component"]],b);var _=b;e("N4XD");o["default"].config.productionTip=!1,window["setPostList"]=function(t,n){var e=u(_,n);return e.$mount(t),e}}},[0]);
//# sourceMappingURL=vue.app.js.map