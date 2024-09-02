function isFillen(event) {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // Проверяем, введено ли "John" в поле name
    if (name === "John") {
        event.preventDefault(); // Предотвращаем отправку формы
        document.querySelector("#message").style.color="red";
       document.querySelector("#message").innerHTML="Name field cannot contain 'John'"
    }
}