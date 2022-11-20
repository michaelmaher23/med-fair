import React from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine, faContactBook, faHeartCircleBolt, faHome, faHomeUser, faKitMedical, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon:  <FontAwesomeIcon icon={faHome}/>,
    cName: 'nav-text2'
  },
  {
    title: 'Reports',
    path: '/',
    icon:  <FontAwesomeIcon icon={faKitMedical}/>,
    cName: 'nav-text2'
  },
  {
    title: 'Products',
    path: '/',
    icon:  <FontAwesomeIcon icon={faHeartCircleBolt}/>,
    cName: 'nav-text2'
  },
  {
    title: 'Team',
    path: '/',
    icon:  <FontAwesomeIcon icon={faProductHunt}/>,
    cName: 'nav-text2'
  },
  {
    title: 'Messages',
    path: '/',
    icon:  <FontAwesomeIcon icon={faMessage}/>,
    cName: 'nav-text2'
  },
  {
    title: 'Contact us',
    path: '/contact',
    icon:  <FontAwesomeIcon icon={faContactBook}/>,
    cName: 'nav-text2'
  }
];