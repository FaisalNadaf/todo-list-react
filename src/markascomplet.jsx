import React, { useState } from 'react';

const CheckboxButton = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };
  let stylecmp = {
    style: {
      position:'relative',
    left:'-1.5px',
      bottom:'25px',
      color:'green',
    }
  };
  
  return (
    <div
      style={{
        display: 'flex',
        width: '20px',
        height: '20px',
        // border: '1px solid #000',
        borderRadius: '3px',
        // backgroundColor: isChecked ? 'green' : '#fff', // Change color when checked
        cursor: 'pointer',
      }}
      onClick={toggleCheckbox}
    >
      {isChecked && <p style={stylecmp.style}><i className="fa-solid fa-circle-check"></i></p>}
    </div>
  );
};

export default CheckboxButton;
