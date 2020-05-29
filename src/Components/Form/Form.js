import React, { Component } from 'react';


class Form extends Component {
  constructor () {
    super()
    this.state = {
      isEditing: false,
      userInput: '',
    }
    this.baseState = this.state
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
            <input onChange={(e) => this.handleChange(e)}></input> 
          <p>Product Name: </p>
            <input onChange={(e) => this.handleChange(e)}></input>
          <p>Price: </p>
            <input onChange={(e) => this.handleChange(e)}></input>

          <button onClick={this.resetForm} type="button">Cancel</button>
          <button onClick={this.submitForm} type="button">Add to Inventory</button>
         </div>
  )
 }
}


export default Form