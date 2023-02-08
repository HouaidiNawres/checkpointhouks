import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import movielist from './components/movielist/movielist';
import { v4 as uuid } from 'uuid';

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      trailer:
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      img: "",
      description: "AAAAAAAAAAAAAAAAAAAAAAAA",
      title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      rating: 4,
    },
    {
      id: uuidv4(),
      trailer:
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      img: "",
      description: "AAAAAAAAAAAAAAAAAAAAAAAA",
      title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      rating: 5,
    },
    {
      id: uuidv4(),
      trailer:
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      img: "",
      description: "AAAAAAAAAAAAAAAAAAAAAAAA",
      title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      rating: 3,
    },
  ]);
  return (
    <div className="App">
      <navi/>
      <movielist movies={movies} />
    </div>
  );
}

export default App;
