import "./Commentswrapper.css";
import Counter from "../Counter/Counter";
import Imgram from "../../assets/image-ramsesmiron.png";

function Commentswrapper(props) {
    return(
        <>
        {props.Comments.map((comment) => {
            return(
                <div className="Commentswrapper">
      <Counter></Counter>
      <div className="Usernamediv">
          <div className="Leftside">
            <img src={Imgram} />
            <label id="UserName">ramsesmiron</label>
            <label id="Timeago">1 week ago</label>
          </div>
                    <p className="Pcomment">{comment}</p>
                </div>
                </div>
            );
        })}
        </>
    );
}

export default Commentswrapper ;