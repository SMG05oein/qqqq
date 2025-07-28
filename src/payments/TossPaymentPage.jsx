// src/payments/TossPaymentPage.jsx
import React, { useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../State/LoginState';

const TossPaymentPage = () => {
  const { login } = useContext(LoginContext);

  const handlePayment = async () => {
    try {
      // 1) 서버에서 주문 정보(orderId 등) 준비
      const prepareUrl =
        '/.netlify/functions/proxyPost?pullAddress=/api/users/me/payments/toss/prepare';

      const { data: prep } = await axios.post(
        prepareUrl,
        JSON.stringify({ amount: 5000 }),
        {
          headers: {
            Authorization: `Bearer ${login?.token || localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { orderId, orderName, amount, customerName } = prep;

      // 2) 토스페이먼츠 위젯 호출
      const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);

      tossPayments.requestPayment('카드', {
        amount,
        orderId,
        orderName,
        customerName,
        // 성공·실패 리다이렉트
        successUrl: `${window.location.origin}/charge?orderId=${orderId}&amount=${amount}`,
        failUrl: `${window.location.origin}/payment-fail`,
      });
    } catch (err) {
      console.error('❌ 결제 준비 실패', err);
      alert('⚠️ 결제 준비 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <button className="btn btn-primary" onClick={handlePayment}>
        💳 5,000원 충전하기
      </button>
    </div>
  );
};

export default TossPaymentPage;
