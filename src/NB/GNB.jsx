import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import "./NB.style.css";
import {CiHome, CiMap} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GoCreditCard} from "react-icons/go";
import {BsColumns} from "react-icons/bs";
import GNBPayingBar from "./GNB/GNBPayingBar";
import {PayingBarOpenContext} from "../State/PayingBarOpenState";

// ✅ QR 스캐너 컴포넌트 import
import QrScannerSheet from "../component/QrScanner/QrScannerSheet";

const Gnb = ({isProfile}) => {
    const [open, setOpen] = useState(false);
    const {isOpen, setIsOpen} = useContext(PayingBarOpenContext);
    const [isQrOpen, setIsQrOpen] = useState(false); // ✅ QR Sheet 상태 추가

    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleQrClose = () => {
        setIsQrOpen(false);
    };

    return (
        <>
            <div className="NB">
                <Container fluid style={{borderRadius: isProfile ? '0px' : '50px 50px 0 0'}}  className="GNB justify-content-center">
                    {isProfile ? null :
                        <GNBPayingBar isOpen={isOpen} setIsOpen={() => {
                            setIsOpen(true);
                            setIsQrOpen(true); // ✅ QR Sheet 열기
                        }}/>
                    }
                    <Row style={{margin: "10px 0px 10px 0px"}}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <Link to="/cheonancard"><GoCreditCard /><br/>천안<br/>사랑카드</Link>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <Link to="map"><CiMap /><br/>가맹점<br/> 지도</Link>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            <Link to="/"><CiHome/><br/>홈</Link>
                        </Col>
                        {/*<Col className="d-flex justify-content-center align-items-center">*/}
                        {/*    <Link to="/"><BsColumns /><br/>커뮤니티</Link>*/}
                        {/*</Col>*/}
                        <Col className="d-flex justify-content-center align-items-center">
                            <Link to="/profile"><IoPersonOutline /><br/>프로필</Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ✅ QR 스캐너 모달 */}
            <QrScannerSheet isOpen={isQrOpen} onClose={handleQrClose} />
        </>
    );
};

export default Gnb;
