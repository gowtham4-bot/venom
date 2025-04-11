import { useState } from "react";
import "./App.css";
import { set } from "mongoose";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  return <>
  
  <div
  style=
  {{
    display:  "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  

  }}
  >
    
    <div>
  <h1
  style={{
    fontSize: "100px",
    fontFamily: "Arial, sans-serif",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "brown",
    textAlign: "center",
    alignItems: "center",
  }}
  >GOOGLE</h1>
  <input 
    type="text"
    placeholder="Search Google or type a URL"
    size="30"
    onChange={(e) => setText(e.target.value)}
    value={text}
    style={{
      fontSize: "10px",
      borderRadius: "20px",
      width: "500px",
      height: "25px",
    
    }}
    />
  <button
    onClick={() => {
      fetch("/api/search?text=" + text)
        .then((response) => {
          response
            .json()
            .then((results) => setResults(results))
            .catch((error) => console.error("Failed to parse response!", error));
            })
            .catch((error) => console.error("Failed to parse response!", error));
            }}
    style={{
      fontSize: "20px",
      borderRadius: "20px",
      color: "lightgreen",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100px",
      height: "30px",
  }}
  >
  Search</button>
  <ul>
        {
          results.map((item, index) => (
            <li key={index}>
              <a 
              style={{
                fontSize: "20px",
                color: "orange",
                fontFamily: "cursive",
                fontWeight: "bold",
                textAlign: "left",
                textDecoration: "none",
              }}
              href={item.url} target="_blank">
                {item.url}
              </a>
              <div
              style={{
                fontSize: "20px",
                color: "brown",
                fontWeight: "bold",
                textAlign: "center",
                
              }}>{item.title}</div>
            </li>
          ))
          
        }
      </ul>
  </div>
  </div>
  
  
  </>;
}

export default App;
