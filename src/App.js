
import { useState } from 'react';

import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Team from './components/Team/Team';


function App() {

  const games = [
    {
      name: 'Overwatch',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9',
    },
    {
      name: 'Valorant',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff',
    },
    {
      name: 'Phasmophobia',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2',
    },
    {
      name: 'Rogue Company',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8',
    },
    {
      name: 'Tibia',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5',
    },
    {
      name: 'Cabal',
      primaryColor: '#ff8a05',
      secondaryColor: '#fff5d9',
    },
    {
      name: 'Paladins',
      primaryColor: '#ffba29',
      secondaryColor: '#ffeedf',
    },
 ]

  const [players, setPlayers] = useState([]);

  const newPlayer = (player) => {
    setPlayers([...players, player])
    
  }
  

  return (
    <div className="App">
      <Banner />
      <Form gamesName={games.map(game => game.name)} onPlayerRegistered={player => newPlayer(player)} />
      {games.map(game =>
        <Team 
          key={game.name} 
          name={game.name} 
          primaryColor={game.primaryColor} 
          secondaryColor={game.secondaryColor}
          players={players.filter(player => player.game === game.name)}
          deleteTeam={ () => {
            let playersFiltered = players.filter(player => player.game !== game.name)
            setPlayers([...playersFiltered])
          }}
        />)
      }
      <Footer />
      
    </div>
  );
}

export default App;
