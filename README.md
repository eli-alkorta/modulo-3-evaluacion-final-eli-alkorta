# Buscador de personajes de Rick and Morty

Este proyecto, desarrollado con [Create React App](https://github.com/facebook/create-react-app), conecta con un API y recoge y pinta información sobre los primeros 20 personajes de la serie de animación Rick y Morty.

## Componentes

La aplicación cuenta con seis componentes: un componente de clase principal, que recoge los estados y pinta y enruta el resto de componentes funcionales (header, characterCard, characterList, characterDetail y filters).

### Funcionamiento

Nada más abrir la aplicación, esta se conecta al servidor de Rick y Morty, recoge y renderiza la información sobre los personajes. En los componentes characterCard y characterList se especifica cómo se deben pintar esos datos.

A continuación, la usuaria puede hacer uso de tres elementos para filtrar la información que le llega. El cuadro de texto comprobará que las letras introducidas coincidan con el nombre del personaje y devolverá solo la información de los personajes que busque la usuaria.

Además de este filtro, también se podrán clasificar los resultados en función del sexo (hombre y mujer) y de la especie (humano y alien).

#### Detalle de los personajes

Los datos recogidos por defecto en la llamada a la API son la foto, el nombre y la especie de cada uno de los primeros 20 personajes de la serie. Sin embargo, gracias a [React Router](https://reacttraining.com/react-router/), podemos introducir links internos que nos abran un componente en una nueva página. En este caso, al hacer click sobre uno de los personajes de characterList navegaremos hasta el componente characterDetail, que nos ofrecerá más datos del personaje: si está vivo o muerto, el planeta del que procede y en cuántos episodios de la serie ha aparecido.

También se mostrarán varios iconos en función de estos datos: una calavera si el personaje ha muerto y un icono de alien y otro de humano dependiendo de su especie.

#### Modo noche y día

La aplicación parte de un "dark mode" que mejorará su visibilidad por la noche. Sin embargo, se le ha añadido un botón de "day mode" por si la usuaria quiere dar un tono más vivo a la pantalla.

##### Descarga

Te invito a que descargues este repositorio y lo utilices y modifiques como prefieras.`npm start` abrirá el proyecto en el navegador: [http://localhost:3000](http://localhost:3000) y la página se recargará si haces cambios en el proyecto y arrojará errores por consola.

Por último, ejecuta `npm run build` para crear una carpeta `build` cuando tengas los archivos listos para producción.

Para más información, consulta la documentación de [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


