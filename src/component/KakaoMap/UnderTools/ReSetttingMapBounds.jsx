import React, {useMemo} from 'react';
import {useMap} from "react-kakao-maps-sdk";
/* global kakao */

const ReSetttingMapBounds = ({points}) => {
    const map = useMap()

    const bounds = useMemo(() => {
        const bounds = new kakao.maps.LatLngBounds()
        points.forEach((point) => {
            bounds.extend(new kakao.maps.LatLng(point.lat, point.lng))
        })
        return bounds
    }, [points])

    return (
        <p>
            <button className={"btn btn-dark"} style={{marginTop:'20px'}} onClick={() => map.setBounds(bounds)}>
                지도 범위 재설정 하기
            </button>
        </p>
    )
};

export default ReSetttingMapBounds;