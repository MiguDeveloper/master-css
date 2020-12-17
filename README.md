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
