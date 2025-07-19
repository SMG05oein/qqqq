import React, {useEffect} from 'react';
import './ProfilePage.style.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import GNB from '../../NB/GNB';
import TopMenu from '../../NB/TopMenu';

const ProfilePage = ({setIsProfile}) => {
    useEffect(()=>{
        setIsProfile(true);
        return () => {
            setIsProfile(false);
        };
    })
    return (
        <div className="ProfilePage">
            <Container className="profile-container profile-card text-center">
                <Image src="/profile.png" roundedCircle className="profile-image" />
                <h5 className="profile-name">이름</h5>

                <div className="button-section">
                    <h6>계정찾기</h6>
                    <Button variant="light" className="profile-button">아이디 찾기</Button>
                    <Button variant="light" className="profile-button">비밀번호 찾기</Button>

                    <h6 className="mt-4">서비스</h6>
                    <Button variant="secondary" className="profile-button">계정 삭제</Button>
                    <Button variant="secondary" className="profile-button">로그아웃</Button>
                </div>
            </Container>
        </div>
    );
};

export default ProfilePage;
