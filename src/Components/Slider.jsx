import { AiOutlineHome,AiOutlineVideoCamera } from "react-icons/ai";
import { BiTrendingUp,BiLibrary ,BiHistory} from "react-icons/bi";
export const Slider = () => {
  const List = ({value,icon}) => {
    return (
      <div className="list">
        <div>
          {icon}
        </div>
        <div>{value}</div>
      </div>
    );
  };
  return (<>
    <div className="Slider">
      <ul>
        <li><List value={"Home"} icon={<AiOutlineHome/>}/></li>
        <li><List value={"Shorts"} icon={<AiOutlineVideoCamera/>}/></li>
        <li><List value={"Trending"} icon={<BiTrendingUp/>}/></li>
        <li><List value={"Library"} icon={<BiLibrary/>}/></li>
        <li><List value={"History"} icon={<BiHistory/>}/></li>
      </ul>
    </div>
    </> 
  );
};
