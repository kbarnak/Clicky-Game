import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tile from './components/Tile';
// import './images';
import emojis from './images';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Try not to double click the Emoji!",
    clicked: [],
    tiles: emojis
    // tiles: [
    //   { id: 0, src: './im' },
    //   { id: 1, src: './images/annoyedface.png' },
    //   { id: 2, src: './images/laughingface.png' },
    //   { id: 3, src: './images/lovelyface.png' },
    //   { id: 4, src: './images/moneyface.png' },
    //   { id: 5, val: './images/nerdface.png' },
    //   { id: 6, val: './images/nerdface.png' },
    //   { id: 7, val: './images/sillyface.png' }]
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  handleTileCick = (id) => {
    console.log(`I've been clicked ${id}`);

    if (!this.state.clicked.includes(id)) {
      const newArr = this.shuffle(this.state.tiles);
      this.setState({
        clicked: [...this.state.clicked, id],
        currentScore: this.state.currentScore + 1,
        tiles: newArr
      }, function () {
        console.log(this.state.clicked)
      })
    } else {
      alert("Sorry! You lose!")
      if (this.state.currentScore > this.state.topScore) {
        this.setState({
          clicked: [],
          currentScore: 0,
          topScore: this.state.currentScore
        })
      } else {
        this.setState({
          clicked: [],
          currentScore: 0
        })

      }

    }

  }

  render() {
    return (
      <div className="container">
        < Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="game-space">
          {this.state.tiles.map((tile, i) => (
            < Tile
              src={tile.src}
              key={i}
              id={tile.id}
              handleTileClick={this.handleTileCick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
