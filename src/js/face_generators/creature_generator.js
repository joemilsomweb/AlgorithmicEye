import HeadGenerator from "face_generators/head_generator";
import MouthGenerator from "face_generators/mouth_generator";
import TeethGenerator from "face_generators/teeth_generator";
import EyeGenerator from "face_generators/eye_generator";
import PupilGenerator from "face_generators/pupil_generator";
import EyelashGenerator from "face_generators/eyelash_generator";


import * as Three from "three-full";

class CreatureGenerator{

	constructor(){
		this.entities = [];
		this.createCreature();
		this.setupEntityHeirachy();
	}

	createCreature(){
		this.head = new HeadGenerator();

		this.eye = new EyeGenerator();
		this.pupil = new PupilGenerator();
		this.eyelashes = new EyelashGenerator();

		this.mouth = new MouthGenerator();
		this.teeth = new TeethGenerator();

		this.entities = [];

		let head = this.head.create();
		this.entities.push(head);

		//calculate where to put eyes, keep at least roughly at the top
		let top = this.head.headGenerator.getCurrentPath().bounds.height / 2;
		//calculate head width so we can keep the eyes in bounds
		let eyeAreaWidth = this.head.headGenerator.getCurrentPath().bounds.width * 0.7;
		//random number of eyes
		let numEyes = Math.floor((Math.random() * 5) + 1);
		let eyeArray = [];

		for(let i = 0; i < numEyes; i++){
			let xPos = this.calculateEyePosition(eyeAreaWidth, numEyes, i);
			let eye = this.setupEye({
				position : {x : xPos, y : top/3},
				maxWidth : eyeAreaWidth / numEyes
			});
			head.getComponent("MESH").addChild(eye.eyeball.getComponent("MESH"));
			this.entities = this.entities.concat(eye.entities);
		}	

		let mouth = this.setupMouth({x : 0, y : -top/2.5});	
		head.getComponent("MESH").addChild(mouth.mouth.getComponent("MESH"));
		this.entities = this.entities.concat(mouth.entities);
	}

	calculateEyePosition(eyeAreaWidth, numEyes, currentEyeInd){
		//equation is (w/n * i + w/n * (i + 1))/2 - w/2 for horizontal eye type
		//w = width of area for drawing eyes
		//n = numEyes
		//where i = currentEye
		//w/n = width of each subd for the eyes
		let xPos = (eyeAreaWidth/numEyes * currentEyeInd) + (eyeAreaWidth/numEyes * (currentEyeInd + 1));
		xPos/=2;
		xPos -= eyeAreaWidth/2;

		return xPos;
	}

	//setup eye
	setupEye(options){
		let eyeball = this.eye.create({
			position : {x : options.position.x, y : options.position.y}, 
			maxWidth : options.maxWidth
		});

		let pupil = this.pupil.create();
		let eyelashes = this.eyelashes.create({numEyelashes : 10, eyeballPath : this.eye.eyeballGenerator.getCurrentPath()});
	
		eyeball.getComponent("MESH").addChild(pupil.getComponent("MESH"));
		for(let e of eyelashes){
			eyeball.getComponent("MESH").addChild(e.getComponent("MESH"));
		}

		let entities = [eyeball, pupil].concat(eyelashes);

		return {
			eyeball : eyeball,
			entities : entities
		}
	}

	setupMouth(position){
		let mouth = this.mouth.create({x : position.x, y : position.y});

		let teeth = this.teeth.create({numTeeth : 10, mouthPath : this.mouth.mouthGenerator.getCurrentPath()});
		for(let t of teeth){
			mouth.getComponent("MESH").addChild(t.getComponent("MESH"));
		}

		let entities = [mouth].concat(teeth);

		return {
			mouth : mouth,
			entities : entities
		};

	}

	setupEntityHeirachy(){

	}




}

export default CreatureGenerator;

