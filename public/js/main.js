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
const numberToSend = 8;

async function sendNumber() {
    try {
        const response = await fetch('/.netlify/functions/numberHandler', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: numberToSend })
        });

        const data = await response.json();
        console.log(`Server responded with: ${data.number}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

sendNumber()