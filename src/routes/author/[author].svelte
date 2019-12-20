<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // const res = await this.fetch(`author/${params.author}.json`);
    const res = await this.fetch(`author.json`);
    const data = await res.json();

    // const postsByAuthor = data.find(p => p.author === query.author);
    const test = data;
    console.log(params);

    // console.log(test);

    const filtered = test.filter(p => p.author === params.author);
    console.log(filtered);

    if (res.status === 200) {
      return { posts: filtered };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let posts;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>Posts by</title>
</svelte:head>

{#each posts as post}
  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
  <li>
    <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    by
    <code>{post.author}</code>
  </li>
{/each}
