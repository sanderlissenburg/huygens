import {Vector2D} from "../src/vector2d";
import {assert} from "chai";

describe('Vector2D', () => {
    it('It adds', () => {
        let vector: Vector2D = new Vector2D(1, 2);
        vector.add(new Vector2D(1, 1));

        assert.deepEqual(vector, new Vector2D(2, 3));
    });

    it('It subtracts', () => {
        let vector: Vector2D = new Vector2D(2, 3);

        vector.subtract(new Vector2D(1, 2));

        assert.deepEqual(vector, new Vector2D(1, 1));
    });

    it('It multiplies', () => {
        let vector: Vector2D = new Vector2D(1, 2);
        vector.multiply(3);

        assert.deepEqual(vector, new Vector2D(3, 6));
    });

    it('It divides', () => {
        let vector: Vector2D = new Vector2D(6, 3);
        vector.divide(2);

        assert.deepEqual(vector, new Vector2D(3, 1.5));
    });

    it('It gives the magnitude', () => {
        let vector: Vector2D = new Vector2D(3, 4);

        assert.deepEqual(vector.magnitude, 5);
    });

    it('It sets the magnitude', () => {
        let vector: Vector2D = new Vector2D(3, 4);
        vector.setMagnitude(10);

        assert.deepEqual(vector, new Vector2D(6, 8));
    });

    it('It normalizes', () => {
        let vector: Vector2D = new Vector2D(3, 4);

        vector.normalize();

        assert.deepEqual(vector.magnitude,  1);

        vector.multiply(5);

        assert.deepEqual(vector, new Vector2D(3, 4));
    });

    it ('It randomizes for a given max', () => {
        let vector = new Vector2D(0, 0);
        vector.random(10);

        assert.isBelow(vector.x, 10);
        assert.isBelow(vector.y, 10);
    });

    it ('It limits the magnitude', () => {
        let vector: Vector2D = new Vector2D(3, 4);
        vector.limit(4);

        assert.equal(vector.magnitude, 4);
    })
});
