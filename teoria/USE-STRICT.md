# El modo moderno, "use strict"
[Refrencia-textual:https://es.javascript.info/strict-mode]

> Durante mucho tiempo, JavaScript evolucionó sin problemas de compatibilidad. Se añadían nuevas características al lenguaje sin que la funcionalidad existente cambiase.

> Esto tenía el beneficio de nunca romper código existente, pero lo malo era que cualquier error o decisión incorrecta tomada por los creadores de JavaScript se quedaba para siempre en el lenguaje.

> Esto fue así hasta 2009, cuando ECMAScript 5 (ES5) apareció. Esta versión añadió nuevas características al lenguaje y modificó algunas de las ya existentes. Para mantener el código antiguo funcionando, la mayor parte de las modificaciones están desactivadas por defecto. Tienes que activarlas explícitamente usando una directiva especial: "use strict".


**Para utilizar el modo estricto en el navegador presiona [Shift+Enter]**

### Una asignación sin utilizar use strict

> Normalmente, debemos definir una variable antes de utilizarla. Pero, en los viejos tiempos, era técnicamente posible crear una variable simplemente asignando un valor sin utilizar ‘let’. Esto aún funciona si no ponemos ‘use strict’ en nuestros scripts para mantener la compatibilidad con scripts antiguos.

**Antes:**
```
$ // nota: no se utiliza "use strict" en este ejemplo
$
$ num = 5; // se crea la variable "num" si no existe antes
$
$ alert(num); // 5
```

**Ahora:**
```
$ "use strict";
$
$ num = 5; // error: num no está definida
```