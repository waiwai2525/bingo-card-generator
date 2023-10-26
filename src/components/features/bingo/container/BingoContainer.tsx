import { useState } from "react";

import { Pep } from "../bingo.type.ts";
import { usePep } from "../hooks/usePep.tsx";
import { useIterator } from "../hooks/useIterator.tsx";
import { BingoPresenter } from "../presenter/BingoPresenter.tsx";

export const BingoContainer = () => {
  const peps = usePep();
  const [pep, setPep] = useState<Pep>();
  const { index, next } = useIterator(75);

  const onPick = () => {
    next();
    const nextPep = peps[index];
    nextPep.isActive = true;
    setPep(nextPep);
  };

  return <BingoPresenter pep={pep} peps={peps} onPick={onPick} />;
};
