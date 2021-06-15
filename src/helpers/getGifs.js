
export const getGifs = async (category) => {
  //encodeURI() es para codificar el parametro de busqueda
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=YcqPIK5ttzuDPjVvIhQPiUFe9P5DY9tn`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
 
  return gifs;
};
