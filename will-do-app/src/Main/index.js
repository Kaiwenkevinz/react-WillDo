import React, { Component } from 'react';
import InputMenu from '../InputMenu/index';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        tag: '',
        key: '',
      }
    }
  }

  // input field onChange listener
  handleOnChange = (e) => {
    const currentItem = {
      text: e.target.value,
      tag: 'z',
      key: Date.now()
    }
    this.setState({
      currentItem
    })
  }

  // Catagory Dropup Menu listener
  onChangeSelect = (e) => {
    console.log(e.target.value)
  }

  // Add Task button listener
  handleAddItem = (e) => {
    e.preventDefault()

    // update items
    const items = this.state.items
    items.push(this.state.currentItem)
    this.setState({
      items
    })

    // empty current item
    let currentItem = this.state.currentItem
    currentItem = {
      text: '',
    }
    this.setState({
      currentItem
    })

    console.log(this.state.items)
  }

  render() {
    return(
      <div className="App">

        <div id="sectionRed"></div>
        <div id="sectionGreen"></div>
        <div id="sectionPurple"></div>
        <div id="sectionBlue"></div>

          <InputMenu
            handleOnChange={this.handleOnChange}
            handleAddItem={this.handleAddItem}
            currentItem={this.state.currentItem}
            onChangeSelect={this.onChangeSelect}
          />

      </div>
    )
  }

}

export default Main;
