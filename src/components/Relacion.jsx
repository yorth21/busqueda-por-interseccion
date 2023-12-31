import { IoMdCloseCircle } from "react-icons/io"

export default function Relacion({ nombreNodoOrigen, nombreNodoDestino, nombreRelacion, idNodoOrigen, idRelacion, eliminarRelacion }) {
  return (
    <div className="flex flex-row gap-2 justify-between items-center px-2 py-1 rounded-lg bg-neutral-300/70">
      <div className=" text-neutral-900 font-semibold">
        <span className="font-bold">{nombreNodoOrigen}</span>
        <span className=""> {nombreRelacion} </span>
        <span className="font-bold">{nombreNodoDestino}</span>
      </div>
      <button onClick={() => eliminarRelacion(idNodoOrigen, idRelacion)}>
        <IoMdCloseCircle className="text-neutral-900" />
      </button>
    </div>
  )
}
