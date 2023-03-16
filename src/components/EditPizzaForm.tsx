import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Pizza } from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  setEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  setEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      setEdit();
    } else {
      alert("Fill in all fields ");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />

      <input
        type="text"
        name="img"
        placeholder="URL Image"
        onChange={handleChange}
        value={editPizza.img}
      />

      <button type="submit">Edit</button>
    </form>
  );
};

export default EditPizzaForm;
