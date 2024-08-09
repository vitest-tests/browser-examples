<script lang="ts">
  const { name }: { name: string } = $props()

  let count = $state(1)

  function increment() {
    count++
  }
</script>

<h1>Hello {name} x{count}!</h1>
<button onclick={increment}>Increment</button>