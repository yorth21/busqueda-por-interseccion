import Nodo from "./Nodo";

export default function Buscar({ grafo, agregarNodoABuscar, nodosABuscar, handleBuscarInterseccion }) {
  const handleSubmitAgregarNodoABuscar = (e) => {
    e.preventDefault();
    const idNodoABuscar = e.target.idNodoABuscar.value;
    agregarNodoABuscar(idNodoABuscar);
    e.target.reset();
  }

  return (
    <div className="col-span-2 flex flex-col gap-4">
      <form onSubmit={handleSubmitAgregarNodoABuscar}>
        <h2 className="text-2xl py-2">Buscar Interseccion</h2>
        <div className="flex flex-row gap-4">
          <select
            name="idNodoABuscar"
            id="idNodoABuscar"
            className="bg-stone-950 px-3 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 focus:border-neutral-300 w-full transition-colors">
            <option value="0">Selecciona un nodo</option>
            {grafo.map((nodo) => (
              <option key={nodo.id} value={nodo.id} >{nodo.nombre}</option>
            ))}
          </select>
          <button className="px-8 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors">
            Agregar
          </button>
        </div>
      </form>

      <div className="flex flex-row flex-wrap gap-2 px-2 py-2 rounded-xl border-2 border-neutral-300/70">
        {nodosABuscar.length > 0 ? (
          nodosABuscar.map((nodo) => (
            <Nodo key={nodo.id} nodo={nodo} />
          ))
        ) : (
          <div className="text-neutral-300/70">Lista Vacia</div>
        )
        }
      </div>

      <button
        onClick={() => handleBuscarInterseccion()}
        className="px-10 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors"
      >
        Buscar
      </button>
    </div>
  )
}
