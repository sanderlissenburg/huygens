export class ImmutableVector2D {
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

    public setMagnitude(magnitude: number): ImmutableVector2D
    {
        return this.normalize().multiply(magnitude);
    }

    public add(vector: ImmutableVector2D): ImmutableVector2D
    {
        let x: number = this.x + vector.x;
        let y: number = this.y + vector.y;

        return new ImmutableVector2D(x, y);
    }

    public subtract(vector: ImmutableVector2D): ImmutableVector2D
    {
        let x: number = this.x - vector.x;
        let y: number = this.y - vector.y;

        return new ImmutableVector2D(x, y);
    }

    public multiply(multiplier: number): ImmutableVector2D
    {
        let x: number = this.x * multiplier;
        let y: number = this.y * multiplier;

        return new ImmutableVector2D(x, y);
    }

    public divide(division: number): ImmutableVector2D
    {
        let x: number = this.x / division;
        let y: number = this.y / division;

        return new ImmutableVector2D(x, y);
    }

    public normalize(): ImmutableVector2D
    {
        return this.divide(this.magnitude);
    }

    public random(max: number = 1): ImmutableVector2D
    {
        return new ImmutableVector2D(Math.random() * max, Math.random() * max);
    }

    limit(limit: number): ImmutableVector2D
    {
        if (this.magnitude > limit) {
            return this.normalize().multiply(limit);
        }

        return new ImmutableVector2D(this.x, this.y);
    }
}
