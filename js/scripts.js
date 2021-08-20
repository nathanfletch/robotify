function robotify(numString, name) {
  let num = numString.trimStart().trim();
  if (!/^\+?\d+$/.test(num)) return ["I only understand a single integer"];
  num = parseInt(num);

  let message = [];
  let greeting = "Won't you be my neighbor?";
  if (name) {
    greeting = `Won't you be my neighbor, ${name}?`;
  }

  if (num === 77) {
    for (let i = 0; i < 3; i++) {
      message.push("WHY ARE YOU HURTING ME!?");
    }
    message.push("EXPERIENCING TERMINAL FAILURE!!");
  } else {
    for (let i = 0; i <= num; i++) {
      if (i.toString().includes("3")) {
        message.push(greeting);
      } else if (i.toString().includes("2")) {
        message.push("Boop!");
      } else if (i.toString().includes("1")) {
        message.push("Beep!");
      } else {
        message.push(i.toString());
      }
    }
  }

  return message;
}

// ui logic
$(document).ready(function () {
  let message = [];

  $("form").submit(function (event) {
    event.preventDefault();
    const text = $("#word-input").val();
    const name = $("#name-input").val();

    if (name) {
      message = robotify(text, name);
    } else {
      message = robotify(text);
    }
    
    if (message[0] === "WHY ARE YOU HURTING ME!?") {
      $("form").hide();
      $("#backwards").hide();
    }
    // if (message.length > 10)
    $("#display-text").text(message.join(", "));
    $("#display").slideDown();
  });

  $("#backwards").click(function () {
    $("#display").slideUp("slow", function () {
      $("#display-text").text(message.reverse().join(", "));
    });
    $("#display").slideDown();
  });
});
