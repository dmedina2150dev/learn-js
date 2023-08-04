import { obtenerUsuarios } from "./http-provider";


const body = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {

    const html = `
        <h1 class="mt-5 text-center">Usuarios</h1>
        <hr>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    tbody = document.querySelector('tbody');

}

const crearFilaUsuario = ( usuario ) => {
    correlativo++;

    const html = `
        <td scope="col">${ correlativo }</td>
        <td scope="col">${ usuario.email }</td>
        <td scope="col">${ usuario.first_name } ${ usuario.last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${ usuario.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.append( tr );

}

export const initUsers = async () => {
    crearHtml();
    
    const usuarios = await obtenerUsuarios();

    usuarios.forEach( crearFilaUsuario );
    
}