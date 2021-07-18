import React from 'react';
import Header from './Header';
import Aside from './Aside';
import MainBox from './MainBox';
function App() {
  return (
    <>
      
      <Header/>
      <div style={{display:'flex'}}>
        <Aside/>
        <MainBox />
      </div>
        
      
    </>
  );
}

export default App;
