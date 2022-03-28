/**
 * @Funcionalidades
 * 1. Dropdown vai começar fechado
 * 2. Exibir as opções de produto ao ser clicado
 * 3. Fechar o dropdown ao selecionar o item
 * */

import React, { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpened, setisOpened] = useState(false);

  const handleOption = (option) => {
    onSelect(option);
    setisOpened(false);
  };

  return (
    <div className="c-dropdown">
      <button onClick={() => setisOpened((o) => !o)}>{title}</button>

      {isOpened && (
        <ul role="menu">
          {options.map((option) => (
            <li
              key={option}
              role="menu-item"
              onClick={() => handleOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
