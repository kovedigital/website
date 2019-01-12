(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(160),i=a.n(o),l=a(143),u=a(147);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{keywords:["gatsby","application","react"]}),r.a.createElement(i.a,{page:!0,column:!0,className:"splash"},r.a.createElement("h1",null,"Kove"),r.a.createElement("p",null,"Web Design and development based in Stafford, Staffordshire."),r.a.createElement("a",{href:"mailto:jared@kove.digital",className:"btn btn-primary"},"Get in touch")))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(140),u=a.n(l);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(142),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},142:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},143:function(e,t,a){"use strict";var n=a(144),r=a(0),o=a.n(r),i=a(4),l=a.n(i),u=a(141),c=(a(146),function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,t)},data:n})});c.propTypes={children:l.a.node.isRequired},t.a=c},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Kove Digital"}}}}},145:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(54),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){},147:function(e,t,a){"use strict";var n=a(148),r=a(0),o=a.n(r),i=a(4),l=a.n(i),u=a(149),c=a.n(u),s=a(141);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(s.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description,u=l?"%s | "+e.site.siteMetadata.title:e.site.siteMetadata.title;return console.warn([l,u]),l=null==l?"empty":l,o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:u,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var f="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Kove Digital",description:"A web design and development agency from Stafford, Staffordshire. We enhance the online presence and function of businesses.",author:"@kovedigital"}}}}},160:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(4)),o=i(a(161));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e){var t,a,r=e.className,i=e.style,u=e.position,c=e.type,s=e.content,d=e.children,f=e.top,p=e.bottom,m=e.left,y=e.right,g=e.start,h=e.end,b=e.page,v=e.padded,w=e.row,x=e.column,k=e.inline,E=!0,q=!0,j=u.split(" "),P=c.split(" ");return Array.isArray(j)&&j.length?(E=!1,j.forEach(function(e){switch(e){case"top":f=!0;break;case"bottom":p=!0;break;case"left":m=!0;break;case"right":y=!0}})):E=!!u.length,Array.isArray(P)&&P.length?(q=!1,P.forEach(function(e){switch(e){case"page":b=!0;break;case"row":w=!0;break;case"column":x=!0;break;case"padded":v=!0;break;case"inline":k=!0}})):q=!!c.length,r=(0,o.default)(["flex",r,(t={},l(t,"flex-".concat(u),!!E),l(t,"flex-top",!!f),l(t,"flex-bottom",!!p),l(t,"flex-left",!!m),l(t,"flex-right",!!y),l(t,"flex-start",!!g),l(t,"flex-end",!!h),t),(a={},l(a,"flex-".concat(c),!!q),l(a,"flex-page",!!b),l(a,"flex-padded",!!v),l(a,"flex-row",!!w),l(a,"flex-column",!!x),l(a,"flex-inline",!!k),a)]),n.default.createElement("div",{className:r,style:i},s||d)};u.defaultProps={position:"",type:""},u.propTypes={content:r.default.node,position:r.default.string,top:r.default.bool,bottom:r.default.bool,left:r.default.bool,right:r.default.bool,start:r.default.bool,end:r.default.bool,type:r.default.string,page:r.default.bool,padding:r.default.bool,row:r.default.bool,column:r.default.bool,inline:r.default.bool,className:r.default.string,style:r.default.object};var c=u;t.default=c},161:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-161c2134df8684ab8d8f.js.map