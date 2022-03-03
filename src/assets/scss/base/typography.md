# Tipografía

## Inicio

En el módulo Typography.scss:

* Se cargan las fuentes
* Se definen los tamaños, el alto y espaciado y sus respectivos valores por defecto

## Uso

A continuación se detallan las clases de la siguiente manera: `modificador: valor | valor | etc`

`font: heading | default`

`font-size: h1 | h2 | h3 | h4 | h5 | h6 | default`

Ejemplo: `<p class="font:heading font-size: h4">¡Hola mundo!</p>`

## Notas

### El valor `'default'`

En los tamaños de las tipografías, el valor `'default'` toma como referencia al elemento `html`.

Por ejemplo, un elemento `<h3>` con `class='font-size:default'` no tendrá el tamaño que tiene por defecto el elemento `h3`, sino que será como el que tiene el elemento `<p>` o `<span>`
