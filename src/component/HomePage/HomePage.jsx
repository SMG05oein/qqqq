import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./HomePage.style.css"

const HomePage = () => {
    return (
        <div className="HomePage justify-content-center">
            <Container>
                <Row>
                    <div className={"Banner"}>
                        <Col xs={8}><span>사용이 처음이신가요?</span></Col>
                        <Col xs={4}><div onClick={()=>{alert("기능 미구현")}} className={"GuideBox"}>가이드 <br/>보러가기</div></Col>
                    </div>
                </Row>
                {/*관리*/}
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

                {/*지불 방식*/}
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