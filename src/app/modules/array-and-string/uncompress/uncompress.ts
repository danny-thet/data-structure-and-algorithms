export const uncompress = (string: String) => {
  const result: string[] = []
  let i = 0
  let j = 0
  while (i < string.length) {
    const number = '0123456789'
    const currentChar = string[i]
    const isNum = number.includes(currentChar)
    if (isNum) {
      i++
    } else {
      const time = Number(string.slice(j, i))
      result.push(currentChar.repeat(time))
      i++
      j = i
    }
  }

  return result.join('')
}
