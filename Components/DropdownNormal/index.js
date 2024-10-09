import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Dropdown component
export default function DropdownNormal({ title, options = [], isOpen, handleToggle }) {
  return (
    <div className='d-flex align-items-center position-relative'>
      <div className="dropdown actionDropdown drop ml-3 mr-3 border-0">
        <button
          className="dropdown-toggle border-0 bg-transparent fs-14"
          type="button"
          id="dropdownMenuButton"
          onClick={handleToggle}
        >
          {title}
        </button>

        {/* Render dropdown if open */}
        <div className={`dropdown-menu text-left drop-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
          {options.length > 0 && options.map((option, index) => (
            <Link href={option.value} key={index}>
              <a className="dropdown-item text-capitalize text-left justify-content-start d-flex align-items-center" style={{marginTop:'6px'}}>
                {/* Conditionally render icon if it exists */}
                {option.icon && (
                  <span className="dropdown-icon mr-2">
                    <Image src={option.icon} alt={`${option.key} icon`} width="20" height="20" />
                  </span>
                )}
                {option.key}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
