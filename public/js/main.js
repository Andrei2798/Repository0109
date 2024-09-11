function isFillen(event) {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // Проверяем, введено ли "John" в поле name
    if (name === "John"||name=="" ) {
        event.preventDefault(); // Предотвращаем отправку формы
        document.querySelector("#message").style.color="red";
       document.querySelector("#message").innerHTML="Name field cannot contain 'John' or be empty"
    }
}


// Число, которое нужно отправить на сервер
const numberToSend = 8; // Можно указать любое число

async function sendNumber() {
    try {
        // Отправляем POST-запрос на сервер
        const response = await fetch('/.netlify/functions/numberHandler', {
            method: 'POST', // Метод запроса
            headers: {
                'Content-Type': 'application/json' // Устанавливаем тип контента JSON
            },
            body: JSON.stringify({ number: numberToSend }) // Преобразуем число в JSON и отправляем
        });

        // Ожидаем ответ от сервера
        const data = await response.json();

        // Выводим ответ от сервера в консоль
        console.log(`Server responded with: ${data.number}`);
    } catch (error) {
        console.error('Error:', error); // В случае ошибки выводим ее в консоль
    }
}

// Вызываем функцию отправки числа сразу после загрузки скрипта
sendNumber();