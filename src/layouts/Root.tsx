import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
export function RootLayout() {
  const [count, setCount] = useState(0)
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-700 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <div className="flex-1 flex">
        <aside className="bg-slate-400 p-4">
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </aside>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <footer className="bg-slate-700 text-white p-4">Footer</footer>
    </div>
  )
}
