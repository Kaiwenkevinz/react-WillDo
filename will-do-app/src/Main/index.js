import React, { Component } from 'react';
import InputMenu from '../InputMenu/index';
import ItemList from '../ItemList/index'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        tag: '4',
        key: '',
      }
    }
  }

  // inputField onChange listener
  handleOnChange = (e) => {
    let currentItem = this.state.currentItem
    currentItem.text = e.target.value
    currentItem.key = Date.now()

    this.setState({ currentItem })
  }

  // SelectMenu listener
  onChangeSelect = (e) => {
    const tag = e.target.value
    let newItem = this.state.currentItem
    newItem.tag = tag

    this.setState({ newItem })
  }

  // AddTask button listener
  handleAddItem = (e) => {
    e.preventDefault()
    if (this.state.currentItem.text === '') {
      return
    }
    // update items
    const items = this.state.items
    items.push(this.state.currentItem)

    this.setState({ items })

    // empty current item
    let currentItem = this.state.currentItem
    const tag = currentItem.tag
    currentItem = {
      text: '',
      tag: tag
    }

    this.setState({ currentItem })
  }

  handleDeleteItem = (key) => {
    let items = this.state.items.filter(item => item.key !== key)
    this.setState({ items })
  }

  render() {
    const redItems = this.state.items.filter(item => item.tag === '4')
    const greenItems = this.state.items.filter(item => item.tag === '3')
    const purpleItems = this.state.items.filter(item => item.tag === '2')
    const blueItems = this.state.items.filter(item => item.tag === '1')


    return(
      <div className="App">

        <div id="sectionRed">
          <ItemList
            entries={redItems}
            handleDeleteItem={this.handleDeleteItem}
           />
        </div>

        <div id="sectionGreen">
          <ItemList
            entries={greenItems}
            handleDeleteItem={this.handleDeleteItem}
           />
        </div>

        <div id="sectionPurple">
          <ItemList
            entries={purpleItems}
            handleDeleteItem={this.handleDeleteItem}
           />
        </div>

        <div id="sectionBlue">
          <ItemList
            entries={blueItems}
            handleDeleteItem={this.handleDeleteItem}
           />
        </div>

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
