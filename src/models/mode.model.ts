const modes = ['immediate', 'program'];

/**
 * function that validates the mode value received from the request
 * @param {string} mode - current mode setting
 * @returns boolean
 */
export function validateModeRequest(mode: string): boolean {
  return modes.includes(mode);
}

/**
 * function that returns an integer based on current mode
 * @param {string} mode - current mode setting
 * @returns integer
 */

export function getMode(mode: string): number {
  if (mode === 'program') return 1;
  return 0;
}
