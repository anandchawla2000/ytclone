import { Slider } from "./Slider";
import { VideoList } from "./VideoList";
import "../CSS/Main.css";
import { Outlet } from "react-router-dom";
export const Main = () => {
  return (
    <div className="main">
      <Slider />
      {/* <VideoList/> */}
      <Outlet/>
    </div>
  );
};
