const express = require ("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // Включаем CORS для всех доменов

app.use((req, res, next) => {
    console.log(`\n--- ${req.url} Time: ${Date.now()} `);
    next(); //передача управления следующей функции-middleware
  });
  
  app.use(express.static(__dirname + "/public"));
  
  app.use(express.json()); //middleware для работы с body из fetch клиента


app.post('/number', (req, res) => {
  const number = req.body.number; // Получаем число из запроса
  res.json({ number: number-1 }); // Отправляем это же число обратно
});

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});