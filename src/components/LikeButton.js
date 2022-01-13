import {FcLike} from 'react-icons/fc';

const LikeButton = (postID) => {

    const handleClick = () =>{
        console.log(postID);
    }

    return (
        <div className="likeButton">
            <button onClick={handleClick}>Like <FcLike id="like"/></button>
        </div>
    );
}

export default LikeButton;