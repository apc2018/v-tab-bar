(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VTabBar=t():e.VTabBar=t()})(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=6)}([function(e,t,n){var o=n(3);e.exports=o,o.install=function(e){return e.component(o.name,o)},o.version="0.0.3","undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-tab-bar"}},function(e,t){},function(e,t,n){n(2);var o=n(4)(n(1),n(5),null,null);e.exports=o.exports},function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,u=e.default);var c="function"==typeof u?u.options:u;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),o){var f=c.computed||(c.computed={});Object.keys(o).forEach(function(e){var t=o[e];f[e]=function(){return t}})}return{esModule:r,exports:u,options:c}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"v-tab-bar"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){e.exports=n(0)}])});