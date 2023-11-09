import { useRandom } from "../hooks/useRandom.tsx";
import { CardPresenter } from "../presenter/CardPresenter.tsx";

export const CardContainer = () => {
  const bs = useRandom(1, 15).slice(0, 5);
  const is = useRandom(16, 30).slice(0, 5);
  const ns = useRandom(31, 45).slice(0, 5);
  const gs = useRandom(46, 60).slice(0, 5);
  const os = useRandom(61, 75).slice(0, 5);

  return <CardPresenter  bs={bs} is={is} ns={ns} gs={gs} os={os}/>;
};
