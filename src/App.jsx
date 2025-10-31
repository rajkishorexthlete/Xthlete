import React from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import FAQSection from './Chandana/FAQ section/FAQSection.jsx'
import Rohit from './Rohit/Index.jsx'
import NotFound from './NotFound.jsx'
import './App.css'
function Home() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <h1>Welcome</h1>
          <p>Choose a section to continue</p>
          <div className="options">
            <article className="option-card">
              <h3>Chandana</h3>
              <p>FAQ section demonstrating an accessible accordion component.</p>
              <Link className="card-link" to="/chandana">Go to Chandana →</Link>
            </article>
            <article className="option-card">
              <h3>Rohit</h3>
              <p>Profile cards slider with touch and keyboard interactions.</p>
              <Link className="card-link" to="/rohit">Go to Rohit →</Link>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

function App() {

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">App</div>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
          <NavLink to="/chandana" className={({ isActive }) => isActive ? 'active' : undefined}>Chandana</NavLink>
          <NavLink to="/rohit" className={({ isActive }) => isActive ? 'active' : undefined}>Rohit</NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chandana" element={<FAQSection />} />
        <Route path="/rohit" element={<Rohit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} App</div>
      </footer>
    </>
  )
}

export default App
