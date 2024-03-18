function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:


  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    } else {
      numero = numero / 2;
    }
  }
  return true;

}

module.exports = esPotenciaDeDos;


// el numero entra y dice "es mayor a 1, SI, entonces sigue,"
// numero dividido 2 es diferente a 0? no, es igual.
// por eso sigue y entra en numero dividido 2...
// así hasta que de 1 y termine en mumero es mayor que 1, no, ENTONCES retur true y termina