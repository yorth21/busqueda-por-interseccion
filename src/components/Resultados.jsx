
export default function Resultados({ resultados }) {
  console.log(resultados);

  return (
    <div className="col-span-3">
      <h2 className="text-2xl py-2">Resultados</h2>
      <div className="flex flex-col px-3 py-2 rounded-xl border-2 border-neutral-300/70 w-full">

        <div className="text-neutral-300/70">Lista Vacia</div>

      </div>
    </div>
  )
}
