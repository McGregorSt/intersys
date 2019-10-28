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
