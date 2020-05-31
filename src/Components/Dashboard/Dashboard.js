import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

 render () {
     return (
         <div>
             <h1>Dashboard</h1>
              <Product />
              <p>{this.props.inventoryList.name}</p>
         </div>
    )
  }
}


export default Dashboard