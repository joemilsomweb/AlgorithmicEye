precision mediump float;

attribute vec4 position;
attribute vec2 uv;
uniform float time;
//uniform mat4 projectionMatrix;
varying vec2 uvTex;

void main() {
    uvTex = uv;

    gl_Position = vec4(position.xyz, 1.);
}