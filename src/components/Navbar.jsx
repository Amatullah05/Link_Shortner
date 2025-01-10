import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full shadow-2xl bg-slate-800 py-3 px-10 flex items-center justify-between">
    <h1 className="text-white font-bold uppercase text-xl">Shorty</h1>
    <button className="bg-blue-400 rounded-sm py-1 px-4">
      <p className="text-sm font-bold text-white">About</p>
    </button>
  </nav>
  )
}

export default Navbar