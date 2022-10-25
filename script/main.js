"use struct"

function delEle (idElements)
{
  const n = document.getElementById(idElements);
  n.remove();
}
function dropDown() {
  if(document.getElementById("mobile_downHead").style.display == "flex")
  {
    document.getElementById("mobile_downHead").style.display ="none"
  }
  else
  {
    document.getElementById("mobile_downHead").style.display = "flex";
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