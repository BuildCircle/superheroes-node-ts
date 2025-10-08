import express from 'express';
import { battle } from './battle';

const app = express();

app.get('/battle', (req: any, res: any) => {
  const hero = { name: req.query.hero, type: 'hero' }
  const villain = { name: req.query.villain, type: 'villain' }

  const result = battle(hero, villain)
  res.send(result);
});

// app.listen(3000, () => {
//     console.log(`Example app listening on port 3000}`)
// })

export default app;