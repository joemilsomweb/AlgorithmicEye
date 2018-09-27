import * as Three from "three-full";

const vertShader = require("common/shaders/random_colour/vert.glsl");
const fragShader = require("common/shaders/random_colour/frag.glsl");

class ColourShader{
	constructor(texture){
		let colour = new Three.Vector4(Math.random(), Math.random(), Math.random(), 1);
		
		//for now. remove annoying resizing junk
		//fixes disappearing texture too!
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
			fragmentShader : fragShader
		});

		this.material.blending = Three.CustomBlending;
		this.material.blendEquation = Three.AddEquation;
		this.material.blendSrc = Three.SrcAlphaFactor;
		this.material.blendDst = Three.OneMinusSrcAlphaFactor;

		// this.currentFrame = 0;
	}

	update(){
		// this.currentFrame++;

		// if(this.currentFrame%60 !==0){
		// 	return;
		// }

		this.material.uniforms.map.value.needsUpdate = true;

		this.material.uniforms.colour.value.x = Math.random();
		this.material.uniforms.colour.value.y = Math.random();
		this.material.uniforms.colour.value.z = Math.random();
	}
}

export default ColourShader;