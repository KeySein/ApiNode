function sumar() {
    const numA = parseFloat(document.getElementById('numero1').value);
    const numB = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son números válidos
    if (isNaN(numA) || isNaN(numB)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese números válidos.";
        return;
    }

    // Llamar a la API
    fetch('https://apinode-jyg1.onrender.com/sumar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1: numA, num2: numB })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            document.getElementById('resultado').textContent = "Error: " + data.error;
        } else {
            document.getElementById('resultado').textContent = "Resultado: " + data.resultado;
        }
    })
    .catch(error => {
        document.getElementById('resultado').textContent = "Error de conexión: " + error.message;
});
}