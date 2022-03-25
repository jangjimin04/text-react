import React, { Component } from 'react';
import Animal from './Animal'

class App extends Component {
  render() {
    return (
      <Animal
        type='cat'
        name='meyow'
        size='small'
        sound='low'
        appearence='cute'
        />
    )
  }
}

export default App