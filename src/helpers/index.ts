import { Point } from '../types';

export const pointFactory = (x: number = 0, y: number = 0, z: number = 0): Point => {
  return { x, y, z }
};
