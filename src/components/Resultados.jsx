import { imprimirCaminos } from "../logic/logica";

export default function Resultados({ resultados }) {
  const caminosResueltos = imprimirCaminos(resultados);

  return (
    <div className="col-span-3">
      <h2 className="text-2xl py-2">Resultados</h2>
      <div className="flex flex-row flex-wrap gap-2 px-2 py-2 rounded-xl border-2 border-neutral-300/70">
        {caminosResueltos.length > 0 ? (
          caminosResueltos.map((caminos, index) => (
            <div
              key={index}
              className="flex flex-row flex-wrap gap-2 items-center px-2 py-1 rounded-lg bg-neutral-300/70"
            >
              <p className="text-neutral-900 font-semibold">
                {caminos}
              </p>
            </div>
          ))
        ) : (
          <div className="text-neutral-300/70">Lista Vacia</div>
        )
        }
      </div>
    </div>
  )
}
