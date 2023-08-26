import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>  
    </div>
  );
});
//The {...props.input} added directly on input tag is a way to add any configurations that may be sent to props from other components.
//If props is sending {type: 'text', id: 1} object then it will work same as <input id=1 type='text'> here
export default Input;