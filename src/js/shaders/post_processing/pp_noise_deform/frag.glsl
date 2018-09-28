uniform sampler2D map;
uniform vec4 colour;

varying vec2 vUv;

uniform float offset;

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

void main()
{    
    vec4 texMaskR = texture2D(map, vUv + noise(vec2(sin(vUv.y * 100. + offset), sin(vUv.x * 75. + offset))) * 0.004);
    // vec4 texMaskG = texture2D(map, vUv);
    // vec4 texMaskB = texture2D(map, vUv);


    // gl_FragColor = col;
    gl_FragColor = vec4(texMaskR.r, texMaskR.g, texMaskR.b, texMaskR.a);
    // gl_FragColor = vec4(texMaskR.r, texMaskR.g, texMaskR.b, texMaskR.a);
}

