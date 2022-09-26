
### Como crear un componente
1. Nos vamos a la carpeta src y creamos una nueva carpeta llamada componentes
2. Dentro de la carpeta creamos un nombre del componente con extensión (js o jsx).

```
import React from "react";
function Testimonio() {
	return (
		/* Se necesita poner el require y todo eso dentro de llaves  */
		<div className="contenedor-testimonio">
			<img 
				className="imagen-testimonio" 
				src={require("../imagenenes/testimonio-emma.png")}
				alt="Foto de Emma"/> 
		</div>
	);
}
```

### Preparación del Proyecto
1. Eliminamos el archivo setupTest.js y reportWebVitals.js
2. En el index.js tambien eliminamos los import  de reportWebVitals
3. Tambien borramos App.test.js
4. Eliminamos en App.js el header y tambien todos los estilos del archivo App.css
5. App.js quedaria así: 
```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```
6. Así queda nuesto archivo testimonio.js: 
```
import React from "react";
function Testimonio() {
	return (
		/* Se necesita poner el require y todo eso dentro de llaves  */
		<div className="contenedor-testimonio">
			<img 
				className="imagen-testimonio" 
				src={require("../imagenes/testimonio-emma.png")}
				alt="Foto de Emma"/> 
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">Emma</p>
				<p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
				<p className="texto-testimonio">"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
			</div>
		</div>
		
	);
}
```

### Mostrar un componente

Para mostrar un componente la aplicación debe renderizar ese componente.

1. Nos dirigimos al archivo App.js 

### Importar componente
1. Importar el componente en App.js 

```
import Testimonio from './componentes/testimonio';

```
### Exportar componente
1. Exportamos la función Testimonio en el archivo testimonio.js que esta en la carpeta componentes
   
```

export default Testimonio;
```