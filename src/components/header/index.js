import React, { useState } from 'react';
import logo from '../../assets/image/logo.png';
import './index.scss';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div>
            <div className='header'>
                <nav className='navigation'>
                    <a className='header-name'>
                        <img src={logo} alt='' />
                    </a>
                    <button onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                        className='hamburger'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? 'header-menu expanded' : 'header-menu'
                    }>
                        <ul>
                            <li> <a>Home</a> </li>
                            <li> <a>About</a> </li>
                            <li> <a>Contact</a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;