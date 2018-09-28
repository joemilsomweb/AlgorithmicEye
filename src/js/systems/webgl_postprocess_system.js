import * as Three from "three-full";

import TestShader from "shaders/post_processing/pp_test_shader/pp_test.shader";

let ScreenScene = new Three.Scene();
let ScreenCamera = new Three.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1000);

let ScreenGeometry = new Three.PlaneBufferGeometry(1, 1);
let ScreenShader = new TestShader();
let ScreenMaterial = ScreenShader.material;
let ScreenMesh = new Three.Mesh(ScreenGeometry, ScreenMaterial);


ScreenScene.add(ScreenMesh);

const WebGLPostProcessSystem = {

	render : function(threeRenderer, target) {
		ScreenShader.updateTexture(target.texture);

		threeRenderer.render(ScreenScene, ScreenCamera);
	}

}

export default WebGLPostProcessSystem;