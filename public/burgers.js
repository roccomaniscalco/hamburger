$(function () {
  $(".devourButton").on("click", function () {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const burger = {name: $("input").val().trim()}
    $.ajax("/api/burgers", {
      type: "POST",
      data: burger,
    }).then(() => {
      location.reload();
    });
  });
});
