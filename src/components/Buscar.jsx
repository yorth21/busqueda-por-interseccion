export default function Buscar() {
  return (
    <div className="col-span-2 flex flex-col gap-4">
      <form className="">
        <h2 className="text-2xl py-2">Buscar Interseccion</h2>
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
          <button className="px-8 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors">
            Agregar
          </button>
        </div>
      </form>

      <div className="flex flex-row flex-wrap px-3 py-2 rounded-xl border-2 border-neutral-300/70 w-full">
        <div className="text-neutral-300/70">Lista Vacia</div>
      </div>

      <button className="px-10 py-2 font-semibold rounded-xl border-2 border-neutral-300/70 hover:border-neutral-300 transition-colors">
        Buscar
      </button>
    </div>
  )
}
