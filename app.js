$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const userName = $("#item").val();
    if (userName) {
      $(".name").append(`${userName}`);
      $("#item").val("");
    }
  });

  $(".start").click(function () {
    $(".userEnter").addClass("hideForm");
    $("section").addClass("showQuiz");
    $(".question").text(" have you eaten any cookies today?");
  });

  $(".sub1").click(function () {
    $(".sub1").toggleClass("sub1 hideButt1");
    $(".sub2").removeClass("hideButt2");
    $(".question").text("were they good?");
    $(".answer1").text("MMMMM YES!");
    $(".answer2").text("Uhhh not really...");
    $(".answer3").text("... I... I didn't eat any");
  });

  $(".sub2").click(function () {
    $(".sub2").addClass("hideButt2");
    $(".sub3").removeClass("hideButt3");
    $(".question").text(" are they looking good?");
    $(".answer1").text("Heck Yeah 😎");
    $(".answer2").text("Heck Naw 🤢");
    $(".answer3").text("Please help me i have no self control 😭");
  });

  $("#submit").click(function () {
    const selection = $("input[name=1]:checked").val();
    if (selection === "1") {
      $(".findOut").text("🍪 EAT 🍪 THEM 🍪 COOKIES!!!🍪");
    } else if (selection === "2") {
      $(".findOut").text("Eat a carrot maybe??.... 🥕");
    } else {
      $(".findOut").text("Im sorry, I dont think I can help you...🙀");
    }
    $("section").removeClass("showQuiz");
    $(".final").removeClass("outcome");
  });

  $(".startOver").click(function () {
    location.reload(true);
  });
});
