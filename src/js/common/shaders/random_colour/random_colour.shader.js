import * as Three from "three";

const vertShader = require("common/shaders/random_colour/vert.glsl");
const fragShader = require("common/shaders/random_colour/frag.glsl");

class ColourShader{
	constructor(texture){
		let colour = new Three.Vector4(Math.random(), Math.random(), Math.random(), 1);
		
		//for now. remove annoying resizing junk
		//fixes disappearing texture too!
		texture.width = Math.pow(2, Math.round(Math.log(texture.width) / Math.log(2)));
		texture.height = Math.pow(2, Math.round(Math.log(texture.height) / Math.log(2)));

		this.material = new Three.ShaderMaterial({
			uniforms : {
				map : {
					value : new Three.CanvasTexture(texture)
				},
				colour : {
					value : colour
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
		this.material.uniforms.map.value.needsUpdate = true;

		this.material.uniforms.colour.value.x = Math.random();
		this.material.uniforms.colour.value.y = Math.random();
		this.material.uniforms.colour.value.z = Math.random();
	}
}

export default ColourShader;