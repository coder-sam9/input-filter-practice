import React from 'react'

function Button(props) {
  return (
    <div>
        <button  type={props.type} onSubmit={props.onSubmit}onClick={props.onClick}>{props.title}</button>
    </div>
  )
}

export default Button