import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [numObjects, setNumObjects] = useState();

    useEffect(() => {
      setIsLoaded(false);
      fetch(url)
      .then(response => {
        if(!response.ok){
        throw Error('Could not fetch the data');
        }
        return response.json()
      })

      .then(data =>{
        setData(data);
        setIsLoaded(true);
        setNumObjects(data.length);
      })

      .catch(error => {
        console.log(error.message);
      });
    }, [url]);

    return {data, isLoaded, numObjects};
  }
  
export default useFetch;