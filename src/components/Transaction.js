import React from "react";

export const Transaction = ({ transProp }) => {
  const sign=transProp.amount >0 ?'+':'-'
  
  return (
    <li className={sign=='-'?"minus":"plus"}>
      {transProp.text} <span>{sign}${Math.abs(transProp.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
