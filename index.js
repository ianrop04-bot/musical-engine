import express from 'express'
const app = express()
app.use(express.json());

app.get('/get', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/items', (req, res) => {
  res.json({ created: req.body });
});

app.listen(3000, () => console.log('API running on port 3000'));