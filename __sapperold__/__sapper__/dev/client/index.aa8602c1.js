import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as append_dev, n as noop } from './index.d3ffd068.js';

/* src/routes/index.svelte generated by Svelte v3.16.5 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let p;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Collate");
			t2 = space();
			p = element("p");
			t3 = text("A simple blog starter with sapper/svelte");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Collate");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "A simple blog starter with sapper/svelte");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Collate.js";
			attr_dev(h2, "class", "svelte-69mwih");
			add_location(h2, file, 47, 0, 593);
			attr_dev(p, "class", "svelte-69mwih");
			add_location(p, file, 49, 0, 611);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWE4NjAyYzEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
