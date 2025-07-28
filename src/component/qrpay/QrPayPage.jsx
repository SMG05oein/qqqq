import React, { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../../State/LoginState';

const QrPayPage = () => {
  const { login } = useContext(LoginContext);
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const storeId = searchParams.get('storeId'); // 예: 11223

  const handleSubmit = async () => {
    if (!amount || isNaN(amount)) {
      setResult('❌ 금액을 정확히 입력해주세요.');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/me/payments',
        {
          storeQrId: `PAYSTORE_${storeId}`,   // ✅ 명세에 맞게 수정
          amount: parseInt(amount),           // ✅ 반드시 양수로 전송
        },
        {
          headers: {
            Authorization: `Bearer ${login?.token}`, // ✅ JWT 인증
          },
        }
      );

      setResult(`✅ 결제 성공: ${response.data.message}`);
    } catch (err) {
      const errorMsg = err.response?.data?.message || '서버 오류';
      setResult(`❌ 결제 실패: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 30, maxWidth: 400, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>QR 결제</h2>

      <p>가맹점 ID: <strong>{storeId}</strong></p>

      <input
        type="number"
        placeholder="결제할 금액 입력"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100%', padding: '10px', marginTop: '10px' }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          marginTop: '20px',
          padding: '10px',
          width: '100%',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        {loading ? '처리 중...' : '결제하기'}
      </button>

      {result && (
        <div style={{ marginTop: '20px', color: result.includes('✅') ? 'green' : 'red' }}>
          {result}
        </div>
      )}
    </div>
  );
};

export default QrPayPage;
