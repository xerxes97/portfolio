import type { IMap } from "@interfaces";
import type { ReactElement } from "react";
import { Cube } from "../Cube";

interface CrosswordMapProps extends IMap {
  interval: number;
}

export const CrosswordMap = ({ words, sizeSquare, interval }: CrosswordMapProps) => {
  const grid = new Map<string, { letter: string; delay: number }>();

  words.forEach(({ word, position, direction }, wordIndex) => {
    const delayPerLetter = interval / word.length;
    const wordOffset = wordIndex * interval;
    for (let i = 0; i < word.length; i++) {
      const x = direction === "horizontal" ? position.x + i : position.x;
      const y = direction === "vertical" ? position.y + i : position.y;
      const key = `${x},${y}`;
      const delay = wordOffset + delayPerLetter * i;
      const existing = grid.get(key);
      if (!existing || delay < existing.delay) {
        grid.set(key, { letter: word[i], delay });
      }
    }
  });

  const maxX = words.reduce((max, w) => {
    const last = w.direction === "horizontal" ? w.position.x + w.word.length - 1 : w.position.x;
    return Math.max(max, last);
  }, 0);

  const maxY = words.reduce((max, w) => {
    const last = w.direction === "vertical" ? w.position.y + w.word.length - 1 : w.position.y;
    return Math.max(max, last);
  }, 0);

  const rows: ReactElement[] = [];

  for (let y = 0; y <= maxY; y++) {
    const cells: ReactElement[] = [];
    for (let x = 0; x <= maxX; x++) {
      const cell = grid.get(`${x},${y}`);
      cells.push(<Cube key={`${x},${y}`} size={sizeSquare} letter={cell?.letter} delay={cell?.delay ?? 0} />);
    }
    rows.push(
      <div key={y} className="flex">
        {cells}
      </div>
    );
  }

  return <div className="inline-flex flex-col">{rows}</div>;
};

export default CrosswordMap;
