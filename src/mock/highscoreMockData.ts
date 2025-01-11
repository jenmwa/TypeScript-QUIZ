import { Player } from '../models/Player';

export const highscoreMockData: Player[] = [
  new Player('1', 'Alice', 6, '00:05:23', String(new Date())),
  new Player('2', 'Bob', 8, '00:06:10', String(new Date())),
  new Player('3', 'Charlie', 2, '00:07:15', String(new Date())),
];
