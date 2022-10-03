"use struct"

window.addEventListener('scroll', function() {
  if (window.scrollY == 0) 
    {
      head.style.backgroundColor = null;
    } else 
    {
      head.style.backgroundColor = "#F9F4EE";
    }
  });

if (document.documentElement.clientWidth < 600)
{
  alert(600);
}