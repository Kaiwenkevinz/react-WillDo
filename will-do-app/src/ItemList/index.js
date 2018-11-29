import React, { Component } from 'react';
import './index.css';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.createRow= this.createRow.bind(this);
  }

  createRow(item) {
    return (
      <li
      key={item.key}
      onClick={() => this.props.handleDeleteItem(item.key)}
      >
        {item.text}
      </li>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createRow)

    return <ul className="todoList">{listItems}</ul>
  }
}

export default ItemList
