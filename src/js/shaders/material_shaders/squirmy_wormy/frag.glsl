uniform sampler2D map;
uniform vec4 colour;
uniform float offset;

varying vec2 vUv;

void main()
{    
    vec4 texMask = texture2D(map, vec2(vUv.x, vUv.y));
    vec4 transparentCol = vec4(0, 0, 0, 0);
    vec4 col = mix(transparentCol, colour, texMask.a);

    gl_FragColor = col;
    // gl_FragColor = vec4(1.);
}

