$(document).ready(function() {
  $('button.new_comment').click(function(event) {
    $('#comments').slideDown(400);
  });
  $('.tip_options a.want').click(function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(400, function(){
      $(this).html('<a class="selected">Added this to your plan</a>').fadeIn(400);
    });
  });
});













