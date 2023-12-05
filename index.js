import axios from 'axios';

const YOUR_API_KEY = '+Byofta/hCgUw69/SLtDhQ==XtpXOVgy8efMvlC4';

const fetchJokes = async () => {
  let limit = 3;
  const response = await axios({
    method: 'get',
    url: `https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`,
    headers: { 'X-Api-Key': YOUR_API_KEY },
    contentType: 'application/json',
  });
  return response;
};

let data;
fetchJokes()
  .then((res) => {
    data = res.data;
    data.forEach((item) => console.log(item.joke));
  })
  .catch((err) => {
    console.log(err);
  });
