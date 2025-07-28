// ✅ Toss 결제 처리: TossPayments 리다이렉트 → /charge?paymentKey=... 로 전달 → 백엔드 검증 → 결과 처리

// TossPaymentCharge.jsx (새로 만들 파일)
import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../State/LoginState';

const TossPaymentCharge = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');

    if (!paymentKey || !orderId || !amount) {
      alert('결제 정보가 누락되었습니다.');
      navigate('/payment-fail');
      return;
    }
    const a = `${process.env.REACT_APP_BACKEND_URL}api/users/me/payments/toss/prepare`
    console.log(a);

    // ✅ 백엔드로 결제 검증 요청
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/me/payments/toss/prepare`, {
      paymentKey,
      orderId,
      amount,
      userId: login?.id || '비로그인'
    })
    .then(() => {
      alert('✅ 포인트 충전 성공!');
      navigate('/');
    })
    .catch((err) => {
      console.error('❌ 결제 확인 실패:', err);
      alert('⚠️ 결제 확인 중 오류 발생');
      navigate('/payment-fail');
    });
  }, [searchParams, login, navigate]);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>결제 확인 중...</h2>
    </div>
  );
};

export default TossPaymentCharge;
