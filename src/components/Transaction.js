import React,{useContext} from "react";
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transProp }) => {
  const sign=transProp.amount >0 ?'+':'-'
  const {deleteTransaction}=useContext(GlobalContext)
  
  return (
    <li className={sign=='-'?"minus":"plus"}>
      {transProp.text} <span>{sign}BDT {Math.abs(transProp.amount)}</span>
      <button className="delete-btn" onClick={()=>deleteTransaction(transProp.id)}>x</button>
    </li>
  );
};
