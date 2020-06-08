import React, { useState } from 'react';

import ColorPaletteContainer from './colorPaletteContainer'
import ColorWheel from './colorWheel'

const ColorPickerContainer = ( { setBgColor }) => {
  const [color, setColor] = useState('')

  const getColor = (color) => {
    setColor(color)
    setBgColor(color.hex)
    console.log(color)
  }
  return (
    <div className="color=picker-container">
      <ColorWheel getColor={getColor}/>
    </div>
  );
}

export default ColorPickerContainer;
