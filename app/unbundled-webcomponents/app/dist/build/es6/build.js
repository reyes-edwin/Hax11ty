window.process={env:{NODE_ENV:"production"}};var e="./";window.WCGlobalCDNPath&&(e=window.WCGlobalCDNPath),window.__appCDN&&(e=window.__appCDN);var t="wc-registry.json";window.WCGlobalRegistryFileName&&(t=window.WCGlobalRegistryFileName),window.WCAutoloadRegistryFile=e+t;try{var o=document.getElementsByTagName("script")[0];new Function("import('');");var n=document.createElement("script");n.src=e+"build/es6/node_modules/web-animations-js/web-animations-next-lite.min.js",o.parentNode.insertBefore(n,o);var r=document.createElement("script");r.src=e+"build/es6/node_modules/@lrnwebcomponents/wc-autoload/wc-autoload.js",r.type="module",o.parentNode.insertBefore(r,o)}catch(t){var a=document.createElement("script");a.src=e+"assets/build-polyfills.js",o.parentNode.insertBefore(a,o);var s=document.createElement("script");s.src=e+"assets/build-legacy.js",o.parentNode.insertBefore(s,o)}