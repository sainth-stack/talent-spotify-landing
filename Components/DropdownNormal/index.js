import Link from 'next/link'
import React from 'react'

export default function DropdownNormal({ title, options = [], bgColor, handleClick, selectedType }) {
  return (
    <div className='d-flex'>
      <div className="dropdown actionDropdown drop ml-3 mr-3 border-0">
        <button className={`dropdown-toggle border-0 bg-transparent fs-14  ${selectedType === title.toLowerCase() && !bgColor ? 'text-green' : (selectedType === title.toLowerCase() && bgColor ? 'text-white font-weight-bold' : (bgColor ? 'text-white' : 'text-dark'))}`} type="button" id="dropdownMenuButton" onClick={handleClick}>
          {title}
        </button>
        <div className="dropdown-menu text-left drop-menu" aria-labelledby="dropdownMenuButton">
          {options.length > 0 && options.map((option, index) => (
            <Link href={option.value} key={index}><button className="dropdown-item text-capitalize text-left justify-content-start">{option.key}</button></Link>
          ))}
        </div>
      </div>
    </div>
  )
}
