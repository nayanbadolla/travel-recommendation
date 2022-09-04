import React, { useState } from "react";
import "./styles.css";

const destinationDB = {
  Europe: [
    {
      name: "Colloseum",
      location: "Rome, Italy"
    },
    {
      name: "Cappadocia",
      location: "Greece"
    }
  ],
  India: [
    {
      name: "River Umngot",
      location: "Dawki, Meghalaya"
    },
    {
      name: "Pangarchula Trek",
      location: "Leh"
    }
  ],
  USA: [
    {
      name: "Yosemite National Park",
      location: "California"
    },
    {
      name: "O'ahu Koko Crater",
      location: "Hawaii"
    }
  ]
};

const destinationDBList = Object.keys(destinationDB);

export default function App() {
  var [destination, setDestination] = useState("India");

  function display(item) {
    destination = item;
    setDestination(destination);
  }

  return (
    <div className="App">
      <h1>🧳</h1>
      <code style={{ fontSize: "30px" }}>you-only-live-once</code>
      <p>check out my travel bucket list from across the world</p>
      <p>choose destination based on region</p>

      <p>
        {destinationDBList.map((item) => {
          return (
            <button
              onClick={() => display(item)}
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "10px"
              }}
            >
              {item}
            </button>
          );
        })}
      </p>

      <hr />

      <div>
        {destinationDB[destination].map((place) => (
          <li>
            <div style={{fontSize:"large"}}> {place.name} </div>
            <div> {place.location} </div>
          </li>
        ))}
      </div>
    </div>
  );
}
