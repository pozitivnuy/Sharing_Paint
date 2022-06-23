import React from 'react';
import toolState from '../store/toolState';
import '../styles/toolbar.scss'

const Settingbar = () => {
  return (
    <div className='settingbar'>
      <label htmlFor="line-width">Line width</label>
      <input 
      onChange={e => toolState.setLineWidth(e.target.value)}
      style={{margin: '0 10px'}} 
      id='line-width' 
      type="number" 
      defaultValue={1} min={1} max={50} />
      <label htmlFor="stroke-color"> Stroke color</label>
      <input
       id='stroke-color'
        type="color"
        onChange={e => toolState.setStrokeColor(e.target.value)}
        />
    </div>
  );
};

export default Settingbar;