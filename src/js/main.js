import Entity from 'entity';

import EyeGenerator from "face_generators/eye/eye_generator";
import MouthGenerator from "face_generators/mouth/mouth_generator";

import EyeballGenerator from 'face_generators/eye/2D/eyeball_generator_2d';
import PupilGenerator from 'face_generators/eye/2D/pupil_generator_2d';
import EyelashGenerator from 'face_generators/eye/2D/eyelash_generator_2d';
import MouthFactory from 'face_generators/mouth/mouth_factory';
  
//systems
import RenderSystem from "systems/render_system";
import ThreeRenderSystem from "systems/three_render_system";
import UpdatePosSystem from "systems/update_pos_system";
import AnimationSystem from "systems/animation_system";
import ScaleSystem from "systems/scale_system";
import WebglPostProcessSystem from "systems/webgl_postprocess_system";

import * as Three from "three-full";

const canvas = document.getElementById("main_canvas");

function generateEyes(){
	EyeballGenerator.generate();
	PupilGenerator.generate();
	EyelashGenerator.generate();

	let numEyelashes = Math.floor(Math.random() * 20) + 4;

	let leftEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : -300,
			y : 0
		},
		numEyelashes : numEyelashes
	});

	let rightEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : 300,
			y : 0
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
const width = window.innerWidth;
const height = window.innerHeight;

let ThreeScene = new Three.Scene();
let ThreeCamera = new Three.OrthographicCamera(width/-2, width/2, height/2, height/-2, 0, 1000);

let ThreeRenderer = new Three.WebGLRenderer({canvas : canvas, alpha : true, antialias : true});
ThreeRenderer.setSize(window.innerWidth, window.innerHeight);
canvas.style.height = "";


function draw(time){

	// //generate new eyes every 80 frames
	// if(currentFrame % 140 === 0){
	//		entities = generateEyes()
	// }

	// AnimationSystem.update(entities);
	ScaleSystem.update(entities);
	UpdatePosSystem.update(entities);
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