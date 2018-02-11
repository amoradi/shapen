import { Geometry } from '../geometry/index';
import { Vertices } from '../types/index';
import { PolygonInterface } from '../interfaces/index';

export default class Polygon extends Geometry implements PolygonInterface {
  constructor(public constitution: Vertices, public material: string) {
    super();
  }

  getConstitution(): Vertices {
    return this.constitution;
  }
}
