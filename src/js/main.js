import Entity from 'entity';

import EyeGenerator from "face_generators/eye/eye_generator";
import MouthGenerator from "face_generators/mouth/mouth_generator";

import EyeballGenerator from 'face_generators/eye/2D/eyeball_generator_2d';
import PupilGenerator from 'face_generators/eye/2D/pupil_generator_2d';
import EyelashGenerator from 'face_generators/eye/2D/eyelash_generator_2d';
  
//systems
import ThreeRenderSystem from "systems/three_render_system";
import UpdatePosSystem from "systems/update_pos_system";
import ScaleSystem from "systems/scale_system";
import WebglPostProcessSystem from "systems/webgl_postprocess_system";

import CanvasScene from "canvas_scene";

function generateEyes(){
	EyeballGenerator.generate();
	PupilGenerator.generate();
	EyelashGenerator.generate();

	let numEyelashes = Math.floor(Math.random() * 10) + 4;

	//put in eye generator class
	let leftEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : -300,
			y : 75
		},
		numEyelashes : numEyelashes
	});

	let rightEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : 300,
			y : 75
		},
		numEyelashes : numEyelashes
	});

	let topEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : 0,
			y : 140
		},
		numEyelashes : numEyelashes
	});

	return leftEyeEntities.concat(rightEyeEntities, topEyeEntities);
}


function generateMouth(){
	return MouthGenerator.create({
		position : {
			x : 0,
			y : -220
		}
	});
}

let currentFrame = 0;
let entities = generateEyes();
entities = entities.concat(generateMouth());

const canvas = document.getElementById("main_canvas");
let scene = new CanvasScene({canvas : canvas});
scene.setRandomBackground();


function draw(time){
	// AnimationSystem.update(entities);
	ScaleSystem.update(entities);
	UpdatePosSystem.update(entities);
	ThreeRenderSystem.render(entities, scene.renderer, scene.scene, scene.camera, scene.renderTarget);
	WebglPostProcessSystem.render(scene.renderer, scene.renderTarget);

	currentFrame++;
	requestAnimationFrame(draw);
}

//for debug
window.onkeypress = function(e){
	if(e.keyCode === 32){
        entities = generateEyes();
        entities = entities.concat(generateMouth());
        scene.setRandomBackground();
    }

    if(e.keyCode === 99){
        scene.setRandomBackground();
    }

}

draw();