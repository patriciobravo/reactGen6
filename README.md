# Proyecto reactgen6 


* aplicativo frontend que contiene consumo de 3 apis (busqueda y visualización de personajes de marvel y detalle de comics asociados a cado uno, busquda visualización de gifs. Agregar a favorito de cada api y poder visualizar estos favoritos en tabs asociado a cada una de ellas

* implementacion bootstrap 

* Paleta grafica bajo Sass. 

## Se descargan proyecto dede github 

https://github.com/patriciobravo/reactGen6.git

cd reactgen6


## Tabla de contenido

1. CARPETA ACTIONS

* ASSETS : Carpeta de acciones del proyecto para saber y mostrar donde estoy posicionado

2. CARPETA ASSETS

* CSS/Componentes: Carpeta donde se almacenaran los estilos asociados a  cada componente.
 
3. CARPETA STATIC

* images : Carpeta donde se almacenaran las imagenes, definidas en el proyecto

4. CARPETA COMPONENTS

* COMPONENTS : Carpeta donde almacenara los componentes definidos para este proyecto

4. 1 Favorites: Carpeta de componente favoritos de cada api consumida 
4. 2 Gifs     : Carpeta de componentes asociado a API de Gifs para busqueda de gifs y agregar a favoritos
4. 3 Marvel   : Carpeta de componante asociado a API de marvel para busqueda de personajes, visualizacion   detalle y agregar a favoritos

4. 4 Plugins  : Carpeta de complementos contiene vistas del Header, Error, datos vacios(Empty), layout(contenedor), y carga de informacion(Loader) del proyecto
 
5. CARPETA CONTAINER 

* Carpeta contenedor de las diferentes vistas del proyecto

6. CARPETA CUSTOM-HOOKS 

* Hooks personalizados para reutilizar 

7. CARPETA ERROR 

* Carpeta que contiene HOC de ErrorBoundary (límites de error) en el proyecto

8. CARPETA HELPERS 

* Carpeta que contiene helpers de marvel y Gifs (funciones que reciben argumento de busqueda y consumo de APIS, procesando y retornando información )

9. CARPETA REDUCER

* Carpeta que contiene los reducer (funciones reductoras del proyecto)

10. CARPETA ROUTES 

* Carpeta almacena las rutas del proyecto

## Para instalar todos los paquetes

npm i

## Compilación de proyecto

npm run "start": "webpack --mode=development",
npm run "build": "webpack --mode=production",

## Levantar servidor y visualizar proyecto

npm run "dev-server": "webpack serve"

## url proyecto en vercel

https://reactgen6-hswzjzhag-patriciobravo.vercel.app/

