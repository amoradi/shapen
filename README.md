# shapen

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A rudimentary shape library.

## Primitives

```ts
type Point = { x: number, y: number, z: number };

type Line = [Point, Point];

type Vertices = [ Point, Point, Point ];

type Planes = Vertices[];
```

## Shapes

`Circles(constitution: Point, material: string, radius: number)`

`Polygons(constitution: Vertices, material: string)`

## Authors

* **Aaron Moradi** - *Initial work* - [amoradi](https://github.com/amoradi)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/spectrum/blob/master/LICENSE.md) for details.
