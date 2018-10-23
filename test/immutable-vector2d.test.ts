import {ImmutableVector2D} from "../src/immutable-vector2d";
import {assert} from "chai";
import {Vector2D} from "../src/vector2d";

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

    it('It immutably sets the magnitude ', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(3, 4);
        let vector2 = vector.setMagnitude(10);

        assert.deepEqual(vector, new ImmutableVector2D(3, 4));
        assert.deepEqual(vector2, new ImmutableVector2D(6, 8));
    });

    it('It immutably normalizes', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(3, 4);
        vector = vector.normalize();
        vector = vector.multiply(5);

        assert.deepEqual(vector, new ImmutableVector2D(3, 4));
    });

    it('It immutably randomizes for a given max', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(1, 2);
        let vector2: ImmutableVector2D = vector.random(10);

        assert.deepEqual(vector, new ImmutableVector2D(1, 2));
        assert.isBelow(vector2.x, 10);
        assert.isBelow(vector2.y, 10);
    });

    it('It immutably limits the magnitude', () => {
        let vector: ImmutableVector2D = new ImmutableVector2D(3, 4);
        let vector2: ImmutableVector2D = vector.limit(4);

        assert.deepEqual(vector.magnitude, 5);
        assert.deepEqual(vector2.magnitude, 4);
    });

    it('It can be created from a Vector2D', () => {
        let vector = new Vector2D(1,2);

        assert.deepEqual(ImmutableVector2D.fromVector2D(vector), new ImmutableVector2D(1, 2));
    });

    it('It can be turned into a Vector2D', () => {
        let vector = new ImmutableVector2D(1, 2);

        assert.deepEqual(vector.toVector2D(), new Vector2D(1, 2));
    })
});
