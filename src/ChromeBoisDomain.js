import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
     drawChromeBoiAtCoords(event.clientX, event.clientY);
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
@@ -23,11 +24,21 @@ export default class ChromeBoisDomain extends Component {
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

    handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
