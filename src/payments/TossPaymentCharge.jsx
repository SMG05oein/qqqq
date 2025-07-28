// TossPaymentCharge.jsx
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TossPaymentCharge = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');

    if (!paymentKey || !orderId || !amount) {
      alert('결제 정보가 누락되었습니다.');
      navigate('/payment-fail');
      return;
    }

    // ✅ accessToken 로컬스토리지에서 가져오기
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    // ✅ 백엔드 결제 검증 API 호출
    axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/me/payments/toss/prepare`,
      {
        paymentKey,
        orderId,
        amount
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    .then(() => {
      alert('✅ 포인트 충전 성공!');
      navigate('/');
    })
    .catch((err) => {
      console.error('❌ 결제 확인 실패:', err);
      alert('⚠️ 결제 확인 중 오류 발생');
      navigate('/payment-fail');
    });
  }, [searchParams, navigate]);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>결제 확인 중...</h2>
    </div>
  );
};

export default TossPaymentCharge;
