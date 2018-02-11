import { Geometry } from '../geometry/index';
import { Point } from '../types/index';
import { CircleInterface } from '../interfaces/index';

export default class Circle extends Geometry implements CircleInterface {
  constructor(public constitution: Point, public material: string, public radius: number) {
    super();
  }

  getRadius(): number {
    return this.radius;
  }
}
