import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import Semicolon from"./Image/Semicolon.PNG";
import "./Post.css";
import setDate from "./Date";
import Modify from "../Modify/Modify";
function PostAPI() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [num,setNum]=useState(0);
  const [reload,setReloda]=useState(true);
  const [Menu, setMenu]=useState(false)
  
  const MenuId= useRef();
  const [Id,setId]= useState();
  useEffect(()=>{
    window.addEventListener('scroll', () => {
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
        if(scrollLocation+windowHeight>=fullHeight) {
            setReloda(true);
        }
        
    })
  },[])   
  const fetchUser = async (props) => {
    if(loading) return
    try {
      setError(null);
      setLoading(true);
      let response = await axios.get(
        //`https://api.eungyeol.live/feed/list?page=${props}`
          'http://10.156.147.162:8080/feed'
        );
        
      console.log(response.data.posts);
      setNum(n=>n+1);
      setData(
        [...response.data.posts]
        );
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(()=>{
    if(reload){
        fetchUser(num);
        
    }
    setReloda(false)
  },[reload]);
 
  useEffect(()=>{
    console.log(Data);
  },[Data])
  if (error) return <div style={{width:'60vw',display:'flex',justifyContent:'center'}}>에러가 발생했습니다</div>;
  if (!Data) return null;
  const MenuTrue=()=>{
    setMenu(true);
  }
  const MenuFalse=()=>{
    setMenu(false);
  }
  return (
    <>
    {Menu?<Modify Id={Id} MenuFalse={MenuFalse}></Modify>:null}
    <div style={{width:'60vw'}}>
      {Data.map((data) => (
        <div className="post" key={data.id} ref={MenuId}>
          <div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div className="name">{data.title}</div>
              <div onClick={()=>{
                MenuTrue();
                setId(data.id);
                console.log(data.id);
              }}>메뉴</div>
            </div>
            <div>&#128336;{data.createdAt}</div>
          </div>
          <div className="content" style={{whiteSpace:'pre-wrap'}}>{data.content}</div>
          {/* {data.media[0]?<img className='postImg' src={`https://api.eungyeol.live/file/${data.media[0]}`}></img>:null} */}
        
        </div>
      ))}
      <div className='loadingWrap'>
        {loading && <img className='Semicolon' src={Semicolon}></img>}
      </div>
      
    </div>

    {/* <div style={{display:'flex'}}>
      {num!=0?<button onClick={Dec}>이전</button>:null}
      <button onClick={Inc}>다음</button>
    </div> */}
      </>
  );
}
export default PostAPI;
