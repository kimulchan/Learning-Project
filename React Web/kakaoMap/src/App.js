/*global kakao*/ 
import React, {  useEffect } from 'react';
function App() {
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition  = new kakao.maps.LatLng(38.365264512305174, 127.10676860117488); 
    let marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    }, [])
  return (
  <div>
    <div id="map" style={{width:"100vw", height:"400vh",overflow:'hidden'}}></div> 
  </div> 
  )
}

export default App;
