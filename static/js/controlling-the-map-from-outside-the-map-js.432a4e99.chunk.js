(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[12],{39:function(n,t,e){"use strict";e.r(t);var o,r,c=e(71),a=e(82),i=e(0),u=e(74),l=e(73),p=e(72),s=e(108),f=e(69),d=e(83),b=e(1),j=d.a.div(o||(o=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  max-width: 350px;\n  margin: auto;\n  color: salmon;\n"]))),O=d.a.div(r||(r=Object(a.a)(["\n  &:hover {\n    padding-bottom: 5px;\n    border-bottom: 1px solid salmon;\n  }\n"]))),x=[52.2295,21.01],g=[{id:"1",lat:52.228785157729114,lng:21.006867885589603,title:"Marker 1"},{id:"2",lat:52.22923201880194,lng:21.00897073745728,title:"Marker 2"},{id:"3",lat:52.22963944703663,lng:21.01091265678406,title:"Marker 3"},{id:"4",lat:52.229928587386496,lng:21.01218938827515,title:"Marker 4"}];function v(n){var t=n.onItemClick;return Object(b.jsx)(j,{children:g.map((function(n,e){var o=n.title;return Object(b.jsx)(O,{onClick:function(n){n.preventDefault(),t(e)},children:o},e)}))})}function m(n){var t=n.data,e=n.selectedIndex;return t.map((function(n,t){return Object(b.jsx)(y,{content:n.title,center:{lat:n.lat,lng:n.lng},openPopup:e===t},t)}))}function y(n){var t=Object(u.a)(),e=Object(i.useRef)(null),o=n.center,r=n.content,c=n.openPopup;return Object(i.useEffect)((function(){c&&(t.flyToBounds([o]),e.current.openPopup())}),[t,o,c]),Object(b.jsx)(l.a,{ref:e,position:o,children:Object(b.jsx)(p.a,{children:r})})}t.default=function(){var n=Object(i.useState)(),t=Object(c.a)(n,2),e=t[0],o=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(s.a,{center:x,zoom:16,scrollWheelZoom:!1,children:[Object(b.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(b.jsx)(m,{selectedIndex:e,data:g})]}),Object(b.jsx)(v,{data:g,onItemClick:function(n){o(n)}})]})}},68:function(n,t,e){"use strict";function o(n,t,e){var o=t.opacity,r=t.zIndex;null!=o&&o!==e.opacity&&n.setOpacity(o),null!=r&&r!==e.zIndex&&n.setZIndex(r)}e.d(t,"a",(function(){return o}))},69:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var o=e(66),r=e(76),c=e(79),a=e(68),i=e(64),u=Object(r.e)((function(n,t){var e=n.url,r=Object(o.a)(n,["url"]);return{instance:new i.TileLayer(e,Object(c.a)(r,t)),context:t}}),a.a)},72:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var o=e(76),r=e(64),c=e(0),a=Object(o.c)((function(n,t){return{instance:new r.Popup(n,t.overlayContainer),context:t}}),(function(n,t,e,o){var r=e.onClose,a=e.onOpen,i=e.position;Object(c.useEffect)((function(){var e=n.instance;function c(n){n.popup===e&&(e.update(),o(!0),null==a||a())}function u(n){n.popup===e&&(o(!1),null==r||r())}return t.map.on({popupopen:c,popupclose:u}),null==t.overlayContainer?(null!=i&&e.setLatLng(i),e.openOn(t.map)):t.overlayContainer.bindPopup(e),function(){t.map.off({popupopen:c,popupclose:u}),t.map.removeLayer(e)}}),[n,t,o,r,a,i])}))},73:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var o=e(70),r=e(66),c=e(76),a=e(64),i=Object(c.b)((function(n,t){var e=n.position,c=Object(r.a)(n,["position"]),i=new a.Marker(e,c);return{instance:i,context:Object(o.a)(Object(o.a)({},t),{},{overlayContainer:i})}}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())}))},74:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i}));var o=e(75),r=e(0);function c(){return Object(o.d)().map}function a(n,t){var e=c();return Object(r.useEffect)((function(){return e.on(n,t),function(){e.off(n,t)}}),[e,n,t]),e}function i(n){var t=c();return Object(r.useEffect)((function(){return t.on(n),function(){t.off(n)}}),[t,n]),t}}}]);