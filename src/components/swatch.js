import React from 'react';
import Clipboard from 'react-clipboard.js';

const Swatch = ({ hex }) => {
  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: hex,
  }

  return (
    <div className="swatch" style={style} >
      <p>{hex}</p>
      <Clipboard component="a" data-clipboard-text={hex}>
        Copy
      </Clipboard>
    </div>
  )
}

export default Swatch;
