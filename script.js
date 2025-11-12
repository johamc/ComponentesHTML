// Variables para contar los votos
let votosBD = 0;
let votosWeb = 0;
let votosJS = 0;

// Función que se llama al hacer clic en cada botón
function votar(opcion) {
  if (opcion === "bd") {
    votosBD++;
    document.getElementById("votos-bd").textContent = votosBD;
  } else if (opcion === "web") {
    votosWeb++;
    document.getElementById("votos-web").textContent = votosWeb;
  } else if (opcion === "js") {
    votosJS++;
    document.getElementById("votos-js").textContent = votosJS;
  }
  // ✅ Muestra un mensaje al usuario
  alert("¡Gracias por tu voto!");
}
