//textures
uniform sampler2D stringNormMap;
uniform sampler2D strangeNormMap;
uniform sampler2D tinTexture;
uniform sampler2D crystalTexture;
uniform sampler2D resnMaskTexture;

//updating variables
//uniform float resnAlphaMult;
uniform float mixTexture;
uniform float mixNormal;
//uniform float mixNormalPsych;
uniform float circleDist;
uniform float time;

varying vec4 vertTexCoord;

void main()
{

	//offset the base coordinates to simulate movement
	float normX = vertTexCoord.x + sin(time / 10.);
	float normY = vertTexCoord.y + sin(time / 10.);

	vec2 normCoords = vec2(normX, normY);

	//mix the normal map textures to morph between them
	vec4 texMix = mix(texture2D(stringNormMap, normCoords), texture2D(strangeNormMap, normCoords), mixNormal);

	//distort the texture loohup for cool effects
	float x = ((sin(texMix.x + time) + 1.) * 5.) * .05 + sin(vertTexCoord.x * time * 0.02);
	float y = ((sin(texMix.y + time * 0.5) + 2.)) +  + cos(vertTexCoord.y * time * 0.01);

	float dist = distance(vertTexCoord.xy, vec2(0.5, 0.5));
	float aMult = 1.;	

	//get the distance of the fragment from the center
	float xDiff = vertTexCoord.x - 0.5;
	float yDiff = vertTexCoord.y - 0.5;

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
	vec4 resnColor = texture2D(resnMaskTexture, (vertTexCoord.xy));

	vec4 outputColor;

	if(resnColor.r > 0.8){
		outputColor = vec4(normalColor.rgb, 1);

		//outputColor =  normalColor;
	}
	else{
		//outputColor = vec4(0,0,0,0);
		outputColor =  normalColor;
	}

	//outputColor.rgb *= aMult;

	gl_FragColor = outputColor;
}
