import React from "react";
function MyTable() {
  const data = [
    { brand: "Ford", model: "Mustang", color: "White", price: 12000000 },
    { brand: "VW", model: "Beetle", color: "Black", price: 8000000 },
    { brand: "Tesla", model: "Model S", color: "Red", price: 20000000 },
  ];
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>BRAND</th>
            <th>MODEL</th>
            <th>COLOR</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car, i) => (
            <tr key={i}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MyTable;
