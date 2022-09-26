import React from "react";
import '../../hojas-de-estilo/testimonio.css';
function TestimonioEmill() {
	const emill = {
		nombre:'Emill Logroño',
		pais:'Ecuador',
		imagen:'emill',
		cargo:'Ingeniero de Software',
		empresa:'Fractalsoft',
		testimonio:'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.',
		fotoDe: 'emill',
	}
	return (
		/* Se necesita poner el require y todo eso dentro de llaves  */
		<div className="contenedor-testimonio">
			<img 
				className="imagen-testimonio" 
				src={require(`../../imagenes/testimonio-${emill.imagen}.png`)}
				alt={`Foto de ${emill.fotoDe}`} /> 
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">
					<strong>{emill.nombre}</strong> en {emill.pais}
				</p>
				<p className="cargo-testimonio">
					{emill.cargo} en <strong>{emill.empresa}</strong>
				</p>
				<p className="texto-testimonio">"{emill.testimonio}"</p>
			</div>
		</div>
		
	);
}
export default TestimonioEmill;