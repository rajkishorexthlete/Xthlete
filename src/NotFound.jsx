import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="page">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: 0 }}>404</h1>
        <p>We couldn't find that page.</p>
        <Link to="/">Go back home</Link>
      </div>
    </main>
  )
}

export default NotFound
