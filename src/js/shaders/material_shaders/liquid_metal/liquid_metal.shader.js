import * as Three from "three-full";

const vertShader = require("shaders/material_shaders/liquid_metal/vert.glsl");
const fragShader = require("shaders/material_shaders/liquid_metal/frag.glsl");

let loader = new Three.TextureLoader();

let stringNormMap = loader.load("images/Oxyer.png");
let strangeNormMap = loader.load("images/strange.jpeg");
let tinTexture = loader.load("images/tin.jpg");
let crystalTexture = loader.load("images/c2.jpg");
let resnMaskTexture = loader.load("images/drop_mask_edge.png");

class LiquidMetalShader{
	constructor(texture){

		stringNormMap.wrapT = stringNormMap.wrapS = Three.MirroredRepeatWrapping;
		strangeNormMap.wrapT = strangeNormMap.wrapS =Three.MirroredRepeatWrapping;
		tinTexture.wrapT = tinTexture.wrapS =Three.MirroredRepeatWrapping;
		crystalTexture.wrapT = crystalTexture.wrapS = Three.MirroredRepeatWrapping;
		resnMaskTexture.wrapT = resnMaskTexture.wrapS =Three.MirroredRepeatWrapping;

		let colour = new Three.Vector4(Math.random(), Math.random(), Math.random(), 1);
		
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
				},
				stringNormMap : {
					value : stringNormMap
				},
				strangeNormMap : {
					value : strangeNormMap
				},
				tinTexture : {
					value : tinTexture
				},
				crystalTexture : {
					value : crystalTexture
				},
				resnMaskTexture : {
					value : resnMaskTexture
				},
				time : {
					value : 0
				},
				circleDist : {
					value : 0
				},
				mixNormal : {
					value : 0
				},
				mixTexture : {
					value : 0
				},
				tint : {
					value : new Three.Vector4(Math.random(), Math.random(), Math.random(), 1)
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

		this.uMixNormal = 0;
		this.uCircleDist = 0;
		this.uMixTexture = 0;
	}

	update(){
		this.material.uniforms.time.value += 0.01;

		this.uCircleDist +=0.01;	
		this.material.uniforms.circleDist.value = (Math.sin(this.uCircleDist) * 0.7);

        this.uMixNormal += 0.005;
        this.material.uniforms.mixNormal.value = (Math.sin(this.uMixNormal) *  2 - 1);

        this.uMixTexture += 0.001;
        this.material.uniforms.mixTexture.value = (Math.sin(this.uMixTexture) *  2 - 1);

		this.material.uniforms.map.value.needsUpdate = true;
	}

}

export default LiquidMetalShader;