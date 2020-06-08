import React, { useState, useEffect } from 'react';
import ReactColorWheel from 'react-touch-color-wheel';

const ColorWheel = ( { getColor } ) => {
  const [color, setColor] = useState('')

  useEffect(()=> {
    getColor(color)
  },[color])

  return (
    <div className="color-wheel">
      <ReactColorWheel
        radius={100}
        // this will be called once the user has indicated they want a color
        onPreview={ (color) => setColor(color)}
      />
    </div>
  );
}


export default ColorWheel;

// this will be called whenever a color is being previewed
// onPreview={ ({hsl: 'hsl(...)'}) => {} }
