$(document).ready ->
  
  # ajax #load content
  $(".nav a").live "click", (e) ->
    e.preventDefault()
    load = $("#load")
    $(".nav a").parent().removeClass "active"
    $(this).parent().addClass "active"
    load.fadeOut 200
    $.ajax(@href).done (data) ->
      load.html(data).hide().fadeIn 200


