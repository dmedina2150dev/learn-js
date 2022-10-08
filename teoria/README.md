# INTRODUCCIÓN A JAVASCRIPT

> Es un lenguaje de programación que fue creado para dar vida a las paginas Web

> Los programas escritos en JavaScript se llama scripts. Estos scripts se proporcionas o ejecutan como texto plano, no necesitan una preparación especial o compilación para correr.

> Pueden escribirse directamente en el HTML o en archivos a parte.

> Actualmente JavaScript puede ejecutarse no solo en los navegadores sino también en servidores o en cualquier dispositivo que ejecute el motor o interprete de JavaScript (https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript)

> El navegador tiene un motor embebido a veces llamado una “Máquina virtual de JavaScript”.

**V8 - Chrome, Opera y Edge.**
**SpiderMonkey - Firefox**

## ¿Por qué se llama JavaScript?
> Cuando JavaScript fue creado, inicialmente tenía otro nombre: “LiveScript”. Pero Java era muy popular en ese momento, así que se decidió que el posicionamiento de un nuevo lenguaje como un “Hermano menor” de Java ayudaría.

> Pero a medida que evolucionaba, JavaScript se convirtió en un lenguaje completamente independiente con su propia especificación llamada ECMAScript, y ahora no tiene ninguna relación con Java.

## ¿Qué puede hacer JavaScript en el navegador?

> En la Actualidad JavaScript es un lenguaje seguro. Ya que al ser creado para navegadores no proporciona acceso de bajo nivel a la memoria o a la CPU puesto que es un permiso que los navegadores no necesitan.

> De igual forma dependen en gran parte del entorno donde se este ejecutand. En NodeJs soporta funciones que permiten leer y escribir arvichos del computador, realizar solicitudes de red, etc...

> Por el lado del navegador JavaScript puede realizar cualquier cosa relacionada a la manipulación de una página web.

[1.] **Agregar nuevo contenido HTML o cambiar el ya existente**

[2.] **Reaccionar a las acciones del usuario, clicks, movimientos del raton, presion de teclas, etc**

[3.]**Enviar solicitudes a servidores con AJAX, descargar archivos, cargar archivos, entre otros..**

[4.] **Obtener y configurar cookies**

[5.] **Recordar datos en el localStorage**

## ¿Qué NO PUEDE hacer JavaScript en el navegador?

> Las capacidades de JavaScript en el navegador estan limitadas por el bien de la seguridad del usuario.Con el fin de prevenir que una página maliciosa acceda a la información privada o dañe información del usuario.

[1.]**No puede leer ni escribir arbitrariamente archivos en el disco duro, copiarlos o ejecutar programas. En los navegadores más modernos se permite trabajar con archivos pero con acceso limitado, solo si el usuario realiza alguna acción como arrastrar el archivo al navegador o seleccionarlo mediante un <input>**

[2.]**No tiene acceso al sistema operativo**

[3.]**Permite interacción con la camara, micrófono y otros dispositos pero con permisos explicito del usuario, no puede habilitar una camara web para observar.**

[4.]**Diferentes ventanas y pestañas en la mayoria del tiempo no se conocen entre si.. Puede abrir otra pestaña o ventana, pero incluso ahi no puede acceder si la otra pertenece a otro sitio web (diferente dominio, protocolo o puerto) Esta restricción se le conoce como “política del mismo origen” (“Same Origin Policy”)**

[5.] **JavaScript puede fácilmente comunicarse a través de la red con el servidor de donde la página actual proviene. Pero su capacidad para recibir información de otros sitios y dominios esta bloqueada. Aunque sea posible, esto requiere un acuerdo explícito (expresado en los encabezados HTTP) desde el sitio remoto. Una vez más, esto es una limitación de seguridad.**

## ¿Qué hace a JavaScript único?

> Existen al menos tres cosas geniales sobre JavaScript:
**Completa integración con HTML y CSS.**
**Las cosas simples se hacen de manera simple.**
**Soportado por la mayoría de los navegadores y habilitado de forma predeterminada**
**JavaScript también permite crear servidores, aplicaciones móviles, etc.**

## Lenguajes “por arriba de” JavaScript

> Estos lenguajes surgen de la necesidad de adaptación del mundo de la programación, y de los gustos y requerimientos para la resolución de problemas.

> Estos lenguajes son Convertidos/Transpilados a JavaScript antes de ser ejecutados en el navegador.

> Ejemplos de tales lenguajes:

**[CoffeeScript] Es una “sintaxis azucarada” para JavaScript. Introduce una sintaxis corta, permitiéndonos escribir un código mas claro y preciso. Usualmente desarrolladores de Ruby prefieren este lenguaje.**

**[TypeScript] se concentra en agregar “tipado estricto” (“strict data typing”) para simplificar el desarrollo y soporte de sistemas complejos. Es desarrollado por Microsoft.**

**[FLow] también agrega la escritura de datos, pero de una manera diferente. Desarrollado por Facebook.**

**[Dart] es un lenguaje independiente que tiene su propio motor que se ejecuta en entornos que no son de navegador (como aplicaciones móviles), pero que también se puede convertir/transpilar a JavaScript. Desarrollado por Google.**

**[Brython] es un transpilador de Python a JavaScript que permite escribir aplicaciones en Python puro sin JavaScript.**

**[Kotlin] es un lenguaje moderno, seguro y conciso que puede apuntar al navegador o a Node.**

### Especificación
> https://www.ecma-international.org/publications-and-standards/standards/ecma-262/ contiene la información más exhaustiva, detallada, y formal sobre JavaScript.

> https://tc39.es/ecma262/ último borrador de la especificación se puede consultar

> https://github.com/tc39/proposals Para leer acerca de las nuevas prestaciones de vanguardia del lenguaje.

### Manuales
> MDN (Mozilla) JavaScript Reference Se puede acceder en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.

**Aunque a menudo es preferible una búsqueda en internet. Simplemente añade “MDN [término]” en la consulta, por ejemplo https://google.com/search?q=MDN+parseInt para buscar la función parseInt.**

### Tablas de compatibilidad

> Para ver la compatibilidad por navegador y otros motores, consultar:

**[http://caniuse.com] – tablas de compatibilidad por característica, e.g. para comprobar qué motores soportan funciones modernas de criptografía: http://caniuse.com/#feat=cryptography.**

**[https://kangax.github.io/compat-table] – tabla que muestra la compatibilidad o no de las prestaciones del lenguaje por motor.**