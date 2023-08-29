export default function Form({ agregarNodo, agregarRelacion, grafo }) {
  const handleSubmitCrearNodo = (e) => {
    e.preventDefault();
    const nombreNodo = e.target.nombreNodo.value;
    if (nombreNodo.trim() === "") {
      console.warn("Agrega un nombre al nodo");
      return;
    }
    agregarNodo(nombreNodo);
    e.target.reset();
  }

  const handleSubmitCrearRelacion = (e) => {
    e.preventDefault();
    const idNodoOrigen = e.target.idNodoOrigen.value;
    const idNodoDestino = e.target.idNodoDestino.value;
    const nombreRelacion = e.target.nombreRelacion.value;
    agregarRelacion(idNodoOrigen, idNodoDestino, nombreRelacion);
    e.target.reset();
  }

  return (
    <div className="col-span-2">
      <form onSubmit={handleSubmitCrearNodo} className="mb-4">
        <h2 className="text-2xl py-2">Crear Nodo</h2>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="nombreNodo"
            id="nombreNodo"
            placeholder="Nombre del nodo"
            autoComplete="off"
            aria-label="Nombre del nodo"
            className="bg-stone-950 px-3 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 focus:border-neutral-300 w-full transition-colors"
          />
          <button className="px-10 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors">
            Crear
          </button>
        </div>
      </form>

      <form onSubmit={handleSubmitCrearRelacion}>
        <h2 className="text-2xl py-2">Crear Relación</h2>
        <div className="flex flex-row gap-4">
          <div className="w-full flex flex-col gap-2">
            <select
              name="idNodoOrigen"
              id="idNodoOrigen"
              className="bg-stone-950 px-3 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 focus:border-neutral-300 w-full transition-colors">
              <option value="0">Selecciona un nodo</option>
              {grafo.map((nodo) => (
                <option key={nodo.id} value={nodo.id} >{nodo.nombre}</option>
              ))}
            </select>

            <input
              type="text"
              name="nombreRelacion"
              id="nombreRelacion"
              placeholder="Nombre de la relación"
              autoComplete="off"
              aria-label="Nombre de la relación"
              className="bg-stone-950 px-3 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 focus:border-neutral-300 w-full transition-colors"
            />

            <select
              name="idNodoDestino"
              id="idNodoDestino"
              className="bg-stone-950 px-3 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 focus:border-neutral-300 w-full transition-colors">
              <option value="0">Selecciona un nodo</option>
              {grafo.map((nodo) => (
                <option key={nodo.id} value={nodo.id} >{nodo.nombre}</option>
              ))}
            </select>
          </div>

          <button className="px-10 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors">
            Crear
          </button>
        </div>
      </form>
    </div>
  )
}
