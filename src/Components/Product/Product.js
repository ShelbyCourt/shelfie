import React, { Component } from 'react';


class Product extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

 render () {

    return (
         <div className="EachProd">
             <h2>Product</h2>
              <p> {this.props.productObj.name} </p>
              <p> {this.props.productObj.price} </p>
              <p> {this.props.productObj.image} </p>
         </div>
    )
  }
}


export default Product