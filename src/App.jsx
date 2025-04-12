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
    backgroundImage: "url('https://wallpapers.com/images/high/peaceful-sea-as-official-ipad-theme-obb110fl5k4e8e9g.webp')",
    backgroundSize: "cover",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    display:  "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderImage: "100%",
  

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
      color: "lightblue",
      cursor: "pointer",
      fontWeight: "bold",
      width: "40px",
      height: "30px",
  }}
  >
  🔍</button>
  <ul>
        {
          results?.map((item, index) => (
            <li key={index}>
              <a 
              style={{
                fontSize: "20px",
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
                textDecoration: "none",
              }}
              href={item.url} target="_blank">
                {item.title}
              </a>
              <div
              style={{
                fontSize: "20px",
                color: "brown",
                fontWeight: "bold",
                textAlign: "center",
                
              }}></div>
            </li>
          ))
          
        }
      </ul>
  </div>
  </div>
  
  </>;
}

export default App;
