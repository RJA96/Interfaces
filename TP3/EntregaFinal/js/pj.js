let div = document.querySelector(".pj");



function moverpj(x,y){
    div.style.left = x+'px';
    div.style.top  =  y+'px';

}

var elem = document.querySelector('.wrapper'), 
         x = 0, 
         y = 0, 
         mousedown = false; 
  
 // div event mousedown 
 window.addEventListener('mousedown', function (e) { 
     // mouse state set to true 
     
     mousedown = true; 
     // subtract offset 
     x = div.offsetLeft - e.clientX;      
     y = div.offsetTop - e.clientY; 
 }, true); 
  
 // div event mouseup 
 window.addEventListener('mouseup', function (e) { 
     // mouse state set to false 
     mousedown = false; 
 }, true); 
  
 // element mousemove to stop 
 window.addEventListener('mousemove', function (e) { 
     // Is mouse pressed 
     if (mousedown) { 
         // Now we calculate the difference upwards 
         div.style.left = e.clientX + x + 'px'; 
         div.style.top = e.clientY + y + 'px'; 
         console.log("cx");
         
     } 
 }, true); 