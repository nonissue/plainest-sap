import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, J as destroy_each } from './index.3ca71bc2.js';

/* src/routes/blog/index.svelte generated by Svelte v3.16.5 */

const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (55:2) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a0;
	let t0_value = /*post*/ ctx[1].title + "";
	let t0;
	let a0_href_value;
	let t1;
	let a1;
	let code;
	let t2_value = /*post*/ ctx[1].author + "";
	let t2;
	let a1_href_value;
	let t3;

	const block = {
		c: function create() {
			li = element("li");
			a0 = element("a");
			t0 = text(t0_value);
			t1 = text("\n      by\n      ");
			a1 = element("a");
			code = element("code");
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a0 = claim_element(li_nodes, "A", { rel: true, href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, t0_value);
			a0_nodes.forEach(detach_dev);
			t1 = claim_text(li_nodes, "\n      by\n      ");
			a1 = claim_element(li_nodes, "A", { rel: true, href: true, class: true });
			var a1_nodes = children(a1);
			code = claim_element(a1_nodes, "CODE", {});
			var code_nodes = children(code);
			t2 = claim_text(code_nodes, t2_value);
			code_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", a0_href_value = "blog/" + /*post*/ ctx[1].slug);
			attr_dev(a0, "class", "svelte-1yq4ij0");
			add_location(a0, file, 60, 6, 1138);
			add_location(code, file, 63, 8, 1267);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", a1_href_value = "author/" + /*post*/ ctx[1].author);
			attr_dev(a1, "class", "svelte-1yq4ij0");
			add_location(a1, file, 62, 6, 1212);
			attr_dev(li, "class", "svelte-1yq4ij0");
			add_location(li, file, 59, 4, 1127);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a0);
			append_dev(a0, t0);
			append_dev(li, t1);
			append_dev(li, a1);
			append_dev(a1, code);
			append_dev(code, t2);
			append_dev(li, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a0_href_value !== (a0_href_value = "blog/" + /*post*/ ctx[1].slug)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].author + "")) set_data_dev(t2, t2_value);

			if (dirty & /*posts*/ 1 && a1_href_value !== (a1_href_value = "author/" + /*post*/ ctx[1].author)) {
				attr_dev(a1, "href", a1_href_value);
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
		source: "(55:2) {#each posts as post}",
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
	let each_value = /*posts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Recent posts");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Recent posts");
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
			document.title = "Blog";
			attr_dev(h2, "class", "svelte-1yq4ij0");
			add_location(h2, file, 51, 0, 853);
			attr_dev(ul, "class", "svelte-1yq4ij0");
			add_location(ul, file, 53, 0, 876);
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
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => {
		return { posts };
	};

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	return [posts];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWQ3MTkwODYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goYGJsb2cuanNvbmApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgICByZXR1cm4geyBwb3N0cyB9O1xuICAgICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHBvc3RzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgdWwge1xuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG5cbiAgbGkge1xuICAgIC8qIG1hcmdpbjogMCAwIDAuNWVtIDA7ICovXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsOyAqL1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xuICAgIC8qIHdpZHRoOiBpbmxpbmU7ICovXG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgyPlJlY2VudCBwb3N0czwvaDI+XG5cbjx1bD5cbiAgeyNlYWNoIHBvc3RzIGFzIHBvc3R9XG4gICAgPCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG4gICAgPGxpPlxuICAgICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5zbHVnfVwiPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIGJ5XG4gICAgICA8YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCJhdXRob3Ive3Bvc3QuYXV0aG9yfVwiPlxuICAgICAgICA8Y29kZT57cG9zdC5hdXRob3J9PC9jb2RlPlxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gIHsvZWFjaH1cbjwvdWw+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt5QkE0RGlELEdBQUksSUFBQyxLQUFLOzs7Ozs7eUJBRzVDLEdBQUksSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFIVSxHQUFJLElBQUMsSUFBSTs7Ozs7NkRBRVAsR0FBSSxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUZBLEdBQUksSUFBQyxLQUFLOztvRkFBdkIsR0FBSSxJQUFDLElBQUk7Ozs7Z0VBRzlCLEdBQUksSUFBQyxNQUFNOztzRkFEWSxHQUFJLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUnhDLEdBQUs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FyRFUsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLGNBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsS0FBSztXQUNBLEtBQUs7Ozs7O09BSlQsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
