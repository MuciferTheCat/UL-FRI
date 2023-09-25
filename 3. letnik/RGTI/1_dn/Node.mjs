import * as Matrix from './Matrix.mjs';

export class Node {

    constructor() {
        this.translation = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
    }

    get forwardTransform() {

        var matrix = Matrix.identity();

        var trs = Matrix.translation(...this.translation);
        var rotX = Matrix.rotationX(this.rotation[0]);
        var rotY = Matrix.rotationY(this.rotation[1]);
        var rotZ = Matrix.rotationZ(this.rotation[2]);
        var scl = Matrix.scale(...this.scale);

        matrix = Matrix.multiply(matrix, trs);
        matrix = Matrix.multiply(matrix, rotZ);
        matrix = Matrix.multiply(matrix, rotY);
        matrix = Matrix.multiply(matrix, rotX);
        matrix = Matrix.multiply(matrix, scl);

        return matrix;
    }

    get inverseTransform() {

        var matrix = Matrix.identity();

        var rotX = Matrix.rotationX(-this.rotation[0]);
        var rotY = Matrix.rotationY(-this.rotation[1]);
        var rotZ = Matrix.rotationZ(-this.rotation[2]);
        var trs = Matrix.translation(-this.translation[0], -this.translation[1], -this.translation[2]);

        matrix = Matrix.multiply(matrix, rotZ);
        matrix = Matrix.multiply(matrix, rotY);
        matrix = Matrix.multiply(matrix, rotX);
        matrix = Matrix.multiply(matrix, trs);

        return matrix;
    }

}
