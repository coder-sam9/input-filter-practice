import React from "react";

function Input(props) {
  function handleOnChange(event) {
    props.onChange(event.target.value);
  }
  return (
    <div>
      <label htmlFor={props.id}>{props.title}:</label>
      <input required={props.required} id={props.id}
      value={props.value}
      type={props.type} 
      onChange={handleOnChange} />
    </div>
  );
}

export default Input;
