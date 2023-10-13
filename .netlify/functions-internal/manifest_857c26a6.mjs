import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_5c74c3d9.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b0e9cefe.js"}],"styles":[{"type":"inline","content":".div[data-astro-cid-dohjnao5]{text-align:center}.link-card[data-astro-cid-dohjnao5]{list-style:none;padding:1px;background-color:#23262d;background-size:400%;border-radius:7px;background-position:100%}.link-card[data-astro-cid-dohjnao5] button[data-astro-cid-dohjnao5]{font-size:15px;color:#fff;text-decoration:none;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:.3rem;border-radius:8px}.link-card[data-astro-cid-dohjnao5] button[data-astro-cid-dohjnao5]:hover{color:gray}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;transition:color .6s cubic-bezier(.22,1,.36,1)}p[data-astro-cid-dohjnao5]{margin-top:.5rem;margin-bottom:0}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}.instructions[data-astro-cid-j7pv25f6]{text-align:center;margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\nfooter[data-astro-cid-k2f5zb5c]{background:linear-gradient(rgba(var(--accent-dark),100%),rgba(var(--accent-dark),100%));width:100%;position:fixed;bottom:0;text-align:center;font-size:15px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}main{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}h1[data-astro-cid-dmqpwcec]{font-size:3rem;font-weight:700;text-align:center;color:#fff}.text-gradient[data-astro-cid-dmqpwcec]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.Nav[data-astro-cid-dmqpwcec]{width:100%;text-align:center}.Nav[data-astro-cid-dmqpwcec] a[data-astro-cid-dmqpwcec]{color:808080;padding:20px;text-decoration:none;transition:color .3s}.Nav[data-astro-cid-dmqpwcec] a[data-astro-cid-dmqpwcec]:hover{color:gray}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.14b95107.js"}],"styles":[{"type":"inline","content":"footer[data-astro-cid-k2f5zb5c]{background:linear-gradient(rgba(var(--accent-dark),100%),rgba(var(--accent-dark),100%));width:100%;position:fixed;bottom:0;text-align:center;font-size:15px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}main{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}h1[data-astro-cid-dmqpwcec]{font-size:3rem;font-weight:700;text-align:center;color:#fff}.text-gradient[data-astro-cid-dmqpwcec]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.Nav[data-astro-cid-dmqpwcec]{width:100%;text-align:center}.Nav[data-astro-cid-dmqpwcec] a[data-astro-cid-dmqpwcec]{color:808080;padding:20px;text-decoration:none;transition:color .3s}.Nav[data-astro-cid-dmqpwcec] a[data-astro-cid-dmqpwcec]:hover{color:gray}\n.boton-container[data-astro-cid-zdvgqmjx]{display:flex;justify-content:center}.boton-container[data-astro-cid-zdvgqmjx] button[data-astro-cid-zdvgqmjx]{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:5px;margin:5px;cursor:pointer}.boton-container[data-astro-cid-zdvgqmjx] button[data-astro-cid-zdvgqmjx]:hover{background-color:#0056b3}.div[data-astro-cid-zdvgqmjx]{display:flex;text-align:center;flex-direction:column;padding:10px}.mi-tabla[data-astro-cid-zdvgqmjx]{border-collapse:collapse;width:100%;font-size:15px;border:1px solid #ffffff}.mi-tabla[data-astro-cid-zdvgqmjx] th[data-astro-cid-zdvgqmjx],.mi-tabla[data-astro-cid-zdvgqmjx] td[data-astro-cid-zdvgqmjx]{padding:8px;text-align:left;border:1px solid #ffffff}.mi-tabla[data-astro-cid-zdvgqmjx] tbody[data-astro-cid-zdvgqmjx] td[data-astro-cid-zdvgqmjx]{border:1px solid #ffffff}.boton-container[data-astro-cid-vrbpsbwj]{display:flex;justify-content:center}.boton-container[data-astro-cid-vrbpsbwj] button[data-astro-cid-vrbpsbwj]{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:5px;margin:5px;cursor:pointer}.boton-container[data-astro-cid-vrbpsbwj] button[data-astro-cid-vrbpsbwj]:hover{background-color:#0056b3}.div[data-astro-cid-vrbpsbwj]{display:flex;text-align:center;flex-direction:column;padding:10px}\n"}],"routeData":{"route":"/carrito","type":"page","pattern":"^\\/carrito\\/?$","segments":[[{"content":"carrito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carrito.astro","pathname":"/carrito","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/car.json","type":"endpoint","pattern":"^\\/api\\/car\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"car.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/car.json.ts","pathname":"/api/car.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/carrito.astro",{"propagation":"none","containsHead":true}],["C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/api/car.json.ts":"chunks/pages/car_88b0f658.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_3afb1ca3.mjs","/src/pages/index.astro":"chunks/pages/index_74611a19.mjs","\u0000@astrojs-manifest":"manifest_857c26a6.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_467932e1.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_4fe5cf18.mjs","\u0000@astro-page:src/pages/carrito@_@astro":"chunks/carrito_f0f4f380.mjs","\u0000@astro-page:src/pages/api/car.json@_@ts":"chunks/car_1aeaeac9.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.14b95107.js","/astro/hoisted.js?q=1":"_astro/hoisted.b0e9cefe.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/hoisted.14b95107.js","/_astro/hoisted.b0e9cefe.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.5d5ee301.js"]});

export { manifest };
