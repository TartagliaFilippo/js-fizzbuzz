//INSERISCO IL CICLO FOR
for (let i = 1; i <= 100; i++) {
  //console.log(i);
  let numbers = i;
  if (i % 3 == 0 && i % 5 == 0) {
    numbers = "FizzBuzz";
  } else if (i % 3 == 0) {
    numbers = "Fizz";
  } else if (i % 5 == 0) {
    numbers = "Buzz";
  }
  console.log(numbers);
}
