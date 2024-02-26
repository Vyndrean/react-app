import React from "react";

const InputForm = ({label}) => {
  return (
    <div id="input-form">
      <label>{label}</label>
      <input id="inp" type="text" required></input>
    </div>
  );
};

export default InputForm;
