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

    it('It normalizes', () => {
        let vector: Vector2D = new Vector2D(3, 4);

        vector.normalize();
        vector.multiply(5);

        assert.deepEqual(vector, new Vector2D(3, 4));

    });
});
