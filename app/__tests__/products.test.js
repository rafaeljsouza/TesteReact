import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from "../components/Products";

describe("Products", () => {
  it("mostra um input", () => {
    render(<Products />);

    const input = screen.getByPlaceholderText("Digite o nome do produto");

    expect(input).toBeInTheDocument();
  });
});
