import { Renderer } from './Renderer.mjs';
import { Node } from './Node.mjs';

const input = document.querySelector('textarea');
const canvas = document.querySelector('canvas');
const renderer = new Renderer(canvas.getContext('2d'));

const camera = new Node();
camera.perspective = 1;

const model = new Node();
model.vertices = [];
model.indices = [];

var mdlsclx = document.getElementById("mdlSclX");
var mdlscly = document.getElementById("mdlSclY");
var mdlsclz = document.getElementById("mdlSclZ");
var mdlrotx = document.getElementById("mdlRotX");
var mdlroty = document.getElementById("mdlRotY");
var mdlrotz = document.getElementById("mdlRotZ");
var mdltrsx = document.getElementById("mdlTrsX");
var mdltrsy = document.getElementById("mdlTrsY");
var mdltrsz = document.getElementById("mdlTrsZ");
var cmrtrsx = document.getElementById("cmrTrsX");
var cmrtrsy = document.getElementById("cmrTrsY");
var cmrtrsz = document.getElementById("cmrTrsZ");
var cmrrotx = document.getElementById("cmrRotX");
var cmrroty = document.getElementById("cmrRotY");
var cmrrotz = document.getElementById("cmrRotZ");
var cmrprs = document.getElementById("cmrPrs");

document.getElementById('draw').addEventListener('click', e => {
    const scene = JSON.parse(input.value);

    camera.translation = [...scene.camera.translation];
    camera.rotation = [...scene.camera.rotation];
    camera.perspective = scene.camera.perspective;

    model.translation = [...scene.model.translation];
    model.rotation = [...scene.model.rotation];
    model.scale = [...scene.model.scale];

    model.vertices = [...scene.vertices];
    model.indices = [...scene.indices];

    mdlsclx.value = model.scale[0];
    mdlscly.value = model.scale[1];
    mdlsclz.value = model.scale[2];

    mdlrotx.value = model.rotation[0];
    mdlroty.value = model.rotation[1];
    mdlrotz.value = model.rotation[2];

    mdltrsx.value = model.translation[0];
    mdltrsy.value = model.translation[1];
    mdltrsz.value = model.translation[2];

    cmrrotx.value = camera.rotation[0];
    cmrroty.value = camera.rotation[1];
    cmrrotz.value = camera.rotation[2];

    cmrtrsx.value = camera.translation[0];
    cmrtrsy.value = camera.translation[1];
    cmrtrsz.value = camera.translation[2];

    cmrprs.value = camera.perspective;

    renderer.render(camera, model);
});

mdlsclx.oninput = function () {
    var val = this.value;
    model.scale[0] = val;

    renderer.render(camera, model);
}

mdlscly.oninput = function () {
    var val = this.value;
    model.scale[1] = val;

    renderer.render(camera, model);
}

mdlsclz.oninput = function () {
    var val = this.value;
    model.scale[2] = val;

    renderer.render(camera, model);
}

mdlrotx.oninput = function () {
    var val = this.value;
    model.rotation[0] = val;

    renderer.render(camera, model);
}

mdlroty.oninput = function () {
    var val = this.value;
    model.rotation[1] = val;

    renderer.render(camera, model);
}

mdlrotz.oninput = function () {
    var val = this.value;
    model.rotation[2] = val;

    renderer.render(camera, model);
}

mdltrsx.oninput = function () {
    var val = this.value;
    model.translation[0] = val;

    renderer.render(camera, model);
}

mdltrsy.oninput = function () {
    var val = this.value;
    model.translation[1] = val;

    renderer.render(camera, model);
}

mdltrsz.oninput = function () {
    var val = this.value;
    model.translation[2] = val;

    renderer.render(camera, model);
}

cmrtrsx.oninput = function () {
    var val = this.value;
    camera.translation[0] = val;

    renderer.render(camera, model);
}

cmrtrsy.oninput = function () {
    var val = this.value;
    camera.translation[1] = val;

    renderer.render(camera, model);
}

cmrtrsz.oninput = function () {
    var val = this.value;
    camera.translation[2] = val;

    renderer.render(camera, model);
}

cmrrotx.oninput = function () {
    var val = this.value;
    camera.rotation[0] = val;

    renderer.render(camera, model);
}

cmrroty.oninput = function () {
    var val = this.value;
    camera.rotation[1] = val;

    renderer.render(camera, model);
}

cmrrotz.oninput = function () {
    var val = this.value;
    camera.rotation[2] = val;

    renderer.render(camera, model);
}

cmrprs.oninput = function () {
    var val = this.value;
    camera.perspective = val;

    renderer.render(camera, model);
}
