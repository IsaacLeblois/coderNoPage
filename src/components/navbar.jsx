import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Hyperium</a>
        <div className="navbar-nav navlinks">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          <a className="nav-link" href="#">Promociones</a>
          <a className="nav-link" href="#">Catalogo</a>
          <a className="nav-link" href='#'>Contacto</a>
        </div>
      </div>
  </nav>
  )
}

export default Navbar