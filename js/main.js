/*gloabl $ ,alert,console */

$(function () {   
    'use strict';
   //scroll to features 
   $('.header .arrow span').click(function () {
       $('html, body').animate({
       scrollTop: $('.features').offset().top
       }, 1000);
   });
//hire us scroll to our team
$('.header .hire').click(function () {
  $('html, body').animate({
  scrollTop: $('.our-team ').offset().top
  }, 1000);
});



 //trigger NiceScroll
 $('html').niceScroll();
 $('body').niceScroll({
 cursorcolor:'#f7600e',
 cursorborder: "1px solid #f7600e"        
         });

    /*Adjust height of header */
    $('.header').height($(window).height());  


    //change svg color
    $('.features .feat span').mouseenter(function(){
         $(this).find('i').css('color','white');
      });
      $('.features .feat span'). mouseleave(function(){
        $(this).find('i').css('color','#f7600e');
    });
   //  Show more projects
  $('.show-more').click(function () {
    $('.row.disp-none').fadeIn(1000); 
  });

  //check testimonials (slider what they say)
  var rightArrow= $('.they-say .fa-chevron-right');
  var leftArrow= $('.they-say .fa-chevron-left');
  function checkClient() {
    
      $('.they-say-block:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
      $('.they-say-block:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn() ;
  }
  checkClient();

  $('.they-say i').click( function (){
    if($(this).hasClass('fa-chevron-right')) {
     $('.they-say .active').fadeOut(100, function() {
     $(this).removeClass('active').next('.they-say-block').addClass('active').fadeIn();
     checkClient();
     });
    }
    else if($(this).hasClass('fa-chevron-left')){
      $('.they-say .active').fadeOut(100, function() {
        $(this).removeClass('active').prev('.they-say-block').addClass('active').fadeIn();
        checkClient();
        });
    }  //End else 
  });  //End function (events click)
  // End check testimonials (slider what they say)

  //
  /*$('.our-team .team-overlay').mouseenter(function(){
    $(this).parent().find('h4').css('color','black');
    $(this).parent().find('p').css('color','black');
    $(this).parent().find('.fa-facebook-f').css('background','#5959f1');
    $(this).parent().find('.fa-twitter').css('background','rgb(51, 167, 224)'); 
    $(this).parent().find('.fa-google-plus-g').css('background','rgb(228, 36, 99)'); 
 });
 $('.our-team .team-overlay'). mouseleave(function(){
  $('.team h4').css('color','#787d83 ');
  $('.team p').css('color','#787d83 ');
  $('.team-S-icon .fa-facebook-f').css('background','#787d83');
  $('.team-S-icon .fa-twitter').css('background','#787d83');
  $('.team-S-icon .fa-google-plus-g').css('background','#787d83');
});*/

  
});    