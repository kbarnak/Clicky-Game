import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tile from './components/Tile';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "You guessed correctly",
    clicked: [],
    tiles: [
      { id: 0, val: "A", img: './images/angryface.png' },
      { id: 1, val: "B", },
      { id: 2, val: "C" },
      { id: 3, val: "D" },
      { id: 4, val: "E" },
      { id: 5, val: "F" },
      { id: 6, val: "G" },
      { id: 7, val: "H" }]
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
      alert("You lose")
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
          {this.state.tiles.map((tile, i) => < Tile img={tile.img} key={i} id={tile.id} handleTileClick={this.handleTileCick} />)}
        </div>
      </div>
    );
  }
}

export default App;
