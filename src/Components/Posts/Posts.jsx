import "./Posts.css";
import Postinfo from "../Postinfo/Postinfo";
import { useState } from "react";
import Input from "../Input/Input";
import Commentswrapper from "../Commentswrapper/Commentswrapper";

import Imgamy from "../../assets/image-amyrobson.png";
import Iconreplay from "../../assets/icon-reply.svg";
import Imgmax from "../../assets/image-maxblagun.png";
import Imgjuli from "../../assets/image-juliusomo.png";
import Imgram from "../../assets/image-ramsesmiron.png";


function posts() {
  const [Arrayofposts , setArrayofposts] = useState([
    {
      uniqueID: 1,
      Imguser: Imgamy,
      UserName: "amyrobson",
      Timeago: "1 month ago",
      Icon: Iconreplay,
      paragraph:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
        Comments:[],
        PostOwner:"amyrobson",
    },
    {
      uniqueID: 2,
      Imguser: Imgmax,
      UserName: "maxblagun",
      Timeago: "2 weeks ago",
      Icon: Iconreplay,
      paragraph:
        "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        Comments:[],
        PostOwner:"maxblagun",
    },
    {
      uniqueID: 3,
      Imguser: Imgram,
      UserName: "ramsesmiron",
      Timeago: "1 weeks ago",
      Icon: Iconreplay,
      paragraph:
        "@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
        Comments:[],
        PostOwner:"ramsesmiron",
    },
  ]);

  function addpost(post) {
    const Newpostobject = {
        uniqueID :Arrayofposts.length+1,
        Imguser: Imgjuli,
        UserName: "juliusomo",
        Timeago: "2 days ago",
        Icon: Iconreplay,
        paragraph:post,
        Comments:[],
        PostOwner:"juliusomo",
    }

    const NewArraypostobject = [...Arrayofposts,Newpostobject];
    setArrayofposts(NewArraypostobject)
    console.log(post);
  }

  function addComment(PostID , Commentcontent){
    const newArray = Arrayofposts.map((Post) => {
      if (Post.uniqueID == PostID ){
        Post.Comments.push(Commentcontent);
      }
      return Post;
    });
    console.log(newArray)
    setArrayofposts(newArray);
  }

  function deletedPostFromArray(DeletedPostID){
    const NewArrayAfterDeleted = Arrayofposts.filter((item)=>{
      return item.uniqueID != DeletedPostID
    });
    setArrayofposts(NewArrayAfterDeleted);
  }

  return (
    <div id="Postsdiv">
      {Arrayofposts.map((item) => {
        return (
          <>
          <Postinfo
          uniqueID = {item.uniqueID}
            key={item.uniqueID}
            Imguser={item.Imguser}
            UserName={item.UserName}
            Timeago={item.Timeago}
            Icon={item.Icon}
            paragraph={item.paragraph}
            deletedPostFromArray={deletedPostFromArray} 
            PostOwner={item.PostOwner}
            addComment={addComment}
          ></Postinfo>
          {item.Comments.length > 0 ? (
<Commentswrapper 
  Comments={item.Comments}
></Commentswrapper>
      ) : null }
          </>
        );
      })}
      <Input addpost={addpost}></Input>
    </div>
  );
}

export default posts;
