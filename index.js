import express from 'express';
import open from 'open';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();
const viewsPath = path.join(__dirname, 'views');
const port = 3030;

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

app.use(express.static(viewsPath));
app.use('/', router);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await open(`http://localhost:${port}`);
});
