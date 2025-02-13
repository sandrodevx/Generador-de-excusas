// Arrays de las diferentes partes de la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my laptop'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Función para generar una excusa aleatoria
function generateExcuse() {
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

    // Concatenamos las partes para formar la excusa
    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
}

// Al cargar la página, se genera y muestra la excusa
window.onload = function() {
    // Generar la excusa y mostrarla con un pequeño efecto
    let excuseElement = document.getElementById('excuse');
    excuseElement.innerHTML = generateExcuse();
};

// Añadir un pequeño efecto cuando se genera una nueva excusa
function updateExcuse() {
    let excuseElement = document.getElementById('excuse');
    
    // Añadir la clase para el efecto de desvanecimiento
    excuseElement.classList.add('fade');
    
    // Esperamos que termine el efecto y luego actualizamos la excusa
    setTimeout(function() {
        excuseElement.innerHTML = generateExcuse();
        excuseElement.classList.remove('fade');
    }, 1000);  // Tiempo del efecto
}