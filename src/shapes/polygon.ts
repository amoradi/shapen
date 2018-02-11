import { Geometry } from '../geometry/index';
import { Vertices } from '../types/index';

export default class Polygon extends Geometry {
  constructor(public constitution: Vertices, public material: string) {
    super();
  }
}
