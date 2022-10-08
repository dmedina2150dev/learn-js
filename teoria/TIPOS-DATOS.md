# TIPOS DE DATOS
[Referencia:https://es.javascript.info/types]
> En JavaScript los valores asignados siempre pertenecen a un tipo de dato, como lo son string o number.

> JavaScript cuenta con ocho [8] tipos de datos básicos.

> Pero es de saber que JavaScript no es un lenguaje fuertemente tipado o (“dinámicamente tipados”) lo que significa que allí hay tipos de datos pero las variables no estan vinculadas rígidamente a ninguno de ellos. Por lo que podemos asignarle cualquier valor a una variable y luego cambiarlo:

```
$ // no hay error
$ let message = "hola";
$ message = 123456;
```

### Number

> El tipo number representa tanto números enteros como de punto flotante.

> Existe muchas operaciones para números por ejemplo: [+](suma), [-](resta), [*](multiplicación), [/](división) y demás.

> Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: [Infinity], [-Infinity] y [NaN].

#### Infinity
```
$ alert( 1 / 0 ); // Infinity
$ alert( Infinity ); // Infinity
```
#### Nan
> representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida.  Es “pegajoso”. Cualquier otra operación sobre NaN devuelve NaN, Por lo tanto, si hay un NaN en alguna parte de una expresión matemática, se propaga a todo el resultado.

```
$ alert( "no es un número" / 2 ); // NaN, tal división es errónea
$ alert( "no es un número" / 2 + 5); // NaN
```

#### BigInt
> En JavaScript, el tipo “number” no puede representar valores enteros mayores que (253-1) (eso es 9007199254740991), o menor que -(253-1) para negativos. Es una limitación técnica causada por su representación interna.

**[BigInt] se agregó recientemente al lenguaje para representar enteros de longitud arbitraria.**

**Un valor BigInt se crea agregando n al final de un entero**

```
$ // la "n" al final significa que es un BigInt
$ const bigInt = 1234567890123456789012345678901234567890n;
```

***Problemas de compatibilidad***
**En este momento, BigInt está soportado por Firefox/Chrome/Edge/Safari, pero no por IE.**


#### String

> Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas

```
$ let str = "Hola";
$ let str2 = 'Las comillas simples también están bien';
$ let phrase = `se puede incrustar otro ${str}`;
```

> Existen 3 tipos de comillas en JavaScript
[1.] **Comillas dobles ["Hola"]**
[2.] **Commilas simples ['Hola']**
[1.] **Backticks (Comillas invertidas) [`Hola`]**

> Las comillas dobles y simples funcionan de la misma manera. A comparación de los Backticks son comillas de "funcionalidad extendida". Permiten incrustar variables y expreciones en una cadena de Caracteres encerrandolas en [${...}].

```
$ let name = "John";
$
$ // incrustar una variable
$ alert( `Hola, ${name}!` ); // Hola, John!
$
$ // incrustar una expresión
$ alert( `el resultado es ${1 + 2}` ); //el resultado es 3
```
> La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. 

***OJO***
**Sólo se puede hacer con los backticks. ¡Las otras comillas no tienen esta capacidad de incrustación**

```
$ alert( "el resultado es ${1 + 2}" ); // el resultado es ${1 + 2} (las comillas dobles no hacen nada)
```


#### Boolean

> El tipo boolean tiene sólo dos valores posibles: true y false. Es utilizado para almacenar valores de verdadero y falso.

```
$ let nameFieldChecked = true; // sí, el campo name está marcado
$ let ageFieldChecked = false; // no, el campo age no está marcado
```

#### Null
> En JavaScript el null no es un indicador de que el valor o el objeto no existe. Es un valor mas, que representa ["nada"], ["vacío"], ["valor desconocido"],

```
$ let age =  null;
```


#### Undefined
> El valor [undefined] es igual un valor propio como null. Que significa ["valor no asignado], si una variable es declarada pero no se le asigna valor entonces su valor es [undefined].

```
$ let age;
$ console.log(age) // muiestra "undefined"
```

**Tambien es posible asignarlo como valor a una variable. Aunque no se recomienda hacerlo, lo mas comun es utilizar [null]**
```
$ let age;
$ age = undefined;
$ console.log(age) // muiestra "undefined"
```

#### Object y Symbol
> [Object] es un (objeto) especial.
***Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.***

> El tipo [symbol] (símbolo) se utiliza para crear identificadores únicos para los objetos.

## Operador typeof
> El operador [typeof] devuelve el tipo de dato del argumento que le pasemos. Es de utilidad para cuando queremos saber el tipo de datos que puede arrorja algún script u operacion que estemos codificando.

```
$ typeof undefined // "undefined"

$ typeof 0 // "number"

$ typeof 10n // "bigint"

$ typeof true // "boolean"

$ typeof "foo" // "string"

$ typeof Symbol("id") // "symbol"

$ typeof Math // "object"

$ typeof null // "object"  ---typeof null es "object". Esto está oficialmente reconocido como un error de comportamiento de typeof que proviene de los primeros días de JavaScript y se mantiene por compatibilidad. Definitivamente null no es un objeto. Es un valor especial con un tipo propio separado

$ typeof alert // "function"
```

#### Math
***[Math] es un objeto incorporado que proporciona operaciones matemáticas. Lo aprenderemos en el capítulo Números. Aquí sólo sirve como ejemplo de un objeto.***