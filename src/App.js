import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor (){
  super ()
  this.state = {
    inventoryList: [
      {
        image: 'imageURL1',
        name: 'Koa Ukulele',
        price: 1600     
      },
      {
        image: 'imageURL2',
        name: 'Spruce & Acacia Uku',
        price: 595
      },
      {
        image: 'imageURL3',
        name: 'Ukulele Hardcase',
        price: 95
      }
    ],
  }
}

  render () {

    return (
      <div className="App">
        <header className="App-header">
          <Dashboard 
          inventoryList={this.state.inventoryList}/>        
          <div>       
          <Form />
          </div>
          <Header />
      </header>
      </div>
    );
  }
}

export default App;
