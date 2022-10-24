import { Router } from 'express';
import Sms from '../models/Sms';
import VoiceCalls from '../models/VoiceCalls';
var router = Router();

/* GET all communications */
router.get('/', async function(req, res, next) {
  const sms = await Sms.findAll({
    attributes: ['datetime', 'to', 'from', 'message'],
  });

  const voiceCalls = await VoiceCalls.findAll({
    attributes: ['datetime', 'to', 'from'],
  });

  res.json([
    ...sms,
    ...voiceCalls,
  ])
});

export default router;
