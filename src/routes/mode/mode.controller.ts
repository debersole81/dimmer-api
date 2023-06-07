import { Request, Response } from 'express';
import { validateModeRequest, getMode } from '../../models/mode.model.js';

/**
 * function that gets the mode value from the client
 * @param {object} req request from device to get the current mode
 * @param {integer} res integer value representing current mode { 0 || 1 }
 * @returns response status and mode value
 */

export default function httpGetMode(req: Request, res: Response) {
  const { mode } = req.body;
  if (!validateModeRequest(mode)) {
    return res.status(400).json({
      error: 'Mode value must be immediate or program',
    });
  }

  const deviceMode = getMode(mode);
  return res.status(200).json(deviceMode);
}
