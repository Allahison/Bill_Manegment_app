import React, { useState, useEffect } from 'react';

const BillForm = ({ addOrUpdateBill, editingBill }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (editingBill) {
      setDescription(editingBill.description);
      setAmount(editingBill.amount);
    }
  }, [editingBill]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBill = {
      id: editingBill ? editingBill.id : Date.now(),
      description,
      amount,
      paid: editingBill ? editingBill.paid : false
    };
    addOrUpdateBill(newBill);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount (PKR):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">{editingBill ? 'Update Bill' : 'Add Bill'}</button>
    </form>
  );
};

export default BillForm;
