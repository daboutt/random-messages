import axios from 'axios';

const jokesAPI = async (numOfJokes) => {
  const response = await axios.get(
    `${process.env.API_LINK}/dadjokes?limit=${numOfJokes}`,
    {
      headers: { 'X-Api-Key': process.env.API_KEY },
    }
  );
  return response;
};
const fetchJokes = async (numOfJokes) => {
  jokesAPI(numOfJokes)
    .then((res) => {
      res.data.forEach((joke, index) => {
        console.log(`${index + 1}. ${joke.joke}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export default fetchJokes;
