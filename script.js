const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedback = document.getElementById("feedback");
  const guess = inputElement.value;

  while (attempts > 0) {
    if (guess == randomNumber) {
      feedback.innerHTML = "Congrats! You have guessed it!";
      feedback.style.color = "green";
      attempts = 0;
      break;
    } else if (guess < randomNumber) {
      feedback.innerHTML = `Number too low, try again. You have ${attempts} left`;
      feedback.style.color = "red";
      break;
    } else {
      feedback.innerHTML = `Number too high, try again. You have ${attempts} left`;
      feedback.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && guess != randomNumber) {
    feedback.style.color = "red";
    feedback.innerHTML = `Game Over! The correct number was ${randomNumber}`;
  }
  
}
