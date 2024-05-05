import React, { useEffect } from 'react';

function Map() {
    useEffect(() => {
        function initMap() {
            // 맵을 표시할 위치 지정
            var address = "경기도 성남시 분당구 판교로 242 PDC A동 902호";

            // 위도와 경도 가져오기
            var apiKey = "AIzaSyDLhcpmIpYh3XlPG9XtL0CmttlAv8NpK6s"; // Google Maps API 키를 넣어주세요
            var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI(address) + "&key=" + apiKey;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    var location = data.results[0].geometry.location;
                    var latitude = location.lat;
                    var longitude = location.lng;

                    // 맵 생성
                    var map = new window.google.maps.Map(document.getElementById('map'), {
                        zoom: 17,
                        center: { lat: latitude, lng: longitude } // 위도와 경도로 중심 설정
                    });

                    // 마커 생성
                    var marker = new window.google.maps.Marker({
                        position: { lat: latitude, lng: longitude }, // 위도 경도 위치 설정
                        map: map,
                    });
                })
                .catch(error => console.error('Error:', error));
        }

        // Google Maps API 스크립트 동적으로 로드
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLhcpmIpYh3XlPG9XtL0CmttlAv8NpK6s&callback=initMap`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        window.initMap = initMap; // Google Maps API 콜백 함수 설정
        document.head.appendChild(googleMapsScript);

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            document.head.removeChild(googleMapsScript);
            delete window.initMap;
        };
    }, []);

    return <div id="map" style={{ height: '400px', width: '80%', margin: '0 auto' }}></div>;
}

export default Map;