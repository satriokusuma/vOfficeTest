import React from 'react';

const FormLabel = ({ label }) => {
  return (
    <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor={label}>
      {label}
    </label>
  );
};

export default FormLabel;