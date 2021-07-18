import React from 'react';
import {BsChevronRight} from 'react-icons/bs';
function Add (){
    return(
        <>
        <div className='addressall'>
            
            <div className='addressWrapper'>
                <button className='addressIconBox'><BsChevronRight/></button>
            </div>
            <div className='addressWrapper'>
                <button className="addressTextBox">제어판</button>
                <button className='addressIconBox'><BsChevronRight/></button>
            </div>
            <div className='addressWrapper'>
                <button className='addressTextBox'>프로그램</button>
                <button className='addressIconBox'><BsChevronRight/></button>
            </div>
            <div className='addressWrapper'>
                <button className='addressTextBox'>프로그램 및 기능</button>    
             </div>
        </div>
            
</>        
    )
}

export default Add;