import * as Three from "three-full";

const vertShader = require("common/shaders/colour_shader/vert.glsl");
const fragShader = require("common/shaders/colour_shader/frag.glsl");

class ColourShader{
	constructor(texture){
		let colour = new Three.Vector4(Math.random(), Math.random(), Math.random(), 1);
		
		//for now. remove annoying resizing junk
		//fixes disappearing texture too!
		// texture.width = Math.pow(2, Math.round(Math.log(texture.width) / Math.log(2)));
		// texture.height = Math.pow(2, Math.round(Math.log(texture.height) / Math.log(2)));

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
			depthWrite : false,
			// depthTest : false,
			transparent : true
		});

		//set blending via components.
		//use system that is triggered on new
		//useful for composite operation like effects
		this.material.blending = Three.CustomBlending;
		this.material.blendEquation = Three.AddEquation;
		this.material.blendSrc = Three.SrcAlphaFactor;
		this.material.blendDst = Three.OneMinusSrcAlphaFactor;

		// this.debugTexture(texture);
	}

	update(){
		this.material.uniforms.map.value.needsUpdate = true;
	}

	debugTexture(texture){
		if(document.getElementById("debugCanvas")){
			document.body.removeChild(document.getElementById("debugCanvas"));
		}
		document.body.appendChild(texture);
		texture.id = "debugCanvas";
		texture.style.position = "absolute";
		texture.style.top = 0;

		// console.log(texture.width, texture.height);
	}

}

export default ColourShader;