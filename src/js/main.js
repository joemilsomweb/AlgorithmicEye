import Entity from 'entity';

import EyeGenerator from "face_generators/eye/eye_generator";
import MouthGenerator from "face_generators/mouth/mouth_generator";

import OutlineFactory from 'face_generators/eye/outline_types/outline_factory';
import PupilFactory from 'face_generators/eye/pupil_types/pupil_factory';
import EyelashFactory from 'face_generators/eye/eyelash_types/eyelash_factory';
import MouthFactory from 'face_generators/mouth/mouth_factory';

//systems
import RenderSystem from "systems/render_system";
import ThreeRenderSystem from "systems/three_render_system";
import UpdatePosSystem from "systems/update_pos_system";
import AnimationSystem from "systems/animation_system";
import WebglPostProcessSystem from "systems/webgl_postprocess_system";

import * as Three from "three";

const canvas = document.getElementById("main_canvas");

function generateEyes(){
	OutlineFactory.generate();
	PupilFactory.generate();
	EyelashFactory.generate();

	let numEyelashes = Math.floor(Math.random() * 20) + 4;

	let leftEyeEntities = EyeGenerator.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		eyelashGeometry : EyelashFactory.get(),
		position : {
			x : 300,
			y : canvas.height/2 - 200
		},
		numEyelashes : numEyelashes
	});

	let rightEyeEntities = EyeGenerator.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		eyelashGeometry : EyelashFactory.get(),
		position : {
			x : 812,
			y : canvas.height/2 - 200
		},
		numEyelashes : numEyelashes
	});

	return leftEyeEntities.concat(rightEyeEntities);
}

// function generateMouth(){
// 	MouthFactory.generate();

// 	return MouthGenerator.create({
// 		mouthGeometry : MouthFactory.get(),
// 		position : {
// 			x : canvas.width/2 - 100,
// 			y : 750
// 		}
// 	});
// }

let currentFrame = 0;
let entities = generateEyes();
// entities = entities.concat(generateMouth());

setRandomBackground();


//todo create function here
const width = canvas.width;
const height = canvas.height;

let ThreeScene = new Three.Scene();
let ThreeCamera = new Three.OrthographicCamera(width/-2, width/2, height/2, height/-2, 1, 1000);
let ThreeRenderer = new Three.WebGLRenderer({canvas : canvas, alpha : true});

function draw(time){

	// //generate new eyes every 80 frames
	// if(currentFrame % 140 === 0){
	//		entities = generateEyes()
	// }

	AnimationSystem.update(entities);
	UpdatePosSystem.update(entities);
	// RenderSystem.render(canvas, entities);
	ThreeRenderSystem.render(entities, ThreeRenderer, ThreeScene, ThreeCamera);

	currentFrame++;
	requestAnimationFrame(draw);
}

//for debug
window.onkeypress = function(e){
	if(e.keyCode == 32){
        entities = generateEyes();
        // entities = entities.concat(generateMouth());
        setRandomBackground();
    }
}

function setRandomBackground(){
	document.body.style.background = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," +Math.random() * 255 + ")" ;
}

draw();