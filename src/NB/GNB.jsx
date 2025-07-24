import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NB.style.css"
import {CiHome, CiMap} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GoCreditCard} from "react-icons/go";
import {BsColumns} from "react-icons/bs";
import GNBPayingBar from "./GNB/GNBPayingBar";
import {PayingBarOpenContext} from "../State/PayingBarOpenState";
import { useLocation } from "react-router-dom";

const Gnb = ({isProfile}) => {
    const [open, setOpen] = useState(false);
    const {isOpen, setIsOpen} = useContext(PayingBarOpenContext);

    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // console.log("sda: " ,isOpen);
    return (
        <div className="NB">
            <Container fluid style={{borderRadius: isProfile ? '0px' : '50px 50px 0 0'}}  className="GNB justify-content-center">
                {isProfile ? null :
                    <GNBPayingBar isOpen={isOpen} setIsOpen={setIsOpen}/>
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
    );
};

export default Gnb;