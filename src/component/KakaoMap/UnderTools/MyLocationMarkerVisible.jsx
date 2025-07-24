import React from 'react';

const MyLocationMarkerVisible = ({isVisible, setIsVisible}) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={() => setIsVisible(!isVisible)}>
                내 위치 마커 {isVisible ? "숨기기":"표시"}
            </button>
        </div>
    );
};

export default MyLocationMarkerVisible;