import React from 'react';

const FormControl = ({ type, placeholder, value, onChange, idElement }) => {
  return (
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" id={idElement} type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete={value} required />
  );
};

export default FormControl;