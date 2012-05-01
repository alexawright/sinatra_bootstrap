$(document).ready(function() {
  $('button.new_comment').click(function(event) {
    $('#comments').slideDown(400);
  });
  $('.tip_options a.selected').hover(function() {
    $(this).text('Cancel This?');
  }, function() {
    $(this).text('You already do this!');
  });
  $('.tip_options a.selected').click(function(event) {
    $(this).fadeOut(400).parent().html('<a class="already">I already do this</a><a class="want">I want to do this</a><a class="apply">Doesn\'t apply to me</a>');
  });
  $('a.want').click(function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(400, function(){
      $(this).html('<a class="selected">Added this to your plan</a>').fadeIn(400);
    });
  });  
});













