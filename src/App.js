// Setting Global State using useState
import { useState } from 'react';
import HeaderNav from './Component/HeaderNav';

const App = () => {
  // This is our single source of truth, without using Redux -> We prop drill
  const [color, setColor] = useState('red');

  const handleRedClick = () => {
    setColor('red');
  };
  const handleGreenClick = () => {
    setColor('green');
  };
  const handleBlueClick = () => {
    setColor('blue');
  };

  return (
    <div className='flex-container'>
      <HeaderNav />
      <div className='container'>
        <button className='btn btn-red' onClick={handleRedClick}>
          Red
        </button>
        <button className='btn btn-green' onClick={handleGreenClick}>
          Green
        </button>
        <button className='btn btn-blue' onClick={handleBlueClick}>
          Blue
        </button>

        <div className='circle' style={{ color: color }}>
          {color}
        </div>
      </div>
    </div>
  );
};

export default App;
