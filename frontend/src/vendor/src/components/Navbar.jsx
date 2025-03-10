import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className='fixed-nav-bar w-nav'>

            <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>

                <ul className='nav__links'>
                    <li className='link'><Link to="/"> Home  </Link></li>
                    <li className='link'><Link to="/pages"> Pages  </Link></li>
                    <li className='link'><Link to="/contact"> Contact  </Link></li>
                </ul>

                {/*  name of website */}
                <div className='nav__logo'>
                    <Link to="/"> Ethereal Beauty</Link>
                </div>

                <div className='nav__icons relative'>
                    <span>
                        <Link to="/search">
                            <i className="ri-search-line"></i>
                        </Link></span>
                    <span>
                        <Link to="/login">
                            <i class="ri-user-line"></i>
                        </Link>
                    </span>

                </div>



            </nav>
        </header>
    )
}

export default Navbar