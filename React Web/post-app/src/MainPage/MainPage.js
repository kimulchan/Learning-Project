import React, { useState } from "react";
import "./MainPage.css";
import PostAPI2 from './IsPost/PostAPI2';
function MainPage() {

  return (
    <>
      <div className='Wrap'>
        <div className="PWrap">
          <PostAPI2></PostAPI2>
        </div>
      </div>
    </>
  );
}

export default MainPage;