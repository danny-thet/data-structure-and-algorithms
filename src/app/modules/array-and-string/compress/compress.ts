export const compress = (string: String) => {
  const result = []
  let j = 0
  let i = 0

  while (j <= string.length) {
    if (string[i] === string[j]) {
      j++
    } else {
      const num = j - i
      if (num === 1) {
        result.push(string[i])
      } else {
        result.push(`${num}${string[i]}`)
      }
      i = j
    }
  }

  return result.join('')
}

//'ccaaatsss'
