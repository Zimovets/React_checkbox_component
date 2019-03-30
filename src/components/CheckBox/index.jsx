import React from 'react';
import PropTypes from 'prop-types';
import './checkBox.css';

const Checkbox = ( props ) => (
  <div className="checkbox">
    <label className="container">{props.value}
      <input type="checkbox" {...props}/>
      <span className="checkmark"></span>
    </label>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
};

export default Checkbox;