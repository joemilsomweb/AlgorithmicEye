varying vec2 uvFrag;

void main() {
    
    uvFrag = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.);
}