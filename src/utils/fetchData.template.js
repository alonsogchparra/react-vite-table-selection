import axios from 'axios';

export const fetchData = async () => {
  const response = await axios
    .get(
      '<API LINK HERE>',
      { timeout: 5000 }
    )
    .then((res) => res.data)
    .then((res) => res.data)
    // I used two then because I was using marvel api and I want to get the result array
    // And your case could be different
    .catch((error) => console.log('ERROR', error));

  return response;
};
