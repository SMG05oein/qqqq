// 1. Html5Qrcode 라이브러리 import 추가
import { Html5QrcodeScanner } from "html5-qrcode";
import react, { useEffect, useRef, useContext } from 'react';
import { PayingBarOpenContext } from '../../State/PayingBarOpenState'; // 경로는 상황 맞게
import { Container, Row, Col } from 'react-bootstrap';


const GnbPayingBarLoginT = () => {
    const { isOpen } = useContext(PayingBarOpenContext);
    const qrRef = useRef(null);
    const scannerRef = useRef(null);

    // 2. QR 스캐너 로직
    useEffect(() => {
        if (isOpen && qrRef.current) {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(() => {});
            }
            scannerRef.current = new Html5QrcodeScanner("qr-reader", {
                fps: 10,
                qrbox: 250,
                rememberLastUsedCamera: true
            });

            scannerRef.current.render(
                (decodedText) => {
                    alert(`스캔 성공: ${decodedText}`);
                    scannerRef.current.clear().catch(() => {});
                },
                (error) => {}
            );
        }

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(() => {});
            }
        };
    }, [isOpen]);

    return (
        <div style={{display: `${isOpen ? 'flex' : 'none'}`}} className="GNBPBBox">
            <Container fluid>
                <Row className="mb-3">
                    <Col><h5 style={{ color: 'white' }}>QR 결제 스캔</h5></Col>
                </Row>
                <Row>
                    <Col>
                        <div ref={qrRef}>
                            <div id="qr-reader" style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GnbPayingBarLoginT;
