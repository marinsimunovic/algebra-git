const Zadaci = () => {
  // Zadani niz brojeva
  const numbers = [1, 45, 3, 67, 3, 87, 4, 13];

  // Inicijalizacija minimuma i maksimuma
  let min = numbers[0];
  let max = numbers[0];

  // Pronalaženje minimuma i maksimuma korištenjem forEach petlje
  numbers.forEach((number) => {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  });

  // Ispisivanje rezultata u konzolu
  console.log({ min, max });

  const renderNumbers = (count: number): void => {
    if (count < 0) {
      console.log("Broj ne može biti negativan.");
    } else {
      const numbersArray = Array.from(
        { length: count + 1 },
        (_, index) => index
      );
      console.log(numbersArray.join(", "));
    }
  };

  renderNumbers(20);
  // Primjer poziva funkcije s brojem 10
};

export default Zadaci;
