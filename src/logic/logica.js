import { v4 as uuidv4 } from 'uuid';

class Nodo {
  constructor(nombre) {
    this.id = uuidv4();
    this.nombre = nombre;
    this.padres = [];
    this.hijos = [];
  }

  agregarRelacion(nodoDestino, nombreRelacion) {
    if (this.hijos.some((hijo) => hijo.nodo.id === nodoDestino.id)) {
      return;
    }
    this.hijos.push({ nodo: nodoDestino, relacion: nombreRelacion, idRelacion: uuidv4() });
    nodoDestino.padres.push({ nodo: this, relacion: nombreRelacion});
  }
}

function buscarPadres(nodo) {
  const padres = [];
  nodo.padres.forEach((padre) => {
    padres.push(padre.nodo);
  });
  return padres;
}

function buscarCaminos(padresABuscar) {
  const caminosEncontrados = [];
  for (const padresNodo of padresABuscar) {
    let newArray = padresABuscar.filter(item => item !== padresNodo);
    newArray = newArray.flat();
    for (const nodo of padresNodo) {
      const camino = buscarTodosLosCaminosAnchura(nodo, newArray);
      if (camino.length != 0) {
        caminosEncontrados.push(camino);
      }
    }
  }
  return caminosEncontrados;
}

function buscarTodosLosCaminosAnchura(nodoInicial, nodosObjetivos) {
  const caminos = [];
  const cola = [[nodoInicial]];

  while (cola.length > 0) {
    const camino = cola.shift();
    const nodoActual = camino[camino.length - 1];

    if (nodosObjetivos.find((nodoObjetivo) => nodoObjetivo.id === nodoActual.id)) {
        caminos.push(camino);
    }

    for (let nodoRelacionado of nodoActual.hijos) {
      nodoRelacionado = nodoRelacionado.nodo;
      if (!camino.includes(nodoRelacionado)) {
        cola.push([...camino, nodoRelacionado]);
      }
    }
  }

  return caminos;
}

/*
  Evaluar si en los caminos encontrados se encuentra al menos un
  nodo padre de cada nodo a buscar 
*/

function buscarCoincidencias(camino, padresABuscar) {
  let encontrado = true;
  padresABuscar.forEach((padres) => {
    let coincidencia = false;
    padres.forEach((padre) => {
      if (camino.includes(padre)) {
        coincidencia = true;
      }
    })
    if (!coincidencia) {
      encontrado = false;
    }
  });
  return encontrado;
}
  
function validarCaminos(caminosEncontrados, padresABuscar, nodosABuscar) {
  const conjuntoDeInterseccion = [];
  for (const caminos of caminosEncontrados) {
    for (const camino of caminos) {
      const res1 = buscarCoincidencias(camino, padresABuscar);
      const res2 = !nodosABuscar.some(item => camino.includes(item));
      const res3 = !conjuntoDeInterseccion.some(existingCamino =>
        existingCamino.every(node => camino.includes(node))
      );
      if (res1 && res2 && res3) {
        conjuntoDeInterseccion.push(camino);
      }
    }
  }
  return conjuntoDeInterseccion;
}

/* ======================================================================= */

export function crearNodos(nombre) {
  return new Nodo(nombre);
}

export function crearRelaciones(idNodoOrigen, idNodoDestino, nombreRelacion, grafo) {
  const newGrafo = [...grafo];
  const nodoOrigen = newGrafo.find((nodo) => nodo.id === idNodoOrigen);
  const nodoDestino = newGrafo.find((nodo) => nodo.id === idNodoDestino);
  nodoOrigen.agregarRelacion(nodoDestino, nombreRelacion);
  return newGrafo;
}

export function buscarInterseccion(nodosABuscar) {
  const padresABuscar = [];
  for (const nodo of nodosABuscar) {
    padresABuscar.push(buscarPadres(nodo));
  }

  const caminosEncontrados = buscarCaminos(padresABuscar);
  return validarCaminos(caminosEncontrados, padresABuscar, nodosABuscar);
}