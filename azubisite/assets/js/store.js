
  //Home Change

//   $(function () {
//
//       var t = ["Ausbildung", "Kombistudium", "Praktikum", "Duales Studium"],
//           $h1 = $(".rotativa"),
//           $sp = $h1.find(".rotativa-highlight"),
//           i = 0,
//           widths = [];
//
//       $.each(t, function (i, v) {
//           var el = $('<span />', {
//               text: v
//           }).prependTo($h1);
//           widths.push(el.width());
//           el.remove();
//       });
//
//      $sp.css({
//           opacity: 0,
//           display: 'inline-block'
//       });
//
//       (function loop() {
//           i = ++i % t.length;
//           $sp.text(t[i]).animate({width: widths[i]}, 500, function () {
// //                TweenLite.to($sp.text(t[i]), 0.5, {width:widths[i], onComplete:function () {
//               TweenMax.to($sp.text(t[i]), 0.5, {autoAlpha:1});
//               TweenMax.to($sp.text(t[i]), 0.5, {autoAlpha:0, delay:2, onComplete:loop});
// //            }});
//           });
//       })();
//   });


// var pageheight = $('.a-home-page').height() - window.innerHeight;
  //Header
  // var headerTween = new TweenMax.to('#js_header_fixed', 1, { top: '0' });
  // var headerscene = new ScrollMagic.Scene({ triggerElement: '#js_trigger_header'}).setTween(headerTween).addTo(controller);

  //Progress Bar
