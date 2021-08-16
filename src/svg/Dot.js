import React from 'react'

const Dot = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="circle"
      className="prefix__svg-inline--fa prefix__fa-circle prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      />
    </svg>
  )
}

export default Dot
