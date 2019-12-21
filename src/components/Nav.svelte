<script>
  export let segment;
</script>

<style>
  .logo {
    padding: 0.5em 0.5em;
    /* font-size: 0.85em; */
    /* display: block;/ */
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 2em;
  }
  .selected.logo::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: transparent;
    display: block;
    bottom: -1px;
  }
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    font-family: monospace;
    font-size: 0.85em;

    /* justify-content: center; */
    /* justify-content: center; */
  }

  ul {
    margin: 0;
    padding: 0;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-content: space-between;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    /* float: left; */
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;

    background-color: rgba(255, 62, 0, 0.5);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
    letter-spacing: -0.05em;
    font-weight: normal;
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} class="logo" href=".">
        collate
      </a>
    </li>
    <!-- <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li> -->
    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
    <li>
      <a rel="prefetch" class:selected={segment === 'author'} href="author">
        authors
      </a>
    </li>
  </ul>
</nav>
