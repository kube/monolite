try {
  const { set } = require('monolite')

  const state = { nested: { property: 42 } }
  console.log(state)

  const newState = set(state, (_) => _.nested.property, 1337)
  console.log(newState)

  process.exit(0)
} catch (e) {
  console.error(e)
  process.exit(1)
}
