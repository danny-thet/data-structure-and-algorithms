export const intersection = (a: [], b: []) => {
  const result: [] = []
  const aHash = new Set(a)
  for (const num of b) {
    if (aHash.has(num)) {
      result.push(num)
    }
  }
  return result.sort()
}
