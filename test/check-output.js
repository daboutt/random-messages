import fetchJokes from '../index.js';
import { expect } from 'chai';

describe('fetchJokes', () => {
  it('should fetch jokes', async () => {
    const response = await fetchJokes();
    expect(response.status).to.equal(200);
  });
});
