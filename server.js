const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Обслуживаем статические файлы из папки public

app.post('/number', (req, res) => {
  // Обработка POST-запроса
  const number = req.body.number;
  res.json({ number: number - 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});