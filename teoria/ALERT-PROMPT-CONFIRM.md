# ALERT PROMPT CONFIRM

## alert
> Muestra un mensaje y espera que usuario presione aceptar para continuar. Por lo que detiene la interación del usuario con la pantalla. El usuario no podra presionar botones ni hacer scroll en la web hasta presionar el boton.

```
$ alert("Holanda");
```

## prompt
> Algo parecido al alert, con la pequeña pero importante diferencia que puede recibir parametros los cuales permiten que el usuario ingrese datos mediante el modal que se activa.

```
$ result = prompt(title, [default]);
$ let result = prompt("Ingresa un número", '');
$ let res = prompt("ingresa un dato", 10);
```

**title**
> El texto que vera el usuario.

**default**
> Es el segundo parametro, opcional que un valor por defecto que se le envie al usuario.

**NOTA**
> El usuario puede ingresar el dato o puede darle cancelar en este segundo caso recibiriamos un [null] en *result* o *res*.

> Tambien presenta problemas con IE

## confirm
> Muy parecido a los dos anteriores. Muestra un  pequeño modal con una pregunta al usuario. Dos botones [Ok] o [Cancel] dependiendo del boton presionado se obtendra [true] o [false].

```
$ let result = confirm(pregunta);
$ let res = confirm("Te gusta la programación?");
```

***
Todos estos métodos son modales: detienen la ejecución del script y no permiten que el usuario interactúe con el resto de la página hasta que la ventana se haya cerrado.

Hay dos limitaciones comunes a todos los métodos anteriores:

**La ubicación exacta de la ventana modal está determinada por el navegador. Normalmente, está en el centro.**
**El aspecto exacto de la ventana también depende del navegador. No podemos modificarlo.**
***