import useFetch from './useFetch';
import { useState, useEffect } from 'react';
import {FcLike} from 'react-icons/fc';

const Content = ({startDate, endDate}) => {
  //Fetch image data
  const {data: posts, numObjects, isLoaded} = useFetch('https://api.nasa.gov/planetary/apod?api_key=W7iawCNJkLDutGN32iRFwseMCxmvT8LnYwG32XHM&start_date='
  + startDate + '&end_date=' + endDate
  );

  //Create array for button text
  const likedArray = new Array(numObjects).fill('Like');
  
  //Update likedArray as posts load
  const [liked, setLiked] = useState([]);
  useEffect(()=>{
    setLiked(likedArray);
  },[numObjects, posts])
  
  //Update like state onClick
  const handleClick = (index) =>{
    let newArray = [...liked];
  
    if(newArray[index]==='Like'){
      newArray[index] = 'Unlike';
    }
    else{
      newArray[index] = 'Like';
    }
    setLiked(newArray);
  }

  return (
    <div className="content">
      {!isLoaded && <div>Loading...</div>}

      {/* slice() returns a new array, then reverse array
      so most recent post appears first */}
      {posts && (posts.slice(0).reverse().map((post, i)=>(
        <div className="posts" key={i}>
          <img
            src={post.url}
            alt={post.title}
          ></img>

          <p><span>{post.title}</span> - {post.date}</p>
          <button onClick={()=>handleClick(i)}>{liked[i]}<FcLike id= "like"/></button>
        </div>
      )))}
      
    </div>
  );
}
  
  export default Content;