import * as Three from "three-full";

import TestShader from "shaders/post_processing/pp_test_shader/pp_test.shader";
import NoiseDeformShader from "shaders/post_processing/pp_noise_deform/pp_noise_deform.shader";

let ScreenScene = new Three.Scene();
let ScreenCamera = new Three.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1000);

//post processing shaders
let testShader = new TestShader();
let noiseShader = new NoiseDeformShader();

let ScreenGeometry = new Three.PlaneBufferGeometry(1, 1);
let ScreenMaterial = testShader.material;
let ScreenMesh = new Three.Mesh(ScreenGeometry, ScreenMaterial);

ScreenScene.add(ScreenMesh);

const WebGLPostProcessSystem = {

	render : function(threeRenderer, target) {
		ScreenMesh.material = testShader.material;
		testShader.updateTexture(target.texture);
		threeRenderer.render(ScreenScene, ScreenCamera, testShader.getRenderTarget());

		ScreenMesh.material = noiseShader.material;
		noiseShader.updateTexture(testShader.getRenderTarget());
		threeRenderer.render(ScreenScene, ScreenCamera);
	}

}

export default WebGLPostProcessSystem;