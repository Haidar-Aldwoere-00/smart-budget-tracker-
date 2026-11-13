import { useRef, useEffect } from 'react';

const AddTransaction = ({ text, setText, amount, setAmount, addTransaction }) => {
  const textInputRef = useRef(null);
  const amountInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handleTextKeyDown = (e) => {
    if (e.key === 'Enter') {
      amountInputRef.current?.focus();
    }
  };

  const handleAmountKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTransaction();
      textInputRef.current?.focus();
    }
  };

  const handleAddClick = () => {
    addTransaction();
    textInputRef.current?.focus();
  };

  return (
    <div>
      <h3>إضافة عملية جديدة</h3>
      <input
        type="text"
        ref={textInputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleTextKeyDown}
        placeholder="أدخل الوصف (مثلاً: راتب، غداء)..."
      />
      <input
        type="number"
        ref={amountInputRef}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyDown={handleAmountKeyDown}
        placeholder="المبلغ (موجب للدخل، سالب للمصروف)..."
      />
      <button onClick={handleAddClick}>إضافة العملية</button>
    </div>
  );
};

export default AddTransaction;
