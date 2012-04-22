$(document).ready(function() {
  $('.nav a').click(function(event) {
    $(this).parent().removeClass('active');
  });
});
