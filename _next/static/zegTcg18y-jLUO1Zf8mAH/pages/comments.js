(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U/qB":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comments",function(){return n("UQFL")}])},UQFL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),s=n("4/LL"),c=n("mLQA"),l=n("KTbD"),u=n("tc2O"),p=n("O3Nr"),f=n("htO/"),h=n("TSYQ"),d=n.n(h),v=n("17x9"),m=n.n(v),b=n("uwnE"),y={responsive:m.a.bool,rounded:m.a.bool,circle:m.a.bool,thumbnail:m.a.bool},w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.responsive,r=t.rounded,a=t.circle,i=t.thumbnail,s=t.className,c=Object(p.a)(t,["responsive","rounded","circle","thumbnail","className"]),l=Object(b.f)(c),f=l[0],h=l[1],v=((e={})[Object(b.e)(f,"responsive")]=n,e[Object(b.e)(f,"rounded")]=r,e[Object(b.e)(f,"circle")]=a,e[Object(b.e)(f,"thumbnail")]=i,e);return o.a.createElement("img",Object(u.a)({},h,{className:d()(s,v)}))},t}(o.a.Component);w.propTypes=y,w.defaultProps={responsive:!1,rounded:!1,circle:!1,thumbnail:!1};var g=Object(b.a)("img",w),O=n("5Yp1"),U=n("UFM0"),j=o.a.createElement,k="/next-sample-qiita";t.default=function(){var e=Object(U.a)(),t=e.data,n=e.loading,o=e.refetch;return Object(r.useEffect)(function(){o()},[]),j(O.a,null,j(s.a,null,j(s.a.Heading,{className:"clearfix"},"\u30b3\u30e1\u30f3\u30c8\u4e00\u89a7",j(i.a,{href:"".concat(k,"/comments/new")},j(c.a,{bsSize:"xsmall",className:"pull-right"},j(l.a,{glyph:"pencil"})," \u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b"))),n?j(s.a.Body,null,"loading..."):t.map(function(e){var t=e.id,n=e.body,r=e.created_at,o=e.user,a=o.id,i=o.profile_image_url;return j(s.a.Body,{key:t},j(g,{src:i,alt:a,height:"60",width:"60",rounded:!0,responsive:!0}),j("label",null,a)," ",j("small",null,r),j("pre",null,n))})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var u,p=l(n("LX0d")),f=n("CxY0"),h=c(n("q1tI")),d=(l(n("17x9")),l(n("nOHt"))),v=(n("P5f7"),n("g/15"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new p.default,y=window.IntersectionObserver;function w(){return u||(y?u=new y(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}(function(e,t){return{href:m(e),as:t?m(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,f.resolve)(c,i),s=s?(0,f.resolve)(c,s):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),h.default.cloneElement(a,i)}}]),t}(h.Component);g.propTypes=void 0;var O=g;t.default=O}},[["U/qB",1,0]]]);