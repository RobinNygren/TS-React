import { useState } from "react";

type Vehicles = {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
};

const VehiclesList = () => {
  const startVehicles: Vehicles[] = [
    {
      id: 1,
      manufacturer: "Volvo",
      model: "XC90",
      year: 2022,
    },
    {
      id: 2,
      manufacturer: "Audi",
      model: "RS6",
      year: 2019,
    },
    {
      id: 3,
      manufacturer: "Porsche",
      model: "Taycan",
      year: 2020,
    },
    {
      id: 4,
      manufacturer: "Mercedes",
      model: "S-Class",
      year: 2023,
    },
  ];

  const [vehicles, setVehicles] = useState(startVehicles);

  return (
    <>
      <h1>VehiclesList</h1>
      {vehicles.map((v: Vehicles) => {
        return (
          <ul>
            <li key={v.id}>{v.manufacturer}</li>
            <li>{v.model}</li>
            <li>{v.year}</li>
          </ul>
        );
      })}
    </>
  );
};

export default VehiclesList;
