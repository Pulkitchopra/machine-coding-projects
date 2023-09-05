import React, {useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Navbar = () => {


    const menu = [

        { menulinks: 'Home', path: '/' },
    
        { menulinks: 'About', path: '/about' },
    
        { menulinks: 'Skills', path: '/skills' },
        { menulinks: 'Contact', path: '/contact' },
        { menulinks: 'Projects', path: '/projects' },

    ];

    const [click, setClick] = useState(false);

    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () => { setClick(false) }

  return (


    <div className= 'container'  >


    <div className= 'menu-icons' onClick={handleClick} >



    { click ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-times"></i> }

    </div>

    
    {menu.map(({menulinks, path, index}) => {
        return(


    <div className='navbar' key={index} >
 
    <nav>




    <ul>

    <li>

    <Link to={path} onClick={closeMobileMenu} >{menulinks}</Link>

    </li>

    </ul>

    </nav>

    </div>
        )

    })}



      
    </div>

  )
}


export default Navbar
