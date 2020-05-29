import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor (){
  super ()
  this.state = {
    inventoryList: [('Product1', 65, 'image'), ('Capo', 9, 'image2'), ('Case', 75, 'image3')],
  }
}

  render () {

    return (
      <div className="App">
        <header className="App-header">
          <Dashboard           
          />
          console.log(inventoryList)
          <Form />
          <Header />
      </header>
      </div>
    );
  }
}

export default App;
