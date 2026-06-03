export interface IWord {
  word: string;
  position: IPosition;
  direction: 'horizontal' | 'vertical';
}

export interface IMap {
  words: IWord[];
  sizeSquare: number;
}

export interface ICrosswordMap {
  maps: IMap[];
  sizeSquare: number;
  interval: number;
}

export interface ISquare {
  size: number;
}

export interface IPosition {
  x: number;
  y: number;
}
