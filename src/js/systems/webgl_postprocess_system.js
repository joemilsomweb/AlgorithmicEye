import * as Three from "three-full";

import TestShader from "shaders/post_processing/pp_test_shader/pp_test.shader";
import NoiseDeformShader from "shaders/post_processing/pp_noise_deform/pp_noise_deform.shader";
import Fake3DShader from "shaders/post_processing/pp_fake_3d/pp_fake_3d.shader";

let ScreenScene = new Three.Scene();
let ScreenCamera = new Three.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1000);

//post processing shaders
let testShader = new TestShader();
let noiseShader = new NoiseDeformShader();
let fake3dShader = new Fake3DShader();

let ScreenGeometry = new Three.PlaneBufferGeometry(1, 1);
let ScreenMaterial = testShader.material;
let ScreenMesh = new Three.Mesh(ScreenGeometry, ScreenMaterial);

ScreenScene.add(ScreenMesh);

const WebGLPostProcessSystem = {

	render : function(scene) {
		ScreenMesh.material = testShader.material;
		testShader.updateTexture(scene.renderTarget.texture);
		scene.renderer.render(ScreenScene, ScreenCamera, testShader.getRenderTarget());

		ScreenMesh.material = noiseShader.material;
		noiseShader.updateTexture(testShader.getRenderTarget());
		scene.renderer.render(ScreenScene, ScreenCamera);
	}

}

export default WebGLPostProcessSystem;