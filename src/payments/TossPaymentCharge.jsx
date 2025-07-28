// src/payments/TossPaymentCharge.jsx
import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../State/LoginState';

const TossPaymentCharge = () => {
  const [qs] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    const orderId = qs.get('orderId');
    const amount = qs.get('amount');
    const paymentKey = qs.get('paymentKey');

    if (!orderId || !amount || !paymentKey) {
      alert('❌ 결제 승인 정보가 없습니다.');
      navigate('/payment-fail');
      return;
    }

    // 승인 API 호출
    const raw = `/api/users/me/payments/toss/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`;
    const url = `/.netlify/functions/proxyGet?pullAddress=${encodeURIComponent(raw)}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${login?.token || localStorage.getItem('accessToken')}`,
        },
      })
      .then(res => {
        alert(res.data.message || '✅ 결제가 완료되었습니다.');
        navigate('/');
      })
      .catch(err => {
        console.error('❌ 결제 승인 실패', err);
        alert('⚠️ 결제 승인 중 오류가 발생했습니다.');
        navigate('/payment-fail');
      });
  }, [qs, login, navigate]);

  return <div style={{ textAlign: 'center', marginTop: 50 }}>결제 승인 처리 중...</div>;
};

export default TossPaymentCharge;
