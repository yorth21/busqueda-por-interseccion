import { HiCode } from "react-icons/hi";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-neutral-300/20">
      <div className="container mx-auto max-w-5xl p-4">
        <h1 className="text-4xl flex flex-row items-center gap-2">
          <HiCode />
          Red Semantica</h1>
      </div>
    </header>
  )
}
