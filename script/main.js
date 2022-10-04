"use struct"

function delEle (idElements)
{
  const n = document.getElementById(idElements);
  n.remove();
}
function dropDown() {
  if(document.getElementsByClassName("dropdown-content")[0].style.display == "block")
  {
    document.getElementsByClassName("dropdown-content")[0].style.display ="none"
  }
  else
  {
    document.getElementsByClassName("dropdown-content")[0].style.display = "block";
  }
}

window.addEventListener('scroll', function() {
  if (window.scrollY == 0) 
    {
      head.style.backgroundColor = null;
      mobile_head_menuButton.style.backgroundColor = null;
    } else 
    {
      head.style.backgroundColor = "#F9F4EE";
      mobile_head_menuButton.style.backgroundColor = "#F9F4EE";
    }
  });

if (document.documentElement.clientWidth < 1000)
{
  delEle('head_navi');
  delEle('head_number_numberPhone');

}