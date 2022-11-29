import React from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine, faBoxes, faClinicMedical, faContactBook, faDashboard, faFilm, faHeartCircleBolt, faHome, faHomeUser, faKitMedical, faMedkit, faMessage, faPlaneCircleXmark, faPumpMedical, faSortDown, faTelevision, faTv } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon:  <FontAwesomeIcon icon={faHome}/>,
    cName: 'nav-text2',
      

  },
  {
    title: 'Watch',
    path: '/',
    icon:  <FontAwesomeIcon icon={faFilm}/>,
    cName: 'nav-text2',
    iconOpened:<FontAwesomeIcon icon={faArrowsUpToLine}/>,
    iconClosed:<FontAwesomeIcon icon={faSortDown}/>,
    subNav:[
      {
        title:'Discover',
        path:'/',
        icon:<FontAwesomeIcon icon={faMedkit}/>
      },{
        title:'Trending',
        path:'/',
        icon:<FontAwesomeIcon icon={faTelevision}/>
      }
    ],
    tall:2
  },

  {
    title: 'Contact us',
    path: '/contact',
    icon:  <FontAwesomeIcon icon={faContactBook}/>,
    cName: 'nav-text2',
    tall:0
  }
];