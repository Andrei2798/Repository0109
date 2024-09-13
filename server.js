const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Обслуживаем статические файлы из папки public

app.use(express.json()); // Для обработки JSON

app.post('/number', (req, res) => {
  try {
    const number = req.body.number;
    if (typeof number !== 'number') {
      throw new Error('Invalid input');
    }
    res.json({ number: number + 15 });
  } catch (error) {
    console.error('Error in /number route:', error.message);
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Общий обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});