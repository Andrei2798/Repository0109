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


async function sendNumber() {
    let numberToSend = document.getElementById("digitToSend").value;
    if (isNaN(numberToSend) || numberToSend.trim() === "") {
        document.querySelector("#digitMessage").style.color = "red";
        document.querySelector("#digitMessage").innerHTML = "Please enter a valid number!";
        return; // Останавливаем выполнение функции, если введено не число
    }
    // let numberToSend=55;
    console.log(numberToSend);
    console.log(typeof(numberToSend));
    numberToSend = Number(numberToSend);
    console.log(typeof(numberToSend));
    // Проверяем, что значение не пустое
    
    try {
        const response = await fetch('/number', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: numberToSend })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        let newData = JSON.stringify(data);
         
        document.querySelector("#digitMessage").style.color="green";
        document.querySelector("#digitMessage").innerHTML = `Response from server is ${data.number}`
    } catch (error) {
        console.error('Error:', error);
    }
}

sendNumber();