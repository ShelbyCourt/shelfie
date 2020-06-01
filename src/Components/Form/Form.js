import React, { Component } from 'react';
import Axios from 'axios';


class Form extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: 0,
      image: '' 
      
      // isEditing: false,
      // userInput: '',
    }
    this.baseState = this.state
    this.handleSaveImage = this.handleSaveImage.bind(this)
    this.handleSaveName = this.handleSaveName.bind(this)
    this.handleSavePrice = this.handleSavePrice.bind(this)
    this.addProduct = this.addProduct.bind(this)
  }

toggleEdit() {
  this.setState({
    isEditing: !this.state.isEditing,
  })
}

handleChange(e) {
  this.setState({
    userInput: e.target.value,
  })
}

handleSaveName (e){
  this.setState({
    name: e.target.value
  });
}

handleSavePrice (e){
  this.setState ({
    price: e.target.value
  });
}

handleSaveImage (e){
  this.setState({
    image: e.target.value
  });
}

addProduct () {
  const body = { id: 1, "name": this.state.name, "price": this.state.price, "img": this.state.img};
  Axios.post('/api/product', body).then ((res) => {
    this.props.updateInventoryList ()
    this.resetForm ()    
  });
}
// addProduct = () => {
//   const {data} = this.props
//   this.props.addProduct(data.id, data.name, data.price, data.img)
// }
submitForm = () => {
  this.setState(this.state.userInput)
}

resetForm = () => {
  this.setState(this.baseState)
}

 render () {
     return (
        <div className="Sideform">
          <h1>Form</h1>
          <p>Image URL: </p>
            <input value={this.state.image} onChange={this.handleSaveImage} />
          <p>Product Name: </p>
            <input value={this.state.name} onChange={this.handleSaveName}/>
          <p>Price: </p>
            <input value={this.state.price} onChange={this.handleSavePrice}/>

          <button onClick={this.resetForm} type="button">Cancel</button>
          <button onClick={this.addProduct} type="button">Add to Inventory</button>
         </div>
  )
 }
}


export default Form