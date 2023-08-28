import { useState } from "react";
import { crearNodos, crearRelaciones } from "./logic/logica";

import Header from "./components/Header";
import Form from "./components/Form";
import Nodos from "./components/Nodos";
import Relaciones from "./components/Relaciones";
import Buscar from "./components/Buscar";
import Resultados from "./components/Resultados";

export default function App() {
  const [grafo, setGrafo] = useState([]);

  const agregarNodo = (nombreNodo) => {
    const nodo = crearNodos(nombreNodo);
    setGrafo([...grafo, nodo]);
  }

  const agregarRelacion = (idNodoOrigen, idNodoDestino, nombreRelacion) => {
    const newGrafo = crearRelaciones(idNodoOrigen, idNodoDestino, nombreRelacion, grafo);
    setGrafo(newGrafo);
  }

  return (
    <>
      <Header />
      <main className="w-full">
        <div className="container mx-auto max-w-5xl p-4 grid grid-cols-5 gap-16">
          <Form agregarNodo={agregarNodo} agregarRelacion={agregarRelacion} grafo={grafo} />
          <Nodos grafo={grafo} />
          <Relaciones grafo={grafo} />
          <Buscar />
          <Resultados />
        </div>
      </main>
    </>
  )
}