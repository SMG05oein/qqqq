import { useSearchParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import axios from 'axios';
//import { LoginContext } from '../../context/LoginContext'; // 경로는 실제 파일 구조에 따라 수정
import { BACKEND_URL } from '../config';
import { LoginContext } from '../State/LoginState';



const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const paymentKey = params.get("paymentKey");
  const orderId = params.get("orderId");
  const amount = params.get("amount");

  const { login } = useContext(LoginContext); // 로그인 정보 불러오기
  const userId = login?.id; // 로그인된 사용자 ID 추출 (예: "wooyong123")

  const BASE_URL = process.env.REACT_APP_API_BACKEND_URL;

  useEffect(() => {
    if (paymentKey && orderId && amount && userId) {
      axios.post(`${BACKEND_URL}/confirm-payment`, {
        paymentKey,
        orderId,
        amount,
        userId
      })
      .then(res => {
        console.log("✅ 결제정보 백엔드 전송 완료:", res.data);
      })
      .catch(err => {
        console.error("❌ 결제정보 전송 실패:", err);
      });
    }
  }, [paymentKey, orderId, amount, userId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h3>결제가 완료되었습니다. 포인트가 반영 중입니다.</h3>
    </div>
  );
};

export default PaymentSuccess;
