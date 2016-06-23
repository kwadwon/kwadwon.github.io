$(document).ready(function() {
  $("#to_features").click(function (e) {
    $("#home").hide();
    $("#contact").hide();
    $("#features").show();
  });

  $("#to_contact").click(function(e) {
    $("#home").hide();
    $("#features").hide();
    $("#contact").show();
  });

  $("#to_home").click(function(e) {
    $("#features").hide();
    $("#contact").hide();
    $("#home").show();
  });

  $("#learn_more").click(function (e) {
    $("#home").hide();
    $("#contact").hide();
    $("#features").show();
  });
})
