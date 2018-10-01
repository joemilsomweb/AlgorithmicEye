import EyeballGenerator from 'face_generators/eye/2D/eyeball_generator_2d';
import PupilGenerator from 'face_generators/eye/2D/pupil_generator_2d';
import EyelashGenerator from 'face_generators/eye/2D/eyelash_generator_2d';

import HeadGenerator from "face_generators/head_generator";
// import HeadGenerator from "face_generators/head_generator";

class CreatureGenerator{

	constructor(){
		this.entities = [];
		this.createCreature();
		this.setupEntityHeirachy();

		//setup empty parent container for positioning?
	}

	createCreature(){
		this.head = new HeadGenerator();
	}

	setupEntityHeirachy(){

	}




}


