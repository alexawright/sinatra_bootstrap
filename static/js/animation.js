$(document).ready(function() {
  $('button.new_comment').click(function(event) {
    $('#comments').slideDown(400, function(){
      $('#comments .entry').animate({'opacity': 1}, 400, function() {
        $('.no_comment').slideUp(400);
      })
    });
  });
  $('a.selected').live("click", function(event) {
    $(this).fadeOut(400).parent().html('<a class="already">I already do this</a><a class="want">I want to do this</a><a class="apply">Doesn\'t apply to me</a>');
  });
  $('a.want').live("click", function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(400, function(){
      $(this).html('<a class="selected">Added this to your plan</a>').fadeIn(400);
    });
  });
  $('a.apply').live("click", function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(400, function(){
      $(this).html('<a class="selected">This tip will be ignored</a>').fadeIn(400);
    });
  });
  $('a.already').live("click", function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(400, function(){
      $(this).html('<a class="selected">Keep up the good work!</a>').fadeIn(400);
    });
  });
  $('a.view_all').toggle(function() {
    $('ul.badges').animate({'height': '330px'}, 800)
  }, function() {
    $('ul.badges').animate({'height': '210px'}, 800)
  });
});













