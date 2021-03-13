import React, {useContext} from 'react';
import { GlobalContext } from '../Component/expensescontent';



export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span>{transaction.text} </span>
      <span>{(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}