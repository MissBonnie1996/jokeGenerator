function generatejoke() {
    // arreglo de chistes
    var chistes = [
      "¿Por qué los programadores prefieren el modo nocturno? Porque la luz natural causa errores de sintaxis.",
      "¿Cómo se llama un programador que no hace ejercicio? Desarrollador sedentario.",
      "¿Por qué los programadores son buenos amantes? Porque siempre se aseguran de tener una copia de seguridad.",
      "¿Qué le dice un algoritmo a otro? Nos vemos en el loop.",
      "¿Por qué los programadores siempre confunden Halloween con Navidad? Porque octal es igual a decimal."
    ];
  
    // seleccionar un chiste aleatorio del arreglo
    var chisteAleatorio = chistes[Math.floor(Math.random() * chistes.length)];
  
    // mostrar el chiste en un párrafo de HTML
    document.getElementById("joke").innerHTML = chisteAleatorio;
  }
  