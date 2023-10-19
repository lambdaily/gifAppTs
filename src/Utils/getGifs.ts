type Gif = {
  id: string;
  title: string;
  url: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
};

export const getGifs = async (category: string): Promise<Gif[]> => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_API_KEY
      }&q=${category}&limit=3`
    );
    const { data } = await response.json();

    const gifs: Gif[] = data.map((gif: Gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error('Error al obtener los GIFs:', error);
    throw error;
  }
};

export type { Gif };
