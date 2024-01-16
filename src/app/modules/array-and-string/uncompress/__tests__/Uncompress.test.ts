import { uncompress } from "../uncompress";

describe("Uncompress", () => {
	it.each`
		compressString | expectedUncompressString
		${"2c3a1t"}    | ${"ccaaat"}
		${"4s2b"}      | ${"ssssbb"}
		${"2p1o5p"}    | ${"ppoppppp"}
		${"3n12e2z"}   | ${"nnneeeeeeeeeeeezz"}
		${"127y"}      | ${"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"}
	`(
		"should uncompress a string",
		({ compressString, expectedUncompressString }) => {
			const uncompressString: String = uncompress(compressString);
			expect(uncompressString).toBe(expectedUncompressString);
		}
	);
});
