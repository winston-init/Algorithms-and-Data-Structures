function funChallenge(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  } // O(n) --> size of input

  return a // O(1)
}

// Big O --> 1 + 1 + n + n + n + n + 1
// Big O --> O(4n + 3)
