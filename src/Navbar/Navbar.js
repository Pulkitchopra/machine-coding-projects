import React from 'react'
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

  return (

    <div>

    {menu.map(({menulinks, path, index}) => {
        return(




    <div className='navbar' key={index} >
 
    <nav>

    <ul>

    <li>

    <Link to={path}>{menulinks}</Link>

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
