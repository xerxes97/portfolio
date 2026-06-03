import type { ICrosswordMap } from "@interfaces";

export const wordCombination1: ICrosswordMap = {
  maps: [{
    words: [
      {
        word: 'FRONTEND',
        position: { x: 0, y: 1 },
        direction: 'horizontal'
      },

      // cruza por la R de FRONTEND (x=1)
      {
        word: 'REACT',
        position: { x: 1, y: 10 },
        direction: 'vertical'
      },

      // cruza por la N de FRONTEND (x=3)
      {
        word: 'NEXTJS',
        position: { x: 3, y: 10 },
        direction: 'vertical'
      },

      // cruza por la T de FRONTEND (x=4)
      {
        word: 'TAILWIND',
        position: { x: 4, y: 10 },
        direction: 'vertical'
      },

      // cruza por la E de FRONTEND (x=5)
      {
        word: 'REMIX',
        position: { x: 8, y: 8 },
        direction: 'horizontal'
      },

      // cruza por la D de FRONTEND (x=7)
      {
        word: 'REDUX',
        position: { x: 7, y: 10 },
        direction: 'vertical'
      }
    ],
    sizeSquare: 60
  }],
  sizeSquare: 60,
  interval: 1000
}