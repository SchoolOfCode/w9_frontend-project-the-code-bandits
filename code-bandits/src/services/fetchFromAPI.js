const fetchFromAPI = async (url) => {
  const response = await fetch(url);
  const fetchData = await response.json();
  console.log(fetchData);
  return fetchData;
};

export default fetchFromAPI;
