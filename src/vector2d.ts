export class Vector2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get magnitude(): number
    {
        return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }

    public setMagnitude(magnitude: number): void
    {
        this.normalize();
        this.multiply(magnitude);
    }

    public add(vector: Vector2D): void
    {
        this._x += vector.x;
        this._y += vector.y;
    }

    public subtract(vector: Vector2D): void
    {
        this._x -= vector.x;
        this._y -= vector.y;
    }

    public multiply(multiplier: number): void
    {
        this._x *= multiplier;
        this._y *= multiplier;
    }

    public divide(division: number): void
    {
        this._x /= division;
        this._y /= division;
    }

    public normalize(): void
    {
        this.divide(this.magnitude);
    }

    public random(max: number): void
    {
        this._x = Math.random() * max;
        this._y = Math.random() * max;
    }

    public limit(limit: number): void
    {
        if (this.magnitude > limit) {
            this.normalize();
            this.multiply(limit);
        }
    }
}
