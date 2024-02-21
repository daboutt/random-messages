import dotenv from 'dotenv';
import fetchCocktail from './components/cocktail.js';
import jokesAPI from './components/jokes.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
dotenv.config();

console.log('CHUC NAM MOI THANH CONG');
jokesAPI(prompt('Enter number of jokes: '))
  .then((res) => {
    res.data.forEach((joke, index) => {
      console.log(`${index + 1}. ${joke.joke}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
fetchCocktail(prompt('Enter cocktail name: '));
