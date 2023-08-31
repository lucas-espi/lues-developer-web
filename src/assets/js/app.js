// CONEXIÓN CON EL DOM

const boxPorfolio = document.getElementById("box-porfolio");

const proyectos = [];
const URL = "/src/assets/js/bbdd/bbdd.json";

// Conexión fetch
const cargarContenido = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        proyectos.push(...data);
        createCard(proyectos); // Pasar 'proyectos' en lugar de '...data'
    } catch (error) {
        console.log('Error:', error);
    }
};
cargarContenido();

// Función para iterar array/json (proyectos) y crear elementos HTML dinámicamente con JS
const createCard = (array) => {
    boxPorfolio.innerHTML = '';

    array.forEach((pro) => {
        let div = document.createElement('div');
        div.setAttribute("class", "portfolio-card-box");
        div.innerHTML +=
            `
            <img src="${pro.imagen}" class="img-card" alt="Previsualización del Proyecto">
            <h2 class="h2-card">${pro.titulo}</h2>
            <p class="p-card">${pro.descripcion}</p>
            <div class="links">
                <a href="${pro.urlProyecto}" class="btn-url" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visitar</a>
                <a href="${pro.urlGithub}" class="btn-github" target="_blank"> <i class="fa-brands fa-github"></i>GitHub</a>
            </div>
            `;
        boxPorfolio.appendChild(div);
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuInput = document.querySelector(".menu-input");
    const menuLinks = mobileMenu.querySelectorAll(".li-link");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", ()=> {
            menuInput.checked = false; // Cierra el menú al hacer clic en un enlace
        });
    });
});