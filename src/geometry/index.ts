import { Constitution, Material } from '../types';

export abstract class Geometry {
  public constitution: Constitution;
  public material: Material;

  public getConstitution(): Constitution {
    console.log(this.constitution);
    return this.constitution;
  }

  public getMaterial(): Material {
    console.log(this.material);
    return this.material;
  }
}
