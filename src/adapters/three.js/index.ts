import * as three from 'three';

import { Vertices } from '../../types/index';
import { ThreeJsAdapter } from '../../interfaces/adapters';
import { pointFactory } from '../../helpers/index';
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

    //geometry.setFromPoints(this.geometry.getConstitution());
    let vertices: Vertices = this.geometry.getConstitution();
    
    vertices.forEach(v => {
      geometry.vertices.push(new three.Vector3(v.x, v.y, v.z));
    });

    // square
    // 0 1 2 3
    // =======
    // 0 1 2
    // 2 3 0

    // pentagon
    // 0 1 2 3 4
    // =========
    // 0 1 2
    // 2 3 4
    // 4 0 1
    // 2 3 4
    // 0 1 2
    
    for (let i = 0, ii = vertices.length, iii = ii % 3; i < ii + iii; i += 2) {
      // 0
      
      // 7

      // 0, 1, 2
      // 2, 3, 4
      // 4, 5, 0
      // 0, 1, 2
      // 8     
    };

    geometry.faces.push( new three.Face3( 0, 1, 2 ) );

    var material = new three.MeshBasicMaterial( { color: "rgb(255, 0, 0)" } );   
    return new three.Mesh(geometry, material);
  }
}

export default {
  pointFactory,
  Circle,
  CircleToThreeJsAdapter,
  Polygon,
  PolygonToThreeJsAdapter
}
