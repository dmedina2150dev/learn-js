# CONSTANTES
[Refrencia:https://es.javascript.info/variables#constantes]
> Para declarar una variable constante (inmutable) use const en vez de let.

```
$ const myBirthday = '18.04.1982';
```

> Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:

```
$ const myBirthday = '18.04.1982';
$
$ myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!
```

## Constantes mayúsculas

> Es una práctica utilizada en la comunidad para darles alias a valores dificiles de recordar. Escribiendo el nombre en mayuscula y de contar con varias palabras separarlas con un [_]. Esto le da un poco mas de sentido al código.

```
$ const COLOR_RED = "#f00"
```

> ¿Cuándo se deben utilizar letras mayúsculas para una constante, y cuando se debe nombrarla de manera normal? Dejémoslo claro.

> Ser una “constante” solo significa que el valor de la variable nunca cambia. Pero hay constantes que son conocidas previo a la ejecución (como el valor hexadecimal del color rojo) y hay constantes que son calculadas en el tiempo de ejecución, pero no cambian después de su asignación inicial.

```
$ const pageLoadTime;
```
> El valor de pageLoadTime no se conoce antes de cargar la página, así que la nombramos normalmente. No obstante, es una constante porque no cambia después de su asignación inicial.

