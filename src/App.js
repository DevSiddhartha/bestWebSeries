import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [webseriestoShow, setWebSeriesToShow] = useState("Thriller");

  const webseriesCollection = {
    Thriller: [
      { name: "Dark", rating: "8.8/10" },
      { name: "Black Mirror", rating: "8.8/10" },
      { name: "Mr. Robot", rating: "8.6/10" },
    ],
    Crime: [
      { name: "The Boys", rating: "8.7/10" },
      { name: "Sacred Games", rating: "8.6/10" },
      { name: "Mirzapur", rating: "8.4/10" }
    ],
    Comedy: [
      { name: "Friends", rating: "8.9/10" },
      { name: "The Office", rating: "8.9/10" },
      { name: "The Big Bang Theory", rating: "8.1/10" }
    ]
  };

  var webseriesCategory = Object.keys(webseriesCollection);

  function handlebtnClick(type) {
    setWebSeriesToShow(type);
  }
  return (
    <div className="App">
      <div className="container">
        <h1> Best Web Series</h1>
        <p>Hey!, check out my favourite Web Series. Select a category to see my favorite series </p>
        {webseriesCategory.map((category) => (
          <button className="button" onClick={() => handlebtnClick(category)}>
            {category}
          </button>
        ))}
        <hr />
        <ul style={{ listStyle: "none" }}>
          {webseriesCollection[webseriestoShow].map((webseries) => (
            <li>
              <div className="list-div">
                {webseries.name}
                <div style={{ fontSize: "smaller" }}>{webseries.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}