import axios from 'axios';

const YOUR_API_KEY = '+Byofta/hCgUw69/SLtDhQ==XtpXOVgy8efMvlC4';
const LIMIT_JOKES = 3;
let data;

const fetchJokes = async () => {
  const response = await axios({
    method: 'get',
    url: `https://api.api-ninjas.com/v1/dadjokes?limit=${LIMIT_JOKES}`,
    headers: { 'X-Api-Key': YOUR_API_KEY },
    contentType: 'application/json',
  });
  return response;
};
console.log('CHUC NAM MOI THANH CONG');
fetchJokes()
  .then((res) => {
    data = res.data;
    data.forEach((item) => console.log(item.joke));
  })
  .catch((err) => {
    console.log(err);
  });
