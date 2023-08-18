import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const products = useSelector(state => state.cartState)
  const list = products.cartlist
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <p className='h2'>LOGO</p>
            {/* <img src={logo} style={{ height: "70px", width: "170px" }} alt='' /> */}
          </NavLink>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll m-auto" >
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Card">Card</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Cart">Productt</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link text-light " aria-disabled="true" to="/contact">Contact</NavLink>
              </li> */}
              {/* <li className="dropdown ">
                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  Login
                </button>
                <form className="dropdown-menu p-3 m-10">
                  <div className="mb-3 form-floating">
                    <input type="email" className="form-control" id="email" placeholder="enter your email" />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                    <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className='d-flex m-3'>
                    <button type="submit" className="btn btn-success m-2 ">login</button>
                    <button type="submit" className="btn btn-success m-2">Sign_up</button>
                  </div>
                </form>
              </li> */}
            </ul>

            <i className="fa-sharp fa-solid fa-cart-shopping " style={{ color: "blue" }}>
              <p className=" top-0 start-100 translate-middle badge m-1 rounded-pill bg-danger">
                {list.length}
              </p>
            </i>
            <form className="d-flex m-1" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className=" btn btn-primary text-light " type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header