// 1. Html5Qrcode 라이브러리 import 추가
import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useRef, useContext } from 'react';
import { PayingBarOpenContext } from '../../State/PayingBarOpenState';
import { Container, Row, Col } from 'react-bootstrap';

const GnbPayingBarLoginT = () => {
  const { isOpen } = useContext(PayingBarOpenContext);
  const qrRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (isOpen && qrRef.current) {
      // 기존 스캐너가 있다면 정리
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }

      // Html5QrcodeScanner 인스턴스 생성
        scannerRef.current = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: function(viewfinderWidth, viewfinderHeight) {
            const minEdge = Math.min(viewfinderWidth, viewfinderHeight) * 0.6;
            const size = Math.floor(minEdge);
            return { width: size, height: size };
        },
        rememberLastUsedCamera: true
        });


      // 렌더링 시작
      scannerRef.current.render(
        (decodedText) => {
          alert(`스캔 성공: ${decodedText}`);
          scannerRef.current.clear().catch(() => {});
        },
        (error) => {
          // 실패한 경우는 무시 (console.log만 해도 OK)
        }
      );
    }

    // 언마운트 시 스캐너 제거
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, [isOpen]);

  return (
    <div style={{ display: `${isOpen ? 'flex' : 'none'}` }} className="GNBPBBox">
      <Container fluid>
        <Row className="mb-3">
          <Col><h5 className={"d-flex justify-content-center align-content-center"} style={{ color: 'white' }}>QR 결제 스캔</h5></Col>
        </Row>
        <Row>
          <Col>
            <div ref={qrRef}>
              <div id="qr-reader" style={{}} className="qr-reader"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GnbPayingBarLoginT;
