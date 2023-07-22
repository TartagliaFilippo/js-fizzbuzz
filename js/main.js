//DICHIARO IL CONTAINER DEI MIEI QUADRATI
const targetContainer = document.getElementById("target-container");

//INSERISCO IL CICLO FOR
for (let i = 1; i <= 100; i++) {
  //console.log(i);

  //VARIABILE DI INDENTIFICAZIONE
  let numbers = i;

  // DICHAIRO LE COSTANTI PER LE CONDIZIONI
  const FizzBuzz = "FizzBuzz";
  const Fizz = "Fizz";
  const Buzz = "Buzz";

  //CONDIZIONI
  if (i % 3 == 0 && i % 5 == 0) {
    numbers = FizzBuzz;
  } else if (i % 3 == 0) {
    numbers = Fizz;
  } else if (i % 5 == 0) {
    numbers = Buzz;
  }
  console.log(numbers);

  // INSERISCO IL CICLO NEL DOCUMENT
  let targetDiv = document.createElement("div");
  targetDiv.innerText = numbers;
  targetContainer.append(targetDiv);

  // CREO I QUADRATI
  targetDiv.classList.add("box");

  // DICHIARO LE CLASSI DEI VARI NUMBERS

  //INSERICO I VALORI NEI QUADRATI
  // let targetP = document.createTextNode(numbers);
  // document.body.appendChild(targetP);
}
