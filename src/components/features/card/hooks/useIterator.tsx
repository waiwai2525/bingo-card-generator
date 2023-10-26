import { useState } from "react";

export const useIterator = (length: number) => {
  const [index, setIndex] = useState<number>(-1);

  const next = () => {
    if (index + 1 > length) return;

    setIndex((origin) => origin + 1);
  };

  return { index, next };
};
