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


  return (


    <div>


    
    <nav className='navbar-container'>

    <div className= 'menu-icons' onClick={handleClick}>

    { click ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
    </div>
    

    {menu.map(({menulinks, path, index}) => {
        return(


    <div className='navbar'>
 
    <ul key={index} className= { click ? 'menu-items-active' : 'menu-items' } >

    <li>



    <Link to={path}>{menulinks}</Link>

    </li>

    </ul>



    </div>
        )

    })}
    </nav>



      
    </div>

  )
}


export default Navbar
