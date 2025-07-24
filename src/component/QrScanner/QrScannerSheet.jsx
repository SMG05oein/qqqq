// QrScannerSheet.jsx
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import './QrScannerSheet.style.css';

const QrScannerSheet = ({ isOpen, onClose }) => {
  const qrContainerRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (isOpen && qrContainerRef.current) {
      // 기존 스캐너 초기화
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }

      // 새로운 스캐너 인스턴스 생성
      scannerRef.current = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: 250,
        rememberLastUsedCamera: true
      });

      scannerRef.current.render(
        (decodedText) => {
          alert(`스캔 성공: ${decodedText}`);
          scannerRef.current.clear().then(() => onClose());
        },
        (error) => {
          // 실패 로그 출력 없이 무시 (반복 방지)
        }
      );
    }

    // 컴포넌트 unmount 시 클리어
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, [isOpen]);

  return (
    <div className={`qr-sheet-container ${isOpen ? 'open' : ''}`}>
      <div className="qr-sheet-header">
        <div className="qr-title">결제하기</div>
        <div className="qr-divider" />
        <button className="qr-close-button" onClick={onClose}>닫기</button>
      </div>

      <div className="qr-instruction-wrapper">
        <div className="qr-instruction-button">QR스캔하기</div>
      </div>

      {/* QR 스캐너 출력 */}
      {isOpen && (
        <div ref={qrContainerRef}>
          <div id="qr-reader" style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}></div>
        </div>
      )}

      <div className="qr-description">
        오프라인 결제는 QR코드를 스캔해주세요
      </div>
    </div>
  );
};

export default QrScannerSheet;
