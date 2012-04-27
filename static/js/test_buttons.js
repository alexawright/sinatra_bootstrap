$(document).ready(function() {
  
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
    }, 2000, function(){
      $('#opacity').text('Too Hazy No Thanks');
  });
  }, function() {
    $('.row').not('.row.buttons').animate({
      opacity: 1
    }, 2000, function(){
      $('#opacity').text('Change Opacity');
    });
  });
  
  $("#background").toggle(function() {
    $('.row').not('.row.buttons').css({'background': '#eeeeee'});
    $('#background').text('I don\'t really like gray dude');
  }, function() {
    $('.row').not('.row.buttons').css({'background': 'none'});
     $('#background').text('Change Background');
  });
  
});
