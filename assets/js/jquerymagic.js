$(function () {

  $('#startmagic').click(function () {
    $('#page3 .artboard').show('500');
    var t_body = setTimeout(body,2000);
    var t_head = setTimeout(head,5000);
    var t_ground = setTimeout(ground,7000);
    var t_speelines = setTimeout(speedlines,9000);
    var t_sparkles = setTimeout(sparkles,11000);
  });

  function body() {
    $('#page3 .bb8-body').show('500');
    $('#page3 .bb8-body .circle-1').delay('250').show('500');
    $('#page3 .bb8-body .circle-2').delay('500').show('500');
    $('#page3 .bb8-body .circle-3').delay('750').show('500');

    $('#page3 .bb8-body .line-1').delay('1000').show('500');
    $('#page3 .bb8-body .line-2').delay('1250').show('500');
    $('#page3 .bb8-body .line-3').delay('1500').show('500');

    $('#page3 .bb8-body .dot-1').delay('1500').show('500');
    $('#page3 .bb8-body .dot-2').delay('1500').show('500');

    $('#page3 .body-shadow-crop').delay('1750').show('500');
    $('#page3 .body-shadow').delay('1750').show('500');

  }

  function head() {
    $('#page3 .bb8-head').show('500');
    $('#page3 .bb8-head .head-top-crop').delay('750').show('250');
    $('#page3 .bb8-head .head-top').delay('500').show('500');
    $('#page3 .bb8-head .head-bottom').delay('500').show('500');
    $('#page3 .bb8-head .head-bottom .head-side-1').delay('500').show('500');
    $('#page3 .bb8-head .head-bottom .head-side-2').delay('500').show('500');
    $('#page3 .bb8-head .head-bottom .head-bottom-base').delay('500').show('500');

    $('#page3 .bb8-head .lens').delay('1250').show('500');
    $('#page3 .bb8-head .freckle').delay('1250').show('500');
  }

  function ground() {
    $('#page3 .ground .one').delay('250').show('500');
    $('#page3 .ground .two').delay('500').show('500');
    $('#page3 .ground .three').delay('750').show('500');
    $('#page3 .ground .four').delay('1000').show('500');
    $('#page3 .ground .five').delay('1250').show('500');
    $('#page3 .ground .six').delay('1500').show('500');
    $('#page3 .ground .seven').delay('1750').show('500');
    $('#page3 .ground .eight').delay('2000').show('500');
  }

  function speedlines() {
    $('#page3 .speedlines').delay('250').show('500');
    $('#page3 .speedlines').delay('500').show('500');
    $('#page3 .speedlines .one').delay('750').show('500');
    $('#page3 .speedlines .two').delay('1000').show('500');
    $('#page3 .speedlines .three').delay('1250').show('500');
    $('#page3 .speedlines .four').delay('1500').show('500');
    $('#page3 .speedlines .five').delay('1750').show('500');
  }

  function sparkles() {
    $('#page3 .sparkles').delay('250').show('500');
    $('#page3 .sparkles .one').delay('500').show('500');
    $('#page3 .sparkles .two').delay('750').show('500');
    $('#page3 .sparkles .three').delay('1000').show('500');
    $('#page3 .sparkles .four').delay('1250').show('500');
    $('#page3 .sparkles .five').delay('1500').show('500');
    $('#page3 .sparkles .six').delay('1750').show('500');
    $('#page3 .sparkles .seven').delay('2000').show('500');
    $('#page3 .sparkles .eight').delay('2150').show('500');
    $('#page3 .sparkles .nine').delay('2500').show('500');
    $('#page3 .sparkles .ten').delay('2750').show('500');
    $('#page3 .sparkles .eleven').delay('3000').show('500');
    $('#page3 .sparkles .twelve').delay('3250').show('500');
    $('#page3 .sparkles .thirteen').delay('3500').show('500');
    $('#page3 .sparkles .fourteen').delay('3750').show('500');
    $('#page3 .sparkles .fifteen').delay('4000').show('500');
    $('#page3 .sparkles .sixteen').delay('4250').show('500');
  }

});
