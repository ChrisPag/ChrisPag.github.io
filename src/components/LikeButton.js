import {FcLike} from 'react-icons/fc';
import { useState, useEffect } from 'react';

const LikeButton = (postID, numObjects) => {
    let text = "Like";
 
    const [likedPosts, setLikedPosts] = useState(['Like', 'Like', 'Like']);
    
    const handleClick = (index) =>{
        let newArr = [...likedPosts];
    
        if(newArr[index]==='Like'){
          newArr[index] = 'Unlike';
        }
        else{
          newArr[index] = 'Like';
        }
        setLikedPosts(newArr);
        console.log(likedPosts);
    
      }

    return (
        <div className="likeButton">
            <button onClick={()=>handleClick(postID)}>{likedPosts[postID]}<FcLike/></button>
        </div>
    );
}

export default LikeButton;