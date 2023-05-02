import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import ytlogo from "../pngwing.com.png";
import "../CSS/Header.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchdatabyurl } from "../Store/dataListSlice";
export const Header = () => {
  const [inputval, setinputval] = useState();
  const dispatch=useDispatch();
  const clickkro=()=>{
    // alert(inputval)
    dispatch(fetchdatabyurl(inputval))
  } 
  return (
    <>
      <div className="container-fluid header">
        <div className="navbar">
          <div className="logo-hamburger">
            <AiOutlineMenu className="hamburgericon marginauto" />
            <div className="yt-logo">
              <img src={ytlogo} alt="ytlogo"></img>
            </div>
          </div>
          <div className="inputbox marginauto">
            <div className="inputcontainer marginauto">
              <input
                type="text"
                value={inputval}
                onChange={(e) => {
                  setinputval(e.target.value);
                }}
              ></input>
              <button type="button" onClick={clickkro}>
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div className="signin  marginauto">
            <div className="sigin-box ">
              <button type="button">Sigin in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
