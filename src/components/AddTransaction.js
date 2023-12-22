import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const[text,setText]=useState('')
    const[amount,setAmount]=useState(0)
    const{transactions,addTrasaction}=useContext(GlobalContext) 
    const submit= (e) =>{
      e.preventDefault()

      const newTransaction={
        id:transactions.length+1,
        text,
        amount:+amount, //this number convertion is important,other will be passed as string
      }
      addTrasaction(newTransaction)
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Transaction's Name</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter the name of the transaction..." />
        </div>
        <div className="form-control">
          <label htmlFor ="amount"
            >Transaction's Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}  

