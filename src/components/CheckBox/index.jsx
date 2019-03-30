import React from 'react';
import './checkBox.css';

const Checkbox = ( props ) => (
  <div className="checkbox">
    <label className="container">{props.value}
      <input type="checkbox" {...props}/>
      <span className="checkmark"></span>
    </label>
  </div>
  );

export default Checkbox;