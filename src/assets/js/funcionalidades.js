// Obtengo boton de modo light / dark
const toggleButton = document.getElementById('toggle-mode');
// Obtengo body
const body = document.body;
//  Obtengo el elemento :root
const rootElement = document.documentElement;


// Variable para realizar un seguimiento del estado actual (light o dark)
let isDarkMode = localStorage.getItem('isDarkMode') === 'false';


function toggleMode() {
    // body.classList.toggle('light-mode');
    // body.classList.toggle('dark-mode');

    // Verifica el estado actual y cambia los valores de las variables CSS en consecuencia
    if (isDarkMode) {
      rootElement.style.setProperty('--color-background-1', '#F7F9F9');
      rootElement.style.setProperty('--color-background-2', '#283747');
      rootElement.style.setProperty('--color-white', '#F0F3F4');
      rootElement.style.setProperty('--color-black', '#212F3D');
      rootElement.style.setProperty('--color-maquina', '#CB4335');
      rootElement.style.setProperty('--color-btn-cv', '#212F3D');
      rootElement.style.setProperty('--color-card', '#405b72');
      rootElement.style.setProperty('--color-btn-card', '#AABD8C');
    } else {
      rootElement.style.setProperty('--color-background-1', '#283747');
      rootElement.style.setProperty('--color-background-2', '#F7F9F9');
      rootElement.style.setProperty('--color-white', '#212F3D');
      rootElement.style.setProperty('--color-black', '#F0F3F4');
      rootElement.style.setProperty('--color-maquina', '#C5E6A6');
      rootElement.style.setProperty('--color-btn-cv', '#C5E6A6');
      rootElement.style.setProperty('--color-card', '#546584');
      rootElement.style.setProperty('--color-btn-card', '#C5E6A6');
    }
  
    // Invierte el estado
    isDarkMode = !isDarkMode;

    // Guarda el estado en localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
};

    // Agrega un controlador de eventos para el clic en el botón
    toggleButton.addEventListener('click', toggleMode);

   // Aplica el modo inicial al cargar la página
   toggleMode();


// -----------------------------------------------------------------------------------------
// cambios en modo dark / light
document.addEventListener("DOMContentLoaded", function () {
    const toggleModeButton = document.getElementById("toggle-mode");
    const moonIcon = toggleModeButton.querySelector(".fa-moon");
    const sunIcon = document.createElement("i");
    sunIcon.classList.add("fa-regular", "fa-sun");
    
    // Inicialmente, estamos en modo luna
    let isMoonMode = true;

    toggleModeButton.addEventListener("click", function () {
        if (isMoonMode) {
            // Si estamos en modo luna, cambia al modo sol
            toggleModeButton.removeChild(moonIcon);
            toggleModeButton.appendChild(sunIcon);
        } else {
            // Si estamos en modo sol, cambia al modo luna
            toggleModeButton.removeChild(sunIcon);
            toggleModeButton.appendChild(moonIcon);
        }

        // Invierte el estado
        isMoonMode = !isMoonMode;
    });
});

// ---------------------------------------------------------------------------------------
