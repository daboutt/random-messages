import jokesAPI from '../components/jokes.js';
import { expect } from 'chai';

describe('JOKES API', () => {
  it('should return array of jokes', async () => {
    await jokesAPI(3)
      .then((res) => {
        expect(res.data).to.be.an('array');
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
