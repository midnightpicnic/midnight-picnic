// Tabs
(function ($) {
  $( "#tabs" ).tabs();
  $('.wp-block-buttons').parent().css('position', 'relative');
})(jQuery);

// Portfoio
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){

  (function ($) {
    $( "#portfolio" ).css('display', 'none');
  })(jQuery);

} else {

  var p_a = document.getElementById("project_a");
  var p_b = document.getElementById("project_b");
  var p_c = document.getElementById("project_c");
  var p_d = document.getElementById("project_d");
  var p_e = document.getElementById("project_e");

  document.addEventListener("mousemove", getMouse); 

  p_a.style.position = "absolute";
  p_b.style.position = "absolute";
  p_c.style.position = "absolute";
  p_d.style.position = "absolute";
  p_e.style.position = "absolute";
  var pos = {x:0, y:0};

  setInterval(followMouse, 50);

  var mouse = {x:0, y:0};

  function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }

  function followMouse(){
    var distX = mouse.x - pos.x;
    var distY = mouse.y - pos.y;

    pos.x += distX/5;
    pos.y += distY/2;
    
    p_a.style.left = pos.x + "px";
    p_b.style.left = pos.x + "px";
    p_c.style.left = pos.x + "px";
    p_d.style.left = pos.x + "px";
    p_e.style.left = pos.x + "px";
    p_a.style.top = pos.y + "px";
    p_b.style.top = pos.y + "px";
    p_c.style.top = pos.y + "px";
    p_d.style.top = pos.y + "px";
    p_e.style.top = pos.y + "px";
  }

}