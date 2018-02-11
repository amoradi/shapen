import { Geometry } from '../geometry/index';

export interface ThreeJsAdapter {
  geometry: Geometry;
  call(): any;
}
  