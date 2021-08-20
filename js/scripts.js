function robotify(numString, name) {
  let num = numString.trimStart().trim();
  if (!/^\+?\d+$/.test(num)) return ["I only understand a single positive integer"];
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

function teach(msg, phrase, place) {
  return msg.map((element, i) => {
    return i.toString().includes(place) ? phrase : element;
  });
}

// ui logic
$(document).ready(function () {
  let message = [];

  $("form#num-form").submit(function (event) {
    event.preventDefault();
    
    const numInput = $("#num-input").val();
    const nameInput = $("#name-input").val();

    if (nameInput) {
      message = robotify(numInput, nameInput);
    } else {
      message = robotify(numInput);
    }

    if (message[0] === "WHY ARE YOU HURTING ME!?") {
      $("form#num-form").hide();
      $("#backwards").hide();
      $("#customize").hide();
      $("#custom-display").hide();
    }
    $("#custom-display").slideUp("slow", function() {
      $("#another").hide();
      $("#button-display").slideDown();
      $("#backwards").slideDown();
    });
    $("#display-text").text(message.join(", "));
    $("#display").slideDown();
  });

  $("#backwards").click(function () {
    $("#display").slideUp("slow", function () {
      $("#display-text").text(message.reverse().join(", "));
      $('#customize').toggle();
    });
    $("#display").slideDown();
  });

  $("#customize").click(function () {
    $("#button-display").slideUp();
    $("#custom-display").slideDown();
  });

  $("#custom-form").submit(function (e) {
    e.preventDefault();
    const teachInput = $("#teach-input").val();
    const placeInput = $("#place-input").val();
    
    message = teach(message, teachInput, placeInput);

    $("#display").slideUp("slow", function () {
      $("#display-text").text(message.join(", "));
      $("#backwards").hide();
      $("#another").slideDown();
      $("#display").slideDown();
    });
  });
});
