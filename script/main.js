"use struct"
let h = document.getElementsByClassName("head");
h[0].style.backgroundColor = "none";

let a = window.scrollY;

window.scroll({
  top: 300,
  behavior: 'smooth'
});

/*
function consoleBG() 
{
    if (window.scrollTop != 0) 
    {
      $('.head').css('background-color', 'none');
    } else 
    {
      head.style.backgroundColor = "red";
    }
  }
  alert(window.scrollTop);
  */
  function consoleBG() 
  {
      alert(12);
  }
  
  consoleBG();
  window.scroll(function() {
    consoleBG();
  });