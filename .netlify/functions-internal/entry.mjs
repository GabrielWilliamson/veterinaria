import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_857c26a6.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_5c74c3d9.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_467932e1.mjs');
const _page1  = () => import('./chunks/index_4fe5cf18.mjs');
const _page2  = () => import('./chunks/carrito_f0f4f380.mjs');
const _page3  = () => import('./chunks/car_1aeaeac9.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/carrito.astro", _page2],["src/pages/api/car.json.ts", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
