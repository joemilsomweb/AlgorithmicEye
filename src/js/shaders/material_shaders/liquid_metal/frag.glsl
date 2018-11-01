//textures
uniform sampler2D stringNormMap;
uniform sampler2D strangeNormMap;
uniform sampler2D tinTexture;
uniform sampler2D crystalTexture;
uniform sampler2D resnMaskTexture;
uniform sampler2D map;

//updating variables
//uniform float resnAlphaMult;
uniform float mixTexture;
uniform float mixNormal;
//uniform float mixNormalPsych;
uniform float circleDist;
uniform float time;

uniform vec4 tint;

varying vec2 vUv;


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

	//offset the base coordinates to simulate movement
	float normX = vUv.x; //+ sin(time / 10.);
	float normY = vUv.y; //+ sin(time / 10.);

	vec2 normCoords = vec2(normX, normY);

	//mix the normal map textures to morph between them
	vec4 texMix = mix(texture2D(stringNormMap, normCoords), texture2D(strangeNormMap, normCoords), mixNormal);

	//distort the texture loohup for cool effects
	float x = ((sin(texMix.x + time) + 1.) * 5.) * .05 + sin(vUv.x * time * 0.02);
	float y = ((sin(texMix.y + time * 0.5) + 2.)) +  + cos(vUv.y * time * 0.01);

	float dist = distance(vUv.xy, vec2(0.5, 0.5));
	float aMult = 1.;	

	//get the distance of the fragment from the center
	float xDiff = vUv.x - 0.5;
	float yDiff = vUv.y - 0.5;

	//check if value in defined stroke circle
	if(dist > circleDist && dist < circleDist + 0.3){
		float ratio = (dist - circleDist) / 0.3;
		aMult = ratio;
	}

	float rippleFactor = sin(aMult * 3.14) * .6;
	vec2 diff = vec2(xDiff * rippleFactor, yDiff * rippleFactor);

	vec2 texCoord = vec2(x, y) + diff;

	vec4 normalColor;

	//texCoord.x = (sin(texCoord.x * 3.14) + 1.) / 2.;
    //texCoord.y = (sin(texCoord.y * 3.14) + 1.) / 2.;

	normalColor = mix(texture2D(crystalTexture, texCoord), texture2D(tinTexture, texCoord), mixTexture);

	//uncomment to activate mercury/oilstain effect
	//normalColor = mix(vec4(sin(normalColor.rbg * time), normalColor.a), normalColor, mixNormalPsych);
	vec4 resnColor = texture2D(resnMaskTexture, (vUv.xy));

	vec4 outputColor;

	if(resnColor.r > 0.8){
		outputColor = vec4(normalColor.rgb, 1);

		//outputColor =  normalColor;
	}
	else{
		//outputColor = vec4(0,0,0,0);
		outputColor =  normalColor;
	}

	// vec2 uvDistort = vUv + noise(vUv * 5. + time * 3.) / 20.;
	// uvDistort = clamp(uvDistort, 0., 1.);

	// outputColor *= texture2D(map, uvDistort).a;
	outputColor *= texture2D(map, vUv).a;
	outputColor *= tint;

	gl_FragColor = outputColor;
	// gl_FragColor = texture2D(tinTexture, vUv);
	// gl_FragColor = vec4(1.);
}
