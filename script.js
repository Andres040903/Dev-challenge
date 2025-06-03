document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const carrera = document.getElementById("carrera").value.trim();
  const mensaje = document.getElementById("mensajeForm");

  if (!nombre || !correo || !carrera) {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡Inscripción enviada con éxito!";
    mensaje.style.color = "green";
    this.reset();
  }
});

fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("listaParticipantes");
    data.results.forEach(user => {
      const div = document.createElement("div");
      div.className = "participante";
      div.innerHTML = `
        <img src="${user.picture.medium}" alt="Foto de ${user.name.first}" />
        <p>${user.name.first} ${user.name.last}</p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error cargando participantes:", error);
  });
