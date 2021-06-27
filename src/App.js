import { useState } from "react";
import "./styles.css";
const hipHop = [
  { name: "Eminem", rating: "5/5" },
  { name: "Mike Shinoda", rating: "4.9/5" },
  { name: "Dr Dre", rating: "4.8/5" },
  { name: "50 cent", rating: "4.8/5" }
];
const rock = [
  { name: "Linkin Park", rating: "5/5" },
  { name: "Metallica", rating: "4.9/5" },
  { name: "Iron Maiden", rating: "4.9/5" },
  { name: "Pink Floyd", rating: "4.8/5" }
];
const pop = [
  { name: "Enrique Iglesias", rating: "4.9/5" },
  { name: "Pitbull", rating: "4.5/5" },
  { name: "Backsteet boys", rating: "4.7/5" },
  { name: "Bruno Mars", rating: "4.7/5" }
];
const musicObj = {
  "hip-hop/rap": hipHop,
  "rock/metal": rock,
  "pop/latin/blues": pop
};
export default function App() {
  const [genre, setGenre] = useState(Object.keys(musicObj)[0]);
  const genreClickHandler = (item) => {
    console.log(item);
    setGenre(item);
  };
  return (
    <div className="App">
      <h1>🎶good music</h1>
      <p>Check out my favorite artists.</p>
      <p>Click on a genre to know more!</p>
      <div>
        {Object.keys(musicObj).map((item) => (
          <button
            key={item}
            value={item}
            onClick={genreClickHandler.bind(null, item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div id="listHolder">
        <ul>
          {musicObj[genre].map((genre) => {
            return (
              <li key={genre.name}>
                <div>{genre.name}</div>
                <div style={{ fontSize: "smaller" }}>{genre.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
