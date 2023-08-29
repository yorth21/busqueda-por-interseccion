import Relacion from "./Relacion";

export default function Relaciones({ grafo }) {

  const relaciones = [];
  if (grafo.length < 0) {
    console.warn("No hay nodos");
    return;
  }

  grafo.map((nodo) => (
    nodo.hijos.map((relacion) => (
      relaciones.push({
        nombreNodoOrigen: nodo.nombre,
        nombreNodoDestino: relacion.nodo.nombre,
        nombreRelacion: relacion.relacion,
        idRelacion: relacion.idRelacion
      })
    ))
  ))

  return (
    <div className="col-span-5">
      <h2 className="text-2xl py-2">Relaciones</h2>
      <div className="flex flex-row flex-wrap gap-2 px-2 py-2 rounded-xl border-2 border-neutral-300/70 w-full">
        {relaciones.length > 0 ? (
          relaciones.map((item) => (
            <Relacion
              key={item.idRelacion}
              nombreNodoOrigen={item.nombreNodoOrigen}
              nombreNodoDestino={item.nombreNodoDestino}
              nombreRelacion={item.nombreRelacion}
              idRelacion={item.idRelacion}
            />
          ))

        ) : (
          <div className="text-neutral-300/70">Lista Vacia</div>
        )
        }
      </div>
    </div>
  )
}
