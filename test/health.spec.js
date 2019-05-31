
const request = require('request');
const expect = require('expect');

describe('Test healthcheck endpoint', () => {
  it('tests /health', done => {
    let options;
    options = {
      uri: 'http://localhost:4600/health',
    };
    request(options, (err, res, body) => {
      let payload;
      payload = JSON.parse(body);
      expect(payload.apiStatus).toBe('ok');
      done();
    });
  });
});
