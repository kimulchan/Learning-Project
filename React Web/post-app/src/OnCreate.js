import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CreatePost from './CreatePost';

function OnCreate() {
    const id=useRef(0);
    const title=useRef();
    const content=useRef();
    return(
        <CWrap>
            <Title placeholder='제목' ref={title}></Title>
            <Content placeholder='내용' ref={content}></Content>
            <Link to='/'><CButton onClick={
                ()=>CreatePost({
                title:title.current.value,
                content: content.current.value
            })
            } >등록</CButton></Link>
        </CWrap>
    );
}

const CWrap= styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.input`
    width: 70%;
    height: 40px;
    padding: 5px;
    font-size: 16px;
`
const Content= styled.textarea`
    width: 70%;
    height: calc(100% - 100px);
    font-size: 16px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: none;
    caret-color: green;
    
`
const CButton = styled.button`
    height: 30px;
    margin-top: 10px;
    width: 60px;
    background-color: forestgreen;
    color: white;
    border-radius: 5px;
`


export default OnCreate;

