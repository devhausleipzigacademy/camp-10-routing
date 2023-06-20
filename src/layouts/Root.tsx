import { Outlet, Link } from "react-router-dom"

export function RootLayout() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-700 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      <div className="flex-1 flex">
        {/* <aside className="bg-slate-400 p-4">Sidebar</aside> */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <footer className="bg-slate-700 text-white p-4">Footer</footer>
    </div>
  )
}
