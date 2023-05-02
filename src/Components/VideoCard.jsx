import { useNavigate } from "react-router-dom";

export const VideoCard = ({ url, channelTitle, title, id }) => {
  const navigte = useNavigate();
  return (
    <div
      className="videocard"
      onClick={() => {
        navigte("/watch?v=" + id);
      }}
    >
      <div className="videoimg">
        <img src={url} alt="image"></img>
      </div>
      <div className="downpart">
        <p className="title">{title}</p>
        <p className="channel-title">{channelTitle}</p>
        {/* <p className="statistics-viewCount">{views} views</p> */}
      </div>
    </div>
  );
};
