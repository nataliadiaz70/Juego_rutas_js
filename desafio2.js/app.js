const pregunta = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const resultado = document.getElementById("resultado");

let elecciones = {
  area: "",
  camino: "",
  tecnologias: []
};

function mostrarOpciones(opciones, callback) {
  opcionesDiv.innerHTML = "";
  opciones.forEach(opcion => {
    let btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => callback(opcion);
    opcionesDiv.appendChild(btn);
  });
}

// Primera pregunta
function iniciarJuego() {
  pregunta.textContent = "¿Querés seguir hacia el área de Front-End o Back-End?";
  mostrarOpciones(["Front-End", "Back-End"], elegirArea);
}

function elegirArea(opcion) {
  elecciones.area = opcion;
  if (opcion === "Front-End") {
    pregunta.textContent = "Genial 👩‍💻. ¿Querés aprender React o Vue?";
    mostrarOpciones(["React", "Vue"], elegirFramework);
  } else {
    pregunta.textContent = "Perfecto 👨‍💻. ¿Querés aprender C# o Java?";
    mostrarOpciones(["C#", "Java"], elegirLenguaje);
  }
}

function elegirFramework(opcion) {
  elecciones.framework = opcion;
  siguientePaso();
}

function elegirLenguaje(opcion) {
  elecciones.lenguaje = opcion;
  siguientePaso();
}

function siguientePaso() {
  pregunta.textContent = "¿Querés seguir especializándote en el área elegida o convertirte en Fullstack?";
  mostrarOpciones(["Especializarme", "Fullstack"], elegirCamino);
}

function elegirCamino(opcion) {
  elecciones.camino = opcion;
  agregarTecnologias();
}

function agregarTecnologias() {
  pregunta.textContent = "¿Qué otra tecnología te gustaría aprender?";
  opcionesDiv.innerHTML = `
    <input type="text" id="inputTech" placeholder="Escribí una tecnología">
    <button onclick="guardarTecnologia()">Agregar</button>
    <button onclick="finalizarJuego()">Finalizar</button>
  `;
}

function guardarTecnologia() {
  const tech = document.getElementById("inputTech").value;
  if (tech) {
    elecciones.tecnologias.push(tech);
    resultado.textContent = `¡Genial! ${tech} fue agregada a tu camino de aprendizaje.`;
    document.getElementById("inputTech").value = "";
  }
}

function finalizarJuego() {
  pregunta.textContent = "Tu camino de aprendizaje quedó así:";
  opcionesDiv.innerHTML = "";
  resultado.innerHTML = `
    Área: ${elecciones.area} <br>
    ${elecciones.framework ? "Framework: " + elecciones.framework : "Lenguaje: " + elecciones.lenguaje} <br>
    Camino: ${elecciones.camino} <br>
    Tecnologías adicionales: ${elecciones.tecnologias.join(", ")}
  `;
}

// Inicia el juego
iniciarJuego();
