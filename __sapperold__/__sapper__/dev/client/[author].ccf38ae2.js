import { S as SvelteComponentDev, i as init, d as dispatch_dev, A as globals, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, J as destroy_each } from './index.3ca71bc2.js';

/* src/routes/author/[author].svelte generated by Svelte v3.16.5 */

const { console: console_1 } = globals;
const file = "src/routes/author/[author].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (74:2) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*post*/ ctx[2].title + "";
	let t0;
	let a_href_value;
	let t1;
	let code;
	let t2_value = /*post*/ ctx[2].author + "";
	let t2;
	let t3;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = text("\n      by\n      ");
			code = element("code");
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_text(li_nodes, "\n      by\n      ");
			code = claim_element(li_nodes, "CODE", {});
			var code_nodes = children(code);
			t2 = claim_text(code_nodes, t2_value);
			code_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[2].slug);
			add_location(a, file, 79, 6, 1952);
			add_location(code, file, 81, 6, 2026);
			add_location(li, file, 78, 4, 1941);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
			append_dev(li, code);
			append_dev(code, t2);
			append_dev(li, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[2].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[2].slug)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[2].author + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(74:2) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let div;
	document.title = title_value = "Posts by " + /*author*/ ctx[1];
	let each_value = /*posts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Posts by ");
			t2 = text(/*author*/ ctx[1]);
			t3 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Posts by ");
			t2 = claim_text(h1_nodes, /*author*/ ctx[1]);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 70, 0, 1645);
			attr_dev(div, "class", "content svelte-mem3mw");
			add_location(div, file, 72, 0, 1673);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*author*/ 2 && title_value !== (title_value = "Posts by " + /*author*/ ctx[1])) {
				document.title = title_value;
			}

			if (dirty & /*author*/ 2) set_data_dev(t2, /*author*/ ctx[1]);

			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
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
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
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

async function preload({ params, query }) {
	const res = await this.fetch(`author.json`);
	const data = await res.json();
	const test = data;
	console.log(params);
	const filtered = test.filter(p => p.author === params.author);
	console.log(filtered);

	if (res.status === 200) {
		return { posts: filtered, author: params.author };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { author } = $$props;
	const writable_props = ["posts", "author"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bauthoru5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("author" in $$props) $$invalidate(1, author = $$props.author);
	};

	$$self.$capture_state = () => {
		return { posts, author };
	};

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("author" in $$props) $$invalidate(1, author = $$props.author);
	};

	return [posts, author];
}

class U5Bauthoru5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0, author: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bauthoru5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console_1.warn("<U5Bauthoru5D> was created without expected prop 'posts'");
		}

		if (/*author*/ ctx[1] === undefined && !("author" in props)) {
			console_1.warn("<U5Bauthoru5D> was created without expected prop 'author'");
		}
	}

	get posts() {
		throw new Error("<U5Bauthoru5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<U5Bauthoru5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get author() {
		throw new Error("<U5Bauthoru5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set author(value) {
		throw new Error("<U5Bauthoru5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bauthoru5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2F1dGhvcl0uY2NmMzhhZTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXV0aG9yL1thdXRob3JdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGF1dGhvci8ke3BhcmFtcy5hdXRob3J9Lmpzb25gKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBhdXRob3IuanNvbmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgLy8gY29uc3QgcG9zdHNCeUF1dGhvciA9IGRhdGEuZmluZChwID0+IHAuYXV0aG9yID09PSBxdWVyeS5hdXRob3IpO1xuICAgIGNvbnN0IHRlc3QgPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gdGVzdC5maWx0ZXIocCA9PiBwLmF1dGhvciA9PT0gcGFyYW1zLmF1dGhvcik7XG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIHsgcG9zdHM6IGZpbHRlcmVkLCBhdXRob3I6IHBhcmFtcy5hdXRob3IgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgYXV0aG9yO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLypcblx0XHRCeSBkZWZhdWx0LCBDU1MgaXMgbG9jYWxseSBzY29wZWQgdG8gdGhlIGNvbXBvbmVudCxcblx0XHRhbmQgYW55IHVudXNlZCBzdHlsZXMgYXJlIGRlYWQtY29kZS1lbGltaW5hdGVkLlxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXG5cdFx0Z29pbmcgdG8gYXBwZWFyIGluc2lkZSB0aGUge3t7cG9zdC5odG1sfX19IGJsb2NrLFxuXHRcdHNvIHdlIGhhdmUgdG8gdXNlIHRoZSA6Z2xvYmFsKC4uLikgbW9kaWZpZXIgdG8gdGFyZ2V0XG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxuXHQqL1xuICAuY29udGVudCA6Z2xvYmFsKGgyKSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHByZSkgOmdsb2JhbChjb2RlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qIC5jb250ZW50IDpnbG9iYWwodWwpIHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChsaSkge1xuICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gIH0gKi9cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlBvc3RzIGJ5IHthdXRob3J9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5Qb3N0cyBieSB7YXV0aG9yfTwvaDE+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICAgIDwhLS0gd2UncmUgdXNpbmcgdGhlIG5vbi1zdGFuZGFyZCBgcmVsPXByZWZldGNoYCBhdHRyaWJ1dGUgdG9cblx0XHRcdFx0dGVsbCBTYXBwZXIgdG8gbG9hZCB0aGUgZGF0YSBmb3IgdGhlIHBhZ2UgYXMgc29vbiBhc1xuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXG5cdFx0XHRcdHdhaXRpbmcgZm9yIHRoZSAnY2xpY2snIGV2ZW50IC0tPlxuICAgIDxsaT5cbiAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImJsb2cve3Bvc3Quc2x1Z31cIj57cG9zdC50aXRsZX08L2E+XG4gICAgICBieVxuICAgICAgPGNvZGU+e3Bvc3QuYXV0aG9yfTwvY29kZT5cbiAgICA8L2xpPlxuICB7L2VhY2h9XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt5QkErRWlELEdBQUksSUFBQyxLQUFLOzs7Ozt5QkFFOUMsR0FBSSxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFGWSxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O2dFQUFJLEdBQUksSUFBQyxLQUFLOztrRkFBdkIsR0FBSSxJQUFDLElBQUk7Ozs7Z0VBRWhDLEdBQUksSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUmYsR0FBSzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF4RWdCLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUlyQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUs7T0FDdEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO09BR3JCLElBQUksR0FBRyxJQUFJO0NBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtPQUlaLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNO0NBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7S0FFaEIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1dBQ1gsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07O0VBRS9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzs7Ozs7T0FuQjVCLEtBQUs7T0FDTCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
