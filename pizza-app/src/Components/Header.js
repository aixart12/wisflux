import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
            <a className="navbar-brand"><strong>PiZZaApp</strong></a>
            <form className="d-flex">
            <Link className="btn m-2 btn-outline-success" to='/'>HOME</Link>
            <Link className="btn m-2 btn-outline-success" to='/cart'>CART</Link>
            <Link className="btn m-2 btn-outline-success" to='/orders'>ORDER'S</Link>
            <Link className="btn m-2 btn-outline-success" to='/login'>LOGIN</Link>
            </form>
        </div>
        </nav>
    </div>
  )
}
