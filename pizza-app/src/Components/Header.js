import React, { useState } from 'react'

export default function Header() {

  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
            <a className="navbar-brand"><strong>PiZZaApp</strong></a>
            <form className="d-flex">
            <button className="btn m-2 btn-outline-success" type="submit">HOME</button>
            <button className="btn m-2 btn-outline-success" type="submit">CART</button>
            <button className="btn m-2 btn-outline-success" type="submit">LOGIN</button>
            </form>
        </div>
        </nav>
    </div>
  )
}
