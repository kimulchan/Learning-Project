import React, { useEffect, useRef, useState } from 'react';
import './Menu.css'
import LoginMenu from './LoginMenu';
import { Link } from 'react-router-dom';
function Menu (){
    const [login,setLogin]=useState(false)
    const [modal,setModal]=useState(false);
    const isLogin=()=>{
        console.log(0);
        setModal(true);
    }
    const isNotModal=()=>{
        setModal(false)
    }
    const LoginSet=()=>{
        setLogin(true)
        setModal(false)
    }
    return(
        <>
        {/* <LoginMenu modal={modal} isNotModal={isNotModal} LoginSet={LoginSet}></LoginMenu>
        
        
            {login?<Link to='/create'><button className='login'>추가</button></Link>:<button className='login 'onClick={isLogin}>로그인</button>}
         */}
         <Link to='/create'><button className='login'>추가</button></Link>
        </>
    );
}

export default Menu;