function submit() {
    // Obtém os valores dos campos
    let nameUser = document.getElementById("name").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    // Verifica se altura e peso são números válidos e maiores que zero
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return; // Interrompe a execução se os valores forem inválidos
    }

    // Calcula o IMC
    let imc = weight / (height * height);

    // Exibe o resultado com duas casas decimais
    alert(`O seu Índice de Massa Corporal (IMC) é: ${imc.toFixed(2)}`);
}


