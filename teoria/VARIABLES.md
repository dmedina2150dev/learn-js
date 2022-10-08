# VARIABLES
[Refrencia:https://es.javascript.info/variables]

> Es un almacen con un identificador, donde almacenamos datos.

> En JavaScript las variables se declaran con la palabra reservada [let].

```
$ let myName;
```

***Asignacion de valor se hace mediante el operador [=]***
```
$ myName = "Dajan Medina";
```

***Es posible Declarar y asignar al mismo tiempo***
```
$ let user = "san"
$ let age = 19
$ let message = "Hola"
```

***O es posible hacerlo en una sola linea separando las variables solo por [,], no recomendable porque dificulta la legibilidad del código***
```
$ let user = "san", age = 19, message = "Hola"
```

***Se Puede declarar dos variables y copiar una a la otra***

```
$ let hello = 'Hola mundo!';

$ let message;

$ // copia 'Hola mundo' de hello a message
$ message = hello;

$ // Ahora, ambas variables contienen los mismos  datos
$ alert(hello); // Hola mundo!
$ alert(message); // Hola mundo!
```

***Declarar dos veces lanza un error***
```
$ let message = "This";
$
$ // 'let' repetidos lleva a un error
$ let message = "That"; // SyntaxError: 'message' ya fue declarado
```
> Debemos declarar una variable una sola vez y desde entonces referirnos a ella sin let.


# var en vez de let
```
$ var mensaje = 'Hola';
```

> La palabra clave var es casi lo mismo que let. También hace la declaración de una variable, aunque de un modo ligeramente distinto, y más antiguo.



## Nombramiento de variables

[1.]**El nombre únicamente puede incluir letras, dígitos, o los simbolos [$] y [_]**

[2.]**El primer carácter no puede ser un dígito**

[3.]**Cuando el nombre contenga varias palabras usar recomendablemente [camelCase:https://es.wikipedia.org/wiki/Camel_case]**

[4.]**La capitalización es importante JavaScript distinge minombre y miNOMBRE son distintos**

[5.]**Letras que no son del alfabeto inglés están permitidas, pero no se recomiendan**

```
$ let имя = '...';
$ let 我 = '...';
```

[6.]**Las palabras reservadas no pueden ser ultilizadas para nombrar variables[REF:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords]**

***OJO***
> Es interesante notar – el símbolo del dólar '$' y el guión bajo '_' también se utilizan en nombres. Son símbolos comunes, tal como las letras, sin ningún significado especial.

```
$ let $ = 1; // Declara una variable con el nombre "$"
$ let _ = 2; // y ahora una variable con el nombre "_"

$ alert($ + _); // 3
```

## Consideraciones

[1]**Usar terminos legibles para el ojo humano**

[2]**Evitar abreviaciones o nombres cortos**

[3]**Crear nombres que describan lo que son y que sean concisos.**

[4]**Ejemplo no adecuado: [data] y [value], estos nombres no dicen nada de a que se refiere.**

***¿Reusar o crear?
> Una última nota. Existen programadores haraganes que, en vez de declarar una variable nueva, tienden a reusar las existentes.

> El resultado de esto es que sus variables son como cajas en las cuales la gente introduce cosas distintas sin cambiar sus etiquetas. ¿Que existe dentro de la caja? ¿Quién sabe? Necesitamos acercarnos y revisar.

> Dichos programadores se ahorran un poco durante la declaración de la variable, pero pierden diez veces más a la hora de depuración.

> Una variable extra es algo bueno, no algo malvado.

> Los minificadores de JavaScript moderno, y los navegadores optimizan el código suficientemente bien para no generar cuestiones de rendimiento. Utilizar diferentes variables para distintos valores incluso puede ayudar a optimizar su código
***
