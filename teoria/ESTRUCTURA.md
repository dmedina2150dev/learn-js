# Estructura del código

> Las sentencias son construcciones sintácticas y comandos que realizan acciones.

> Podemos tener tantas sentencias en nuestro código como queramos, las cuales se pueden separar con un punto y coma.

```
$ alert('Hola'); alert('Mundo');
```

## Punto y coma
***
> Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea.

```
$ alert('Hola')
$ alert('Mundo')
```
> Aquí, JavaScript interpreta el salto de línea como un punto y coma “implícito”. Esto se denomina inserción automática de punto y coma.
***

> En la mayoría de los casos, una nueva línea implica un punto y coma. Pero “en la mayoría de los casos” no significa “siempre”!

```
$ alert(3 +
1
+ 2);
```

> El código da como resultado 6 porque JavaScript no inserta punto y coma aquí. Es intuitivamente obvio que si la línea termina con un signo más "+", es una “expresión incompleta”, un punto y coma aquí sería incorrecto. Y en este caso eso funciona según lo previsto.

#### Un ejemplo de error

```
$ alert("Hello")

$ [1, 2].forEach(alert);
```

> Esta vez, si ejecutamos el código, solo se ve el primer Hello (y un error pero necesitas abrir la consola para verlo). Los números no aparecen más.

> Esto ocurre porque JavaScript no asume un punto y coma antes de los corchetes [...], entonces el código del primer ejemplo se trata como una sola sentencia.

> Así es como lo ve el motor:
```
$ alert("Hello")[1, 2].forEach(alert);
```

**Es recomendable siempre colocar puntos y coma entre las sentencias, incluso si están separadas por saltos de línea.**