alert("asd");
function consoleBG() 
{
    if ($window.scrollTop() == 0) 
    {
      $('.head').css('background-color', 'none');
    } else 
    {
      $('.head').css('background-color', '#F9F4EE');
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });