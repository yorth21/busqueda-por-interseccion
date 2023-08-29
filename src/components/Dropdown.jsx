import { useState } from 'react'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="bg-stone-950 text-left px-2 py-2 font-semibold rounded-xl outline-none border-2 border-neutral-300/70 hover:border-neutral-300 w-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        More
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-neutral-400">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/account-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
            <a href="/documentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Documentation</a>
            <span className="block px-4 py-2 text-sm text-gray-700 opacity-50" role="menuitem">Invite a friend (coming soon!)</span>
          </div>
        </div>
      )}
    </div>
  )
}


