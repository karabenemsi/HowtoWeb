$(function(){
//ScrollMagic


var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    // duration: $('section').height(),
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
      .addIndicators();
      i++;
}

});
