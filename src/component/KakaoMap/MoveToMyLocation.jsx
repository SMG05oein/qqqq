import React from 'react';
import {useMap} from "react-kakao-maps-sdk";
/* global kakao */

const MoveToMyLocation = ({state}) => {
    const map = useMap();

    return (
        <div>
            <button className="btn btn-primary"
                    onClick={() => {
                        const moveLatLon = new kakao.maps.LatLng(state.center.lat, state.center.lng);
                        map.panTo(moveLatLon);
                    }}
            >현위치</button>
        </div>
    );
};

export default MoveToMyLocation;