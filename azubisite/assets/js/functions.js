$(function() {

  var pageheight = $('.a-home-page').height() - window.innerHeight - $('header').height();

  pageheight += 'px';

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({triggerElement: "#js_progress_trigger", triggerHook: 'onLeave', duration: pageheight})
        .addTo(controller)
        .on("progress", function (e) {
          $("#progress").css('width', e.progress*100 + '%');
        });


  $('.js_news-more').click(function(){
    var $news = $(this).parent();
    openNews('500', $news);
  });

  $('.sb_close').click(function(){
    var $news = $(this).parent();
    closeNews('500', $news);
  });



  function openNews(speed, $news) {
    $news.siblings().addClass('sb_news-nodisplay');
    $news.addClass('sb_news-display');
    $('.sidebar').addClass('sidebar-big');
    $('.sb_news-heading').removeClass('sb_small');
    $('.js_news-more').hide(speed);

  }

  function closeNews(speed, $news) {
    $('.sidebar').removeClass('sidebar-big');
    setTimeout(function(){ $news.siblings().removeClass('sb_news-nodisplay');}, 500);
    $news.removeClass('sb_news-display');
    $('.js_news-more').show();
    $('.sb_news-heading').addClass('sb_small');
  }

  // gallery
  $('.folder img').click(function(){
    var id = $(this).attr('class');
    console.log(id);
    var $toopen = $('#' + id);
    $('.preview div').not('#' + id).slideUp('500');
    setTimeout(function(){$toopen.slideDown('500');},500)



  });


  // World Map

  var worldid = '';

  $('.pin').click(function() {
    worldid = $(this).attr('id');
    $('.postcard').hide();
    $('.' + worldid).show('200');
  });


});
