import express from 'express';
import httpGetMode from './mode.controller.js';

// How do I type this?
const modeRouter = express.Router();

modeRouter.get('/', httpGetMode);

export default modeRouter;
