$(document).ready ->
  
  # ajax #load content    
  $('.header_nav > li > a').live "click", (e) ->
    e.preventDefault()
    load = $("#load")
    $('.header_nav > li').removeClass "active"
    $(@).parent().addClass "active"
    load.fadeOut 200
    $.ajax(@href).done (data) ->
      load.html(data).hide().fadeIn 200

  # testFunction called on /pics
  testFunction = () ->
    alert 'This is a test function!'
  window.testFunction = testFunction

