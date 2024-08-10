import { useState } from "react";
import "./Postinfo.css";
import Counter from "../Counter/Counter";
import IconDelete from "../../assets/icon-delete.svg";


function Postinfo(props) {

  const [replayClicked, setreplayClicked] = useState(false);
  const [Commentcontent , setCommentcontent] = useState("");

  function SendComment(event){
    const PostID = event.target.getAttribute("mycustomid")
    const PassedCommentcontent = Commentcontent ;
    props.addComment(PostID , PassedCommentcontent);
    setCommentcontent("");
    setreplayClicked(false);
  }  

  function handleReplay() {
    setreplayClicked(true);
  }

  function handleonChange(event){
    setCommentcontent(event.target.value);
  }

  function deletePost(event) {
    console.log(event.target.id);
    //Call the onDelete function with the uniqueID to remove the post
    props.deletedPostFromArray(props.uniqueID);
  }

  function getlogedInUserName() {
    return "juliusomo";
  }

  return (
    <>
    <div className="Postinfodiv">
      <Counter></Counter>
      <div className="Usernamediv">
        <div className="Upperdiv">
          <div className="Leftside">
            <img src={props.Imguser} />
            <label id="UserName">{props.UserName}</label>
            <label id="Timeago">{props.Timeago}</label>
          </div>
          <button className="Rightside"
          disabled={replayClicked}
          id={props.uniqueID}
              onClick={handleReplay}
          >
            <img className="Icon" src={props.Icon} />
            <label>Reply</label>
          </button>

          {props.PostOwner == getlogedInUserName() ? (
              <button className="IconDelete" id={props.uniqueID}  onClick={deletePost}>
                <img className="Icon" src={IconDelete} />
                <label>Delete</label>
              </button>
            ) : null}
        </div>
        <p>{props.paragraph}</p>
      </div>
    </div>
    {replayClicked == true ? (
      <div>
        <input value={Commentcontent} onChange={handleonChange} ></input>
        <button mycustomid={props.uniqueID} onClick={SendComment}>send</button>
      </div>
    ) : null}
  </>
  );
}

export default Postinfo;
