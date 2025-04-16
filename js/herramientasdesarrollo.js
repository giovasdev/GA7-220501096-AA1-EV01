const tools = [
  {
    name: "Visual Studio Code",
    type: "Editor de código",
    desc: "Un entorno de desarrollo ligero pero poderoso con integración para depuración, control de versiones y extensiones.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    features: ["Multiplataforma", "Extensiones para cualquier lenguaje", "Integración con Git"]
  },
  {
    name: "Git",
    type: "Control de versiones",
    desc: "Permite llevar el seguimiento de los cambios realizados en el código fuente, facilitando la colaboración y revertir errores.",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    features: ["Ramas y fusiones", "Historial detallado", "Trabajo colaborativo"]
  },
  {
    name: "GitHub",
    type: "Repositorio remoto",
    desc: "Aloja proyectos Git en la nube, ideal para compartir, colaborar y desplegar software.",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    features: ["Pull Requests", "Issues y Proyectos", "GitHub Actions"]
  },
  {
    name: "Postman",
    type: "Pruebas de API",
    desc: "Facilita la creación, prueba y documentación de APIs RESTful en entornos de desarrollo.",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    features: ["Pruebas automatizadas", "Colecciones de endpoints", "Documentación en línea"]
  },
  {
    name: "Docker",
    type: "Contenedores",
    desc: "Estandariza la ejecución del software en cualquier entorno gracias al uso de contenedores ligeros.",
    img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    features: ["Aislamiento del entorno", "Portabilidad", "Automatización de despliegues"]
  },
  {
    name: "Node.js",
    type: "Entorno de ejecución",
    desc: "Permite ejecutar código JavaScript fuera del navegador, ideal para crear servidores y herramientas CLI.",
    img: "https://nodejs.org/static/images/logo.svg",
    features: ["Rendimiento no bloqueante", "Ecosistema npm", "Backends ligeros"]
  }
];

const container = document.getElementById("toolCards");

tools.forEach(tool => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="${tool.img}" alt="${tool.name}">
      <h2>${tool.name}</h2>
      <small>${tool.type}</small>
      <p>${tool.desc}</p>
      <ul>${tool.features.map(f => `<li>${f}</li>`).join('')}</ul>
    `;
  container.appendChild(card);
});

// Animación al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});
