//variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');

//funciones

const generarEmpleado = async() => {
    try {
        const url = 'https://randomuser.me/api/'
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];
        console.log(datos);

        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first
    } catch (error) {
        console.log(error);
    }
}

boton.addEventListener('click',generarEmpleado);
document.addEventListener('DOMContentLoaded', generarEmpleado)