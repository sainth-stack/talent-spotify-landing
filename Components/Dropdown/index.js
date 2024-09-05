import React from 'react'

export default function Dropdown({ title, options = [] }) {
  return (
    <div className='d-flex'>
      <div className='d-flex align-items-center'>
        <label className='label'>{title}</label>
      </div>
      <div className="dropdown actionDropdown drop">
        <button className="dropdown-toggle m-2 border-0 bg-transparent dropdown-button border-0 fs-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {options[0].key}
        </button>
        <div className="dropdown-menu text-left drop-menu" aria-labelledby="dropdownMenuButton">
          {options.length > 0 && options.map((option, index) => (
            <button className="dropdown-item text-capitalize text-left justify-content-start" key={index}>{option.key}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
