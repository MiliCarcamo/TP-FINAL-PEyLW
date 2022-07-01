// Creo una funcion que me obtiene el tiempo faltante y recibe como parametro un plazo
const obtenerTiempoRestante = (plazo) => {
  // Creo una variable que me devuelve la fecha y hora en la que es ejecutada el codigo
    let fechaHoraActual = new Date(),
    // tiempoRestante me devuelve el tiempo en milisegundos, por eso lo paso a seg, dividiendolo entre 1000 y le sumo 1000 xq demora un segundo en actulizarse el tiempo
      tiempoRestante = (new Date(plazo) - fechaHoraActual + 1000) / 1000,
      //Lo convierto en segundos
      segundos = ("0" + Math.floor(tiempoRestante % 60)).slice(-2),
      //Lo convierto en minutos
      minutos = ("0" + Math.floor((tiempoRestante / 60) % 60)).slice(-2),
      //Lo convierto en hs
      horas = ("0" + Math.floor((tiempoRestante / 3600) % 24)).slice(-2),
      //Lo convierto en fias
      dias = Math.floor(tiempoRestante / (3600 * 24));
  
      //Retorno un objeto con los siguientes valores
    return {
      segundos,
      minutos,
      horas,
      dias,
      tiempoRestante
    };
  };
  
  // creo una nueva funcion que recibe el plazo, un elemnto html y un msj final que se va a imprimir cuando termine
  const cuentaRegresiva = (plazo, elem, finalMessage) => {
    const el = document.getElementById(elem);
  
    const actualizacionTemporizador = setInterval(() => {
      let tiempo = obtenerTiempoRestante(plazo);
      el.innerHTML = `${tiempo.dias}d:${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s`;
  
      if (tiempo.tiempoRestante <= 1) {
        clearInterval(actualizacionTemporizador);
        el.innerHTML = finalMessage;
      }
    }, 1000);
  };
  
  cuentaRegresiva("July 06 2022 00:00:00 UTC-3", "reloj", "¡Oferta Finalizada!");
  