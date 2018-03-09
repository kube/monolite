
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const hasOwnProperty = Object.prototype.hasOwnProperty

export function __assign<T extends object, A extends object>(
  target: T,
  a: A
): T & A

export function __assign<
  T extends object,
  A extends object,
  B extends object
>(target: T, a: A, b: B): T & A & B

export function __assign<
  T extends object,
  A extends object,
  B extends object,
  C extends object
>(target: T, a: A, b: B, c: C): T & A & B & C

export function __assign<
  T extends object,
  A extends object,
  B extends object,
  C extends object,
  D extends object
>(target: T, a: A, b: B, c: C, d: D): T & A & B & C & D

export function __assign<
  T extends object,
  A extends object,
  B extends object,
  C extends object,
  D extends object,
  E extends object
>(target: T, a: A, b: B, c: C, d: D, e: E): T & A & B & C & D & E

export function __assign<
  T extends object,
  A extends object,
  B extends object,
  C extends object,
  D extends object,
  E extends object,
  F extends object
>(
  target: T,
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F
): T & A & B & C & D & E & F

/**
 *
 */
export function __assign<T extends object>(
  target: T,
  ...sources: any[]
) {
  const to = Object(target)

  for (const source of sources) {
    for (const key in source) {
      if (hasOwnProperty.call(source, key)) {
        to[key] = source[key]
      }
    }
  }
  return to
}

export const assign =
  typeof Object.assign === 'function' ? Object.assign : __assign
