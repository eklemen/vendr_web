import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}

export default App;
