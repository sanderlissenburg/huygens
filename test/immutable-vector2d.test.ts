import {ImmutableVector2D} from "../src/immutable-vector2d";
import {assert} from "chai";

describe('ImmutableVector2D', () => {
    it('It immutably adds', () => {
        let vector = new ImmutableVector2D(1, 1);
        let vector2 = vector.add(new ImmutableVector2D(1, 1));

        assert.deepEqual(vector, new ImmutableVector2D(1, 1));
        assert.deepEqual(vector2, new ImmutableVector2D(2, 2));
    });

    it('It immutably subtracts', () => {
        let vector = new ImmutableVector2D(2, 2);
        let vector2 = vector.subtract(new ImmutableVector2D(1, 1));

        assert.deepEqual(vector, new ImmutableVector2D(2, 2));
        assert.deepEqual(vector2, new ImmutableVector2D(1, 1));
    });

    it('It immutably multiplies', () => {
        let vector = new ImmutableVector2D(2, 2);
        let vector2 = vector.multiply(3);

        assert.deepEqual(vector, new ImmutableVector2D(2, 2));
        assert.deepEqual(vector2, new ImmutableVector2D(6, 6));
    });

    it('It immutably divides', () => {
        let vector = new ImmutableVector2D(7, 8);
        let vector2 = vector.divide(2);

        assert.deepEqual(vector, new ImmutableVector2D(7, 8));
        assert.deepEqual(vector2, new ImmutableVector2D(3.5, 4));
    });

    it('It gives the magnitude', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(3, 4);

        assert.deepEqual(vector.magnitude, 5);
    });

    it('It immutably normalizes', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(3, 4);
        vector = vector.normalize();
        vector = vector.multiply(5);

        assert.deepEqual(vector, new ImmutableVector2D(3, 4));
    });
});
