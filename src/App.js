import React, { useState, useEffect } from 'react';

import ColorPickerContainer from './components/colorPickerContainer';

function App() {
  const [bgColor, setColor] = useState('#FFF');

  const setBgColor = (color) => {
    setColor(color)
  }

  useEffect(()=> {
    document.querySelector('body').style.backgroundColor = bgColor;
  },[bgColor])

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <ColorPickerContainer setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
