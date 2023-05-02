import { VideoCard } from "./VideoCard";
import { ButtonList } from "./ButtonList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../Store/dataListSlice";
export const VideoList = () => {
  // const [videoinfo, setvideoinfo] = useState([]);
  const[url,seturl]=useState("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyCKTbBJydQdeOPpb0WJYTILvuibHb91lEg");
  const dispatch=useDispatch(); 
  const {data:videoinfo} =useSelector((state)=>state.data)
  async function dataGet() {
    dispatch(fetchdata())
    //console.log(url)
    //const data = await axios.get(`${url}`);
    // console.log(data.data.items);
    //setvideoinfo(data.data.items);
  }
  useEffect(() => {
    dataGet()
    // distpatch(add());
  }, []);
  return (
    <>
      <div className="video_button">
        <ButtonList />
        <div className="videoconatiner">
          {videoinfo.length == 0 ? (
            <></>
          ) : (
            videoinfo.map((val, index) => {
              // console.log(val);
              return (
                <>
                  <VideoCard
                    key={index}
                    url={val.snippet.thumbnails.high.url}
                    channelTitle={val.snippet.channelTitle}
                    title={val.snippet.title}
                    id={val.id}
                  />
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
