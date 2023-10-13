import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_5c74c3d9.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                             *//* empty css                             */
const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c><h3 data-astro-cid-k2f5zb5c>Calle Santa Ana Matagalpa-Nicargaua</h3></footer>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/components/footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-dmqpwcec>Pets <span class="text-gradient" data-astro-cid-dmqpwcec>Store</span></h1><div class="Nav" data-astro-cid-dmqpwcec><a href="/" data-astro-cid-dmqpwcec>Tienda</a><a href="/carrito" data-astro-cid-dmqpwcec>Carrito</a></div>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$Tabla = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tabla;
  return renderTemplate`${maybeRenderHead()}<div class="boton-container" data-astro-cid-zdvgqmjx><button id="pagar" data-astro-cid-zdvgqmjx>Pagar</button></div><table class="mi-tabla" id="tabla" data-astro-cid-zdvgqmjx><thead data-astro-cid-zdvgqmjx><th data-astro-cid-zdvgqmjx>Código</th><th data-astro-cid-zdvgqmjx>Nombre</th><th data-astro-cid-zdvgqmjx>Tipo</th><th data-astro-cid-zdvgqmjx>Cantidad</th><th data-astro-cid-zdvgqmjx>Precio</th><th data-astro-cid-zdvgqmjx>Importe</th></thead><tbody id="bo" data-astro-cid-zdvgqmjx></tbody></table>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/components/tabla.astro", void 0);

const $$Astro = createAstro();
const $$Carrito = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carrito;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito", "data-astro-cid-vrbpsbwj": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-vrbpsbwj": true })}${maybeRenderHead()}<div class="div" data-astro-cid-vrbpsbwj><h3 data-astro-cid-vrbpsbwj>Servicios</h3>${renderComponent($$result2, "Tabla", $$Tabla, { "data-astro-cid-vrbpsbwj": true })}</div>` })}`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/carrito.astro", void 0);

const $$file = "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/carrito.astro";
const $$url = "/carrito";

const carrito = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Carrito,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Nav as $, $$Layout as a, carrito as c };
