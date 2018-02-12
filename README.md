# shapen

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A rudimentary shape library.

## Primitives

```ts
type Point = { x: number, y: number, z: number };

type Line = [ Point, Point ];

type Vertices = [ Point, Point, Point ];

type Planes = Vertices[];

type Constitution = Point | Vertices | Planes;
```


## Shapes

**Circle**
- `constitution: Point`
- `material: string`
- `radius: number`

**Polygon**
- `constitution: Vertices`
- `material: string`


## Adapters

### Three JS

**CircleToThreeJsAdapter**

```ts
let myCircle = new Circle(point(0,0,0), "ff0000", 3);
let circle = new CircleToThreeJsAdapter(myCircle).call();
```

**PolygonToThreeJsAdapter**
```ts
let myPoly = new Polygon([
  point(-2, 0, 0),
  point(-2, -2, 0),
  point(3, -2, 0),
  point(3, 0, 0),
  ], "ffffff");
let poly = new PolygonToThreeJsAdapter(myPoly).call();
```


## Authors

* **Aaron Moradi** - *Initial work* - [amoradi](https://github.com/amoradi)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/spectrum/blob/master/LICENSE.md) for details.
