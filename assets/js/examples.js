$(function(){

  // Examples CSS

  // MaxHeight and MaxWidht Example
  $('#js_ex_1').mouseover(function(){
    TweenMax.to($(this), 0.5 , {width:'300px', height: '150px'});
  });
  $('#js_ex_1').mouseleave(function(){
    TweenMax.to($(this), 0.5 , {width:'50%', height: '10rem'});
  });



});
