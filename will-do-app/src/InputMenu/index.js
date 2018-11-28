import React, { Component } from 'react';
import './index.css';

class InputMenu extends Component {

  render() {
    return(
      <div className="inputMenu">
        <form onSubmit="">
          <input
            placeholder="Tasks"
          />

          <div class="dropup">
            <button class="dropbtn">Catagory</button>
            <div class="dropup-content">
              <a href="#">Urgent and important</a>
              <a href="#">Important but not urgent</a>
              <a href="#">Urgent but not important</a>
              <a href="#">Other</a>
            </div>
          </div>

          <button>OK</button>
        </form>
      </div>
    )
  }

}

export default InputMenu;
