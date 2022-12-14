import { Router } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../models/db';
var router = Router();

/* GET all communications */
router.get('/', async function(req, res, next) {

  const typeQuery = req?.query?.type as string;

  const from = req.query.from as string;
  const type = typeQuery ? typeQuery.split(',') : null;

  // Ideally we'd be able to use the Sms and VoiceCalls models defined in the models folder, but
  // Sequelize apparently doesn't have built-in support for Union queries, so we gotta fall back to a raw query
  // I learned this after I'd already picked it, and time constraints mean I gotta keep going down this path
  let query = `SELECT * FROM (SELECT datetime, "to", "from", "message", "sms" as "type" FROM 'sms' UNION SELECT datetime, "to", "from", "" as "message", "voice" as "type" FROM 'voice_calls')  where 1=1`;
  if (from) {
    query += ` AND "from" = :from`;
  }
  if (type) {
    query += ` AND type IN (:type)`;
  }

  query += ' ORDER BY datetime desc';

  const conversations = await sequelize.query(query,
  {
    replacements: { from, type },
    type: QueryTypes.SELECT
  });

  res.json(conversations.map((value, index) => {
    return {
      id: index,
      ...value,
    }
  }));
});

export default router;
