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
    return <ul className="todoList">{this.props.entries.map(this.createRow)}</ul>
  }
}

export default ItemList
