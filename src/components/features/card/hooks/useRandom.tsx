export const useRandom = (min: number, max: number) => {
  const length = max - (min - 1);
  const numbers = [...Array(length)].map((_, index) => min + index);

  // シャッフルしとく
  for (let i = 0; i < 10; i++) {
    numbers.sort(() => 0.5 - Math.random());
  }

  return numbers;
};
