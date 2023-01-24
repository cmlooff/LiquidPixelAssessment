import { useState } from 'react';

import Header from './Component/Header';

const App = () => {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(160);

  const handleRedClick = () => {
    setColor('red');
  };
  const handleGreenClick = () => {
    setColor('green');
  };
  const handleBlueClick = () => {
    setColor('blue');
  };

  const handleSmallClick = () => {
    setSize(80);
  };
  const handleMediumClick = () => {
    setSize(160);
  };
  const handleLargeClick = () => {
    setSize(240);
  };

  return (
    <div className='flex-container'>
      <Header />
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
        <br />
        <button className='btn btn-small' onClick={handleSmallClick}>
          Small
        </button>
        <button className='btn btn-medium' onClick={handleMediumClick}>
          Medium
        </button>
        <button className='btn btn-large' onClick={handleLargeClick}>
          Large
        </button>
        <br />
        <div className='circle' style={{ color: color, height: size, width: size, bordercolor: color }}> {size} {color}</div>
      </div>
    </div >
  );
};

export default App;
