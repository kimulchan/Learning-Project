import React from 'react';
import './Aside.css'
import Shield from './Shield.png';
function Aside() {

    return (
        <aside>
            <div className='home'>제어판 홈</div>
            <div className='downlode'>설치된 업데이트 보기</div>
            <div style={{display:'flex'}}>
                <img src={Shield} className='Shield'></img>
                <div className='window'>Windows 기능 켜기/끄기</div>

            </div>
        </aside>

    )
}

export default Aside;