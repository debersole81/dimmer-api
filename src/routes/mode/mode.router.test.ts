import modeRouter from './mode.router.js';

describe('Mode Router', () => {
  it('has routes', () => {
    const routes = [{ path: '/', method: 'get' }];

    routes.forEach((route) => {
      const match = modeRouter.stack.find(
        (stack) => stack.route.path === route.path && stack.route.methods[route.method],
      );
      expect(match).toBeTruthy();
    });
  });
});
