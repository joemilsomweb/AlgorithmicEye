import Entity from 'entity';
import EyeAssemblage from "assemblages/eye"

import OutlineFactory from 'eye/outline_types/outline_factory';
import PupilFactory from 'eye/pupil_types/pupil_factory';

//systems
import RenderSystem from "systems/render_system";

const canvas = document.getElementById("main_canvas");


function generateEyes(){
	OutlineFactory.generate();
	PupilFactory.generate();

	//todo rename Eye Assemblage
	//generate canvas within factories instead!! Better idea.... maybe?
	let leftEyeEntities = EyeAssemblage.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		position : {
			x : 300,
			y : canvas.height/2
		}
	});

	let rightEyeEntities = EyeAssemblage.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		position : {
			x : 612,
			y : canvas.height/2
		}
	});

	return leftEyeEntities.concat(rightEyeEntities);
}

let currentFrame = 0;
let entities = [];


function draw(time){

	//generate new eyes every 80 frames
	if(currentFrame % 80 === 0){
		entities = generateEyes();
	}

	RenderSystem.render(canvas, entities);

	currentFrame++;
	requestAnimationFrame(draw);
}

draw();