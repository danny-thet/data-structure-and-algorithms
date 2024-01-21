import { intersection } from '../intersection'

describe('intersection', () => {
  it.each`
    a               | b                   | result
    ${[4, 2, 1, 6]} | ${[3, 6, 9, 2, 10]} | ${[2, 6]}
    ${[2, 4, 6]}    | ${[4, 2]}           | ${[2, 4]}
    ${[4, 2, 1]}    | ${[1, 2, 4, 6]}     | ${[1, 2, 4]}
    ${[0, 1, 2]}    | ${[10, 11]}         | ${[]}
  `('should return an intersection array', ({ a, b, result }) => {
    const resultArray = intersection(a, b)
    expect(resultArray).toStrictEqual(result)
  })
})
