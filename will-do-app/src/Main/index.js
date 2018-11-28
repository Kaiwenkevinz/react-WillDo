import React, { Component } from 'react';
import InputMenu from '../InputMenu/index';

class Main extends Component {

  render() {
    return(
      <div className="App">

        <div id="sectionRed"></div>
        <div id="sectionGreen"></div>
        <div id="sectionPurple"></div>
        <div id="sectionBlue"></div>

          <InputMenu />

      </div>
    )
  }

}

export default Main;
