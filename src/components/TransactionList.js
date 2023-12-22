import React from 'react'

export const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
      <ul className="list">
         <li className="minus">
            {/* //later this will be replaced with component*/}
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}

