import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Pizza } from "../models/Pizza";
import "./styles.css";

interface AddPizzaProps {
  addPizza: (newPizza: Pizza) => void;
}

const initialState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      const data = { title, price: Number(price), img, id: Date.now() };

      addPizza(data);
    } else {
      alert("Fill in all fields ");
    }

    setNewPizza(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={newPizza.title}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={newPizza.price}
      />

      <input
        type="text"
        name="img"
        placeholder="URL Image"
        onChange={handleChange}
        value={newPizza.img}
      />

      <button type="submit">+ Add to menu</button>
    </form>
  );
};

export default AddPizzaForm;
