import { Expect, Equal } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

interface Dimensions {
  width: number;
  height: number;
}

const getRectangleArea = (dims: Dimensions) => {
  return dims.width * dims.height;
};

const getRectanglePerimeter = (dims: Dimensions) => {
  return 2 * (dims.width + dims.height);
};

it('should return the area of a rectangle', () => {
  const result = getRectangleArea({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(200);
});

it('should return the perimeter of a rectangle', () => {
  const result = getRectanglePerimeter({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(60);
});
