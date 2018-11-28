import React, { Component } from 'react';
import './index.css';

class InputMenu extends Component {

  render() {
    return(
      <div className="inputMenu">
        <form onSubmit={this.props.handleAddItem}>
          <input
            placeholder="Tasks"
            value={this.props.currentItem.text}
            onChange={this.props.handleOnChange}
          />

          {/* <div className="dropup">
            <button className="dropbtn">Catagory</button>
            <div className="dropup-content">
              <a id="red">Urgent and important</a>
              <a href="#">Important but not urgent</a>
              <a href="#">Urgent but not important</a>
              <a href="#">Other</a>
            </div>
          </div> */}

          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }

}

export default InputMenu;
