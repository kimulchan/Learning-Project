import React, { useState } from 'react';
import './AppListUplode.css';
import RemoveModal from './RemoveModal'
function AppListUplode({App, Remove}) {
    const {icon, name, use, day, size, version,id} = App;
    const[Modal, setModal]=useState(false);
    const onRemove=()=>{
        setModal(false);
    }
    
    return (
        <>
            {Modal && <RemoveModal onRemove={onRemove} name={name} Remove={Remove} id={id}/>}
            <div className='line' onClick={()=>{
                setModal(true);
            }}>
                <img src={icon}></img>
                <div className='name'>{name}</div>
                <div className='adder'>{use}</div>
                <div className='downlodeDay'>{day}</div>
                <div className='size'>{size}</div>
                <div className='version'>{version}</div>
            </div>
        </>
    )


}

export default AppListUplode;