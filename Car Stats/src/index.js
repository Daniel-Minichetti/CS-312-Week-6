import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const CarTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.model}</td>
            <td>{car.speedStats.topSpeed}</td>
            <td>{car.coloursByPopularity[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ReactDOM.render(<CarTable />, document.getElementById("root"));
