const io = require('socket.io-client');
const fs = require('fs');

var socket = io.connect('https://sserver-97bq.onrender.com/');

let dataArray = []; // Создаем массив для хранения полученных данных

socket.on('send', (data) => {
  console.log('Получены данные от сервера:', data); 

  // Добавляем полученный объект в массив
  dataArray.push(data);

  // Сохраняем весь массив с данными в JSON-файл
  fs.writeFileSync('data.json', JSON.stringify(dataArray, null, 2));
  console.log('Объект сохранен в файл data.json');
});
