import React, { useEffect, useState } from 'react';
import {Map, MapMarker, MapTypeControl, ZoomControl} from "react-kakao-maps-sdk";

const KakaoMap = () => {
    const [location, setLocation] = useState({
        lat: 33.450701,
        lng: 126.570667
    });

    const imgUrl = "data:image/jpeg;base64,/9j/4AAQ" +
        "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";

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    });
                },
                (err) => {
                    console.warn("위치 가져오기 실패:", err);
                }
            );
        }
    }, []);

    return (
        <div className={"d-flex justify-content-center"} style={{ height: '90vh', width: '100%' }}>
            <Map
                center={location}
                style={{ width: '80%', height: '100%' }}
                level={3}
            >
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
                <MapMarker position={location}
                            image={{
                                src: imgUrl,
                                size: {width: 64, height: 69,},
                                options: {
                                    offset: {x: 27,y: 69,},
                                }
                            }} // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.}
                >
                    <div>현재 내 위치</div>
                </MapMarker>
            </Map>
        </div>
    );
};

export default KakaoMap;
