import './App.css';
import Axios from 'axios'
import React,{ useState, useEffect } from 'react';

function App() {
  // state variable called images where everything will be stored plus React hook setImages using useState
  const [images, setImages] = useState([]);

  // create constant for API URL. Using async and await, API is called, and passed to Axios, which will parse data and 
  // and store the response in a state variable.
  const fetchImages = async() => {
    const apiUrl = `https://dummyjson.com/products/1`;
    const resp = await Axios(apiUrl);
    setImages(resp.data.images)
  }

  // calls fetchImages 
  useEffect(() => {
    fetchImages();
  }, [])

  // checks if the console is looking at the right thing (in this case, the images)
  useEffect(() => {
    console.log(images)
  }, [images])


  // iterate through array of images
  return (
    <div>
      {
        images.map(image => (
          <img src = {image} />
        )
        )}     
    </div>
  );
  }

  export default App;

