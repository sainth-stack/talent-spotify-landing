import React from 'react';
// import "./styles.scss"

export default function Button({ text = "", className = "bg-white", handleClick,style2, style, ...rest }) {
  return (
    <button style={{ visibility: `${style}`,...style2 }} className={"border-green buttonStyle " + className} onClick={() => handleClick ? handleClick() : null} {...rest} type="submit">{text}</button>
  )
}
