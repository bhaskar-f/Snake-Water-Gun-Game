const arr = ["Snake", "Water", "Gun"];
//let rel = window.location.reload();

let rel = true;

while (rel) {
  let userconfirmation = confirm(
    "Welcome to Snake Water Gun Game\n To play Press Ok\n To skip press Cancel."
  );
  if (!userconfirmation) {
    rel = false;
    break;
  } else {
    let randomElement = Math.floor(Math.random() * arr.length);
    let userChoice = prompt("Please Enter Your Choice:\nOptions are s,w,g");
    if (userChoice) {
      if (userChoice == "s" || userChoice == "S") {
        if (randomElement == 2) {
          alert("You Lose.");
        } else if (randomElement == 1) {
          alert("You Win.");
        } else {
          alert("Draw.");
        }
      }
      if (userChoice == "w" || userChoice == "W") {
        if (randomElement == 2) {
          alert("You Win.");
        } else if (randomElement == 0) {
          alert("You Lose.");
        } else {
          alert("Draw.");
        }
      }
      if (userChoice == "g" || userChoice == "G") {
        if (randomElement == 0) {
          alert("You Win.");
        } else if (randomElement == 1) {
          alert("You Lose.");
        } else {
          alert("Draw.");
        }
      }
    } else {
      break;
    }
  }
}
