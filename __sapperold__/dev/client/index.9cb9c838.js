import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, J as destroy_each } from './index.3ca71bc2.js';

/* src/routes/author/index.svelte generated by Svelte v3.16.5 */

const file = "src/routes/author/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (48:2) {#each authors as author}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*author*/ ctx[1] + "";
	let t0;
	let a_href_value;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "author/" + /*author*/ ctx[1]);
			add_location(a, file, 53, 6, 1136);
			attr_dev(li, "class", "svelte-1gudrur");
			add_location(li, file, 52, 4, 1125);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*authors*/ 1 && t0_value !== (t0_value = /*author*/ ctx[1] + "")) set_data_dev(t0, t0_value);

			if (dirty & /*authors*/ 1 && a_href_value !== (a_href_value = "author/" + /*author*/ ctx[1])) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:2) {#each authors as author}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let ul;
	let each_value = /*authors*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Authors");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Authors");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Authors";
			add_location(h2, file, 44, 0, 852);
			attr_dev(ul, "class", "svelte-1gudrur");
			add_location(ul, file, 46, 0, 870);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*authors*/ 1) {
				each_value = /*authors*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
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

function preload({ params, query }) {
	return this.fetch(`author.json`).then(r => r.json()).then(posts => {
		return {
			authors: [...new Set(posts.map(post => post.author))]
		};
	});
}

function instance($$self, $$props, $$invalidate) {
	let { authors } = $$props;
	const writable_props = ["authors"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Author> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("authors" in $$props) $$invalidate(0, authors = $$props.authors);
	};

	$$self.$capture_state = () => {
		return { authors };
	};

	$$self.$inject_state = $$props => {
		if ("authors" in $$props) $$invalidate(0, authors = $$props.authors);
	};

	return [authors];
}

class Author extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { authors: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Author",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*authors*/ ctx[0] === undefined && !("authors" in props)) {
			console.warn("<Author> was created without expected prop 'authors'");
		}
	}

	get authors() {
		throw new Error("<Author>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set authors(value) {
		throw new Error("<Author>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Author;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWNiOWM4MzguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXV0aG9yL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChgYXV0aG9yLmpzb25gKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgICAgcmV0dXJuIHsgYXV0aG9yczogWy4uLm5ldyBTZXQocG9zdHMubWFwKHBvc3QgPT4gcG9zdC5hdXRob3IpKV0gfTtcbiAgICAgICAgLy8gcmV0dXJuIHsgcG9zdHM6IFsuLi5uZXcgU2V0KHBvc3RzKV0gfTtcbiAgICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBhdXRob3JzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgdWwge1xuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGxpIHtcbiAgICAvKiBtYXJnaW46IDAgMCAwLjVlbSAwOyAqL1xuICAgIC8qIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDsgKi9cbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cbiAgICAvKiB3aWR0aDogaW5saW5lOyAqL1xuICB9XG4gIGxpOjpiZWZvcmUge1xuICAgIC8qIGNvbnRlbnQ6IFwiLVwiOyAqL1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDVweDsgKi9cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+QXV0aG9yczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDI+QXV0aG9yczwvaDI+XG5cbjx1bD5cbiAgeyNlYWNoIGF1dGhvcnMgYXMgYXV0aG9yfVxuICAgIDwhLS0gd2UncmUgdXNpbmcgdGhlIG5vbi1zdGFuZGFyZCBgcmVsPXByZWZldGNoYCBhdHRyaWJ1dGUgdG9cblx0XHRcdFx0dGVsbCBTYXBwZXIgdG8gbG9hZCB0aGUgZGF0YSBmb3IgdGhlIHBhZ2UgYXMgc29vbiBhc1xuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXG5cdFx0XHRcdHdhaXRpbmcgZm9yIHRoZSAnY2xpY2snIGV2ZW50IC0tPlxuICAgIDxsaT5cbiAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImF1dGhvci97YXV0aG9yfVwiPnthdXRob3J9PC9hPlxuICAgIDwvbGk+XG4gIHsvZWFjaH1cbjwvdWw+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkErQ1MsR0FBTzs7O2dDQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBQyxHQUFPOzs7K0JBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBOUNVLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUM5QixJQUFJLENBQUMsS0FBSyxnQkFDZCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxLQUFLOztHQUNBLE9BQU8sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07Ozs7OztPQUp0RCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
