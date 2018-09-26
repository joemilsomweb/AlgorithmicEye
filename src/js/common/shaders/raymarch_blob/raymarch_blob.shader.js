import * as Three from "three";

const vertShader = require("common/shaders/raymarch_blob/vertex.glsl");
const fragShader = require("common/shaders/raymarch_blob/fragment.glsl");

class ColourShader{
	constructor(texture){
	
		this.material = new Three.ShaderMaterial({
			uniforms : {
				iResolution : {
					value : new Three.Vector2(256, 512)
				},
				iTime : {
					value : Math.random() * 100
				}
			},
			vertexShader : vertShader,
			fragmentShader : fragShader
		});

		this.material.blending = Three.CustomBlending;
		this.material.blendEquation = Three.AddEquation;
		this.material.blendSrc = Three.SrcAlphaFactor;
		this.material.blendDst = Three.OneMinusSrcAlphaFactor;
	}

	update(){
		this.material.uniforms.iTime.value += 0.01;
	}
}

export default ColourShader;