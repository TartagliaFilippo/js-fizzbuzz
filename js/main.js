//INSERISCO IL CICLO FOR
for (let i = 1; i <= 100; i++) {
  //console.log(i);

  //VARIABILE DI INDENTIFICAZIONE
  let numbers = i;

  //CONDIZIONI
  if (i % 3 == 0 && i % 5 == 0) {
    numbers = "FizzBuzz";
  } else if (i % 3 == 0) {
    numbers = "Fizz";
  } else if (i % 5 == 0) {
    numbers = "Buzz";
  }
  console.log(numbers);

  const targetContainer = document.getElementById("target-container");
  let targetDiv = document.createElement("div");
  document.body.appendChild(targetDiv);
  targetDiv.classList.add("box");
}
