import {FcLike} from 'react-icons/fc';

const LikeButton = (postID, numObjects) => {

    let likedPost = new Array(numObjects).fill(false);
    let likeText = "Like";

    const handleClick = (postID) =>{
        likedPost[postID] = !likedPost[postID];
        console.log(likedPost[postID]);
    }

    return (
        <div className="likeButton">
            <button onClick={() =>handleClick(postID)}>{/*likeText*/}Like <FcLike id="like"/></button>
        </div>
    );
}

export default LikeButton;