"use struct"
window.addEventListener('scroll', function() {
  {
    if (window.scrollY != 0) 
    {
      head.style.backgroundColor = "#F9F4EE";
    } else 
    {
      head.style.backgroundColor = null;
    }
  }
});

if (document.documentElement.clientWidth < 600)
{
  alert(600);
}