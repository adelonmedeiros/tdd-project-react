import { Dropdown } from "../components/dropdown/Dropdown.js";
import { render, screen, userEvent } from "./libs/base-libs";

/**
 * @Funcionalidades
 * 1. Dropdown vai começar fechado
 * 2. Exibir as opções de produto ao ser clicado
 * 3. Fechar o dropdown ao selecionar o item, exibir o valor selecionado
 * */

describe("Dropdown de listas de camas", () => {
  const title = "Medicamentos";
  const options = ["Dorflex", "Doralgina", "Neosaldina", "Dipirona"];

  beforeEach(() => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
  });

  test("Validando que o dropdown de lista de medicamentos inicializa fechado", () => {
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  });
});
