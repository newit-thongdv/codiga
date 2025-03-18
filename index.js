import express from 'express';
import open from 'open';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public')

const app = express();
const router = express.Router();
app.use(express.static(publicPath));

const port = 3030;

const dbConfig = {
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'codiga',
};

let connection;


async function connectDB() {
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ MySQL connected successfully!');
  } catch (error) {
    console.error('❌ MySQL connection failed:', error);
    process.exit(1); // Dừng server nếu không kết nối được
  }
}

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

app.use('/', router);

async function startServer() {
  await connectDB();
  app.listen(port, async () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    await open(`http://localhost:${port}`);
  });
}

startServer();
