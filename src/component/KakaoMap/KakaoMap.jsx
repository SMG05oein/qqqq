import React, {useEffect, useState} from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {Container} from "react-bootstrap";
import Loading from "../Loding/Loading";

const KakaoMap = () => {
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/categoryMarker 다양한 이미지 마커
// https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic 키워드로 장소 검색
    /** 현 위치 기반으로 마커 시작*/
    const [state, setState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }))
        }
    }, [])
    /**현 위치 기반으로 마커 끝*/
    // console.log(state);

    return (
        state.isLoading ? (
            <div><Loading /></div>
        ) : (
            <div className="KakaoMap" style={{ height: '90%' }}>
                <Container style={{ height: '100%' }}>
                    <div style={{ marginTop: '50px', height: '100%' }}>
                        <Map
                            center={state.center}
                            style={{ width: '100%', height: '80%' }}
                            level={3}
                        >
                            {!state.isLoading && (
                                <MapMarker position={state.center}>

                                </MapMarker>
                            )}
                        </Map>
                    </div>
                </Container>
            </div>
        )
    );
};

export default KakaoMap;