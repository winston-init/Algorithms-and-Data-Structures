const nemo = ['nemo']
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
]

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log('Found NEMO!')
  }
}

findNemo(everyone) // O(n) --> Linear Time

// if the input is nemo --> O(1)
// if the input is everyone --> O(10)
