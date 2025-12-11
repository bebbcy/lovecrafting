<script>
  // Speed Insights is initialized once in src/main.js (entry point).
  // Keep this component focused on UI only.
  export let name = 'world';
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Welcome to lovecrafting.</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 2em;
  }
</style>
