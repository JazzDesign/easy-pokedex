import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // states
  // useEffect(loadPokemon, [])
  const [pokemon, setPokemon] = useState({
    name: '',
    sprites: {

    }
  })
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const id = form.get('id');
    loadPokemon(id);
  }
  function loadPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => {
      return response.json()
    })
    .then((poke) => {
      setPokemon(poke)
    })
  }

  return (
    <div className="App">
      <p>Nombre Pokemon: {pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt=""/>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="id"/>
      </form>
    </div>
  );
}

export default App;
