import React from 'react';
import './BottomSet.css';
function BottomSet({img,version,size}) {
    return (
        <div className="bottomSet">
            <img src={img}/>
            <div className="name"></div>
            <div className='information'>
                <div className='version'>제품버전:{version} </div>
                <div className='size'>크기:{size}</div>
            </div>
        </div>
    )
}

export default BottomSet;