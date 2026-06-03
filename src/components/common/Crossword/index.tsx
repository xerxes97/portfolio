import { CrosswordMap } from "./components/Map";
import type { ICrosswordMap } from "@interfaces";

export const Crossword = (props: ICrosswordMap) => {
  const { maps, sizeSquare, interval } = props;
  return (
    <div className="flex justify-center py-8 font-display text-2xl">
      <CrosswordMap words={maps[0].words} sizeSquare={sizeSquare} />
    </div>
  );
};

export default Crossword;
