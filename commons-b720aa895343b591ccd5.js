(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0B/k":function(e,t,n){"use strict";n("q1tI")},"1GyG":function(e,t,n){"use strict";var a=n("xzmG"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),c=n("qhky");t.a=function(){return o.a.createElement(i.StaticQuery,{query:"513857193",render:function(e){return o.a.createElement(c.a,null,o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),o.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),o.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),o.a.createElement("title",null,e.site.siteMetadata.title),o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",o.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),o.a.createElement("meta",{itemprop:"image",content:e.site.siteMetadata.imageUrl})," />")},data:a})}},"8+s/":function(e,t,n){"use strict";var a,r=n("q1tI"),o=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=r.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(a,this.props)},r}(r.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),i(d,"canUseDOM",c),d}}},RMg3:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=(n("v31m"),n("ezWK")),c=n.n(i),s=n("Wbzz"),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.setState({active:!n.state.active})},n.state={active:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){return console.log("active : "+JSON.stringify(this.props)),o.a.createElement("div",{className:"hero-head"},o.a.createElement("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},o.a.createElement("div",{class:"navbar-brand"},o.a.createElement("a",{class:"navbar-item is-hidden-touch"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("img",{src:c.a,alt:"BURST",width:"350px"}))),o.a.createElement("a",{class:"navbar-item is-hidden-desktop"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("img",{src:c.a,alt:"BURST",width:"250px"}))),o.a.createElement("span",{role:"button",className:"navbar-burger burger "+(this.state.active?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:this.handleClick},o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"}))),o.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(this.state.active?"is-active":"")},o.a.createElement("div",{class:"navbar-start "},o.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},o.a.createElement("a",{class:"navbar-link"},"About Us"),o.a.createElement("div",{class:"navbar-dropdown"},o.a.createElement(s.Link,{to:"/about/about-burst"},o.a.createElement("a",{class:"navbar-item"},"About Us")),o.a.createElement(s.Link,{to:"/about/about-burst#history"},o.a.createElement("a",{class:"navbar-item"},"History of BURST")),o.a.createElement("div",{className:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"Committee"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/about/committee-members#point"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"Committee Members")),o.a.createElement(s.Link,{to:"/about/advisory-members"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"Advisory Board")),o.a.createElement(s.Link,{to:"/about/patient-public-involement"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"Patient and Public Involvement"))))),o.a.createElement(s.Link,{to:"/about/about-burst#member"},o.a.createElement("a",{class:"navbar-item"},"How do I become a member?")),o.a.createElement(s.Link,{to:"/about/about-burst#trainee"},o.a.createElement("a",{class:"navbar-item"},"Advantages of Trainee-led research")),o.a.createElement(s.Link,{to:"/about/about-burst#ideal"},o.a.createElement("a",{class:"navbar-item"},"Ideal collaborative research project")),o.a.createElement(s.Link,{to:"/about/sponsors#point"},o.a.createElement("a",{class:"navbar-item"},"Our Sponsors")),o.a.createElement(s.Link,{to:"/about/collaborators#point"},o.a.createElement("a",{class:"navbar-item"},"Our Collaborators")))),o.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},o.a.createElement("a",{class:"navbar-link"},"Studies"),o.a.createElement("div",{class:"navbar-dropdown"},o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"RESECT (Open)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Resect/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Overview")),o.a.createElement(s.Link,{to:"/Studies/Resect/study-team/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Team"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"IDENTIFY (Closed)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Identify/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Overview")),o.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Achievements")),o.a.createElement(s.Link,{to:"/Studies/Identify/sites"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Sites/ Collaborators")),o.a.createElement(s.Link,{to:"/Studies/Identify/study-team/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Study Team"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"MIMIC (Closed)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Mimic/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Overview")),o.a.createElement(s.Link,{to:"/Studies/Mimic/collaborators/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Collaborators")),o.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Achievements"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"LEARN (Open)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Learn/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"LEARN Overview"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"FIX-IT (Upcoming)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Fixit/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"FIX-IT Overview"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"STENT (Closed)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),o.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},o.a.createElement("div",{class:"dropdown-content"},o.a.createElement(s.Link,{to:"/Studies/Stent/Overview/"},o.a.createElement("a",{href:"#",class:"dropdown-item"},"STENT Overview"))))),o.a.createElement("div",{class:"nested navbar-item dropdown"},o.a.createElement("div",{class:"dropdown-trigger"},o.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},o.a.createElement("span",null,"DETORT (Upcoming)"),o.a.createElement("span",{class:"icon is-small"},o.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))))),o.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},o.a.createElement("a",{class:"navbar-link"},"Achievements"),o.a.createElement("div",{class:"navbar-dropdown"},o.a.createElement(s.Link,{to:"/Achievements/prizes"},o.a.createElement("a",{class:"navbar-item"},"Prizes")),o.a.createElement(s.Link,{to:"/Achievements/publication"},o.a.createElement("a",{class:"navbar-item"},"Publications")),o.a.createElement(s.Link,{to:"/Achievements/presentation"},o.a.createElement("a",{class:"navbar-item"},"Presentations")))),o.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},o.a.createElement("a",{class:"navbar-link"},"Opportunities"),o.a.createElement("div",{class:"navbar-dropdown"},o.a.createElement(s.Link,{to:"/Opportunities/BJUI-Podcast/Overview/"},o.a.createElement("a",{class:"navbar-item"},"BJUI/BURST Podcast Series")),o.a.createElement(s.Link,{to:"https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15181",target:"_blank"},o.a.createElement("a",{class:"navbar-item"},"BJUI Trainees' Forum")),o.a.createElement(s.Link,{to:"/Opportunities/Collaborate-with-us/Overview/"},o.a.createElement("a",{class:"navbar-item"},"Collaborate With Us")))),o.a.createElement("a",{class:"navbar-item",id:"mainlink"},o.a.createElement(s.Link,{to:"/Opportunities/Education/Overview/"},"Education"))),o.a.createElement("div",{class:"navbar-end"},o.a.createElement("div",{class:"navbar-item"},o.a.createElement(s.Link,{to:"https://twitter.com/bursturology?lang=en",target:"_blank"},o.a.createElement("a",{class:"button is-medium is-twitter"},o.a.createElement("span",{class:"icon"},o.a.createElement("i",{class:"fab fa-twitter"})),o.a.createElement("span",null,"Twitter"))))))))},t}(r.Component);t.a=l},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);n("Wbzz"),n("v31m"),n("0B/k");t.a=function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"British Urology Researchers in Surgical Training (BURST) Research Collaborative. "))))}},bmMU:function(e,t){var n="undefined"!=typeof Element,a="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(a&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],i[l[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},ezWK:function(e,t,n){e.exports=n.p+"static/BURST_1-4de9f6d3ce90fa893c664b69b2281db0.png"},qhky:function(e,t,n){"use strict";(function(e){var a,r,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),d=n("bmMU"),m=n.n(d),p=n("q1tI"),f=n.n(p),v=n("6qGY"),b=n.n(v),h="bodyAttributes",E="htmlAttributes",w="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",S="href",O="http-equiv",C="innerHTML",A="itemprop",k="name",L="property",I="rel",j="src",x="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",R="defer",N="encodeSpecialCharacters",B="onChangeClientState",U="titleTemplate",q=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),D=[y.NOSCRIPT,y.SCRIPT,y.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,y.TITLE),n=Q(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=Q(e,P);return t||a||void 0},G=function(e){return Q(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var o=a[r].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===I&&"canonical"===e[n].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),i=0;i<o.length;i++){var c=o[i],s=b()({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},Z=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;se(y.BODY,a),se(y.HTML,r),ce(d,m);var p={baseTag:le(y.BASE,n),linkTags:le(y.LINK,o),metaTags:le(y.META,i),noscriptTags:le(y.NOSCRIPT,c),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,u)},f={},v={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,a=t.oldTags;n.length&&(f[e]=n),a.length&&(v[e]=p[e].oldTags)})),t&&t(),s(e,f,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(y.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],o=[].concat(r),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);r.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===C)n.innerHTML=t.innerHTML;else if(a===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[a]?"":t[a];n.setAttribute(a,c)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return i=t,n.isEqualNode(e)}))?r.splice(i,1):o.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(n,a),[f.a.createElement(y.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),o=ie(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+J(o,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case E:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===C||n===T){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),f.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+J(a[t],n)+'"';return e?e+" "+r:r}),""),o=a.innerHTML||a.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(y.BASE,t,a),bodyAttributes:me(h,n,a),htmlAttributes:me(E,r,a),link:me(y.LINK,o,a),meta:me(y.META,i,a),noscript:me(y.NOSCRIPT,c,a),script:me(y.SCRIPT,s,a),style:me(y.STYLE,l,a),title:me(y.TITLE,{title:d,titleAttributes:m},a)}},fe=u()((function(e){return{baseTag:X([S,x],e),bodyAttributes:V(h,e),defer:Q(e,R),encode:Q(e,N),htmlAttributes:V(E,e),linkTags:$(y.LINK,[I,S],e),metaTags:$(y.META,[k,g,O,L,A],e),noscriptTags:$(y.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:$(y.SCRIPT,[j,C],e),styleTags:$(y.STYLE,[T],e),title:K(e),titleAttributes:V(w,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),ve=(r=fe,i=o=function(e){function t(){return _(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,o=e.nestedChildren;return H({},a,((t={})[n.type]=[].concat(a[n.type]||[],[H({},r,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(a.type){case y.TITLE:return H({},r,((t={})[a.type]=i,t.titleAttributes=H({},o),t));case y.BODY:return H({},r,{bodyAttributes:H({},o)});case y.HTML:return H({},r,{htmlAttributes:H({},o)})}return H({},r,((n={})[a.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var a;n=H({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),a=H({},n);return t&&(a=this.mapChildrenToProps(t,a)),f.a.createElement(r,a)},z(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(f.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ve.renderStatic=ve.rewind,t.a=ve}).call(this,n("yLpj"))},v31m:function(e,t,n){},xzmG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BURST Urology","author":"BURST","imageUrl":"src/images/BURST_mini.png","description":"A Project to bootstrap your next Gatsby + Bulma site.","keywords":"Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter"}}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-b720aa895343b591ccd5.js.map