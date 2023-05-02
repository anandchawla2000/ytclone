import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
export const ButtonList = () => {
  let box=document.querySelector(".btnlist")
  const BTN = ({ value }) => {
    return (
      <div className="btn">
        <button type="button">{value}</button>
      </div>
    );
  };
  const nextbutton=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft+width;
  }
  const prevbutton=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft-width;
  }
  return (
    <div className="btngroup">
      <div className="nextbtn">
        <button type="button" onClick={nextbutton}>
          <BiSkipNext />
        </button>
      </div>
      <div className="prevbtn"onClick={prevbutton}>
        <button type="button">
          <BiSkipPrevious />
        </button>
      </div>
      <div className="btnlist">
        <BTN value={"All"} />
        <BTN value={"Under 10 Min"} />
        <BTN value={"Music"} />
        <BTN value={"Dubbing"} />
        <BTN value={"Tamil Cinema"} />
        <BTN value={"Comedy"} />
        <BTN value={"News"} />
        <BTN value={"Gaming"} />
        <BTN value={"Live"} />
        <BTN value={"Bollywood Music"} />
        <BTN value={"Mantras"} />
        <BTN value={"Cinema"} />
        <BTN value={"Under 10 Min"} />
        <BTN value={"Music"} />
        <BTN value={"Dubbing"} />
        <BTN value={"Tamil Cinema"} />
        <BTN value={"Comedy"} />
        <BTN value={"News"} />
        <BTN value={"Gaming"} />
        <BTN value={"Live"} />
        <BTN value={"Bollywood Music"} />
        <BTN value={"Mantras"} />
        <BTN value={"Cinema"} />
        <BTN value={"All"} />
        <BTN value={"Under 10 Min"} />
        <BTN value={"Music"} />
        <BTN value={"Dubbing"} />
        <BTN value={"Tamil Cinema"} />
        <BTN value={"Comedy"} />
        <BTN value={"News"} />
        <BTN value={"Gaming"} />
        <BTN value={"Live"} />
        <BTN value={"Bollywood Music"} />
        <BTN value={"Mantras"} />
        <BTN value={"Cinema"} />
      </div>
    </div>
  );
};
