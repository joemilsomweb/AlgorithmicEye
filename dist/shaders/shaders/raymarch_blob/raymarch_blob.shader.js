import * as Three from "three-full";

const vertShader = require("common/shaders/raymarch_blob/vertex.glsl");
const fragShader = require("common/shaders/raymarch_blob/fragment.glsl");

class ColourShader{
	constructor(texture){
	
		let map = new Three.CanvasTexture(texture);
		map.minFilter = Three.LinearFilter;
		map.magFilter = Three.LinearFilter;

		this.material = new Three.ShaderMaterial({
			uniforms : {
				iResolution : {
					value : new Three.Vector2(texture.width, texture.height)
				},
				iTime : {
					value : Math.random() * 100
				},
				map : {
					value : map
				},
				diffuse : {
					value : new Three.Vector3(Math.random(), Math.random(), Math.random())
				},
				ambient : {
					value : new Three.Vector3(Math.random(), Math.random(), Math.random())
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
		this.material.uniforms.iTime.value += 0.01;
	}
}

export default ColourShader;