$(document).ready(function() {

  $("nav li span.glyphicon").click(function() {
    $(this).parent().find('ul').slideToggle()
    $(this).toggleClass("glyphicon-collapse-up")
  })

  var confirmationLinks = {
  "/abortabortabort": "abort",
  "/quitquitquit": "quit",
  "Shutdown": "shutdown"
  }

  for(var key in confirmationLinks) {
    var elem = document.getElementById(key)
    $(elem).click({name: confirmationLinks[key]}, function(event) {
      return confirm("Are you sure you want to " + event.data.name  + "?")
    });
  }
})
