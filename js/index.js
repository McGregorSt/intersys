// 4.Reverse Array

const revArray = arr => {
  return arr.reverse()
}
console.log(revArray([1, 2, 3]))
console.log(revArray([1, 2, 1, 0]))

// 5.Palindrome

const palindrome = string => {
  const reg = /[a-zA-Z]/g
  const lettersArr = string.match(reg)
  if (lettersArr.length % 2 !== 0) {
    return 'NO'
  }
  const firstPart = lettersArr.slice(0, lettersArr.length / 2)
  const secondPart = lettersArr
    .slice(lettersArr.length / 2, lettersArr.length)
    .reverse()
  for (let i = 0; i < firstPart.length; i++) {
    if (firstPart[i] !== secondPart[i]) {
      return 'NO'
    }
  }
  return 'YES'
}

console.log(palindrome('abut-1-tu232132b1a'))
console.log(palindrome('@allula'))

// 6.Permutation

const permutation = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return 'NO'
  }
  for (let i = 0; i < arrTwo.length; i++) {
    if (!arrOne.includes(arrTwo[i])) {
      return 'NO'
    }
  }
  return 'YES'
}

console.log(
  'permutation',
  permutation(
    [1, 2, 5, 3, 7, 0, 7, 3, 5, 2, 1],
    [7, 3, 1, 2, 5, 0, 5, 2, 1, 3, 7],
  ),
)
console.log(
  'permutation',
  permutation(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [6, 5, 4, 3, 2, 0, 11, 10, 9, 8, 7],
  ),
)

// 7.Existing powers of 2

const powerOfTwo = arr => {
  const sortedArr = arr.sort((a, b) => a - b)
  let max = sortedArr[sortedArr.length - 1]
  let power = []
  for (let k = 0; k < 33; k++) {
    let result = Math.pow(2, k)
    if (result <= max) {
      power.push(result)
    } else {
      break
    }
  }
  if (power.length === 0) {
    return 'NA'
  }
  return power.sort((a, b) => a - b)
}

console.log(powerOfTwo([1, 3, 4, 257]))
console.log(powerOfTwo([]))

// 8.Finding primes

const findingPrimes = (n, arr) => {
  let primes = []
  for (let k = 0; k < n; k++) {
    for (let num = arr[0 + 2 * k]; num < arr[1 + 2 * k] + 1; num++) {
      if (num === 2) {
        primes.push(num)
      } else if (isPrime(num)) {
        primes.push(num)
      }
    }
  }
  return primes
}

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  if (num === 1) {
    return false
  }
  return true
}

console.log(findingPrimes(2, [1, 3, 100, 200]))

// 9.Optional Power

const optionalPow = (numOne, numTwo) => {
  let pressed = ''
  if (pressed === 'OK') {
    return Math.pow(numOne, numTwo)
  } else if (pressed === 'CANCEL') {
    return Math.pow(numTwo, numOne)
  }
}

console.log(optionalPow(2, 3))

// 10.Fix age

const fixage = arr => {
  let filteredAge = arr.filter(age => age >= 18 && age <= 60)
  if (filteredAge.length === 0) {
    return 'NA'
  }

  return filteredAge.join(',')
}

console.log(fixage([5, 15, 25, 78, 59, 45]))
console.log(fixage([18, 3, 30, 22, 11, 60]))
console.log(fixage([1, 3, 3, 2, 11, 6]))

// 11.Common Digit

const commonDigit = arr => {
  let newArr = arr
    .join('')
    .toString()
    .split('')
  let map = {}
  for (let digit of newArr) {
    map[digit] = (map[digit] || 0) + 1
  }
  let sortedMap = Object.values(map).sort((a, b) => b - a)
  let maxValue = Math.max(...sortedMap)
  let result = []
  for (let key in map) {
    if (map[key] === maxValue) {
      result.push(key)
    }
  }
  return Math.max(...result)
}

console.log(commonDigit([787, 989, 659, 557]))
console.log(commonDigit([101, 20, 21, 3]))
console.log(commonDigit([111, 222, 5]))

// 12.Digit Sum

const digitSum = arr => {
  let result = []
  arr.map(num => {
    let numArr = num.toString().split('')
    let sum = numArr.reduce((acc, value) => parseInt(acc) + parseInt(value), 0)
    result.push(sum)
  })
  return result.indexOf(Math.max(...result))
}

console.log(digitSum([4, 20, 21, 19]))
console.log(digitSum([94, 20, 21, 19]))
