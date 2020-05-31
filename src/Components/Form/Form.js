import React, { Component } from 'react';


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

submitForm = () => {
  this.setState(this.state.userInput)
}

resetForm = () => {
  this.setState(this.baseState)
}

 render () {
     return (
        <div>
          <h1>Form</h1>
          <p>Image URL: </p>
            <input value={this.state.image} onChange={this.handleSaveImage} />
          <p>Product Name: </p>
            <input value={this.state.name} onChange={this.handleSaveName}/>
          <p>Price: </p>
            <input value={this.state.price} onChange={this.handleSavePrice}/>

          <button onClick={this.resetForm} type="button">Cancel</button>
          <button onClick={this.submitForm} type="button">Add to Inventory</button>
         </div>
  )
 }
}


export default Form