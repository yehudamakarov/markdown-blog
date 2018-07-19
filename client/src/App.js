import React, { Component } from 'react';
import TestLoginButton from './components/TestLoginButton';
import TestSessionButton from './components/TestSessionButton';
// <TestLoginButton aProp={{objKey: 'objValue'}} {...{propName: 'PropValue'}} />
// <TestSessionButton/>

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
      </div>
    );
  }
}

export default App;
