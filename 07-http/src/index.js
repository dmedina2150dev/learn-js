import { init } from "./js/chistes-page";
import { initUsers } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';
import { initArchivos } from "./js/archivos.page";

initArchivos();
init();
initUsers();

CRUD.getUsuario( 1 ).then( console.log );
CRUD.createUsuario({ name: 'Dajan', job: 'Progmo' }).then( console.log );
CRUD.updateUser( 1 ,{ name: 'Melisa', job: 'Cocinera' }).then( console.log );
CRUD.borrarUsuario( 12 ).then( console.log );


