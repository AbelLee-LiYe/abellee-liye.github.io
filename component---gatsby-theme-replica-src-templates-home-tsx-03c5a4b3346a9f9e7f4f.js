(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a},e.exports.__esModule=!0,e.exports.default=e.exports},"0qAl":function(e,t){function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(e.exports=n=function(){return!!t},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},"5WRv":function(e,t,n){var a=n("iNmH"),r=n("Qatm"),o=n("Zhxd"),l=n("kluZ");e.exports=function(e){return a(e)||r(e)||o(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},"8lrx":function(e,t,n){var a=n("5WRv"),r=n("uUj8"),o=n("OvAC"),l=n("RiSW");const s=["scope","children"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=n("mXGw"),{mdx:u}=n("/FXl"),{useMDXScope:m}=n("U+ow");e.exports=function(e){let{scope:t,children:n}=e,o=l(e,s);const i=m(t),p=d.useMemo(()=>{if(!n)return null;const e=c({React:d,mdx:u},i),t=Object.keys(e),o=t.map(t=>e[t]);return r(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(a(o)))},[n,t]);return d.createElement(p,c({},o))}},"B/7I":function(e,t,n){"use strict";var a=n("63Ad");t.__esModule=!0,t.default=void 0;var r=a(n("8VmE")),o=a(n("PE9J")),l=a(n("QKC2")),s=a(n("mXGw")),i=a(n("W0B4")),c=function(e){function t(){return e.apply(this,arguments)||this}(0,l.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,o.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,r.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:i.default.oneOfType([i.default.number,i.default.string]).isRequired,width:i.default.number,height:i.default.number,showMedia:i.default.bool,showParentComment:i.default.bool}},CdP3:function(e,t,n){"use strict";var a=n("63Ad");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];var s=this,i=function(){a=null,n||e.apply(s,o)},c=n&&!a;window.clearTimeout(a),a=setTimeout(i,t),c&&e.apply(s,o)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var a,o=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(a=[]).concat.apply(a,(0,r.default)(o)).filter((function(a){if("object"==typeof t[a]){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!l(t[a]))return!0;return!1})).length};var r=a(n("5WRv")),o=a(n("mXGw"));function l(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},Gp6M:function(e,t,n){"use strict";var a=n("63Ad");t.__esModule=!0,t.default=void 0;var r=a(n("8VmE")),o=a(n("PE9J")),l=a(n("QKC2")),s=a(n("mXGw")),i=a(n("W0B4")),c=n("CdP3"),d=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,a=e.placeholder,l=(0,o.default)(e,["config","className","placeholder"]),i="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,r.default)({className:i,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},l),a)},t}(s.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:i.default.shape({identifier:i.default.string,title:i.default.string,url:i.default.string}),placeholder:i.default.string,className:i.default.string}},NR63:function(e,t,n){"use strict";var a=n("63Ad");t.__esModule=!0,t.default=void 0;var r=a(n("8VmE")),o=a(n("PE9J")),l=a(n("QKC2")),s=a(n("mXGw")),i=a(n("W0B4")),c=n("CdP3"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(a){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=d,d.propTypes={config:i.default.shape({identifier:i.default.string,title:i.default.string,url:i.default.string,language:i.default.string,remoteAuthS3:i.default.string,apiKey:i.default.string}),className:i.default.string}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},RiSW:function(e,t,n){var a=n("PE9J");e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},Sy5f:function(e,t,n){"use strict";var a=n("Wbzz"),r=n("RDli");t.a=e=>{let{date:t,title:n,slug:o}=e;const l=Object(a.c)("822196256"),s=Object(r.a)();return 1===l.allSitePlugin.totalCount?{url:""+s.siteUrl+o,identifier:String(new Date(t).getTime()/1e3),title:n}:null}},Zhxd:function(e,t,n){var a=n("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"iLM+":function(e,t,n){"use strict";var a=n("63Ad");t.__esModule=!0,t.default=void 0;var r=a(n("NR63"));t.Disqus=r.default;var o=a(n("Gp6M"));t.CommentCount=o.default;var l=a(n("B/7I"));t.CommentEmbed=l.default;var s=r.default;t.default=s},iNmH:function(e,t,n){var a=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},jRwh:function(e,t,n){const a=n("8lrx");e.exports={MDXRenderer:a}},"k/hQ":function(e,t,n){"use strict";n.r(t);var a=n("mXGw"),r=n.n(a),o=n("Wbzz"),l=n("0qyb");const s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=function(e){void 0===e&&(e=new Date);const t=e.getDay();return new Date(e.getTime()-864e5*(364+t))},d=e=>{const t=[],n=c(e);for(let a=0;a<=52;a++){const e=new Date(n.getTime()+7*a*864e5),r=e.getMonth(),o=new Date(e.getTime()+6048e5).getMonth();if(0===a&&r!==o)continue;const l=new Date(e.getTime()-6048e5).getMonth();0!==a&&r===l||t.push({month:r,text:i[r],x:14+13*a})}return t},u=e=>{const t=[],n=c(e);for(let a=0;a<=52;a++){const r=[];for(let t=0;t<7;t++){const o=n.getTime()+864e5*(7*a+t),s=new Date(o);if(e.getTime()<o)break;r.push({x:14-a,y:13*t,date:Object(l.c)(s)})}t.push({translateX:14*a,week:r})}return t},m=()=>Object(o.c)("1838818630"),p=()=>{const{posts:e}=m();return Object(a.useRef)((e=>{const t={};return null==e||e.forEach(e=>{const n=Object(l.c)(e.frontmatter.date);t[n]||(t[n]=[]),t[n].push({id:e.id,slug:e.fields.slug,title:e.frontmatter.title,date:e.frontmatter.date,relativeDate:Object(l.d)(e.frontmatter.date)})}),t})(null==e?void 0:e.nodes)).current};var f=n("l0ZM"),g=n("UutA"),h=n("Og5X");const y=g.a.ul.withConfig({componentId:"sc-1tmn672-0"})(["display:block;li:not(:last-child){border-bottom:1px solid ",";}"],h.a.gray.light);var b=e=>{let{posts:t}=e;return null!=t&&t.length?r.a.createElement(y,{className:"text-sm"},t.map(e=>r.a.createElement("li",{className:"py-2 flex justify-between",key:e.id},r.a.createElement(o.a,{to:e.slug,key:e.id},e.title),r.a.createElement("time",{className:"text-gray-main text-xs","date-time":e.date,title:e.date},Object(l.b)(e.date))))):null},v=n("mK0O");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const E=new Date,S={year:E.getFullYear(),endDate:E,date:""},O=Object(a.createContext)({state:S,dispatch:()=>{}}),N=(e,t)=>{switch(t.type){case"year":const n=t.payload,a=E.getFullYear()===n?E:new Date(n+"-12-31");return x(x({},e),{},{date:"",year:n,endDate:a});case"date":return x(x({},e),{},{date:t.payload});default:return e}},D=[h.a.gray[120],h.a.green.superlight,h.a.green.light,h.a.green.medium,h.a.green.dark];var j=()=>r.a.createElement("ul",{className:"calendar-legend"},r.a.createElement("li",{className:"bg-gray-120"}),r.a.createElement("li",{className:"bg-green-superlight"}),r.a.createElement("li",{className:"bg-green-light"}),r.a.createElement("li",{className:"bg-green-medium"}),r.a.createElement("li",{className:"bg-green-dark"}));const _=g.a.svg.withConfig({componentId:"sc-1ywtwu-0"})(["text{fill:#767676;font-size:9px;}rect{shape-rendering:geometricPrecision;outline:1px solid rgba(27,31,35,0.04);outline-offset:-1px;rx:2;ry:2;}"]),M=()=>r.a.createElement(r.a.Fragment,null,s.map((e,t)=>r.a.createElement("text",{key:e,className:t%2==0?"hidden":void 0,dx:"-9",dy:8+13*t},e)));var I=()=>{const{state:e,dispatch:t}=Object(a.useContext)(O),n=p(),{data:o,monthData:l}=(void 0===(s=e.endDate)&&(s=new Date),{monthData:d(s),data:u(s)});var s;const{0:i,1:c}=Object(a.useState)({style:{display:"none"}}),m=e=>{const t=e.currentTarget,n=t.dataset.date,a=Number(t.dataset.count),r=Number(t.getAttribute("x")),o=Number(t.getAttribute("y"));c({text:(a>0?a:"No")+" contribution"+(1===a?" ":"s "),date:new Date(n).toLocaleDateString("en",{month:"short",year:"numeric",day:"numeric"}),style:{top:o-15+"px",left:150-11*r+"px"}})},f=()=>{c({style:{display:"none"}})},g=e=>{const n=e.currentTarget.dataset.date;t({type:"date",payload:n})};return r.a.createElement("div",{className:"relative border-b px-4 pb-2 pt-1"},r.a.createElement("div",{className:"overflow-hidden flex flex-col items-end xl:items-center"},r.a.createElement(_,{width:722,height:112},r.a.createElement("g",{transform:"translate(10, 20)"},o.map(t=>r.a.createElement("g",{key:t.translateX,transform:"translate("+t.translateX+",0)"},t.week.map(t=>{var a,o,l;const s=null!==(a=null===(o=n[t.date])||void 0===o?void 0:o.length)&&void 0!==a?a:0,i=null!==(l=D[s])&&void 0!==l?l:D.slice(-1);return r.a.createElement("rect",{className:(c=t.date,e.date?e.date===c?"":"opacity-50":""),key:t.date,width:"10",height:"10",x:t.x,y:t.y,fill:i,"data-date":t.date,"data-count":s,onMouseEnter:m,onMouseLeave:f,onClick:g});var c}))),l.map((e,t)=>r.a.createElement("text",{key:e.text+"_"+t,x:e.x,y:-7},e.text)),r.a.createElement(M,null)))),r.a.createElement("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center flex-wrap text-11px mt-1 md:mx-4"},r.a.createElement("a",null,"Learn how we count contributions."),r.a.createElement("div",{className:"self-end text-gray-main items-center flex"},"Less",r.a.createElement(j,null),"More")),r.a.createElement("div",{className:"absolute bg-gray-dark text-gray-light text-xs opacity-75 rounded-md p-2 whitespace-no-wrap",style:i.style},r.a.createElement("strong",null,i.text),"on ",i.date))};var C=()=>{var e,t,n;const{state:l,dispatch:s}=Object(a.useContext)(O),i=Object(o.c)("939827896"),c=(new Date).getFullYear(),d=l.year,u=new Date(null===(e=i.allMdx.nodes)||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.date).getFullYear()||c,m=c-u+1;return r.a.createElement("div",{className:"flex-col flex w-24 sticky top-74px"},new Array(m).fill(0).map((e,t)=>r.a.createElement("div",{key:t,onClick:()=>{s({type:"year",payload:c-t})},className:(d===c-t?"bg-blue text-white hover:bg-blue":"hover:bg-gray-100 text-gray-200")+" cursor-pointer rounded-md px-4 py-2 text-xs mb-2 no-underline"},c-t)))};var A=()=>{const{0:e,1:t}=Object(a.useReducer)(N,S),n=(new Date).getFullYear()===e.year,{yearly:o}=Object(f.a)(),l=p()[e.date];return r.a.createElement(O.Provider,{value:{state:e,dispatch:t}},r.a.createElement("div",{className:"w-full flex"},r.a.createElement("div",{className:"w-full md:w-10/12"},r.a.createElement("div",{className:"mb-2 font-medium"},o[e.year]," contributions in"," ",n?"the last year":e.year),r.a.createElement("div",{className:"border rounded-md py-2"},r.a.createElement(I,null),r.a.createElement("div",{className:"w-full mt-7 text-sm p-4 flex flex-col md:flex-row"},r.a.createElement("div",{className:"md:w-1/2"},r.a.createElement("div",{className:"pb-2"},"Activity overview")),r.a.createElement("div",{className:"md:w-1/2 md:border-l md:pl-4"},"@svg"))),r.a.createElement("div",null,r.a.createElement("div",{className:"mt-8 mb-2 font-medium"},"Contribution activity"),r.a.createElement(b,{posts:l}))),r.a.createElement("div",{className:"hidden md:block md:w-2/12 pl-8"},r.a.createElement(C,null))))},P=n("0ScO");var T=n("iLM+"),k=n("tzE7"),R=n("A4YR"),U=n("2SRX"),q=n("hxfP"),B=n("OagW"),G=n("Sy5f"),Q=n("Mpnv");const W=Object(g.a)(o.a).withConfig({componentId:"sc-bf012c-0"})(["color:",";margin-right:16px;height:21px;display:flex;align-items:center;&:hover{color:",";text-decoration:none;}> svg{margin-right:4px;}> span{word-break:break-word;display:block;width:50px;overflow:hidden;}"],h.a.gray.main,h.a.blue);var X=e=>{let{id:t,slug:n,title:a,excerpt:l,category:s,tags:i,date:c}=e;const d=Object(G.a)({title:a,date:c,slug:n});return r.a.createElement("div",{className:"border rounded-md p-4 flex flex-col text-sm",key:t},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(U.a,{size:16,className:"mr-2"}),r.a.createElement(o.a,{to:n,className:"flex-grow"},a),r.a.createElement(U.b,{size:16,className:"cursor-pointer"})),r.a.createElement("div",{className:"flex-grow mt-2 mb-4 text-gray-main"},l),r.a.createElement("div",{className:"flex items-center"},s&&r.a.createElement(W,{to:"/"+B.CATEGORY_DIR+"/"+Object(Q.slugify)(s)},r.a.createElement(R.b,{size:16})," ",s),i&&i.length>0&&r.a.createElement(W,{to:"/"+B.TAG_DIR},r.a.createElement(k.c,{size:16}),i.length),d&&r.a.createElement(W,{to:n},r.a.createElement(q.a,{size:16}),r.a.createElement(T.CommentCount,{config:d,placeholder:"0"}))))};var Y=()=>{const e=(e=>e.map(e=>{let{id:t,excerpt:n,frontmatter:a,fields:r}=e;return{id:t,excerpt:n,title:a.title,tags:a.tags,category:a.category,slug:r.slug,relativeDate:Object(l.d)(a.date),date:a.date}}))(Object(o.c)("1364558118").allMdx.nodes);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-2"},"Recent posts"),r.a.createElement("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 mb-8"},null==e?void 0:e.map(e=>r.a.createElement(X,Object.assign({},e,{key:e.id})))))},z=n("jRwh"),F=n("RDli");var J=()=>{var e;const t=null===(e=Object(o.c)("3350369686").mdx)||void 0===e?void 0:e.body,n=Object(F.a)();return t?r.a.createElement("div",{className:"_readme border rounded-md p-6 mb-6 w-full"},r.a.createElement("div",{className:"flex items-center text-xs mb-4 text-mono"},r.a.createElement(o.a,{to:"/",className:"text-gray-dark no-underscore hover:text-blue"},n.author),r.a.createElement("span",{className:"px-2px"},"/"),"README.",r.a.createElement("span",{className:"text-gray-main"},"md")),r.a.createElement(z.MDXRenderer,null,t)):null};t.default=()=>r.a.createElement(P.b,{mode:P.a.NavTab},r.a.createElement(J,null),r.a.createElement(Y,null),r.a.createElement(A,null))},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},uUj8:function(e,t,n){var a=n("0qAl"),r=n("WI9V");e.exports=function(e,t,n){if(a())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,t);var l=new(e.bind.apply(e,o));return n&&r(l,n.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---gatsby-theme-replica-src-templates-home-tsx-03c5a4b3346a9f9e7f4f.js.map