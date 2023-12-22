import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  
  let currentBalance=0
  transactions.map((indTrans)=>{
    currentBalance+=indTrans.amount;
  })
  
  return (
    <>
      <h4>Your balance</h4>
      <h1>{currentBalance>0?'':'-'}BDT {Math.abs(currentBalance)}</h1>
    </>
  )
}

