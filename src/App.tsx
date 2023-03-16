import "./App.css";
import { Pizza } from "./models/Pizza";
import { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    const pizza = pizzasList.map((pizza) =>
      pizza.id === newPizza.id ? newPizza : pizza
    );

    setPizzasList(pizza);
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);

    setPizzasList(newPizzasList);
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">My pizzeria</span>

        <AddPizzaForm addPizza={addPizza} />

        <DisplayPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
