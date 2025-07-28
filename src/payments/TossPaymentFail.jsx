// src/payments/PaymentFail.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFail = () => {
  const nav = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>❌ 결제에 실패했습니다.</h2>
      <button className="btn btn-secondary" onClick={() => nav(-1)}>
        다시 시도하기
      </button>
    </div>
  );
};

export default PaymentFail;
