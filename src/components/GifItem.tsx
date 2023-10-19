interface GifgridProps {
  gif: {
    id: string;
    title: string;
    url: string;
  };
}

const GifItem: React.FC<GifgridProps> = ({ gif }) => {
  return (
    <div className="card">
      <h3>{gif.title}</h3>
      <img src={gif.url} alt="" />1
    </div>
  );
};

export default GifItem;
