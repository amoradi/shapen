import * as three from 'three';

import { Vertices } from '../../types/index';
import { ThreeJsAdapter } from '../../interfaces/adapters';
import { point } from '../../helpers/index';
import Circle from '../../shapes/circle';
import Polygon from '../../shapes/polygon';
import { Geometry } from '../../geometry/index';

abstract class ToThreeJsAdapter implements ThreeJsAdapter {
  public geometry: Geometry;

  abstract call(): any;
}

class CircleToThreeJsAdapter extends ToThreeJsAdapter {
  geometry: Circle;

  constructor(circle: Circle) {
    super();
    this.geometry = circle;
  }

  call() {
    const radius = this.geometry.getRadius();
    const color = parseInt(`0x${this.geometry.getMaterial()}`);
    const geometry = new three.CircleGeometry(radius, radius * 21);
    const material = new three.MeshBasicMaterial({ color });
   
    return new three.Mesh(geometry, material);
  }
}

class PolygonToThreeJsAdapter extends ToThreeJsAdapter {
  geometry: Polygon;

  constructor(polygon: Polygon) {
    super();
    this.geometry = polygon;
  }

  call() {
    let geometry = new three.Geometry();

    // TODO: submit an issue for "geometry.setFromPoints" isn't exposed
    // geometry.setFromPoints(this.geometry.getConstitution());
    const vertices: Vertices = this.geometry.getConstitution();
    
    vertices.forEach(v => {
      geometry.vertices.push(new three.Vector3(v.x, v.y, v.z));
    });

    for (let cnt = 0, i = 0, ii = vertices.length, iii = ii % 3; i < ii + iii; i += 2, cnt++) {
      let first: number = i >= ii ? 0 : i;
      let second: number = i + 1 >= ii ? 0 : i + 1;
      let third: number = i + 2 >= ii ? 0 : i + 2;

      if (first === 0 && cnt > 0) break;

      geometry.faces.push(new three.Face3(first, second, third));

      if (third === 0 || ii === 3) break;
    };

    const color = parseInt(`0x${this.geometry.getMaterial()}`);
    const material = new three.MeshBasicMaterial({ color });   
    return new three.Mesh(geometry, material);
  }
}

export default {
  point,
  Circle,
  CircleToThreeJsAdapter,
  Polygon,
  PolygonToThreeJsAdapter
}
