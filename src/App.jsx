import { useState } from "react";
import { crearNodos, crearRelaciones, buscarInterseccion } from "./logic/logica";

import Header from "./components/Header";
import Form from "./components/Form";
import Nodos from "./components/Nodos";
import Relaciones from "./components/Relaciones";
import Buscar from "./components/Buscar";
import Resultados from "./components/Resultados";

export default function App() {
  const [grafo, setGrafo] = useState([]);
  const [nodosABuscar, setNodosABuscar] = useState([]);
  const [resultados, setResultados] = useState([]);

  const agregarNodo = (nombreNodo) => {
    const nodo = grafo.find((nodo) => nodo.nombre === nombreNodo);
    if (nodo) {
      console.warn("Ya existe un nodo con ese nombre");
      return;
    }

    setGrafo([...grafo, crearNodos(nombreNodo)]);
  }

  const eliminarNodo = (idNodo) => {
    const newGrafo = grafo.filter((nodo) => nodo.id !== idNodo);
    const newGrafo2 = newGrafo.map((nodo) => {
      const newHijos = nodo.hijos.filter((relacion) => relacion.nodo.id !== idNodo);
      nodo.hijos = newHijos;
      return nodo;
    });
    setGrafo(newGrafo2);

    const newNodosABuscar = nodosABuscar.filter((nodo) => nodo.id !== idNodo);
    setNodosABuscar(newNodosABuscar);
  }

  const agregarRelacion = (idNodoOrigen, idNodoDestino, nombreRelacion) => {
    const newGrafo = crearRelaciones(idNodoOrigen, idNodoDestino, nombreRelacion, grafo);
    setGrafo(newGrafo);
  }

  const agregarNodoABuscar = (idNodo) => {
    const nodo = grafo.find((nodo) => nodo.id === idNodo);
    if (nodo) {
      setNodosABuscar([...nodosABuscar, nodo]);
    }
  }

  const handleBuscarInterseccion = () => {
    if (nodosABuscar.length < 2) {
      console.warn("Debes agregar al menos 2 nodos");
      return;
    }

    const res = buscarInterseccion(nodosABuscar);
    //console.log(res);
    setResultados(res);
  }

  const handleEliminarNodoABuscar = (idNodo) => {
    const newNodosABuscar = nodosABuscar.filter((nodo) => nodo.id !== idNodo);
    setNodosABuscar(newNodosABuscar);
  }

  const eliminarRelacion = (idNodoOrigen, idRelacion) => {
    const newGrafo = grafo.map((nodo) => {
      if (nodo.id === idNodoOrigen) {
        const newHijos = nodo.hijos.filter((relacion) => relacion.idRelacion !== idRelacion);
        nodo.hijos = newHijos;
      }
      return nodo;
    });
    setGrafo(newGrafo);
  }

  return (
    <>
      <Header />
      <main className="w-full">
        <div className="container mx-auto max-w-5xl p-4 grid grid-cols-5 gap-16">
          <Form agregarNodo={agregarNodo} agregarRelacion={agregarRelacion} grafo={grafo} />
          <Nodos grafo={grafo} eliminarNodo={eliminarNodo} />
          <Relaciones grafo={grafo} eliminarRelacion={eliminarRelacion} />
          <Buscar
            grafo={grafo}
            nodosABuscar={nodosABuscar}
            agregarNodoABuscar={agregarNodoABuscar}
            handleBuscarInterseccion={handleBuscarInterseccion}
            eliminarNodo={handleEliminarNodoABuscar}
          />
          <Resultados resultados={resultados} />
        </div>
      </main>
    </>
  )
}