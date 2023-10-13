import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_5c74c3d9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Nav, a as $$Layout } from './carrito_8f7e0111.mjs';
/* empty css                           *//* empty css                             *//* empty css                             */
const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, name, price, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5><div class="div" data-astro-cid-dohjnao5><h2 data-astro-cid-dohjnao5>${name}</h2><h2 data-astro-cid-dohjnao5>${price} $</h2><h2 data-astro-cid-dohjnao5>${type}</h2><button class="btnAdd"${addAttribute(id, "key")} data-astro-cid-dohjnao5>Haz clic</button></div></li>`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/components/Card.astro", void 0);

const servicios = [
	{
		name: "Veterinary Product 1",
		type: "Type A",
		price: "10.99",
		id: "12345"
	},
	{
		name: "Veterinary Product 2",
		type: "Type B",
		price: "15.99",
		id: "23456"
	},
	{
		name: "Veterinary Product 3",
		type: "Type C",
		price: "20.99",
		id: "34567"
	},
	{
		name: "Veterinary Product 4",
		type: "Type A",
		price: "12.99",
		id: "45678"
	},
	{
		name: "Veterinary Product 5",
		type: "Type B",
		price: "18.99",
		id: "56789"
	},
	{
		name: "Veterinary Product 6",
		type: "Type C",
		price: "22.99",
		id: "67890"
	},
	{
		name: "Veterinary Product 7",
		type: "Type A",
		price: "14.99",
		id: "78901"
	},
	{
		name: "Veterinary Product 8",
		type: "Type B",
		price: "20.99",
		id: "89012"
	},
	{
		name: "Veterinary Product 9",
		type: "Type C",
		price: "24.99",
		id: "90123"
	},
	{
		name: "Veterinary Product 10",
		type: "Type A",
		price: "16.99",
		id: "01234"
	},
	{
		name: "Veterinary Product 11",
		type: "Type B",
		price: "22.99",
		id: "12345"
	},
	{
		name: "Veterinary Product 12",
		type: "Type C",
		price: "26.99",
		id: "23456"
	},
	{
		name: "Veterinary Product 13",
		type: "Type A",
		price: "18.99",
		id: "34567"
	},
	{
		name: "Veterinary Product 14",
		type: "Type B",
		price: "24.99",
		id: "45678"
	},
	{
		name: "Veterinary Product 15",
		type: "Type C",
		price: "28.99",
		id: "56789"
	},
	{
		name: "Veterinary Product 16",
		type: "Type A",
		price: "20.99",
		id: "67890"
	},
	{
		name: "Veterinary Product 17",
		type: "Type B",
		price: "26.99",
		id: "78901"
	},
	{
		name: "Veterinary Product 18",
		type: "Type C",
		price: "30.99",
		id: "89012"
	},
	{
		name: "Veterinary Product 19",
		type: "Type A",
		price: "22.99",
		id: "90123"
	},
	{
		name: "Veterinary Product 20",
		type: "Type B",
		price: "28.99",
		id: "01234"
	},
	{
		name: "Veterinary Product 21",
		type: "Type C",
		price: "32.99",
		id: "12345"
	},
	{
		name: "Veterinary Product 22",
		type: "Type A",
		price: "24.99",
		id: "23456"
	},
	{
		name: "Veterinary Product 23",
		type: "Type B",
		price: "30.99",
		id: "34567"
	},
	{
		name: "Veterinary Product 24",
		type: "Type C",
		price: "34.99",
		id: "45678"
	},
	{
		name: "Veterinary Product 25",
		type: "Type A",
		price: "26.99",
		id: "56789"
	},
	{
		name: "Veterinary Product 26",
		type: "Type B",
		price: "32.99",
		id: "67890"
	},
	{
		name: "Veterinary Product 27",
		type: "Type C",
		price: "36.99",
		id: "78901"
	},
	{
		name: "Veterinary Product 28",
		type: "Type A",
		price: "28.99",
		id: "89012"
	},
	{
		name: "Veterinary Product 29",
		type: "Type B",
		price: "34.99",
		id: "90123"
	},
	{
		name: "Veterinary Product 30",
		type: "Type C",
		price: "38.99",
		id: "01234"
	}
];
const data = {
	servicios: servicios
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Pets Store", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<p class="instructions" data-astro-cid-j7pv25f6>
Bievenido a nuestra tienda💕🐯
</p><ul role="list" class="link-card-grid" id="listServicios" data-astro-cid-j7pv25f6>${data.servicios.map((x) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "name": x.name, "price": x.price, "id": x.id, "type": x.type, "data-astro-cid-j7pv25f6": true })}`)}</ul>` })}`;
}, "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/index.astro", void 0);

const $$file = "C:/Users/joseg/OneDrive/Escritorio/Pets/pets/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
