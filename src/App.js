import React, { useState } from "react";
import "./styles.css";

const destinationDB = {
  North: [
    {
      name: "Pangong Tso, Ladakh",
      description: "salt water lake, northmost region",
      rate: "10/10"
    },
    {
      name: "Pangarchula Trek",
      description: "Leh",
      rate: "8/10"
    },
    {
      name: "Royal Enfield Ride, Numbra Valley, Leh",
      description: "adventure, peace, scenery",
      rate: "7/10"
    }
  ],
  East: [
    {
      name: "Dzuko Valley, Nagaland",
      description: "night trek",
      rate: "10/10"
    },
    {
      name: "River Umngot, Dawki, Meghalaya",
      description: "diamond clear waters",
      rate: "9/10"
    },
    {
      name: "Rainbow Falls, Nongriat",
      description: "downhill trek",
      rate: "9/10"
    }
  ],
  West: [
    {
      name: "Rann of Kutch, Gujarat",
      description: "salt desert",
      rate: "9/10"
    },
    {
      name: "Jal Mahal, Jaipur, Rajasthan",
      description: "beauty, architecture",
      rate: "7/10"
    },
    {
      name: "Desert Safari, Thar Desert",
      description: "natural adventure",
      rate: "6/10"
    }
  ]
};

const destinationDBList = Object.keys(destinationDB);

export default function App() {
  var [destination, setDestination] = useState("East");

  function display(item) {
    destination = item;
    setDestination(destination);
  }

  return (
    <div className="App">
      <h1>🧳</h1>
      <code style={{ fontSize: "30px" }}>you-only-live-once</code>
      <p>check out my only-INDIA travel bucket list</p>
      <p>choose destination based on region</p>

      <p>
        {destinationDBList.map((item) => {
          return <button onClick={() => display(item)}>{item}</button>;
        })}
      </p>

      <hr />

      <div className="display">
        {destinationDB[destination].map((place) => (
          <li>
            <div style={{ fontSize: "large" }}> 📍 {place.name} </div>
            <div> 📝 {place.description} </div>
            <div style={{ fontSize: "large" }}> 💯 {place.rate} </div>
          </li>
        ))}
      </div>
    </div>
  );
}