import { getMode, validateModeRequest } from './mode.model.js';

describe('validateModeRquest', () => {
  it('should return true if a valid mode value is sent in the request', () => {
    const validMode = validateModeRequest('immediate');
    expect(validMode).toEqual(true);
  });

  it('should return false if an invalid mode value is sent in the request', () => {
    const invalidMode = validateModeRequest('1234');
    expect(invalidMode).toEqual(false);
  });
});

describe('getMode', () => {
  it('should set mode to 0 when mode is immediate', () => {
    const mode = getMode('immediate');
    expect(mode).toEqual(0);
  });

  it('should set mode to 1 when mode is program', () => {
    const mode = getMode('program');
    expect(mode).toEqual(1);
  });
});
