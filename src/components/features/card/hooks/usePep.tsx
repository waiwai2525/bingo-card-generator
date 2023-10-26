import { useEffect, useState } from "react";
import { SemanticCOLORS } from "semantic-ui-react";

import { Pep } from "../bingo.type.ts";

const pepNumberToIdent = (number: number): string => {
  if (number <= 15) return "B";
  if (number <= 30) return "I";
  if (number <= 45) return "N";
  if (number <= 60) return "G";
  return "O";
};

const pepNumberToColor = (number: number): SemanticCOLORS => {
  if (number <= 15) return "red";
  if (number <= 30) return "purple";
  if (number <= 45) return "blue";
  if (number <= 60) return "green";
  return "yellow";
};

const createPep = (number: number): Pep => {
  return {
    number: number,
    ident: pepNumberToIdent(number),
    color: pepNumberToColor(number),
    isActive: false,
  };
};

export const usePep = () => {
  const [peps, setPeps] = useState<Pep[]>([]);

  useEffect(() => {
    const numbers = [...Array(75)].map((_, index) => index + 1);

    for (let i = 0; i < 10; i++) {
      numbers.sort(() => 0.5 - Math.random());
    }

    setPeps(numbers.map((number) => createPep(number)));
  }, []);

  return peps;
};
