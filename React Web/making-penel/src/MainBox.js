import React from 'react';
import './MainBox.css';
import AppList from './AppList';
function MainBox(){

    return (
        <main>
            <div className='mainUp'>
                <div className='mainUpText1'>프로그램 제거 또는 변경</div>
                <div className='mainUpText2'>프로그램을 제거하려면 목록에서 선택한 후 [제거],[변경]또는 [복구]를 클릭하십시오.</div>
            </div>
            <div className='mainDown'>
                <div className='configuration'></div>
                <div className='mainSetUp'>
                    <button style={{paddingLeft:'3px',paddingRight:'290px'}}>이름</button>
                    <button style={{paddingLeft:'3px',paddingRight:'150px'}}>게시자</button>
                    <button style={{paddingLeft:'3px',paddingRight:'25px'}}>설치 날짜</button>
                    <button style={{paddingLeft:'3px',paddingRight:'50px'}}>크기</button>
                    <button style={{paddingLeft:'3px',paddingRight:'93px'}}>버전</button>
                </div>
                <div className='mainSetDown'>
                    <AppList></AppList>
                </div>
                <div className='bottomSet'></div>
                
            </div>
        </main>
    )
}
export default MainBox;