define(["react"],function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(12),s=r(f);n(15);var p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){T.ajax({key:"newTabDatas",f:"json",success:function(e){n.setState({dataSource:e})}})},n.height=document.documentElement.clientHeight||document.body.clientHeight,n.state={dataSource:[],config:null},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.dataSource,n=e.config;return l.default.createElement("div",{className:"CommonPage",style:{height:this.height}},l.default.createElement(s.default,{dataSource:t,config:n}))}}]),t}(l.default.Component);t.default=p},function(t,n){t.exports=e},,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c);n(13);var f=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handle_tds=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var i=a.value,c=!0,f=!1,p=void 0;try{for(var d,y=s[Symbol.iterator]();!(c=(d=y.next()).done);c=!0){var h=d.value;i[h.key]&&t.push(l.default.createElement("td",{colSpan:i.colSpan,style:{textAlign:i.textAlign}},i[h.key]))}}catch(e){f=!0,p=e}finally{try{!c&&y.return&&y.return()}finally{if(f)throw p}}}}catch(e){r=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}return t},n.state={},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props.dataSource,n=[],r=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var c=u.value;n.push(l.default.createElement("table",{className:"list-item"},c.map(function(t){return l.default.createElement("tr",null,e.handle_tds(t))})))}}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return l.default.createElement("div",{className:"Mobile-List"},n)}}]),t}(l.default.Component);t.default=f;var s=[{key:"desc"},{key:"place"},{key:"contact"},{key:"handle"},{key:"date"}]},function(e,t){},,function(e,t){}])});