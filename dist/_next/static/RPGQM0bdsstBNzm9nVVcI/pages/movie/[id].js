(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{EQ3O:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),c=(n("X2+5"),o.a.createElement);function s(){return c("ul",null,c("li",null,c(a.a,{href:"/"},c("a",null,"Inicio"))),c("li",null,c(a.a,{href:"/movies"},c("a",null,"Pel\xedculas"))),c("li",null,c(a.a,{href:"/contact"},c("a",null,"Contacto"))))}},Y494:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie/[id]",function(){return n("vxnn")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt")),y=n("elyg");function w(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var g=new Map,m=window.IntersectionObserver,k={};function E(){return f||(m?f=new m((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){i(n,t);var e=s(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,y.addBasePath)(w(t)),as:e?(0,y.addBasePath)(w(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),c=c?(0,h.resolve)(s,c):a,t.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=E();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),k[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);e.default=b},vxnn:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n("q1tI"),o=n.n(r),i=n("EQ3O"),a=n("nOHt"),c=n.n(a),s=o.a.createElement;function u(){var t=Object(a.useRouter)().query.id;return s("div",null,s(i.a,null),s("h2",{style:{textAlign:"center"}},"Estas viendo..."),s("h1",{style:{textAlign:"center"}},t),s("div",{div:!0,style:{textAlign:"center"}},s("button",{onClick:function(){c.a.push("/")}},"Ir a inicio")))}}},[["Y494",0,2,1,3]]]);