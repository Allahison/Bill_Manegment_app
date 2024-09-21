import React from 'react';
import BillItem from './BillItem';

const BillList = ({ bills, markAsPaid, removeBill, startEditing }) => {
  return (
    <div>
      <h2>Bill List</h2>
      <ul>
        {bills.map(bill => (
          <BillItem
            key={bill.id}
            bill={bill}
            markAsPaid={markAsPaid}
            removeBill={removeBill}
            startEditing={startEditing}
          />
        ))}
      </ul>
    </div>
  );
};

export default BillList;
