import React, { useState } from 'react';
import BillForm from './BillForm';
import BillList from './BillList';
import './App.css';
const App = () => {
  const [bills, setBills] = useState([]);
  const [editingBill, setEditingBill] = useState(null);

  const addOrUpdateBill = (bill) => {
    if (editingBill) {
      setBills(bills.map(b => b.id === editingBill.id ? bill : b));
      setEditingBill(null);
    } else {
      setBills([...bills, bill]);
    }
  };

  const markAsPaid = (id) => {
    setBills(bills.map(bill =>
      bill.id === id ? { ...bill, paid: true } : bill
    ));
    // Call a function to send a message to the customer here
    // sendMessageToCustomer(id);
  };

  const removeBill = (id) => {
    setBills(bills.filter(bill => bill.id !== id));
  };

  const startEditing = (bill) => {
    setEditingBill(bill);
  };

  return (
    <div>
      <h1>Internet Bill Manager</h1>
      <BillForm addOrUpdateBill={addOrUpdateBill} editingBill={editingBill} />
      <BillList bills={bills} markAsPaid={markAsPaid} removeBill={removeBill} startEditing={startEditing} />
    </div>
  );
};

export default App;

