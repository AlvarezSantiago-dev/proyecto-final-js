/* pasado a json a formato json.
const peliculas = [
    { id: 1, nombre: "Barbie", imagen: "../img/peliculabarbie.jpg" },
    { id: 2, nombre: "AlmaMula", imagen: "../img/peliculaalmamula.jpg" },
    { id: 3, nombre: "Contrareloj", imagen: "../img/peliculacontrareloj.jpg" },
    { id: 4, nombre: "Asteroid", imagen: "../img/peliculaasteroid.jpg" },
    { id: 5, nombre: "La Monja", imagen: "../img/peliculalamonja.jpg" },
    { id: 6, nombre: "Poderes Ocultos", imagen: "../img/peliculapoderesocultos.jpg" },
    { id: 7, nombre: "Oppenheimer", imagen: "../img/peliculaoppenheimer.jpg" },
    { id: 8, nombre: "Hablame", imagen: "../img/peliculahablame.jpg" },
    { id: 9, nombre: "Fragmentada", imagen: "../img/peliculafragmentada.jpg" },
    { id: 10, nombre: "Gran Turismo", imagen: "../img/peliculagranturismo.jpg" },
    { id: 11, nombre: "Elementos", imagen: "../img/peliculaselementos.jpg" },
    { id: 12, nombre: "Megalodon 2", imagen: "../img/peliculamegalodon2.jpg" },
];
*/
fetch("./db.json")
.then(response => response.json())
.then(peliculas => {
    peliculas.forEach(item => {
        const divspelis = document.createElement("div");
        divspelis.innerHTML = `
        <img src="${item.imagen}">
        <button class="btn" id="${item.id}">Elegir Peli</button>`;
        maingaleria.append(divspelis);
    });
})
const dias = [
    {id: "a", dia:"Lunes"},
    {id: "b", dia:"Martes"},
    {id: "c", dia:"Miercoles"},
    {id: "d", dia:"Jueves"},
    {id: "e", dia:"Viernes"},
    {id: "f", dia:"Sabado"},
    {id: "g", dia:"Domingo"},
];

// Traemos los contenedores a JS
const conthorario = document.getElementById(`containerhorario`);
const contcombo = document.getElementById(`containercombos`);
const maingaleria = document.getElementById('galeriapelis');
const contdias = document.getElementById(`containerdias`); // Días
const contentradas = document.getElementById(`containerentradas`);
const contpelielegida = document.getElementById(`peliseleccionada`);

// Funciones para ocultar contenido
function ocultarGaleria() {
    galeriapelis.style.display = "none";
}
function ocultarPeliselecc() {
    peliselecionada.style.display = "none";
}
function ocultarCombos() {
    containercombos.style.display = "none";
}
function ocultarHorario() {
    containerhorario.style.display = "none";
}
function ocultarDias() {
    containerdias.style.display = "none";
}
function ocultarEntradas() {
    containerentradas.style.display = "none";
}

// Funciones para mostrar contenido
function mostrarGaleria() {
    galeriapelis.style.display = "block";
}
function mostrarCombos() {
    containercombos.style.display = "block";
}
function mostrarHorario() {
    containerhorario.style.display = "block";
}
function mostrarDias() {
    containerdias.style.display = "block";
}
function mostrarEntradas() {
    containerentradas.style.display = "block";
}
function mostrarPeliSelecc() {
    peliseleccionada.style.display = "block";
}

// Recorrido

dias.forEach(item => {
    const divsdias = document.createElement("div");
    divsdias.innerHTML = `
    <button class = "btn" id="${item.id}">${item.dia}</button>`
    contdias.append(divsdias);
});
// Creamos la opción de los días
const seleccentradas = document.createElement('div');
seleccentradas.innerHTML = `
<h2>Paso 3: Seleccione la cantidad de entradas que desea.</h2>
<select id="entradas">
    <option value="1">1  Entrada</option>
    <option value="2">2  Entradas</option>
    <option value="3">3  Entradas</option>
    <option value="4">4  Entradas</option>
    <option value="5">5  Entradas</option>
    <option value="6">6  Entradas</option>
</select>`
contentradas.append(seleccentradas);

// Creamos la opción de las entradas

// Creamos la opción del horario
const selecchorario = document.createElement("div");
selecchorario.innerHTML = `
<h2>Paso 4: Seleccione un Horario</h2>
<input type="radio" name="horario" value="18:00 PM"> 18:00 PM
<input type="radio" name="horario" value="20:00 PM"> 20:00 PM
<input type="radio" name="horario" value="22:00 PM"> 22:00 PM`;
conthorario.append(selecchorario);

// Creamos la opción de los combos
const selecccombo = document.createElement("div");
selecccombo.innerHTML = `
<h2>Paso 5: Seleccione un Combo</h2>
<input type="radio" name="combo" value="ComboPersonalizado"> ComboPersonalizado: En nuestra zona de retiro realiza su pedido personalizado.<br>
<input type="radio" name="combo" value="MegaCombo"> MegaCombo: Balde palomitas + 2 vasosGrandes + Golosina<br>
<input type="radio" name="combo" value="ComboGrande"> ComboGrande: Balde palomitas + 2 vasosGrandes<br>
<input type="radio" name="combo" value="ComboChico"> ComboChico: Bolsa palomitas + 2 vasosChicos`;
contcombo.append(selecccombo);

// Guardamos todos los datos en un objeto vacío
const datos = {};

// Seleccionamos los inputs de name = combo para realizar un forEach solo a ellos
const combos = document.querySelectorAll('input[name="combo"]');
combos.forEach((combo) => {
    // Al valor guardado le agregamos el evento change
    combo.addEventListener("change", () => {
        datos.combo = combo.value;
    });
});

// Creamos un bucle for para seleccionar una película según su id y guardamos su nombre
for (let i = 0; i < peliculas.length; i++) {
    document.getElementById(`${peliculas[i].id}`).addEventListener("click", () => {
        datos.pelicula = `${peliculas[i].nombre}`;
        Toastify({
            text: `Selecciono la pelicula ${peliculas[i].nombre}`,
            className: "info",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        const pelielegida = document.createElement("div");
        pelielegida.innerHTML = `
            <h2>Seleccionó la película: ${peliculas[i].nombre}</h2>
            <img src="${peliculas[i].imagen}">`
        peliseleccionada.append(pelielegida);
        mostrarPeliSelecc();
        ocultarGaleria();
    });
}

for (let i = 0; i < dias.length; i++) {
    document.getElementById(`${dias[i].id}`).addEventListener("click", () => {
        datos.dia = `${dias[i].dia}`;
        Toastify({
            text: `Selecciono el dia ${dias[i].dia}`,
            className: "info",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    });
}

// Llamamos al elemento con id "entradas" para guardar su valor en datos.entradas
document.getElementById("entradas").addEventListener("change", () => {
    datos.entradas = document.getElementById("entradas").value;
});

const horarios = document.querySelectorAll('input[name="horario"]');
horarios.forEach((horario) => {
    horario.addEventListener("change", () => {
        datos.horario = horario.value;
    });
});
//
function mostrarAlerta (){
    Swal.fire(
        'Compra confirmada con exito!',
        'Puede ver su carrito o deshacer la compra!',
        'success'
    );
}
// Llamamos al botón con id "confirmar" para agregar el evento click
document.getElementById("confirmar").addEventListener("click", () => {
    
    mostrarAlerta();
    // Almacenar los datos seleccionados en el localStorage
    localStorage.setItem("carrito", JSON.stringify(datos));
    // Ocultar el contenido actual
    document.body.innerHTML = '';

    // Mostrar los botones "Ver Resultado" y "Reiniciar Página"
    
    // Agregar un botón de "Carrito" que muestra el contenido del carrito al hacer clic
    const carritoButton = document.createElement('button');
    carritoButton.textContent = 'Ver Carrito';
    document.body.append(carritoButton);

    carritoButton.addEventListener('click', () => {
        // Recuperar los datos del localStorage
        const carrito = JSON.parse(localStorage.getItem("carrito"));

        // Crear un div para mostrar el contenido del carrito
        const carritoDiv = document.createElement('div');
        carritoDiv.innerHTML = `
            <h2>Carrito de Compras:</h2>
            <p>Película: ${carrito.pelicula}</p>
            <p>Día: ${carrito.dia}</p>
            <p>Entradas: ${carrito.entradas}</p>
            <p>Horario: ${carrito.horario}</p>
            <p>Combo: ${carrito.combo}</p>
            <button id="confirmcompra">Confirmar compra.</button>
            <button id="reiniciarpag">Rehacer compra.</button>
        `;
        
        
        // Agregar el div del carrito al cuerpo del documento
        document.body.appendChild(carritoDiv);
        const comfirmacioncompra = document.getElementById(`confirmcompra`);
        comfirmacioncompra.addEventListener(`click`, () => {
            
            Swal.fire(
                'Compra realizada con exito!',
                'You clicked the button!',
                'success'
            );
        });
        const reiniciarButton = document.getElementById('reiniciarpag');
        reiniciarButton.addEventListener('click', () => {
            location.reload();
        });
    });
});
