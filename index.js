import dotenv from 'dotenv';
import fetchCocktail from './components/cocktail.js';
import fetchJokes from './components/jokes.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
dotenv.config();

console.log('CHUC NAM MOI THANH CONG');
fetchJokes(prompt('Enter number of jokes: '));
fetchCocktail(prompt('Enter cocktail name: '));
