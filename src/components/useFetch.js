import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [error, setError] = useState(false);
    const [numObjects, setNumObjects] = useState();

    useEffect(() => {
      setIsLoaded(false);
      setError(false);
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
        setError(true);
        setErrorMessage(error.message);
      });
    }, [url]);

    return {data, isLoaded, numObjects, errorMessage, error};
  }
  
export default useFetch;