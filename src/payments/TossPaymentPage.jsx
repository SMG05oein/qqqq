import React, { useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../State/LoginState';

const TossPaymentPage = () => {
  const { login } = useContext(LoginContext);

  const handlePayment = async () => {
    try {
      // ✅ 1. 결제 준비 요청 → 백엔드에서 orderId 발급
      const prepareRes = await axios.post(
        '/.netlify/functions/proxyPost?pullAddress=/api/users/me/payments/toss/prepare',
        { amount: 5000 },
        {
          headers: {
            Authorization: `Bearer ${login?.token || localStorage.getItem("accessToken")}`,
          },
        }
      );

      const { orderId } = prepareRes.data;

      if (!orderId) {
        alert("orderId 생성 실패");
        return;
      }

      // ✅ 2. Toss 결제창 호출
      const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);
      tossPayments.requestPayment('카드', {
        amount: 5000,
        orderId,
        orderName: '포인트 충전',
        customerName: login?.id || '비로그인',
        successUrl: `${window.location.origin}/charge?paymentKey={paymentKey}&orderId=${orderId}&amount=5000`,
        failUrl: `${window.location.origin}/payment-fail`,
      });
    } catch (err) {
      console.error("❌ 결제 준비 또는 호출 실패:", err);
      alert("결제 준비 중 오류가 발생했습니다.");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>포인트 충전</h2>
      <button onClick={handlePayment} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        ₩5,000 결제하기
      </button>
    </div>
  );
};

export default TossPaymentPage;
