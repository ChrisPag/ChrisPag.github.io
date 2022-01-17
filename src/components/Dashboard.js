import useFetch from './useFetch';
import useDate from './useDate';
import { useState, useEffect } from 'react';
import {FcLike} from 'react-icons/fc';
//import LikeButton from './LikeButton';

const Dashboard = () => {
  //Get today's date
  const endDate = useDate(0);
  const startDate = useDate(2);
  
  //Fetch image data
  const {data: posts, numObjects, isLoaded} = useFetch('https://api.nasa.gov/planetary/apod?api_key=W7iawCNJkLDutGN32iRFwseMCxmvT8LnYwG32XHM&start_date='
  + startDate + '&end_date=' + endDate
  );

  //Create array for button text
  const likedArray = new Array(numObjects).fill('Like');
  
  //Update button text array (likedArray) as posts load
  const [liked, setLiked] = useState([]);
  useEffect(()=>{
    setLiked(likedArray);
  },[numObjects, posts])

  //Check if posts exist
  if(posts){
    //Create unique id for each object, add like state
    for(let i = 0; i < posts.length; i++){
      posts[i]["id"] = i;
    }
  }
  
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
    <div className="dashboard">
      {!isLoaded && <div>Loading...</div>}
      {posts && (posts.map(post=>(
        <div className="content" key={post.id}>
          <img
            src={post.url}
            alt={post.title}
          ></img>

          <p><span>{post.title}</span> - {post.date}</p>
          <button onClick={()=>handleClick(post.id)}>{liked[post.id]}<FcLike id= "like"/></button>
          {/*<LikeButton postID ={post.id} numObjects = {numObjects}/>*/}
        </div>
      )))}
    </div>
  );
}
  
  export default Dashboard;