import React, { Component } from 'react';
import Counter from './Counter'

class App extends Component {
  state = {
    name:'parent'
  }
  changeName = () => {
    this.setState({name:"parent changed"})
  }
  render() {
    console.log('parent')
    const {name} = this.state
    return (
      <>
        <h1>{name}</h1>
        <button type="button" onClick={this.changeName}>change name</button>
        <Counter/>
      </>
    );
  }
}

export default App