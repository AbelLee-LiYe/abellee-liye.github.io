(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,n){var r=n("iNmH"),a=n("Qatm"),o=n("Zhxd"),i=n("kluZ");e.exports=function(e){return r(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"8lrx":function(e,t,n){var r=n("uUj8"),a=n("5WRv"),o=n("OvAC"),i=n("PE9J"),s=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n("mXGw"),d=n("/FXl").mdx,m=n("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=i(e,s),l=m(t),p=c.useMemo((function(){if(!n)return null;var e=u({React:c,mdx:d},l),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return c.createElement(p,u({},o))}},"B/7I":function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("QKC2")),o=r(n("mXGw")),i=r(n("W0B4")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(o.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:i.default.string.isRequired,width:i.default.number,height:i.default.number,showMedia:i.default.bool,showParentComment:i.default.bool}},CdP3:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var a=this,o=arguments,i=function(){r=null,n||e.apply(a,o)},s=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),s&&e.apply(a,o)}},t.isReactElement=i,t.shallowComparison=function e(t,n){var r,o=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,a.default)(o)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!i(t[r]))return!0})).length};var a=r(n("5WRv")),o=r(n("mXGw"));function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},EExx:function(e,t,n){"use strict";n.r(t);var r=n("Wbzz"),a=n("iLM+"),o=n("mXGw"),i=n.n(o),s=n("Hrl7"),l=n("A4YR"),u=n("jRwh"),c=function(e){var t=e.body;return i.a.createElement("article",{className:"border-b md:border md:rounded-b-md md:px-8 md:py-4"},i.a.createElement(u.MDXRenderer,null,t))},d=function(e){var t=e.numericId,n=e.relativeDate,r=e.timeToRead,a=e.title;return i.a.createElement("div",{className:"w-full mb-4"},i.a.createElement("h1",{className:"text-2xl md:text-3xl mb-2"},a," ",i.a.createElement("span",{className:"text-gray-200"},"#",t)),i.a.createElement("div",{className:"text-sm text-gray-main border-b md:mb-4 pb-4"},"Posted ",n," · ",r," mins reading"))},m=n("hxfP"),p=n("UutA"),f=n("RDli"),b=n("Og5X"),h=p.a.div.withConfig({componentId:"gf6yrx-0"})(["&:before{content:' ';width:10px;height:10px;position:absolute;border-left:1px solid ",";border-bottom:1px solid ",";background:",";left:-5px;transform:rotate(45deg);}"],b.a.blue.light,b.a.blue.light,b.a.blue[100]),g=function(e){var t=e.dateTime,n=e.formattedDate,r=Object(f.a)();return i.a.createElement(h,{className:"hidden md:flex items-center justify-between text-xs relative bg-blue-100 text-gray-main\n      border md:border-b-0 rounded-t-md border-blue-light py-2 px-4"},i.a.createElement("div",{className:"leading-6"},i.a.createElement("img",{src:r.avatar,className:"inline md:hidden rounded-full mr-2",width:24}),i.a.createElement("strong",null,r.author)," posted on"," ",i.a.createElement("time",{dateTime:t,title:t},n)),i.a.createElement("div",{className:"flex items-center"},i.a.createElement("span",{className:"border border-blue-light rounded-full px-2 py-px hidden md:block"},i.a.createElement("strong",null,"Author")),i.a.createElement(m.c,{size:18,className:"hidden md:block md:mx-4"}),i.a.createElement(m.b,{size:18})))},v=n("0ScO"),w=function e(t){var n=t.items,r=t.level,a=void 0===r?0:r;return n&&n.length>0?i.a.createElement("ul",{className:"text-sm mb-2 "+(a>0?"ml-5 list-circle":"")},n.map((function(t){var n=0===a&&t.items;return i.a.createElement("li",{key:t.url},i.a.createElement("a",{href:t.url,className:n?"text-base":""},t.title),i.a.createElement(e,{items:t.items,level:a+1}))}))):null},y=n("pacJ"),x=n("OagW"),E=n("Sy5f"),S=n("0qyb"),_=n("Mpnv");t.default=function(e){var t=e.data,n=e.pageContext,o=Object(f.a)(),u=t.post.frontmatter,m=u.title,p=u.date,b=u.tags,h=u.category,N=t.post,I=N.timeToRead,O=N.tableOfContents,D=N.body,C=N.excerpt,j=n.numericId,A=n.prevPost,M=n.nextPost,R=t.post.fields.slug,q=Object(S.d)(p),T=Object(S.b)(p),U=n.permalink,k=Object(E.a)({title:m,date:p,slug:R});return i.a.createElement(v.b,null,i.a.createElement(s.a,null,i.a.createElement("title",null,m," - ",o.siteName),i.a.createElement("meta",{name:"description",content:C}),b&&b.length>0&&i.a.createElement("meta",{name:"keywords",content:b.join(",")}),i.a.createElement("link",{rel:"canonical",href:U})),i.a.createElement("div",{className:"page-grid mt-4 md:px-8"},i.a.createElement(d,{title:m,numericId:j,relativeDate:q,timeToRead:I}),i.a.createElement("div",{className:"w-full md:w-9/12 md:pr-4 md:border-b-0 mb-4"},i.a.createElement("div",{className:"relative"},i.a.createElement("img",{src:o.avatar,className:"hidden md:block border rounded-full absolute",width:40}),i.a.createElement("div",{className:"md:ml-14"},i.a.createElement(g,{dateTime:p,formattedDate:T}),i.a.createElement(c,{body:D}),k&&i.a.createElement(a.Disqus,{config:k}))),i.a.createElement("div",{className:"flex py-2 text-xs flex-wrap justify-between items-center ml:0 md:ml-14"},A&&i.a.createElement("div",null,i.a.createElement("span",{className:"mr-1 text-gray-medium"},"←"),i.a.createElement(r.a,{to:A.slug}," ",A.title)),M&&i.a.createElement("div",null,i.a.createElement(r.a,{to:M.slug},M.title),i.a.createElement("span",{className:"ml-1 text-gray-medium"},"→")))),i.a.createElement("div",{className:"w-full md:w-3/12 md:pl-4"},i.a.createElement("div",{className:"pb-4 border-b"},i.a.createElement("h2",{className:"mb-4 font-medium"},"About"),h&&i.a.createElement(r.a,{to:"/"+x.CATEGORY_DIR+"/"+Object(_.slugify)(h),className:"flex items-center text-gray-medium hover:text-blue hover:no-underline mb-4"},i.a.createElement(l.b,null),i.a.createElement("span",{className:"ml-3 text-sm"},h)),b&&b.length>0&&i.a.createElement("div",null,b.map((function(e){return e&&i.a.createElement(y.a,{tag:e,key:e})})))),O.items&&i.a.createElement("div",{className:"pb-4 border-b sticky top-0"},i.a.createElement("h2",{className:"my-4 font-medium"},"Table of Content"),i.a.createElement(w,{items:O.items})))))}},Gp6M:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("8VmE")),o=r(n("PE9J")),i=r(n("QKC2")),s=r(n("mXGw")),l=r(n("W0B4")),u=n("CdP3"),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,o.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},NR63:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("8VmE")),o=r(n("PE9J")),i=r(n("QKC2")),s=r(n("mXGw")),l=r(n("W0B4")),u=n("CdP3"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return s.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=c,c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Sy5f:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("RDli");t.a=function(e){var t=e.date,n=e.title,o=e.slug,i=Object(r.c)("822196256"),s=Object(a.a)();return 1===i.allSitePlugin.totalCount?{url:""+s.siteUrl+o,identifier:String(new Date(t).getTime()/1e3),title:n}:null}},Zhxd:function(e,t,n){var r=n("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"iLM+":function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("NR63"));t.Disqus=a.default;var o=r(n("Gp6M"));t.CommentCount=o.default;var i=r(n("B/7I"));t.CommentEmbed=i.default;var s=a.default;t.default=s},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},jRwh:function(e,t,n){var r=n("8lrx");e.exports={MDXRenderer:r}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},pacJ:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("mXGw"),o=n.n(a),i=n("OagW"),s=n("Mpnv");t.a=function(e){var t=e.tag,n=e.count,a="/"+i.TAG_DIR+"/"+Object(s.slugify)(t);return o.a.createElement(r.a,{to:a,className:"topic-tag"},t," ",o.a.createElement("span",{className:"font-semibold"},n))}},uUj8:function(e,t,n){var r=n("WI9V"),a=n("0qAl");function o(t,n,i){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---gatsby-theme-replica-src-templates-post-tsx-3d485ce406a4067d8f30.js.map