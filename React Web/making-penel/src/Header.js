import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUp, FiChevronDown } from 'react-icons/fi';
import Add from './Add';
import Logo from './PenelLogo.PNG'
import './Header.css';
import Modal from './Modal';
function Header() {


    const [address, setaddress] = useState(<Add />)
    const [Input, setInput] = useState('')
    const [InputModal, setInputModal] = useState(false)

    const onOpenModal = () => {
        setInputModal(true);
    }
    const onCloseModal =()=>{
        setInputModal(false);
    }

    return (
        <>
          {InputModal ?<Modal onCloseModal={onCloseModal}/>:false}  
            <div className='HeaderUpBox'>
                <div className='LogoText' >
                    <img src={Logo} className='logo' />
                    <b>{Input}프로그램 및 기능</b>
                </div>
                <div>
                    <button className='Button' ></button>
                    <button className='Button' onClick={onOpenModal}></button>
                    <button className='Button'></button>
                </div>
            </div>
            <div className='HeaderDownBox'>
                <div className='Sign'>
                    <button  ><FiArrowLeft /></button>
                    <button ><FiArrowRight /></button>
                    <button><FiChevronDown /></button>
                    <button ><FiArrowUp /></button>
                </div>
                <div className='addressBox'
                    onClick={async () => {
                        await setaddress(<input id='test' className='addressall' value='제어판\프로그램\프로그램 및 기능' autoFocus></input>);
                        document.getElementById('test').select();
                    }}
                    onBlur={() => {
                        setaddress(<Add />);
                    }
                    }

                >
                    <img src={Logo} className='addressImg' />

                    {address}
                    {/* <input style={{width: "100%"}} 
                        onClick={async (e) => {
                   
                            await setaddress(address.replace(/>/g,'￦'));
                            e.target.select()
                        } } 
                        onBlur={()=>setaddress(address.replace(/￦/g,'>'))} 
                        value={address} 
                    /> */}

                </div>


                <input
                    className='inputBox'
                    placeholder='프로그램 및 기능 검색'
                    onChange={(e) => setInput(
                        e.target.value + ' - '
                    )}>

                </input>
            </div>
        </>

    )
}

export default Header;