import supertest from 'supertest';
import app from '../../../src/app.js';

const request = supertest(app);

describe('httpGetMode', () => {
  it('should respond with a 200 success', async () => {
    const httpGetMode = await request.get('/mode').send({ mode: 'program' });
    expect(httpGetMode.statusCode).toBe(200);
  });

  it('should catch invalid mode property values', async () => {
    const httpGetMode = await request.get('/mode').send({ mode: '' });
    expect(httpGetMode.statusCode).toBe(400);
    expect(httpGetMode.text).toBe('{"error":"Mode value must be immediate or program"}');
  });

  it('should return device mode equal to 1 in program mode', async () => {
    const httpGetMode = await request.get('/mode').send({ mode: 'program' });
    expect(httpGetMode.statusCode).toBe(200);
    expect(httpGetMode.text).toBe('1');
  });

  it('should return device mode equal to 0 in immediate mode', async () => {
    const httpGetMode = await request.get('/mode').send({ mode: 'immediate' });
    expect(httpGetMode.statusCode).toBe(200);
    expect(httpGetMode.text).toBe('0');
  });
});
