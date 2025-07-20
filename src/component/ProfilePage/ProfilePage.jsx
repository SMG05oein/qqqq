import React, {useContext, useEffect} from 'react';
import './ProfilePage.style.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {LoginContext} from "../../Hooks/LoginState";
import {useUser} from "../../Hooks/useUser";
import Loading from "../../Loding/Loading";

const ProfilePage = ({setIsProfile}) => {
    const { login ,setLogin } = useContext(LoginContext);
    const user = useUser();
    console.log(user);

    useEffect(()=>{
        setIsProfile(true);
        return () => {
            setIsProfile(false);
        };
    })
    return ( !user || user.length === 0 ? <Loading/>
        :
        <div className="ProfilePage">
            <Container className="profile-container profile-card text-center">
                <Row className="NotFlex NoMargin">
                    <Col>
                        <Image src="/profile.png" roundedCircle className="profile-image" />
                        <h5 className="profile-name">{user[login.idx-1]?.name}님</h5>
                    </Col>
                    <Col>
                        <Row className="NotFlex NoMargin">
                            <h6>계정찾기</h6>
                            <Button variant="light" className="profile-button">아이디 찾기</Button>
                            <Button variant="light" className="profile-button">비밀번호 찾기</Button>
                        </Row>
                        <Row className="NotFlex NoMargin">
                            <h6 className="mt-4">서비스</h6>
                            <Button variant="secondary" className="profile-button">계정 삭제</Button>
                            <Button variant="secondary" className="profile-button"
                                    onClick={() => {
                                        if (window.confirm("로그아웃 하시겠습니까?")) {
                                            setLogin(false, 0);
                                            alert("로그아웃 되었습니다");
                                        }
                                    }}
                            >
                                로그아웃
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfilePage;
