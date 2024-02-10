import React from 'react';

const Input = ({ type,name,placeholder,value }) => {
  const inputStyle = {
    width: '80%',
    height: '5%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    // fontSize: '16px',
  };

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      style={inputStyle} // Appliquer le style ici
    />
  );
}

export default Input;