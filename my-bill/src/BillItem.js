import React from 'react';

const BillItem = ({ bill, markAsPaid, removeBill, startEditing }) => {
  return (
    <li>
      <span>{bill.description} - PKR {bill.amount}</span>
      <div>
        {!bill.paid && <button onClick={() => markAsPaid(bill.id)}>Mark as Paid</button>}
        {!bill.paid && <button onClick={() => startEditing(bill)}>Edit</button>}
        <button onClick={() => removeBill(bill.id)}>Remove</button>
        {bill.paid && <span> (Paid)</span>}
      </div>
    </li>
  );
};

export default BillItem;
