import * as Three from "three-full";

const vertShader = require("shaders/material_shaders/tooth_shader/vert.glsl");
const fragShader = require("shaders/material_shaders/tooth_shader/frag.glsl");

class ColourShader{
	constructor(texture){
		let colour = new Three.Vector4(1, 1, 1, 1);
		
		let map = new Three.CanvasTexture(texture);
		map.minFilter = Three.LinearFilter;
		map.magFilter = Three.LinearFilter;

		this.material = new Three.ShaderMaterial({
			uniforms : {
				map : {
					value : map
				},
				colour : {
					value : colour
				}
			},
			vertexShader : vertShader,
			fragmentShader : fragShader,
			transparent : true
		});

		this.material.blending = Three.CustomBlending;
		this.material.blendEquation = Three.AddEquation;
		this.material.blendSrc = Three.SrcAlphaFactor;
		this.material.blendDst = Three.OneMinusSrcAlphaFactor;
	}

	update(){
		this.material.uniforms.map.value.needsUpdate = true;
	}

}

export default ColourShader;