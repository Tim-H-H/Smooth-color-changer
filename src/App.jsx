import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div
    style={{
      margin: '0px 0px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.5s ease',
      backgroundColor: color,
    }}
    >
    <button
    onClick={changeColor}
    style={{
      padding: '15px 30px',
      fontSize: '18px',
      cursor: 'pointer',
      borderRadius: '8px',
      backgroundColor: '#ffffffff',
    }}
    >
      Change Color
    </button>
    </div>
  );
}

export default ColorChanger;