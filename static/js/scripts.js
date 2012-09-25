$(document).ready(function() {
  
  // ajax #load content
  $('.nav a').live('click', function(e) {
    e.preventDefault();
    var load = $('#load');

    $('.nav a').parent().removeClass('active');
    $(this).parent().addClass('active');
    
    load.fadeOut(200);       
    $.ajax(this.href).done(function(data) { 
        load.html(data).hide().fadeIn(200);
    });                            
  });
    
  $('.progress').hover(function() {
    $(this).children().css('width', '100%');
  }, function() {
    $(this).children().css('width', '0%');
  });
  
  $('.container#test').parent().parent().css('background', '#eeeeee');
  
  $("#collapse").toggle(function() {
    $('.row').not('.row.buttons').animate({
      height: 'toggle'
    }, 2000, function(){
      $('#collapse').text('Bring Em Back');
  });
  }, function() {
    $('.row').not('.row.buttons').animate({
      height: 'toggle'
    }, 2000, function(){
      $('#collapse').text('Collapse Divs');
    });
  });
  
  $("#opacity").toggle(function() {
    $('.row').not('.row.buttons').animate({
      opacity: 0.25
    }, 400, function(){
      $('#opacity').text('Too Hazy No Thanks');
  });
  }, function() {
    $('.row').not('.row.buttons').animate({
      opacity: 1
    }, 400, function(){
      $('#opacity').text('Change Opacity');
    });
  });
  
  $("#background").toggle(function() {
    $('.container.well').css({'background': '#92B2B7'});
    $('#background').text('Not a fan of that color!');
  }, function() {
    $('.container.well').css({'background': 'whiteSmoke'});
    $('#background').text('Change Background');
  });
  
});
