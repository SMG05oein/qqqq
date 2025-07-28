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
    const amount = Number(searchParams.get('amount')); // 🔥 숫자로 변환

    // 디버깅 로그
    console.log("✅ Toss 승인 파라미터:", { paymentKey, orderId, amount });

    if (!paymentKey || !orderId || !amount) {
      alert("결제 정보가 누락되었습니다.");
      navigate('/payment-fail');
      return;
    }

    const fetchApproval = async () => {
      try {
        // ✅ 쿼리 조립 후 인코딩
        const pullAddress = `/api/users/me/payments/toss/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`;
        console.log("✅ 조립된 pullAddress:", pullAddress);

        const encoded = encodeURIComponent(pullAddress);
        const url = `/.netlify/functions/proxyGet?pullAddress=${encoded}`;

        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${login?.token || localStorage.getItem("accessToken")}`,
          },
        });

        alert(res.data.message || "결제가 완료되었습니다.");
        navigate('/');
      } catch (err) {
        console.error("❌ 결제 승인 실패:", err);
        alert("결제 승인 중 오류가 발생했습니다.");
        navigate('/payment-fail');
      }
    };

    fetchApproval();
  }, [searchParams, login, navigate]);

  return <div>결제 승인 처리 중입니다...</div>;
};

export default TossPaymentCharge;
