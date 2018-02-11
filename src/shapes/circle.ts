import { Geometry } from '../geometry/index';
import { Point } from '../types/index';

interface CircleInterface {
  constitution: Point,
  material: string, 
  radius: number,
}

export default class Circle extends Geometry implements CircleInterface {
  constructor(public constitution: Point, public material: string, public radius: number) {
    super();
  }

  getRadius(): number {
    return this.radius;
  }
}
