import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'TODO',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <Form />
      </div>
    );
  }
}

export default App;
