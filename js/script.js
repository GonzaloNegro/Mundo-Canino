/* EJECUTAR LA FUNCIÓN AL CARGAR LA PÁGINA */
window.onload = getData();
window.onload = getData2();

const info = document.querySelector('.swiper-wrapper');
const info2 = document.querySelector('.adie');

/* FUNCION ASINCRONA PARA TRAER LOS DATOS DEL JSON */
async function getData(){
    const response = await fetch('../paseadores.json');
    const data = await response.json();
    createHTML(data);
}

async function getData2(){
    const response = await fetch('../adiestradores.json');
    const data2 = await response.json();
    createHTML2(data2);
}

/* FUNCIÓN PARA AGREGAR AL HTML CONTENIDO MEDIANTE LOS DATOS TRAIDOS DEL JSON */
function createHTML(array){
    info.innerHTML = ''
    let p = 1;
    array.forEach((paseador) => {
        const card = `
            <div class="swiper-slide">
                <img src="${paseador.foto}"/>
                <div class="swiper-slide-info"> 
                    <h3>${paseador.nombre}</h3>
                    <p>${paseador.ocupacion}</p>
                    <p>${paseador.ubicacion}</p>
                    <p>Tarifa por hora:$${paseador.precio}</p>
                </div>
        </div>`
        info.innerHTML += card
        p += 1;
        }
    )
}

function createHTML2(array){
    info2.innerHTML = ''
    let p = 1;
    array.forEach((adiestrador) => {
        const card = `
            <div class="swiper-slide">
                <img src="${adiestrador.foto}"/>
                <div class="swiper-slide-info"> 
                    <h3>${adiestrador.nombre}</h3>
                    <p>Experiencia: ${adiestrador.experiencia}</p>
                    <p>Tarifa mensual:$${adiestrador.precio}</p>
                </div>
        </div>`
        info2.innerHTML += card
        p += 1;
        }
    )
}