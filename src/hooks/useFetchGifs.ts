import { useState, useEffect } from 'react';
import { getGifs } from '../Utils/getGifs';

type Gif = {
  id: string;
  title: string;
  url: string;
};


const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category)
      .then((gifsData) => {
        setGifs(gifsData);
        setIsLoading(false);
      });
  }, [category]);

  return {
    gifs, 
    isLoading,  
  };
};

export default useFetchGifs;
