import * as Matrix from './Matrix.mjs';

export class Renderer {

    constructor(context) {
        this.context = context;
    }

    render(camera, model) {
        const { width, height } = this.context.canvas;
        this.context.clearRect(0, 0, width, height);

        //camera
        let cmr = camera.inverseTransform;
        console.log(cmr);
        let per = Matrix.perspective(camera.perspective);
        console.log(per);

        //model
        let mdl = model.forwardTransform;
        console.log(mdl);
        let vprt = Matrix.viewport(0, 0, 512, 512);
        console.log(vprt);

        //final matrix
        let fnlmrx = Matrix.multiply(cmr, mdl);
        fnlmrx = Matrix.multiply(per, fnlmrx);
        fnlmrx = Matrix.multiply(vprt, fnlmrx);
        console.log(fnlmrx);

        const mod = new Array(model.vertices.length / 3);

        var st = 0;

        for (let i = 0; i < model.vertices.length / 3; i++) {
            let temp = [model.vertices[st], model.vertices[st + 1], model.vertices[st + 2], 1];
            temp = Matrix.transform(fnlmrx, temp);
            mod[i] = [temp[0] / temp[3], temp[1] / temp[3], temp[2] / temp[3], 1];
            st += 3;
        }

        for (let i = 0; i < model.indices.length; i += 3) {
            this.drawTriangle(mod[model.indices[i]], mod[model.indices[i + 1]], mod[model.indices[i + 2]]);
        }
    }

    drawTriangle(v0, v1, v2) {
        this.context.beginPath();
        this.context.moveTo(...v0);
        this.context.lineTo(...v1);
        this.context.lineTo(...v2);
        this.context.closePath();
        this.context.stroke();
    }

}