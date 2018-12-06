import React, { Component } from 'react';
import InputMenu from '../InputMenu/index';
import ItemList from '../ItemList/index';
import firebase from '../fireBase';


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem: {
        text: '',
        tag: '4',
        id: '',
      }
    }
  }

  componentDidMount() {

    let todoRef = firebase.database().ref('items').orderByKey();
    todoRef.on('child_added', snapshot => {
      let item = snapshot.val()
      item.id = snapshot.key
      console.log(item.id)
      this.setState({
        items: [item].concat(this.state.items)
      })
    })
  }

  // componentDidMount() {
  //
  //   // fetch data from local storage
  //   if (localStorage.hasOwnProperty("items")) {
  //     const itemsInJson = localStorage.getItem("items")
  //     const items = JSON.parse(itemsInJson)
  //     this.setState({
  //       "items": items
  //     })
  //   }
  //
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveToLocalStorage.bind(this)
  //   );
  // }
  //
  // saveToLocalStorage() {
  //   localStorage.setItem("items", JSON.stringify(this.state.items));
  // }


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

    /* Send data to Firebase */
    firebase.database().ref('items').push( this.state.currentItem );

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

  handleDeleteItem = (id) => {
    let items = this.state.items.filter(item => item.id !== id)
    console.log(id)
    console.log('rannnnnnnn')
    const itemRef= firebase.database().ref(`/items/${id}`)
    itemRef.remove()
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
