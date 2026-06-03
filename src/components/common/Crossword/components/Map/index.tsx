import type { IMap } from "@interfaces";
import type { ReactElement } from "react";
import { Cube } from "../Cube";

export const CrosswordMap = ({ words, sizeSquare }: IMap) => {
  const grid = new Map<string, string>();

  for (const { word, position, direction } of words) {
    for (let i = 0; i < word.length; i++) {
      const x = direction === "horizontal" ? position.x + i : position.x;
      const y = direction === "vertical" ? position.y + i : position.y;
      grid.set(`${x},${y}`, word[i]);
    }
  }

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
      const letter = grid.get(`${x},${y}`);
      cells.push(<Cube key={`${x},${y}`} size={sizeSquare} letter={letter} />);
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
