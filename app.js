function calcularPromedio() {

    // Obtener las notas
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    // Obtener el lugar donde mostraremos el resultado
    const resultado = document.getElementById("resultado");

    // Validar que las notas sean válidas
    if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        resultado.innerText = "Las notas deben estar entre 0 y 5.";
        return;
    }

    // Calcular promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el promedio
    resultado.innerText = `Tu promedio es: ${promedio.toFixed(2)}`;

    // Determinar si aprobó
    if (promedio >= 3) {

        resultado.innerText += " — ¡Aprobaste! 🎉";

    } else {

        resultado.innerText += " — Reprobaste. 😔";
    }
}