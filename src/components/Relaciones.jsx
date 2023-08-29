import Relacion from "./Relacion";

export default function Relaciones({ grafo }) {
  // Separar logica del componente

  return (
    <div className="col-span-5">
      <h2 className="text-2xl py-2">Relaciones</h2>
      <div className="flex flex-row flex-wrap gap-2 px-2 py-2 rounded-xl border-2 border-neutral-300/70 w-full">
        {grafo.length > 0 ? (
          grafo.map((nodo) => (
            nodo.hijos.map((relacion) => (
              <Relacion
                key={relacion.idRelacion}
                nombreNodoOrigen={nodo.nombre}
                nombreNodoDestino={relacion.nodo.nombre}
                nombreRelacion={relacion.relacion}
                idRelacion={relacion.idRelacion}
              />
            ))
          ))
        ) : (
          <div className="text-neutral-300/70">Lista Vacia</div>
        )
        }
      </div>
    </div>
  )
}
