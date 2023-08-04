import { subirImagen } from "./archivos-provider";


const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir Archivos</h1>
        <hr>
        <label> Seleccione una foto </label>
        <input id="file" type="file" accept="image/png, image/jpg">

        <br>
        <img src="" id="foto" class="img-thumbneil">
    `;

    const div = document.createElement('div');
    div.classList.add('mb-10');
    div.innerHTML = html;

    body.append( div );

    inputFile = document.querySelector('#file');
    imgFoto = document.querySelector('#foto');

}

const eventos = () => {

    inputFile.addEventListener('change', ( event ) => {
        const file = event.target.files[0];
        subirImagen( file ).then( url => {
            console.log( url );
            imgFoto.src = url;
        } );
    });

}




export const initArchivos = () => {
    crearInputFileHtml();
    eventos();
}