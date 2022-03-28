import { Dropdown } from "../components/dropdown/Dropdown.js";
import { render, screen, userEvent } from "./libs/base-libs";

/**
 * @Funcionalidades
 * 1. Dropdown vai começar fechado
 * 2. Exibir as opções de produto ao ser clicado
 * 3. Fechar o dropdown ao selecionar o item
 * */

describe("Dropdown lista de Medicamentos", () => {
  const title = "Medicamentos";
  const options = ["Dorflex", "Doralgina", "Neosaldina", "Dipirona"];

  const setup = () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
  };

  beforeEach(() => {
    setup();
  });

  test("Validando que o dropdown de lista de medicamentos inicializa fechado", () => {
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  });

  test("Validando que o dropdown de lista de medicamentos exibe as opções", () => {
    userEvent.click(screen.getByText(title));
    expect(screen.getByText(options[3])).toBeInTheDocument();
  });

  test("Validando que o dropdown de lista de medicamentos fecha ao selecionar um item", () => {
    userEvent.click(screen.getByText(title));
    userEvent.click(screen.getByText(options[0]));
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  });

});
