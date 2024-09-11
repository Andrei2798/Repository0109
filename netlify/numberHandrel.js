// netlify/functions/numberHandler.js
exports.handler = async function(event, context) {
    // Проверяем, что запрос POST
    if (event.httpMethod === 'POST') {
        const { number } = JSON.parse(event.body); // Получаем число из запроса
        
        // Возвращаем число, уменьшенное на 1
        return {
            statusCode: 200,
            body: JSON.stringify({ number: number - 1 })
        };
    }
    
    // Если запрос не POST, возвращаем ошибку
    return {
        statusCode: 405,
        body: 'Method Not Allowed'
    };
};