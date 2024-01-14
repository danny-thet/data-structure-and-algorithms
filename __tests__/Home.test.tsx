import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
	it("should have Docs text", () => {
		render(<Home />);

		const myElem = screen.getByText("Docs");

		expect(myElem).toBeInTheDocument();
	});
});
