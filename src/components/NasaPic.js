import useFetch from './useFetch';
import useDate from './useDate';

const NasaPic = () => {
  //Get today's date
  const endDate = useDate(0);
  const startDate = useDate(2);
 
  //Fetch image data
  const {data: posts} = useFetch('https://api.nasa.gov/planetary/apod?api_key=W7iawCNJkLDutGN32iRFwseMCxmvT8LnYwG32XHM&start_date='
  + startDate + '&end_date=' + endDate
  );
  
  //Check if posts exist
  if(posts){
    //Create unique id for each object 
    for(let i = 0; i < posts.length; i++){
      posts[i]["id"] = i;
    }
  }

  return (
    <div className="nasaPic">
      {posts && (posts.map((post)=>(
        <div className="content" key={post.id}>
          <img
            src={post.url}
            alt={post.title}
          ></img>

          <p><span>{post.title}</span> - {post.date}</p>
          <button>Like</button>

        </div>
      )))}
    </div>
  );
}
  
  export default NasaPic;