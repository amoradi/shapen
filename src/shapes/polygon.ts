import { Geometry } from '../geometry';
import { Vertices } from '../types';

export default class Polygon extends Geometry {
  constructor(public constitution: Vertices, public material: string) {
    super();
  }
}
