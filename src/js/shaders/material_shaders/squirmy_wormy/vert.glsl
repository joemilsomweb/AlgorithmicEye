varying vec2 vUv; 
uniform float offset;

void main() {
    vUv = uv;

    vec4 p = modelViewMatrix * vec4(position, 1.);
    p.x += sin(p.y/10000. + offset) * 100.; 

    gl_Position = projectionMatrix * p;
}