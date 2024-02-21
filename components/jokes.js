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

export default jokesAPI;
