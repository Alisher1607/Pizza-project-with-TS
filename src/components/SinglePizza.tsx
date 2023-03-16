import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Pizza } from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzasProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizzas: FC<SinglePizzasProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className="pizza">
      <img src={pizza.img} alt={pizza.title} />

      <h2>{pizza.title}</h2>

      <span>{pizza.price} c</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={() => setEdit(!edit)} />

        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          setEdit={() => setEdit(!edit)}
        />
      ) : null}
    </div>
  );
};

export default SinglePizzas;
