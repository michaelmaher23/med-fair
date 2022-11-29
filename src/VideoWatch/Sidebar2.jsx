import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine, faBars, faCircle, faClose, faLineChart } from '@fortawesome/free-solid-svg-icons';
 import styled from 'styled-components';
 import { useLocation } from 'react-router-dom';
import H from './H.svg'
const SidebarLink = styled(Link)`
  display: flex;
  font-family: "El Messiri", sans-serif;
  font-weight:500;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  border-top-left-radius:7px;
  border-bottom-right-radius:17px;
  background: #d2ba80;
  background-image: linear-gradient(181deg,#ffecbd,#a38337);
  border-left: 4px solid #d2ba80;
  margin-bottom:6px;
  color:black;
  &:hover {
    color: #fffed4;
    background: silver;
    border-left:  4px solid gold;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-family: "El Messiri", sans-serif;
`;

const DropdownLink = styled(Link)`
 width:fit-content;
  height: 45px;
 padding:20px;
 padding-top:5px;
 font-family: "El Messiri", sans-serif;
 padding-bottom:5px;
 margin:5px;
  margin-left: 2.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  background-image: linear-gradient(181deg,#ffecbd,#a38337);
    
  background:#d2ba80;
  font-size: 18px;
  border-radius:50px;
  &:hover {
    color:white;
    
    background:silver;
    cursor: pointer;
    
  }
`;


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);
const [Myindex,setMyindex]=useState()
  const showSubnav = () => { setSubnav(!subnav)};
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  return (
    <div>
        <div className='navbar2'>
          <Link to='#'     className={sidebar ? 'menu-bars2 notdisplay' : 'menu-bars2 '}>
          <FontAwesomeIcon icon={faCircle} onClick={showSidebar}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu2 active2' : 'nav-menu2'}>
          <div className='nav-menu-items2'  >
            
            
                <h1 className='close444'  onClick={showSidebar}   >_</h1>
             
         
            {SidebarData.map((item, index) => {
               const showSubnav = () => { setSubnav(!subnav)};

              return (
                <div>
                <SidebarLink to={item.path} onClick={(e)=>{if(item.tall==0){
                showSidebar(e)
                } setMyindex(index)}}>
                  <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                  </div>
                  <div>
                    {item.subNav && subnav
                      ? item.iconOpened
                      : item.subNav
                      ? item.iconClosed
                      : null}
                  </div>
                </SidebarLink>
                <Div true={index==Myindex}   tall={item.tall}>
                 {
                  item.subNav?.map((item, index) => {
                    return (
                      <DropdownLink to={item.path} onClick={showSidebar}   key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                      </DropdownLink>
                    );
                  })}  </Div>
              </div>
              );
            })}
          </div>     
             <img src={H} className="classimage3"/>

        </nav>
 
    </div>
  );
}
const Div=styled.div`
transition:${props=>props.true?'all 1s linear':'all 1s linear'};

height:${props=>props.true?`${(props.tall*60)}px`:'0px'};
z-index:-5;
overflow:hidden;


}
`
export default Navbar;