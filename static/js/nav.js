$(document).ready(function() {
  $('.nav a').click(function(event) {
    $('.nav a').parent().removeClass('active');
    $(this).parent().addClass('active');
    $.ajax(this.href).done(function(data) { 
      $('#main_content .container').html(data);
    });
    return false;
  });
});
