# `mi-tabla` Componente

El componente `mi-tabla` es un componente web creado con StencilJS que muestra datos en formato tabular. Los datos se obtienen de una API especificada mediante una propiedad.

## Características

- **Propiedad API URL**: Especificamos la URL desde donde se obtendrán los datos.
- **Renderizado Dinámico**: La tabla se genera dinámicamente en función de los datos proporcionados por la API.
- **Estilo Personalizado**: La tabla incluye estilos básicos que se pueden personalizar fácilmente.

## Instalación

Para utilizar el componente `mi-tabla` en tu proyecto, siguimos estos pasos:

1. Clonamos o descargamos este repositorio en nuestro proyecto.

2. Instalamos las dependencias de Stencil:
    ```bash
    npm install
    ```

3. Construimos el proyecto:
    ```bash
    npm run build
    ```

4. Incluimos el componente en nuestro proyecto. Puedemos hacerlo importando el archivo JavaScript generado en tu archivo HTML o JS.

## Uso

### Propiedades

- **`apiUrl` (string, requerido):** La URL de la API desde donde se obtendrán los datos para llenar la tabla. Debe devolver un arreglo de objetos JSON que incluyan los campos `id`, `nombre`, `apellido`, `mail`, y `telefono`.

### Ejemplo de Uso

```html
<mi-tabla api-url="https://ejemplo.com/api/usuarios"></mi-tabla>