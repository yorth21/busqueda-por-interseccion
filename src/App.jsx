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
    const nodo = crearNodos(nombreNodo);
    setGrafo([...grafo, nodo]);
  }

  const eliminarNodo = (idNodo) => {
    const newGrafo = grafo.filter((nodo) => nodo.id !== idNodo);
    setGrafo(newGrafo);
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
    const res = buscarInterseccion(nodosABuscar);
    setResultados(res);
  }

  return (
    <>
      <Header />
      <main className="w-full">
        <div className="container mx-auto max-w-5xl p-4 grid grid-cols-5 gap-16">
          <Form agregarNodo={agregarNodo} agregarRelacion={agregarRelacion} grafo={grafo} />
          <Nodos grafo={grafo} eliminarNodo={eliminarNodo} />
          <Relaciones grafo={grafo} />
          <Buscar
            grafo={grafo}
            nodosABuscar={nodosABuscar}
            agregarNodoABuscar={agregarNodoABuscar}
            handleBuscarInterseccion={handleBuscarInterseccion}
          />
          <Resultados resultados={resultados} />
        </div>
      </main>
    </>
  )
}