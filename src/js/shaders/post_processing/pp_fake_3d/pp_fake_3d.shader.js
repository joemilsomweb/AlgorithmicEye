import * as Three from "three-full";

const vertShader = require("shaders/post_processing/pp_fake_3d/vert.glsl");
const fragShader = require("shaders/post_processing/pp_fake_3d/frag.glsl");

class Fake3DShader{
	constructor(texture){
		this.renderTarget = new Three.WebGLRenderTarget(window.innerWidth, window.innerHeight);

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
				},
				offset : {
					value : 0
				}
			},
			vertexShader : vertShader,
			fragmentShader : fragShader
		});
	}

	updateTexture(texture){
		this.material.uniforms.map.value = texture;
		this.material.uniforms.offset.value +=0.1;
		// this.offsetVal+=0.1;

		// this.material.uniforms.map.value.needsUpdate = true;
	}

	getRenderTarget(){
		return this.renderTarget;
	}

}

export default Fake3DShader;