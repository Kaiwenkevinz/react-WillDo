import React, { Component } from 'react';
import './index.css';

class InputMenu extends Component {

  render() {
    return(
      <div className="inputMenu">
        <form onSubmit={this.props.handleAddItem}>
          <input
            id="input"
            placeholder="Tasks"
            value={this.props.currentItem.text}
            onChange={this.props.handleOnChange}
          />

          <div className="select-style">
            <select onChange={this.props.onChangeSelect}>
              <option value="4">****</option>
              <option value="3">***</option>
              <option value="2">**</option>
              <option value="1">*</option>
            </select>
          </div>

          <button id="submitButton" type="submit">Add Task</button>
        </form>
      </div>
    )
  }

}

export default InputMenu;
