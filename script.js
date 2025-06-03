// Cambiar tema claro / oscuro
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Validar formulario
document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const carrera = document.getElementById('carrera').value.trim();
  const mensaje = document.getElementById('mensajeForm');

  if (!nombre || !correo || !carrera) {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡Inscripción enviada con éxito!";
    mensaje.style.color = "green";
    this.reset();
  }
});

// Cargar participantes aleatorios
window.addEventListener('DOMContentLoaded', () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => {
      const contenedor = document.getElementById('listaParticipantes');
      data.results.forEach(persona => {
        const div = document.createElement('div');
        div.className = "participante";
        div.innerHTML = `
          <img src="${persona.picture.medium}" alt="Foto de ${persona.name.first}">
          <p>${persona.name.first} ${persona.name.last}</p>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(err => console.error("Error al cargar participantes:", err));
});
