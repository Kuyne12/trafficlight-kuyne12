import React, { useState } from 'react';

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState('red');

  const changeColor = (color) => {
    setLightColor(color);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        onClick={() => changeColor('red')}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: lightColor === 'red' ? 'red' : 'gray',
          margin: '20px auto',
        }}
      />
      <div
        onClick={() => changeColor('yellow')}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: lightColor === 'yellow' ? 'yellow' : 'gray',
          margin: '20px auto',
        }}
      />
      <div
        onClick={() => changeColor('green')}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: lightColor === 'green' ? 'green' : 'gray',
          margin: '20px auto',
        }}
      />
     
    </div>
  );
};

export default TrafficLight;
