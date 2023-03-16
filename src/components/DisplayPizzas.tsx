import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import SinglePizzas from "./SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => (
        <SinglePizzas
          key={pizza.id}
          pizza={pizza}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      ))}
    </div>
  );
};

export default DisplayPizzas;
