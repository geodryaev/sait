"use struct"

function delEle (idElements)
{
  const n = document.getElementById(idElements);
  n.remove();
}
function createDiv (idElements)
{

}
window.addEventListener('scroll', function() {
  if (window.scrollY == 0) 
    {
      head.style.backgroundColor = null;
    } else 
    {
      head.style.backgroundColor = "#F9F4EE";
    }
  });

if (document.documentElement.clientWidth < 1000)
{
  delEle('head_navi');
  delEle('head_number_numberPhone');

}



