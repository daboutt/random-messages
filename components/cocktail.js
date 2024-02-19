import axios from 'axios';

const cocktailAPI = async (name) => {
  const response = await axios.get(
    `${process.env.API_LINK}/cocktail?name=${name}`,
    {
      headers: { 'X-Api-Key': process.env.API_KEY },
    }
  );
  return response;
};
const fetchCocktail = async (name) => {
  cocktailAPI(name)
    .then((res) => {
      if (res.data.length === 0) {
        console.log('Cocktail not found');
      } else {
        console.log(res.data[0].instructions);
        console.log("end of cocktail's part ==========");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export default fetchCocktail;
