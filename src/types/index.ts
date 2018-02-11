export type Material = string;
export type Point = { x: number, y: number, z: number };
export type Line = [Point, Point];
export type Vertices = [ Point, Point, Point ];
export type Planes = Vertices[];
export type Constitution = Point | Vertices | Planes;

export interface GeometryInterface {
  getConstitution(): Constitution;
  getMaterial(): Material;
}
