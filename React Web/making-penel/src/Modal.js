import React from 'react';
import './Modal.css';
const Modal= ({onCloseModal}) => {
    
    return(
        <>
            <div onClick={onCloseModal} className='modalBack'>
                     
            </div>
            <div className='modalMain'>
                <input />
                <input/>
            </div>
        </>
    )
}

export default Modal;