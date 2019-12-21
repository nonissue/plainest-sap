<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    padding: 0;
  }

  h2 {
    font-size: 1.6em;
    /* text-transform: uppercase; */
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  li {
    /* margin: 0 0 0.5em 0; */
    /* list-style-type: decimal; */
    list-style-type: none;
    border-bottom: 0.5px solid #333;
    padding: 10px 0;
    /* display: inline-block; */
    clear: both;
    float: left;
    /* display: inline; */
    /* width: inline; */
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h2>Recent posts</h2>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      by
      <a rel="prefetch" href="author/{post.author}">
        <code>{post.author}</code>
      </a>
    </li>
  {/each}
</ul>
