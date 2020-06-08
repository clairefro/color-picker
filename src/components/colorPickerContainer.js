import React, { useState, useEffect } from 'react';

import ColorPaletteContainer from './colorPaletteContainer';
import ColorWheel from './colorWheel';
import Palette from './palette';

import { parseHSL } from '../util/parseHSL'

const ColorPickerContainer = ( { setBgColor }) => {
  const [color, setColor] = useState('')
  // const [baseHue, setBaseHue] = useState(0)
  // const [baseSat, setBaseSat] = useState(0)
  // const [baseLight, setBaseLight] = useState(0)
  const [baseHsl, setBaseHsl] = useState(null)

  const getColor = (color) => {
    setColor(color)
    setBgColor(color.hex)
  }

  const parseColor = (color) => {
    if (color !== '') {
      // parse hsl
      const hsl = parseHSL(color.hsl);
      // setBaseHue(hsl[1]);
      // setBaseSat(hsl[2]);
      // setBaseLight(hsl[3]);
      setBaseHsl({ h: hsl[1], s: hsl[2]/100.0, l:hsl[3]/100.0})
    }
  }

  useEffect(()=> {
    parseColor(color)
  }, [color])


  return (
    <>
      <div className="color-picker-container">
        <h2>Pick base color</h2>
        <ColorWheel getColor={getColor}/>
        <div className="color-info">
          <p style={{height: '1rem'}}>{color.hex}</p>
          <div className="base-color-hsl">
            <p>Hue {baseHsl && baseHsl.h}</p>
            <p>Sat {baseHsl && baseHsl.s}</p>
            <p>Light {baseHsl && baseHsl.l}</p>
          </div>
        </div>

      </div>
      <div className="palette-container">
        <Palette baseHsl={baseHsl} scheme="triade"/>
        <Palette baseHsl={baseHsl} scheme="mono"/>
        <Palette baseHsl={baseHsl} scheme="tetrade"/>
        <Palette baseHsl={baseHsl} scheme="analogic"/>
      </div>
    </>
  );
}

export default ColorPickerContainer;
