// CONECCIÓN CON EL DOM

const boxPorfolio = document.getElementById("box-porfolio");


const proyectos = [
    {
        titulo: "Eureka Artesanal",
        imagen:"https://imgur.com/fglU0ex",
        descripcion:'Descripción breve del proyecto.',
        urlProyecto: 'https://lucas-espi.github.io/Proyecto_final-Eureka/',
        urlGithub: 'https://github.com/lucas-espi/Proyecto_final-Eureka'
    },
    {
        titulo: "Camino Aventura",
        imagen:"https://imgur.com/rAvZOUp",
        descripcion:'Descripción breve del proyecto.',
        urlProyecto: 'https://lucas-espi.github.io/ProyectoFinal-JS/',
        urlGithub: 'https://github.com/lucas-espi/ProyectoFinal-JS'
    },
    {
        titulo: "Camino Aventura II",
        imagen:"https://imgur.com/cM4P5Qk",
        descripcion:'Descripción breve del proyecto.',
        urlProyecto: 'https://camino-aventura.netlify.app',
        urlGithub: 'https://github.com/lucas-espi/Camino-Aventura-React'
    },
    {
        titulo: "Camino Aventura II",
        imagen:"https://imgur.com/cM4P5Qk",
        descripcion:'Descripción breve del proyecto.',
        urlProyecto: 'https://camino-aventura.netlify.app',
        urlGithub: 'https://github.com/lucas-espi/Camino-Aventura-React'
    }
]

// Funcion para itertar array/json (proyectos) y crear elementos HTML dinámicamente con JS

const createCard = (array) => {
    boxPorfolio.innerHTML = '';

    array.forEach( (pro) => {
        let div = document.createElement('div');
        div.setAttribute ("class", "portfolio-card-box");
            div.innerHTML +=
            `
            <img src="${pro.imagen}" class="img-card" alt="Previsualización del Proyecto">
            <h2 class="h2-card">${pro.titulo}</h2>
            <p class="p-card">${pro.descripcion}</p>
            <div class="links">
                <a href="${pro.urlProyecto}" class="btn-url" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visitar</a> 
                <a href="${pro.urlGithub}" class="btn-github" target="_blank"> <i class="fa-brands fa-github"></i>GitHub</a>
            </div>
            ` 
            boxPorfolio.appendChild(div)
    });
}

createCard(proyectos);

// console.log('probando js')
