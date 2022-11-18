import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';
import Videoscreen from './Videoscreen'

function Watch() {

   

  return (
    <>
        <Navbar/>
        <Videoscreen/>
       
    </>
  )
}

export default Watch