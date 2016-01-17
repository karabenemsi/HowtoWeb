$(function(){

  // Examples CSS

  // MaxHeight and MaxWidht Example
  $('#js_ex_1').mouseover(function(){
    TweenMax.to($(this), 0.5 , {width:'300px', height: '150px'});
  });
  $('#js_ex_1').mouseleave(function(){
    TweenMax.to($(this), 0.5 , {width:'50%', height: '10rem'});
  });

  //Position
  $('#js_ex_2').mouseover(function(){
    TweenMax.to($(this), 0.5, {top: '2rem'});
  });
  $('#js_ex_2').mouseleave(function(){
    TweenMax.to($(this), 0.5, {top: '0'});
  });

  var js_ex_3_c = false;
  $('#js_ex_3').click(function(){
    if(js_ex_3_c) {
      $(this).css('position', 'static');
      js_ex_3_c = false;
    } else {
      $(this).css('position', 'fixed').css('left', '10rem').css('bottom', '10rem');
      js_ex_3_c = true;
    }
  });

  var js_ex_4_c = false
  $('#js_ex_4').click(function(){
    if (js_ex_4_c) {
      TweenMax.to($(this), 0.5, {top: 'auto', left: '16.1rem'});
      js_ex_4_c = false;
    } else {
      TweenMax.to($(this), 0.5, {top: '0', left: '55rem'});
      js_ex_4_c = true;
    }
  });


  // Float
  $('#js_ex_5_fo').click(function() {
    $(this).addClass('sactive');
    $(this).siblings().removeClass('sactive');
    $('#js_ex_5').css('clear', 'both');
  });
  $('#js_ex_5_ff').click(function() {
    $(this).addClass('sactive');
    $(this).siblings().removeClass('sactive');
    $('#js_ex_5').css('clear', 'none');
  });


//
//  JQuery
//

  $('#js_ex_6').click(function(){
    alert('You clicked me!');
  });

  $('#js_ex_7').hover(function(){
    $(this).html('You hovered me');
  });

  $('#js_ex_8').click(function(){
    $(this).css('background','pink');
  });

  $('#js_ex_9').click(function(){
    $(this).css('background', '#548944');
  });

  $('#js_ex_10').click(function(){
    $(this).css('borderWidth','10px');
  });

  $('#js_ex_11').click(function(){
    $(this).css({'background':'#548486', 'borderWidth':'15px'});
  });

  $('#js_ex_12_1').click(function () {
    $('#js_ex_12').hide('500');
  });
  $('#js_ex_12_2').click(function () {
    $('#js_ex_12').show('200');
  });





});
