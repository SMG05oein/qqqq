import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { LoginContext } from '../State/LoginState';

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const [sent, setSent] = useState(false);

  const paymentKey = params.get("paymentKey");
  const orderId = params.get("orderId");
  const amount = params.get("amount");

  const { login } = useContext(LoginContext);
  const userId = login?.id;

  useEffect(() => {
    // 모든 값이 준비됐을 때만 전송
    if (!sent && paymentKey && orderId && amount && userId) {
      axios.post(`${BACKEND_URL}/confirm-payment`, {
        paymentKey,
        orderId,
        amount,
        userId
      })
      .then(res => {
        console.log("✅ 결제 정보 전송 완료:", res.data);
        setSent(true);
      })
      .catch(err => {
        console.error("❌ 전송 실패:", err);
      });
    }
  }, [paymentKey, orderId, amount, userId, sent]);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h3>결제가 완료되었습니다. 포인트가 반영 중입니다.</h3>
    </div>
  );
};

export default PaymentSuccess;
