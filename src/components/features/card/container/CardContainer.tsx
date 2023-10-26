import { useState } from "react";

import { Pep } from "../bingo.type.ts";
import { usePep } from "../hooks/usePep.tsx";
import { useIterator } from "../hooks/useIterator.tsx";
import { CardPresenter } from "../presenter/CardPresenter.tsx";

export const CardContainer = () => {
  const peps = usePep();
  const [pep, setPep] = useState<Pep>();
  const { index, next } = useIterator(75);

  const onPick = () => {
    next();
    const nextPep = peps[index];
    nextPep.isActive = true;
    setPep(nextPep);
  };

  return <CardPresenter pep={pep} peps={peps} onPick={onPick} />;
};
