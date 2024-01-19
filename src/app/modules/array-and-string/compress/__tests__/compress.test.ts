import { compress } from './compress'

describe('compress', () => {
  it.each`
    uncompressString                                                                                                                     | expectedCompressString
    ${'ccaaatsss'}                                                                                                                       | ${'2c3at3s'}
    ${'ssssbbz'}                                                                                                                         | ${'4s2bz'}
    ${'ppoppppp'}                                                                                                                        | ${'2po5p'}
    ${'nnneeeeeeeeeeeezz'}                                                                                                               | ${'3n12e2z'}
    ${'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'} | ${'127y'}
  `(
    'should uncompress a string',
    ({ uncompressString, expectedCompressString }) => {
      const compressString: String = compress(uncompressString)
      expect(compressString).toBe(expectedCompressString)
    }
  )
})
