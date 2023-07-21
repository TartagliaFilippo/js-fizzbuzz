//DICHIARO IL CONTAINER DEI MIEI QUADRATI
const targetContainer = document.getElementById("target-container");

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

  // CREO I MIEI QUADRATI
  let targetDiv = document.createElement("div");
  targetDiv.innerText = numbers;
  document.body.append(targetDiv);
  targetDiv.classList.add("box");

  //INSERICO I VALORI NEI QUADRATI
  // let targetP = document.createTextNode(numbers);
  // document.body.appendChild(targetP);
}
