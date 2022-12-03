 class A{
   s="yes"
fn(){
for(let ia=0;ia<1;ia++){
  var x, i, j, l, ll, selElmnt, a, b, c;
   console.log('ok')
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  
  for (i = 0; i < 1; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    if (window.location.pathname=="/")
     {
 
 
 }else{
     a?.classList?.add('myclass')
 }
     b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < ll; j++) {
       c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
c.name=selElmnt.options[j].value
  
      c.addEventListener("click", function(e) {   
           var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
           s.value=this.name;
               
         let loc = "https://med-fair.vercel.app";
              window.location.replace(loc + `${window.location.pathname}` + "?lng=" + `${s.value}`);
      
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }

          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
 
   

   }
}

  }
 let a=new A()
 export default a;