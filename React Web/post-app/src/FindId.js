import React from 'react';
import styled from 'styled-components';
function InformaionWrap({title}) {
    return(
<>
        <IWrap>
            <Title>{title}</Title>
            <Descreption placeholder={title}></Descreption>
        
        </IWrap>
</>
    );
}

function FindId() {

    return(
        <>
            <Wrap>
                <FIWrap>
                    <InformaionWrap title='이름' />
                    <InformaionWrap title='생년월일' />
                    <InformaionWrap title='id' />
                    <InformaionWrap title='password'/>
                    <InformaionWrap title='password chack'/>
                    <Cbutton >등록</Cbutton>
                </FIWrap>
            </Wrap>
        </>
    );

    
}

export default FindId

const Wrap=styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
`
const FIWrap=styled.div`
    width: 60vh;
    display: flex;
    flex-direction: column;
    
`
const Title= styled.div`
    font-size: 16px;
    margin-right: 10px;
    height: 20px;

`
const Descreption= styled.input`
    font-size: 16px;
    height: 20px;
    
    margin-bottom: 30px;

`
const IWrap= styled.div`
    display: flex;
    
`
const Cbutton=styled.button`
    height: 30px;
    width: 60px;
    background-color: forestgreen;
    color: white;
    border-radius: 5px;
    margin-top: 40px;
    align-self: center;
`