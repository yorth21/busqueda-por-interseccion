import { IoMdCloseCircle } from "react-icons/io"

export default function Nodo({ nodo, eliminarNodo }) {
  return (
    <div
      key={nodo.id}
      className="flex flex-row gap-2 justify-between items-center px-2 py-1 rounded-lg bg-neutral-300/70 max-w-full"
    >
      <p className="text-neutral-900 font-semibold truncate">
        {nodo.nombre}
      </p>
      <button onClick={() => eliminarNodo(nodo.id)}>
        <IoMdCloseCircle className="text-neutral-900" />
      </button>
    </div>
  )
}
