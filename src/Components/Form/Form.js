import React, { Component } from 'react';


class Form extends Component {
  constructor () {
    super()
    this.state = {
      isEditing: false,
      userInput: '',
    }
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

handleSaveName (){
  const { data } = this.props
  this.props.saveName(data.id, this.state.userInput)
  this.toggleEdit()
}

handleSavePrice (){
  const { data } = this.props
  this.props.savePrice(data.price, this.state.userInput)
  this.toggleEdit()
}

handleSaveImage (){
  const { data } = this.props
  this.props.saveImage(data.image, this.state.userInput)
  this.toggleEdit()
}


 render () {
     return (
        <div>
          <h1>Form</h1>
          <p>Image URL: </p>
            <input onChange={(e) => this.handleChange(e)}></input> 
          <p>Product Name: </p>
            <input></input>
          <p>Price: </p>
            <input></input>

          <button>Cancel</button>
          <button>Add to Inventory</button>
         </div>
  )
 }
}


export default Form