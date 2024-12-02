import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from "../components/Products";

describe("Products", () => {
  it("mostra um input", () => {
    render(<Products />);

    const input = screen.getByPlaceholderText("Pesquisar produtos");

    expect(input).toBeInTheDocument();
  });
});

describe("Products", () => {
  it("mostra todos os produtos caso não há nenhuma pesquisa", () => {
    render(<Products />);

    const results = screen.getAllByTestId("product");

    expect(results.length).toBeGreaterThan(0);

    expect(input).toBeInTheDocument();
  });
});
