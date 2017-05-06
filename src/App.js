import React, { Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to FrolloDen</h2>
        </div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
