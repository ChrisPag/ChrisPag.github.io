import { useState } from "react";
import useDate from "./useDate";
import useFetch from './useFetch';

const ShowMore = () => {
    const newEndDate = useDate(3);
    const newStartDate = useDate(4);

    const [showContent, setShowContent] = useState(false);

    const {data: morePosts} = useFetch('https://api.nasa.gov/planetary/apod?api_key=W7iawCNJkLDutGN32iRFwseMCxmvT8LnYwG32XHM&start_date='
  + newStartDate + '&end_date=' + newEndDate
  );

    const handleClick = () =>{
        setShowContent(true);
    }

    return (
      <div className="showMore"> 
        {showContent &&
        <div className="moreContent"> 
          {morePosts && (morePosts.map((post, id)=>(
            <div className="content" key={morePosts.id}>
              <img
                src={post.url}
                alt={post.title}
              ></img>

              <p>{post.title}</p>
              <p>{post.date}</p>
            </div>
          )))}
        </div>}
        <button onClick={handleClick}>Show More</button>
      </div>
    );
  }
  
  export default ShowMore;