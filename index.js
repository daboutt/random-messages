import dotenv from 'dotenv';
import fetchCocktail from './cocktail.js';
import fetchJokes from './jokes.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
dotenv.config();

console.log('CHUC NAM MOI THANH CONG');
fetchJokes(prompt('Enter number of jokes: '));
fetchCocktail(prompt('Enter cocktail name: '));
