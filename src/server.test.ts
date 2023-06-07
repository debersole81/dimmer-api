import { AddressInfo } from 'net';
import server from './server.js';

beforeEach((done) => {
  server.close(done);
  server.listen(process.env.PORT);
});

afterEach((done) => {
  server.close(done);
});

describe('server', () => {
  it('listens on the correct port', () => {
    const { port } = server.address() as AddressInfo;
    expect(port).toEqual(8888);
  });
});
