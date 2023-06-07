import { useState } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="App">
      <h1>Bienvenu sur la page ou tu vas te logguer connard</h1>
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};
export default App;
