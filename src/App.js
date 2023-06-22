import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import "./index.css";

function App() {
  const [user, setUser] = useState({});

  const handleDataFromChild = (user) => {
    setUser(user);
    console.log(user)
  };
  
  return (
    <>
      
        
        {Object.keys(user).length === 0 ? <Login sendDataToParent={handleDataFromChild}/> : <Dashboard sendDataToParent={handleDataFromChild}/>}
      
      
    </>
  );
}

export default App;
