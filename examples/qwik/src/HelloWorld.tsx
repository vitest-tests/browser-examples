import { component$, useSignal } from '@builder.io/qwik'

export default component$(({ name }: { name: string }) => {
  const count = useSignal(1)
  return (
    <div>
      <h1>Hello {name} x{count.value}!</h1>
      <button onClick$={() => count.value++}>Increment</button>
    </div>
  )
})
