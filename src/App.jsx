import { useState } from "react";
import Dogs from "./Dogs";
import "./App.css";

function App() {

  const [dogs, setDogs] = useState(["Rover", "Buddy", "Rex"]);
  const [showDog, setShowDogs] = useState(true)

  return (
    <div>
      <h2>Dog Daycare</h2>
      {showDog && <Dogs dogs={dogs}/>}
    </div>
  );
}

export default App;
