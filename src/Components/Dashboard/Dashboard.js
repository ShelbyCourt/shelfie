import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor (props) {
    super()
    this.state = {
    }
  }
  


 render (props) {
   const inventoryMap = this.props.inventoryList.map((product) => (<Product 
    // key={product.id}
    // saveImage={this.props.inventoryList.saveImage}
    // saveName={this.props.inventoryList.name}
    // savePrice={props.inventoryList.savePrice} 
    productObj={product}      
    />
  ))

     return (
         <div>
             <h1>Dashboard</h1>
              {inventoryMap}                      
         </div>
    )
  }
}


export default Dashboard