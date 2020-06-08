import React, { useState, useEffect } from 'react';
import ReactColorWheel from 'react-touch-color-wheel';
import UIfx from 'uifx'

// sound
import sound from '../assets/tick.mp3';

const ColorWheel = ( { getColor } ) => {
  const [tick, setTick]= useState({play: ()=>console.log("can't play yet")})
  const [color, setColor] = useState('')

  useEffect(()=> {
    getColor(color)
  },[color])

  useEffect(()=> {
    setTick(new UIfx(sound, {volume: 0.4, throttleMs: 80}))
  },[])

  const handleChange = (c) => {
    setColor(c);
    tick.play();
  }
  return (
    <div className="color-wheel">
      <ReactColorWheel
        radius={100}
        // this will be called once the user has indicated they want a color
        onPreview={ (color) => handleChange(color)}
      />
    </div>
  );
}


export default ColorWheel;

// this will be called whenever a color is being previewed
// onPreview={ ({hsl: 'hsl(...)'}) => {} }
