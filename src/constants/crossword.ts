import type { ICrosswordMap } from "@interfaces";

export const wordCombination1: ICrosswordMap = {
  maps: [{
    words: [
      {
        word: 'FRONTEND',
        position: { x: 4, y: 3 },
        direction: 'horizontal'
      },
      {
        word: 'REACT',
        position: { x: 5, y: 3 },
        direction: 'vertical'
      },
      {
        word: 'NEXTJS',
        position: { x: 2, y: 7 },
        direction: 'horizontal'
      },
      {
        word: 'TAILWIND',
        position: { x: 4, y: 5 },
        direction: 'horizontal'
      },
      {
        word: 'REMIX',
        position: { x: 9, y: 2 },
        direction: 'vertical'
      },
      // {
      //   word: 'REDUX',
      //   position: { x: 7, y: 1 },
      //   direction: 'vertical'
      // }
    ],
    sizeSquare: 60
  }],
  sizeSquare: 60,
  interval: 1000
}