import { useState } from "react";
import Dogs from "./Dogs";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState(["Rover", "Buddy", "Rex"]);
  const [showDog, setShowDogs] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newDog = formData.get("newName");
    setDogs((prevDogList) => [...prevDogList, newDog]);

    event.currentTarget.reset();
  }

  return (
    <div>
      <h2>Dog Daycare</h2>
      <form onSubmit={handleSubmit} className="add-new-dog">
        <input type="text" placeholder="New dog name" name="newName" />
        <button>Add</button>
      </form>
      {showDog && <Dogs dogs={dogs} />}
    </div>
  );
}

export default App;
