# javascript-npm-package

# Sobre las licencias de los proyectos
# https://es.wikipedia.org/wiki/Licencia_de_software

# Inicializar un proyecto con
# npm init
# npm init -y
# npm init -yes

# Configuracion rapida de npm
# npm set init.author.email "mail@mail.com"
# npm set init.author.name "Name LastName"
# npm init.license "MIT"

# Como instalar dependencias
# npm install <paquete> -- dependencies
# npm install <paquete> --save -- dependencies
# npm install <paquete> --save-dev -- Devdevpendencia
# npm i <paquete> -D -- Devdevpendencia
# npm i -g <paquete> -- Global
# npm i <paquete> -O  -- Opcional
# npm i <paquete> --dry-run -- Simula la instalacion para ver como se instalaria la dependencia
# npm i <paquete> (-f ó --force)  -- forzando que se instale la ultima version desde el ultimo recuerso de NPM
# npm i <paquete>@0.0.0 -- Version especifica que decidamos


# npm list -g --depth 0 -- Lista de paquetes instalados globalmente
# npm list -- paquetes del proyecto
# npm outdate -- lista los paquetes que pueden estar desactualizados
# npm outdate --dd -- lista los paquetes que pueden estar desactualizados y podemos ver el proceso por detras que se va corriendo

# npm update --Actualiza los paquetes
# npm i <paquete>@lastest -- Actualiza el paquete a la ultima version

# npm uninstall <paquete> -- Desinstala el paquete
# npm uninstall <paquete> --no-save -- Desinstala el paquete pero sin borrarlo de las dependencias

# (CUANDO LA INSTALACION DE UNA DEPENDENCIA ARROJA 'Run "npm fund" -> es que algun paquete esta pidiendo financiamiento.')

# Versiones src/assets/versions-dependices.webp
# primer digito: cambios mayores
# segundo digito: cambios menores
# tercer digito: parches de seguridad
# Ese chulito que aparece en la version de la las dependencias en el package.json ("moment": "^2.29.1") garantiza que cuando nosotros hagamos una actualizacion o tengamos un cambio de version que podamos realizar, VAMOS HACER ACTUALIZACION DE LOS CAMBIOS MENORES Y DE LOS PARCHES DE SEGURIDAD
# cuando es una tilde ("moment": "~2.29.1") Esto significa que solo vamos a recibir actualizaciones de los cambios en los parches de seguridad.

# Para garantizar que el proyecto se quede en la version podemos eliminar esos flag (^)(~) y ojo con el package-lock.json

# ELiminar el cache de npm
# npm cache clean --force
# verifica el cahce
# npm cache verify

# Por seguridad podemos scanear nuestros paquetes con:
# npm audit -- Toda la informacion de los problemas que pueda encontrar npm al instalar las dependencias
# npm audit --json  -- hace los mimos pero saca un formato json de manera mas detallado
# Para actualizar el paquete aunque saldra el comenado en npm audit puedesde ejecutar esto:
# npm update <paquete> --depth 2 -- Para que vaya al hasta el nivel 2 de las dependencias que tenga el paquete

# npm audit fix -- Hace la actualizacion automatica de las dependencias con problemas.

##### Este proyecto se encarga de vigilar las dependencias https://snyk.io/

## Valida que tu libreria funcione en local antes de subir a npm
# sudo npm link

# añadir usuario a la terminal
-> npm adduser
# Publicar libreria
-> npm publish
-> Debe tener un README.md

# para actualizar el paquete 
# npm version patch -- si fue un parche
# npm version major -- si fue un cambio mayor
# npm version minor -- si fue un cambio menor


https://docs.npmjs.com/packages-and-modules
https://www.npmjs.com/package/funny-commit