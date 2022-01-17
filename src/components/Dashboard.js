import useFetch from './useFetch';
import useDate from './useDate';
import { useState, useEffect } from 'react';
//import LikeButton from './LikeButton';

const Dashboard = () => {
  //Get today's date
  const endDate = useDate(0);
  const startDate = useDate(2);
  let text = "Like";

  //Fetch image data
  const {data: posts, numObjects, isLoaded} = useFetch('https://api.nasa.gov/planetary/apod?api_key=W7iawCNJkLDutGN32iRFwseMCxmvT8LnYwG32XHM&start_date='
  + startDate + '&end_date=' + endDate
  );

  //const likedArray = new Array(numObjects).fill({text: 'Like'});
  const [likedPosts, setLikedPosts] = useState(['Like', 'Like', 'Like']);

  //Check if posts exist
  if(posts){
    //Create unique id for each object, add like state
    for(let i = 0; i < posts.length; i++){
      posts[i]["id"] = i;
    }
  }

  //update like state
  const handleClick = (index) =>{
    let newArr = [...likedPosts];

    //newArr[index] = 'Unlike';
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
    <div className="dashboard">
      {!isLoaded && <div>Loading...</div>}
      {posts && (posts.map(post=>(
        <div className="content" key={post.id}>
          <img
            src={post.url}
            alt={post.title}
          ></img>

          <p><span>{post.title}</span> - {post.date}</p>
          <button onClick={()=>handleClick(post.id)}>{likedPosts[post.id]}</button>
          {/*<LikeButton postID ={post.id} numObjects = {numObjects}/>*/}
        </div>
      )))}
    </div>
  );
}
  
  export default Dashboard;