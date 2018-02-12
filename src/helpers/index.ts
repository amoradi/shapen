import { Point } from '../types/index';

export const point = (x: number = 0, y: number = 0, z: number = 0): Point => {
  return { x, y, z }
};
