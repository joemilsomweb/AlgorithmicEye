import * as Three from "three-full";

const vertShader = require("shaders/post_processing/pp_test_shader/vert.glsl");
const fragShader = require("shaders/post_processing/pp_test_shader/frag.glsl");

class TestShader{
	constructor(texture){
		let colour = new Three.Vector4(Math.random(), Math.random(), Math.random(), 1);
		
		let map = new Three.Texture();
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
	}

	updateTexture(texture){
		this.material.uniforms.map.value = texture;
		// this.material.uniforms.map.value.needsUpdate = true;
	}

}

export default TestShader;