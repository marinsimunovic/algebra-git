import { useState, useEffect } from "react";

const Zadaci = () => {
  const numbers = [6, 8, 54, 7, 53, 78];

  const [min, setMin] = useState(numbers[0]);
  const [max, setMax] = useState(numbers[0]);

  useEffect(() => {
    let currentMin = numbers[0];
    let currentMax = numbers[0];

    numbers.forEach((number) => {
      if (number < currentMin) {
        currentMin = number;
      }

      if (number > currentMax) {
        currentMax = number;
      }
    });

    setMin(currentMin);
    setMax(currentMax);
  }, []);

  console.log({ min, max });

  return <></>;
};

export default Zadaci;
