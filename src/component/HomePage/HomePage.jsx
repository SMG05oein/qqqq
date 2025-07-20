import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./HomePage.style.css"
import {FaCreditCard, FaWonSign} from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="HomePage">
            <Container>
                <Row>
                    <div className={"Banner"}>
                        <Col xs={8}><span>사용이 처음이신가요?</span></Col>
                        <Col xs={4}><div onClick={()=>{alert("기능 미구현")}} className={"GuideBox"}>가이드 <br/>보러가기</div></Col>
                    </div>
                </Row>
                {/*관리*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeCardBanner"}>
                        <Row className={""} style={{marginBottom: "10px"}}>
                            <Col xs={5} className={"d-flex justify-content-center align-content-center"}>
                                <Image height={'160px'} src={"CheonanLoveCard.png"} alt={"천안사랑카드"}/>
                            </Col>
                            <Col xs={7} className={"d-block justify-content-center align-content-center"}>
                                <div className={"MyCheonanCard"}>나의 천안 사랑카드</div>
                                <div className={"CardInfo"}>
                                    <div>잔액: 1000원</div>
                                    <div>정책지원금: 1000원</div>
                                </div>
                                <div className={"MoreBtn"}>+더보기</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"d-flex justify-content-center align-content-center"}><Link to={"/"}><FaCreditCard/> 카드관리</Link></Col>
                            <Col className={"d-flex justify-content-center align-content-center"}><Link to={"/"}><FaWonSign/> 충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*지불 방식*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>이용내역</Col>
                        </Row>
                        <Row className={"NotFlex"}>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*빠른 결제*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*/!*서비스 버로가기*!/*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>


                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row>
            </Container>
        </div>
    );
};

export default HomePage;