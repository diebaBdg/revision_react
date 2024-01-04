import "./App.css";
import Employe from "./components/Employe";
import React, { useEffect, useState } from "react";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then(result => result.json())
      .then(result => {
        setEmployeeData(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h2>Employee Data</h2>
      <Employe data={employeeData} />
    </div>
  );
}

export default App;
