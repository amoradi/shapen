import * as three from 'three';

import Circle from '../../shapes/circle';

class toThreeCircle {
  circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }

  call() {
    const radius = this.circle.getRadius();
    const color = parseInt(`0x${this.circle.getMaterial()}`);
    const geometry = new three.CircleGeometry(radius, radius * 21);
    const material = new three.MeshBasicMaterial({ color });
   
    return new three.Mesh(geometry, material);
  }
}

export default {
  Circle,
  toThreeCircle
}
