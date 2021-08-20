function robotify(numString) {
  let num = numString.trimStart().trim()
  if (!/^\+?\d+$/.test(num))
    return ["I only understand a single integer"];
  num = parseInt(num);

  let message = [];
  for(let i = 0; i <= num; i++) {
    if(i.toString().includes("1")) {
      message.push("Beep!");
    } else {
      message.push(i.toString());
    }
  }
  return message;
}

//ui logic
// $(document).ready(function () {
//   $("form").submit(function (event) {
//     event.preventDefault();
//     const text = $("#input1").val();
//     $("#display-text").text(text);
//   });
// });