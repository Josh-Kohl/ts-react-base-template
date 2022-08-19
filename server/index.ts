// TypeScript syntax for imports
import * as express from 'express';
import * as path from 'path';
const db = require('../database-mysql/index.ts');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));


db.getAllAuthors((err: any, data: any) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
});


app.get('/api/authors', (req, res) => {
  db.getAllAuthors((err: any, data: any) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.status(200).json(data);
  });
});

app.post('/api/updateAuthors', (req, res) => {
  db.addCategory(req.body.authors, (err: any, success: any) => {
    if (err) {
      console.log('Error inserting author to db: ', err);
      res.status(500).send();
      return;
    }
    console.log('Successfully added author option to database.');
    res.status(200).send('');
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
