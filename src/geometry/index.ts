import { Constitution, Material, GeometryInterface } from '../types/index';

export abstract class Geometry implements GeometryInterface {
  public constitution: Constitution;
  public material: Material;

  public getConstitution(): Constitution {
    return this.constitution;
  }

  public getMaterial(): Material {
    return this.material;
  }
}
