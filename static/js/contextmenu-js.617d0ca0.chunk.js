(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[12],{42:function(t,n,e){"use strict";e.r(n);var r,c=e(83),u=e(8),i=e(103),o=e(0),a=e(135),f=e(98),s=e(104),b=e(93),l=e(1),O=[52.22977,21.01178],j=(s.a.div(r||(r=Object(i.a)(["\n  position: absolute;\n  font-size: 14px;\n  background-color: #fff;\n  border-radius: 2px;\n  padding: 5px 0 5px 0;\n  width: 150px;\n  height: auto;\n  margin: 0;\n  list-style: none;\n  box-shadow: 0 0 20px 0 #ccc;\n  opacity: 1;\n  transition: opacity 0.5s linear;\n"]))),function(t){var n=function(t){var n=Object(o.useState)("0px"),e=Object(u.a)(n,2),r=e[0],c=e[1],i=Object(o.useState)("0px"),a=Object(u.a)(i,2),f=a[0],s=a[1],b=Object(o.useState)(!1),l=Object(u.a)(b,2),O=l[0],j=l[1],d=Object(o.useCallback)((function(n){n.preventDefault(),t&&t.current.contains(n.target)?(c("".concat(n.pageX,"px")),s("".concat(n.pageY,"px")),j(!0)):j(!1)}),[j,t,c,s]),p=Object(o.useCallback)((function(){j(!1)}),[j]);return Object(o.useEffect)((function(){return document.addEventListener("click",p),document.addEventListener("contextmenu",d),function(){document.removeEventListener("click",p),document.removeEventListener("contextmenu",d)}}),[p,d]),{xPos:r,yPos:f,menu:O}}(t.outerRef),e=n.xPos,r=n.yPos;return n.menu?Object(l.jsxs)("ul",{className:"menu",style:{top:r,left:e},children:[Object(l.jsx)("li",{children:"Item1"}),Object(l.jsx)("li",{children:"Item2"}),Object(l.jsx)("li",{children:"Item3"})]}):Object(l.jsx)(l.Fragment,{})});n.default=function(){var t=Object(o.useRef)(null);return Object(l.jsxs)(a.a,{ref:t,center:O,zoom:18,scrollWheelZoom:!1,children:[Object(l.jsx)(f.a,Object(c.a)({},b.a)),Object(l.jsx)(j,{outerRef:t})]})}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(83);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},82:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},83:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},85:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(86),u=e(80),i=e(82),o=e(81);function a(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(o.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(i.a)(r.current,n.eventHandlers),a(r.current,e),r}}},86:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},88:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(8),c=e(0),u=e.n(c),i=e(16),o=e(80);function a(t){function n(n,e){var r=t(n).current,i=r.instance,a=r.context;return Object(c.useImperativeHandle)(e,(function(){return i})),null==n.children?null:u.a.createElement(o.c,{value:a},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),o=Object(r.a)(u,2),a=o[0],f=o[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){a&&s.update()}),[s,a,n.children]);var b=s._contentNode;return b?Object(i.createPortal)(n.children,b):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},89:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(80),u=e(82),i=e(85),o=e(81);function a(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(o.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(i.b)(r.current,e),a(r.current,n),r}}},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),i=Object(r.useRef)(e),o=u.current.instance;return Object(r.useEffect)((function(){i.current!==e&&(n(o,e,i.current),i.current=e)}),[o,e,c]),u}}},91:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(80);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),i=u.current.instance,o=Object(r.useRef)(n.position),a=n.position;return Object(r.useEffect)((function(){return i.addTo(e.map),function(){i.remove()}}),[e.map,i]),Object(r.useEffect)((function(){null!=a&&a!==o.current&&(i.setPosition(a),o.current=a)}),[i,a]),u}}},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(86),c=e(80),u=e(82),i=e(81);function o(t,n){return function(e,o){var a=Object(c.d)(),f=t(Object(i.a)(e,a),a);return Object(r.a)(a.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,a,e,o),f}}},93:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},95:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return O}));var r=e(88),c=e(91),u=e(90),i=e(85),o=e(92),a=e(89);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(i.a)(e);return Object(r.a)(c)}function b(t,n){var e=Object(u.a)(t),c=Object(o.a)(e,n);return Object(r.b)(c)}function l(t,n){var e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.a)(c)}function O(t,n){var e=Object(u.a)(t,n),c=Object(i.a)(e);return Object(r.c)(c)}},97:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},98:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(94),c=e(95),u=e(81),i=e(97),o=e(84),a=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new o.TileLayer(e,Object(u.a)(c,n)),context:n}}),i.a)}}]);