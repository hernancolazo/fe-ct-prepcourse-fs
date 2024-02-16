function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const fechaObjeto = new Date(fecha);
  return fechaObjeto.toString() !== 'Invalid Date' && fechaObjeto.toISOString().slice(0, 10) === fecha;
}
  console.log(esFechaValida('2023-12-31'));

module.exports = esFechaValida;