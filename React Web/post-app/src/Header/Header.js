import React from 'react';
import Menu from '../MainPage/Menu/Menu';
import './Header.css';
function Header(){
    return (
        <div className='Head'>
            <div className='Title'>
                Forest Post
            </div>
            
            <Menu></Menu>
        </div>
    );
}
export default Header;