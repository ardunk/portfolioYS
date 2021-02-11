$(function() {
  //vertial navigation arrows
  $('#vnav-arrow-up').click(function() {
    $('#vnav-arrow-up, #vnav-arrow-down').toggleClass('clicked');
    $.fn.fullpage.moveSectionUp();
    setTimeout(function(){
      $('#vnav-arrow-up, #vnav-arrow-down').toggleClass('clicked');
    }, 1000);
  });
  $('#vnav-arrow-down').click(function() {
    $('#vnav-arrow-up, #vnav-arrow-down').toggleClass('clicked');
    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
      $('#vnav-arrow-up, #vnav-arrow-down').toggleClass('clicked');
    }, 1000);
  });
  //open polygon on project page
  $('.project-page-polygon-outer').click(function() {
    $('.project-page-polygon-container > img').show();
    $(this).hide();
  });
  //menu navbar
  $('#header-layout-button').click(function() {
    $('#header-layout-navbar').toggleClass("open");
    $(this).toggleClass("open");
  });
});
