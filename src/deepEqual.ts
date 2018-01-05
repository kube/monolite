
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const arrayEqual = (a: any[], b: any[]) => {
  if (a.length !== b.length)
    return false

  for (const index in a)
    if (!deepEqual(a[index], b[index]))
      return false

  return true
}

const objectEqual = (a: any, b: any) => {
  const propsA = Object.getOwnPropertyNames(a)
  const propsB = Object.getOwnPropertyNames(b)

  if (propsA.length !== propsB.length)
    return false

  for (const prop of propsA)
    if (!Object.prototype.hasOwnProperty.call(b, prop)
      || !deepEqual(a[prop], b[prop]))
      return false

  return true
}

const deepEqual = (a: any, b: any) => {
  if (a === b)
    return true

  if (typeof a !== typeof b)
    return false

  if (a === null || b === null)
    return false

  if (Array.isArray(a))
    return arrayEqual(a, b)

  if (typeof a === 'object')
    return objectEqual(a, b)

  return a.valueOf() === b.valueOf()
}

export default deepEqual
