import React from "react";

const OneLabel = (props) => {
  return (
    <div className="text-type-label">
      <label>{props.name}</label>
      <input type={props.intype} />
    </div>
  );
};

const Form = () => {
  const textlabel = { one: "name", type: "text" };
  return (
    <form className="form">
      <OneLabel name={textlabel.one} intype={textlabel.type} />
    </form>
  );
};

export default Form;
