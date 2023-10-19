import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';


const Gifgrid = ({ category }: { category: string }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div className='card-grid'>
      <h1>{category}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))
      )}
    </div>
  );
};

export default Gifgrid;
