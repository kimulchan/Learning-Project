import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
import setDate from "./Date";
function PostAPI({num}) {
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchUser = async (props) => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      let response = await axios.get(
        `https://api.eungyeol.live/feed/list?page=${props}`
      );

      await setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(()=>{
    fetchUser(num);
  },[num]);
  
  if (loading) return <div style={{width:'60vw' ,display:'flex',justifyContent:'center'}}>로딩중..</div>;
  if (error) return <div style={{width:'60vw',display:'flex',justifyContent:'center'}}>에러가 발생했습니다</div>;
  if (!Data) return null;
  return (
    <>
    <div style={{width:'60vw',overflow:'auto',height:'100%'}}>
      {Data.map((data) => (
        <div className="post" key={data.feedId}>
          <div>
            <div className="name">{data.clubName}</div>
            <div>&#128336;{setDate(data.uploadAt)}</div>
          </div>
          <div className="content">{data.content}</div>
        </div>
      ))}
    </div>

    {/* <div style={{display:'flex'}}>
      {num!=0?<button onClick={Dec}>이전</button>:null}
      <button onClick={Inc}>다음</button>
    </div> */}
      </>
  );
}
export default PostAPI;
