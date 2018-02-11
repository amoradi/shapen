import { Constitution, Material, Point, Vertices } from '../types/index';

export interface GeometryInterface {
  constitution: Constitution;
  material: Material;
  getConstitution(): Constitution;
  getMaterial(): Material;
}

export interface CircleInterface extends GeometryInterface {
  constitution: Point; 
  radius: number,
  getRadius(): number;
}

export interface PolygonInterface extends GeometryInterface {
  constitution: Vertices;
  getConstitution(): Vertices;
}
