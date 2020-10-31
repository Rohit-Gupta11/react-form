import React from "react";

const OneLabel = (props) => {
  return (
    <div className="type-label">
      <label>{props.name}</label>
      <input type={props.intype} />
    </div>
  );
};

const Form = () => {
  const textlabel = [
    { one: "Name", type: "text" },
    { one: "Email", type: "email" },
    { one: "Date", type: "date" },
    { one: "Password", type: "password" }
  ];
  return (
    <form className="form">
      {textlabel.map((l) => (
        <OneLabel name={l.one} intype={l.type} />
      ))}
      <button className="submit-btn" type="submit">
        Let's begin!
      </button>
    </form>
  );
};

export default Form;
