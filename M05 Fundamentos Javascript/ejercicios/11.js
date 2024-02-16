

function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const fecha = new Date(1985, 5, 11);
  console.log(esMayorDeEdad(fecha));

}

console.log(esMayorDeEdad(19));

module.exports = esMayorDeEdad;

