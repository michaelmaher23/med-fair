import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine, faBars, faCircle, faClose } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar2'>
          <Link to='#'     className={sidebar ? 'menu-bars2 notdisplay' : 'menu-bars2 '}>
          <FontAwesomeIcon icon={faCircle} onClick={showSidebar}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu2 active2' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar}>
            <li className='navbar-toggle2'>
              <Link to='#' className='menu-bars22'>
                <FontAwesomeIcon       icon={faClose}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='span'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
 
    </>
  );
}

export default Navbar;