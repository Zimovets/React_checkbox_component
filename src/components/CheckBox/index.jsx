import React from 'react';
import './checkBox.css';

const Checkbox = ({ label, isChecked, handleCheckboxChange }) => (
  <div className="checkbox">
    <label className="container">{label}
      <input type="checkbox" value={label} checked={isChecked} onChange={handleCheckboxChange} />
      <span className="checkmark"></span>
    </label>
  </div>
  );

export default Checkbox;