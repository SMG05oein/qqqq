// TossPaymentPage.jsx
import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../State/LoginState';

const TossPaymentPage = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!window.TossPayments) {
      alert("TossPayments SDK가 로드되지 않았습니다.");
      return;
    }

    const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);

    tossPayments.requestPayment('카드', {
      amount: 5000,
      orderId: `order_${Date.now()}`,
      orderName: '포인트 충전',
      customerName: login?.id || '비로그인',
      successUrl: `${window.location.origin}/payment-success`,  // 백업용
      failUrl: `${window.location.origin}/payment-fail`,
      onSuccess: (res) => {
        const { paymentKey, orderId, amount } = res;
        const userId = login?.id;

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/confirm-payment`, {
          paymentKey,
          orderId,
          amount,
          userId,
        })
        .then(() => {
          alert("✅ 포인트 충전 성공!");
          navigate('/'); // 혹은 다른 완료 페이지
        })
        .catch(err => {
          console.error("❌ 백엔드 전송 실패", err);
          alert("⚠️ 서버에 결제 정보 전달 실패!");
        });
      }
    });
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>포인트 충전</h2>
      <button onClick={handlePayment} style={{ padding: '10px 30px', fontSize: '18px' }}>
        5,000원 충전하기
      </button>
    </div>
  );
};

export default TossPaymentPage;
