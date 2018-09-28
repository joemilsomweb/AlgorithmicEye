uniform sampler2D map;
uniform vec4 colour;

varying vec2 vUv;

uniform float offset;

void main()
{    
    vec4 texMaskR = texture2D(map, vUv - 0.0025 + offset);
    vec4 texMaskG = texture2D(map, vUv + 0.00125 + offset);
    vec4 texMaskB = texture2D(map, vUv + 0.0025 + offset);


    // gl_FragColor = col;
    gl_FragColor = vec4(texMaskR.r, texMaskG.g, texMaskB.b, texMaskG.a);
    // gl_FragColor = vec4(texMaskR.r, texMaskR.g, texMaskR.b, texMaskR.a);
}

