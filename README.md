### Sombras

- Si queremos aplicar sombras a los elementos de texto aplicamos la propiedad `text-shadow` ('eje x', 'eje y', 'difuminado', 'color').
- Para los `div`se aplica con la propiedad `box-shadow` con los mismos parametros.
- Si queremos poner una sombra interna usamos la misma propiedad css pero como 5 parametro el atributo `inset`

### Bordes

- Para bordes redondeados: `border-radius` los parametros son ('esquina 1', 'esquina 2', 'esquina 3', 'esquina 4')

### Posicionamiento

- Posicion absoluta:

## Animaciones

### Aumentar la fuente(hover) sin afectar a los demas elementos

- transform: scale(1.2, 1.2);

### rotar logo

```
#logo .gear {
  display: block;
  float: left;
  font-size: 30px;
  margin: 8px 0 0 26px;
  animation-name: rotar-gear;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotar-gear {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

/* efecto trasladdo de abajo hacia arriba */
#logo:hover .gear {
  animation: deAbajo 500ms linear;
}

@keyframes deAbajo {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}
```

## Instalar y Compilar Sass

Para instalar solo ejecutamos el comando

```shell
$ sudo npm i -g sass
```

nos dirigimos a la carpeta del proyecto y ejecutamos el comando:

```shell
$ sass --watch style.scss style.css
```

### Mixins

son conocidas con este termino pero son simple funciones que como tal agrupan una funcionalidad

## Flexbox

modulo de css que define un nuevo modelo de cajas, es una forma diferente a maquetar con los position y floats

- order: podemos darle un orden especifico a los divs
- flex-direction: row/column
- flex-wrap: un contenedor para que los divs internos no sobrepasen el tamaño del contenedor
- podemos resumir las dos propiedades en una sola con: flex-flow: row wrap
- flex-grow: 1; le damos el mismo tamaño a cada una de las cajas y cuanto va a ocupar
- flex-shrink: 0; reducir el tamaño de una caja
- flex-basis: 25%; indica que tamaño base van a tener y a partir de cuanto van a crecer.

#### Alineación horizontal:

- justify-content: center; podemos alinear a la izquierda, derecha, centro sin nesidad de por ejemplo usar `margin: 0 auto;` porpiedades mas usadas:
  - justify-content: flex-start; alineado a la derecha.
  - justify-content: flex-end; alineado a la izquierda.
  - justify-content: space-around; distribuye las cajas del centro de una manera mas pareja
  - justify-content: space-between; el primero y el ultimo pegados a los laterales
  - justify-content: space-evenly; parecido pero se alinean todos con espaciado todo distribuido pero para todas las cajas.

#### Alineacion vertical

Para ello nuestras cajas deben de tener un tamaño vertical:

- align-items: center; alineamos vertical al centro
- align-items: flex-end; alineamos vertical abajo.
- align-items: flex-start; alineamos vertical arriba.
- align-self: flex-end; alineamos un elemento especifico con self
