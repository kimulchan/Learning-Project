
import React, { useEffect, useRef } from 'react';
import './RemoveModal.css';
import WarningIcon from './WarningIcon.png'


function RemoveModal({onRemove,name,Remove,id}) {
    const onKey = (e) => {
        if(e.key === 'y'||e.key==='Y'){
            Remove(id);
        }
        if(e.key ==='n'||e.key==='N'){
            onRemove();
        }
    }
    useEffect(()=>{
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown",onKey);
    },[])
    
    return(
        <div className='modalWrapper'  >
            <div className='modalBackground'>
            </div>
            <div className='removeModal'>
                <div style={{fontSize:'13px',marginLeft:'10px'}}>프로그램 및 기능</div>
                <div style={{display:'flex',alignItems:'center', fontSize:'13px',marginLeft:'5px',marginBottom:'5px'}}>
                    <img src={WarningIcon} className='warningImg'></img>
                   <div style={{margin:'0', marginBottom:'6px'}}>{name} 설치를 제거하시겠습니까?</div>

                </div>
                
                <div className='yesOrNo' style={{margin:'0',display:'flex'}} >
                    <input type="checkbox" style={{width:'15px',height:'15px',marginLeft:'20px',marginRight:'10px',marginTop:'11px'}}                    ></input>
                    <div style={{fontSize:'13px'}}>이 대화 상자를 다시 표시 안 함</div>
                    <button className='yesButton' onClick={()=>Remove(id)}   
                     >예(Y)</button>
                    <button className='noButton' onClick={onRemove}>아니요(N)</button>
                </div>
            </div>
            
        </div>
    )
}

export default RemoveModal;