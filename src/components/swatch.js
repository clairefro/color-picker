import React from 'react';

const Swatch = ({ hex }) => {
  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: hex,
  }

  return (
    <div className="swatch" style={style}></div>
  )
}

export default Swatch;
