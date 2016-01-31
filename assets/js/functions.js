$(function(){
//ScrollMagic


var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .05,
    reverse: true
  }
});

controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true
    },
    ease : Cubic.easeInOut
  });

});


$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    controller.scrollTo(id);

  }

});

  var sectionArray = $('section').toArray();
  var sceneArray = [];
  var i = 1;
  for (var section in sectionArray) {
    sceneArray[i - 1] =  new ScrollMagic.Scene({ triggerElement: '#g-' + i })
      .setClassToggle('#a-' + i, 'active')
      .setTween(TweenMax.to('#header_title>a', 0.2, {text:$('#g-' + i + ' .sectionheading').html(), ease:Linear.easeNone}))
      .addTo(controller)
      i++;
}



$('#w_start').click(function(){
  var tlstart = new TimelineMax({
    delay: 0.5
  });
  tl.pause();
  // $('#welcome').css('background' , 'rgba(250,250,250,0)');
  tlstart.to($('#welcome'), 2, {background:'rgba(250,250,250,0)'}, 0 );
  tlstart.to($('#half1'), 2, {fill:"#666"}, 0);
  tlstart.to($('#half2'), 2, {fill:"#ddd"}, 0);
  tlstart.to($('.poly'), 3, {xPercent: -2000}, 0.3);
  tlstart.to($('#welcome>h1'), 3, {xPercent: -200}, 0.3);
  tlstart.to($('#welcome>.controls'), 3, {xPercent: -200}, 0.3);
  tlstart.to($('#welcome>.button'), 3, {xPercent: -2000}, 0.3);
  tlstart.to($('#half1'), 5, {xPercent:-200}, 2);
  tlstart.to($('#half2'), 5, {xPercent:200}, 2);
  tlstart.to($('#welcome'), 0.2, {display: 'none'}, 3)

});



var tl = new TimelineMax({
  paused: true,
  delay: 0.3,
  onComplete: reverse,
  onReverseComplete: starttl
});

function reverse() {
  tl.reverse();
}

function starttl() {
  tl.play(0);
}
var polys = [$('.color118'),$('.color87'),$('.color33'),$('.color68'),$('.color10'),$('.color61'),$('.color73'),$('.color18'),$('.color1'),$('.color40'),$('.color48'),$('.color3'),$('.color38'),$('.color30'),$('.color65'),$('.color114'),$('.color94'),$('.color11'),$('.color36'),$('.color89'),$('.color91'),$('.color15'),$('.color5'),$('.color92'),$('.color55'),$('.color8'),$('.color22'),$('.color46'),$('.color43'),$('.color64'),$('.color2'),$('.color104'),$('.color57'),$('.color80'),$('.color47'),$('.color59'),$('.color106'),$('.color0'),$('.color107'),$('.color49'),$('.color32'),$('.color93'),$('.color14'),$('.color108'),$('.color63'),$('.color105'),$('.color66'),$('.color41'),$('.color26'),$('.color27'),$('.color37'),$('.color88'),$('.color51'),$('.color117'),$('.color50'),$('.color16'),$('.color86'),$('.color79'),$('.color58'),$('.color100'),$('.color54'),$('.color112'),$('.color96'),$('.color20'),$('.color28'),$('.color44'),$('.color119'),$('.color99'),$('.color74'),$('.color13'),$('.color39'),$('.color42'),$('.color56'),$('.color35'),$('.color113'),$('.color31'),$('.color102'),$('.color72'),$('.color103'),$('.color12'),$('.color52'),$('.color81'),$('.color82'),$('.color17'),$('.color101'),$('.color23'),$('.color19'),$('.color29'),$('.color116'),$('.color34'),$('.color70'),$('.color77'),$('.color71'),$('.color90'),$('.color6'),$('.color111'),$('.color4'),$('.color84'),$('.color75'),$('.color98'),$('.color21'),$('.color9'),$('.color25'),$('.color24'),$('.color76'),$('.color53'),$('.color95'),$('.color67'),$('.color78'),$('.color83'),$('.color109'),$('.color60'),$('.color85'),$('.color115'),$('.color45'),$('.color69'),$('.color62'),$('.color97'),$('.color7'),$('.color110')];
// var polys = ["$('.color118')","$('.color87')","$('.color33')","$('.color68')","$('.color10')","$('.color61')","$('.color73')","$('.color18')","$('.color1')","$('.color40')","$('.color48')","$('.color3')","$('.color38')","$('.color30')","$('.color65')","$('.color114')","$('.color94')","$('.color11')","$('.color36')","$('.color89')","$('.color91')","$('.color15')","$('.color5')","$('.color92')","$('.color55')","$('.color8')","$('.color22')","$('.color46')","$('.color43')","$('.color64')","$('.color2')","$('.color104')","$('.color57')","$('.color80')","$('.color47')","$('.color59')","$('.color106')","$('.color0')","$('.color107')","$('.color49')","$('.color32')","$('.color93')","$('.color14')","$('.color108')","$('.color63')","$('.color105')","$('.color66')","$('.color41')","$('.color26')","$('.color27')","$('.color37')","$('.color88')","$('.color51')","$('.color117')","$('.color50')","$('.color16')","$('.color86')","$('.color79')","$('.color58')","$('.color100')","$('.color54')","$('.color112')","$('.color96')","$('.color20')","$('.color28')","$('.color44')","$('.color119')","$('.color99')","$('.color74')","$('.color13')","$('.color39')","$('.color42')","$('.color56')","$('.color35')","$('.color113')","$('.color31')","$('.color102')","$('.color72')","$('.color103')","$('.color12')","$('.color52')","$('.color81')","$('.color82')","$('.color17')","$('.color101')","$('.color23')","$('.color19')","$('.color29')","$('.color116')","$('.color34')","$('.color70')","$('.color77')","$('.color71')","$('.color90')","$('.color6')","$('.color111')","$('.color4')","$('.color84')","$('.color75')","$('.color98')","$('.color21')","$('.color9')","$('.color25')","$('.color24')","$('.color76')","$('.color53')","$('.color95')","$('.color67')","$('.color78')","$('.color83')","$('.color109')","$('.color60')","$('.color85')","$('.color115')","$('.color45')","$('.color69')","$('.color62')","$('.color97')","$('.color7')","$('.color110')"];
// console.log(polys);
// var string = "";
// for (var poly in polys){
//   string = string + "tl.to(" + poly + ", 0.3, {xPercent: " + Math.floor(random(-400 , 400)) + " , yPercent:" + Math.floor(random(-400 , 400)) + "}, '+=0.05');<br>";
// }
// $('#welcome').html(string);

tl.to(polys[0], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, 0.1);
tl.to(polys[1], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[0], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[1], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[2], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[3], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[4], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[5], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[6], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[7], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[8], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[9], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[10], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[11], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[12], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[13], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[14], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[15], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[16], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[17], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[18], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[19], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[20], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[21], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[22], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[23], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[24], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[25], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[26], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[27], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[28], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[29], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[30], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[31], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[32], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[33], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[34], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[35], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[36], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[37], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[38], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[39], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[40], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[41], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[42], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[43], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[44], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[45], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[46], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[47], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[48], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[49], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[50], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[51], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[52], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[53], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[54], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[55], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[56], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[57], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[58], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[59], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[60], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[61], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[62], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[63], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[64], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[65], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[66], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[67], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[68], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[69], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[70], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[71], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[72], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[73], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[74], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[75], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[76], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[77], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[78], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[79], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[80], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[81], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[82], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[83], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[84], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[85], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[86], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[87], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[88], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[89], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[90], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[91], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[92], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[93], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[94], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[95], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[96], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[97], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[98], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[99], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[100], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[101], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[102], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[103], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[104], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[105], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[106], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[107], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[108], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[109], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[110], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[111], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[112], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[113], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[114], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[115], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[116], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[117], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[118], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');
tl.to(polys[119], 0.3, {xPercent: random(-400 , 400), yPercent: random(-400 , 400), ease: Power1.easeInOut}, '+=0.05');

function random(min, max) {
  return min + Math.random() * (max - min);
}

$('#startanimation').click(function(){
  tl.resume();
});
$('#pauseanimation').click(function(){
  tl.pause();
});



// tl.play(0);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

});
