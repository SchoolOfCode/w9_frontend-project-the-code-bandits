const fetchFromAPI = async (url) => {
  const response = await fetch(url);
  const fetchData = await response.json();
  return fetchData;
};

export default fetchFromAPI;
