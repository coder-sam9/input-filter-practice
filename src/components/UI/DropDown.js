import React from 'react'

function DropDown(props) {
  return (
    <div>
        <label htmlFor={props.for}> {props.title}:  </label>
        <select required={props.required} value={props.value} id={props.for} onChange={(event)=>props.onChange(event.target.value)}>
          {props.options.map((item,index)=>{
                return (

                    <option key={index.toString()} value={item}>{item}</option>
                )
            }
          )  
          }
        </select>
       </div>
  )
}

export default DropDown