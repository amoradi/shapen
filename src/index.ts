import Circle from './shapes/circle';
import Polygon from './shapes/polygon';
import baseMaterial from './materials';
import { Point, Vertices } from './types/index';
import { pointFactory } from './helpers';

const circlePoint: Point = pointFactory(20, 20, 0);
const polygonPoints: Vertices = [pointFactory(), pointFactory(10, 10, 0), pointFactory(20, 0, 0)];
const AaronsCircle = new Circle(circlePoint, baseMaterial, 40);
const AaronsPolygon = new Polygon(polygonPoints, baseMaterial);

AaronsCircle.getConstitution();
AaronsCircle.getMaterial();
AaronsPolygon.getConstitution();
AaronsPolygon.getMaterial();
