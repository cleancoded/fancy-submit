$("button").click(function () {
  var target = $(this).attr("id");
  if ($(target).hasClass("done")) {
    // Do nothing
  } else {
    $(target).addClass("processing");
    setTimeout(function () {
      $(target).removeClass("processing");
      $(target).addClass("done");
    }, 2200);
  }
});