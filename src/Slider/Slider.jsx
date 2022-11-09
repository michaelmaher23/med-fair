import React, { useEffect } from 'react'
import './Slider.css'
import a from './a.jpg'
import b from './b.jpg'
import c from './c.jpg'
import d from './d.jpg'
import e from './e.jpg'
 function Slider() {
    useEffect(()=>{
        let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        setInterval(function () {plusSlides(1)} , 2000);
        
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }

    })
  return (
    <div>
      <div className="slideshow-container">

<div className="mySlides fade777">
  <div className="numbertext">1 / 3</div>
  <img className="img333" src={a} style={{width:'100%' }}/>
  <div className="text">Contact us</div>
</div>

 
<div className="mySlides fade777">
  <div className="numbertext">3 / 3</div>
  <img className="img333" src={a} style={{width:'103%'}}/>
  <div className="text"> </div>
</div>
 <a className="prev"  >❮</a>
<a className="next"  >❯</a>

</div>
<br/>

<div style={{textAlign:"center"}}>
  <span className="dot"  ></span> 
  <span className="dot"  ></span> 
  <span className="dot"  ></span> 
</div>  



    </div>
  )
}

export default Slider