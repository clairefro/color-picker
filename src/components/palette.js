import React, { useState, useEffect } from 'react';
import ColorScheme from 'color-scheme';
import Clipboard from 'react-clipboard.js';

import Swatch from './swatch'

import chromify from '../util/chromify'

const Palette = ({ baseHsl, scheme }) => {
  const [schemeColors, setSchemeColors] = useState(null)

  useEffect(()=> {
    if (baseHsl) {
      const cScheme = new ColorScheme;
      cScheme.from_hue(baseHsl.h)
            .scheme(scheme);
      const modifiedColors = chromify(cScheme.colors(), baseHsl.s, baseHsl.l);
      setSchemeColors(modifiedColors);
    }
  },[baseHsl])

  return schemeColors ? (
    <div className="palette-info">
      <p>{scheme}</p>
      <div className="palette">
        {schemeColors.map((hex, i) => (
          <Swatch key={i} hex={hex}/>
        ))}
      </div>
      <Clipboard data-clipboard-text={schemeColors.join(', ')}>
      Copy all
      </Clipboard>
    </div>

  )
  : null

}
export default Palette;
