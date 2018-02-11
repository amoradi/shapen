import { Geometry } from '../geometry';
import { Point } from '../types';

export default class Circle extends Geometry {
  constructor(public constitution: Point, public material: string, public radius: number) {
    super();
  }

  public area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
