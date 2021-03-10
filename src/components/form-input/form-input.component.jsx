import React from 'react';

export default function FormInput({
  handleChange,
  label,
  value = '',
  ...othersProps
}) {
  return (
    <div className='group'>
      <input
        onChange={handleChange}
        value={value}
        className='form-input'
        {...othersProps}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
