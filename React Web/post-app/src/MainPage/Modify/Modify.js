import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Deleate from './Deleate';

function Modify({Id,MenuFalse}) {
    
    console.log(Id);
    return(<>{
        <MenuBox>
            <MenuTitle>menu</MenuTitle>
            <Link to={`/modify/${Id}`}><MenuButton >수정</MenuButton></Link>
            
            <MenuButton style={{backgroundColor:'red'}} onClick={
                ()=>{
                    Deleate(Id);
                    MenuFalse();
                    window.location.reload();
            }}>삭제</MenuButton>

        </MenuBox>
        
    }
    </>
    );
}

const MenuBox= styled.div`
    position: fixed;
    width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    border: black solid 2px;
    background-color: white;
`

const MenuTitle=styled.div`
    height: 50px;
    font-size: 40px;
    color: yellowgreen;
    font-weight: 700;
    display: flex;
    align-items: center;

`
const MenuButton=styled.div`
    height: calc(50% - 25px);
    
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: black solid 1px;
    &:hover{
        cursor: pointer;
    }
`

export default Modify;