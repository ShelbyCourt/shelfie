import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor (){
  super ()
  this.state = {
    inventoryList: [
      // {
      //   image: 'imageURL1',
      //   name: 'Koa Ukulele',
      //   price: 1600     
      // },
      // {
      //   image: 'imageURL2',
      //   name: 'Spruce & Acacia Uku',
      //   price: 595
      // },
      // {
      //   image: 'imageURL3',
      //   name: 'Ukulele Hardcase',
      //   price: 95
      // }
    ],
  }
  this.updateInventoryList = this.updateInventoryList.bind(this)
}

componentDidMount () {
  this.updateInventoryList();
  // Axios.get('/api/inventory').then((res) => {
  //   this.setState({
  //     inventoryList: res.data,
  //   })
  // })
}

updateInventoryList () {
  Axios.get('/api/inventory').then((res) => {
    this.setState({
      inventoryList: res.data,
    })
  })
}

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <main>
          <Dashboard 
          inventoryList={this.state.inventoryList}/>        
          </main>
          <section>             
          <Form 
          updateInventoryList={this.updateInventoryList}
          />
          </section>          
        </header>
      </div>
    );
  }
}

export default App;
