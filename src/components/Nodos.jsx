import Nodo from "./Nodo"

export default function Nodos({ grafo, eliminarNodo }) {
  const handleDelete = (idNodo) => {
    eliminarNodo(idNodo);
  }


  return (
    <div className="col-span-3">
      <h2 className="text-2xl py-2">Nodos</h2>
      <div className="flex flex-row flex-wrap gap-2 px-2 py-2 rounded-xl border-2 border-neutral-300/70">
        {grafo.length > 0 ? (
          grafo.map((nodo) => (
            <Nodo key={nodo.id} nodo={nodo} eliminarNodo={handleDelete} />
          ))
        ) : (
          <div className="text-neutral-300/70">Lista Vacia</div>
        )
        }
      </div>
    </div>
  )
}
