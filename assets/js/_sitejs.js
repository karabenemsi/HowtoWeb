$(function(){
  var clickcounter = 1;
  $('body').mousedown(function(event) {
    switch (event.which) {
        case 1:
            TweenMax.to($(".js_site_" + clickcounter), 0.5 , {opacity:'1'});
            clickcounter++;
            break;
        case 3:
            clickcounter--;
            if(clickcounter < 1)
              clickcounter = 1;
            TweenMax.to($(".js_site_" + clickcounter), 0.5 , {opacity:'0'});
            break;
        default:
            alert("Don't press this button");
    }
  });

  //Prevent ContextMenu on RightMouseButtonClick
  $(this).bind("contextmenu", function(e){
    e.preventDefault();
  });
});
