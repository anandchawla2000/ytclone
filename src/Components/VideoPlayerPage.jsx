import { useSearchParams } from "react-router-dom";
import "../CSS/VideoPlayer.css";
import { useEffect, useState } from "react";
import axios from "axios";
export const VideoPlayerPage = () => {
  const [parmdetail] = useSearchParams();
  const id = parmdetail.get("v");
  const [chats, setChats] = useState([]);
  const [comment, setcomment] = useState([]);
  const CommentCard = ({ comment, url,autorname }) => {
    return (
      <>
        <div className="comment-card">
          <div className="icon">
            <img src={url} alt="avtar"></img>
          </div>
          <div className="detail">
            <h5>{autorname}</h5>
            <p>{comment}</p>
          </div>
        </div>
      </>
    );
  };
  async function data() {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&maxResults=20&key=AIzaSyCKTbBJydQdeOPpb0WJYTILvuibHb91lEg`;
    const data = await axios.get(url);
    setcomment(data.data.items);
  }
  useEffect(() => {
    data();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setChats((prevvalue) => [...prevvalue, <p>Message hi</p>]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="videoPlayerPage">
        <div className="video_play">
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              autoPlay='1'
            ></iframe>
          </div>
          <div className="chatbox">
            {chats.length == 0 ? (
              <></>
            ) : (
              chats.map((val, index) => {
                return val;
              })
            )}
          </div>
        </div>
        <div className="comments">
          <h2>Comments</h2>
          {comment.length == 0 ? (
            <></>
          ) : (
            comment.map((val, index) => {
            //   console.log(val.snippet.snippet.textOriginal);
              return (
                <CommentCard
                  comment={val.snippet.topLevelComment.snippet.textOriginal}
                  url={val.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  autorname={val.snippet.topLevelComment.snippet.authorDisplayName}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
