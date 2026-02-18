import { useState, useEffect } from "react";
import Dogs from "./Dogs";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState(() => {
    const savedDogs = localStorage.getItem('dogs');
    return savedDogs ? JSON.parse(savedDogs) : [];
  });
  const [showDog, setShowDogs] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newDog = formData.get("newName").trim();

    if (!newDog) return;
    setDogs((prevDogList) => [...prevDogList, newDog]);

    event.currentTarget.reset();
  }

  function toggleList() {
    setShowDogs((prevShown) => !prevShown);
  }

  useEffect(() => {
    localStorage.setItem("dogs", JSON.stringify(dogs));
  }, [dogs])

  return (
    <div className="App">
      <h2>Dog Daycare</h2>

      <form onSubmit={handleSubmit} className="add-new-dog">
        <input type="text" placeholder="New dog name" name="newName" />
        <button>Add</button>
      </form>
      <button onClick={toggleList}>Show Dogs</button>

      {showDog && <Dogs dogs={dogs} />}
    </div>
  );
}

export default App;
