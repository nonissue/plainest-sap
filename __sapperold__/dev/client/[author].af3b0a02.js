import { S as SvelteComponentDev, i as init, d as dispatch_dev, A as globals, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, J as destroy_each } from './index.3ca71bc2.js';

/* src/routes/author/[author].svelte generated by Svelte v3.16.5 */

const { console: console_1 } = globals;
const file = "src/routes/author/[author].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (80:2) {#each posts as post}
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
			add_location(a, file, 85, 6, 2077);
			add_location(code, file, 87, 6, 2151);
			add_location(li, file, 84, 4, 2066);
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
		source: "(80:2) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div;
	let i;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	document.title = title_value = "Posts by " + /*author*/ ctx[1];
	let each_value = /*posts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			i = element("i");
			t1 = text("posts by");
			t2 = space();
			h2 = element("h2");
			t3 = text(/*author*/ ctx[1]);
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			i = claim_element(div_nodes, "I", {});
			var i_nodes = children(i);
			t1 = claim_text(i_nodes, "posts by");
			i_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, /*author*/ ctx[1]);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(i, file, 77, 2, 1784);
			add_location(h2, file, 78, 2, 1802);
			attr_dev(div, "class", "content svelte-12s65il");
			add_location(div, file, 76, 0, 1760);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, i);
			append_dev(i, t1);
			append_dev(div, t2);
			append_dev(div, h2);
			append_dev(h2, t3);
			append_dev(div, t4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*author*/ 2 && title_value !== (title_value = "Posts by " + /*author*/ ctx[1])) {
				document.title = title_value;
			}

			if (dirty & /*author*/ 2) set_data_dev(t3, /*author*/ ctx[1]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2F1dGhvcl0uYWYzYjBhMDIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXV0aG9yL1thdXRob3JdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGF1dGhvci8ke3BhcmFtcy5hdXRob3J9Lmpzb25gKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBhdXRob3IuanNvbmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgLy8gY29uc3QgcG9zdHNCeUF1dGhvciA9IGRhdGEuZmluZChwID0+IHAuYXV0aG9yID09PSBxdWVyeS5hdXRob3IpO1xuICAgIGNvbnN0IHRlc3QgPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gdGVzdC5maWx0ZXIocCA9PiBwLmF1dGhvciA9PT0gcGFyYW1zLmF1dGhvcik7XG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIHsgcG9zdHM6IGZpbHRlcmVkLCBhdXRob3I6IHBhcmFtcy5hdXRob3IgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgYXV0aG9yO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLypcblx0XHRCeSBkZWZhdWx0LCBDU1MgaXMgbG9jYWxseSBzY29wZWQgdG8gdGhlIGNvbXBvbmVudCxcblx0XHRhbmQgYW55IHVudXNlZCBzdHlsZXMgYXJlIGRlYWQtY29kZS1lbGltaW5hdGVkLlxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXG5cdFx0Z29pbmcgdG8gYXBwZWFyIGluc2lkZSB0aGUge3t7cG9zdC5odG1sfX19IGJsb2NrLFxuXHRcdHNvIHdlIGhhdmUgdG8gdXNlIHRoZSA6Z2xvYmFsKC4uLikgbW9kaWZpZXIgdG8gdGFyZ2V0XG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxuXHQqL1xuICAuY29udGVudCA6Z2xvYmFsKGgyKSB7XG4gICAgLyogZm9udC1zaXplOiAxLjRlbTsgKi9cbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKGkpIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAwLjVlbTtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvKiAuY29udGVudCA6Z2xvYmFsKHVsKSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwobGkpIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9ICovXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5Qb3N0cyBieSB7YXV0aG9yfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICA8aT5wb3N0cyBieTwvaT5cbiAgPGgyPnthdXRob3J9PC9oMj5cbiAgeyNlYWNoIHBvc3RzIGFzIHBvc3R9XG4gICAgPCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG4gICAgPGxpPlxuICAgICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5zbHVnfVwiPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIGJ5XG4gICAgICA8Y29kZT57cG9zdC5hdXRob3J9PC9jb2RlPlxuICAgIDwvbGk+XG4gIHsvZWFjaH1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQXFGaUQsR0FBSSxJQUFDLEtBQUs7Ozs7O3lCQUU5QyxHQUFJLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQUZZLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Z0VBQUksR0FBSSxJQUFDLEtBQUs7O2tGQUF2QixHQUFJLElBQUMsSUFBSTs7OztnRUFFaEMsR0FBSSxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVJmLEdBQUs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTlFZ0IsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BSXJDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSztPQUN0QixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7T0FHckIsSUFBSSxHQUFHLElBQUk7Q0FDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO09BSVosUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU07Q0FDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFROztLQUVoQixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7V0FDWCxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTs7RUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQW5CNUIsS0FBSztPQUNMLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
