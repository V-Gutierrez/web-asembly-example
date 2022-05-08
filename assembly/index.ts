// The entry file of your WebAssembly module.

declare function log(a: i32, b: i32): void;


export function add(a: i32, b: i32): i32 {
  log(a, b)

  return a + b;
}


export function minusOne(n: i32): i32 {
  if (n === 44) {
    abort()
  }

  return n - 1;
}

export function fizzBuzz(n: i32): String | null {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return null
  }
}

memory.grow(2)
store<u8>(0, 21)
store<u8>(1, 99)

export function readMemory(address: i32): i32 {
  return load<u8>(address)
}
