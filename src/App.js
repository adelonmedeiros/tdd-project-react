import { Dropdown } from "./components/dropdown/Dropdown.js";
import React, { useState } from "react";

function App() {
  const [selectedProduct, setselectedProduct] = useState(null);

  return (
    <div className="App">
      <Dropdown
        title="Medicamentos"
        options={["Dorflex", "Doralgina", "Neosaldina", "Dipirona"]}
        onSelect={setselectedProduct}
      />

      {selectedProduct && (
        <div className="selected-iten">
          Produto selecionado: {selectedProduct}
        </div>
      )}
    </div>
  );
}

export default App;
