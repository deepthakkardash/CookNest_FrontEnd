import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-100 rounded shadow mt-3 mb-4 py-3'>   
        
    <div className="d-flex w-75 justify-content-between mx-auto align-items-center">

            
            <a className="navbar-brand mx-5" href="#">CookNest</a>

            <div className='d-flex flex-row gap-5'>
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Menu</a>
                <a className="nav-link" href="#">Login</a>
                <a className="nav-link" href="#">Signup</a>
            </div>

            <div className=''>
                <input type="text" className="form-control" placeholder="Search"/>
            </div>

            <div className=''>  
                <button className="btn btn-outline-dark px-5">Cart </button>
            </div>
    </div>
    </div>
  )
}
