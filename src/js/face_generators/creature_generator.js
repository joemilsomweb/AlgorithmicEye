
import HeadGenerator from "face_generators/head_generator";
import EyesGenerator from "face_generators/eye_generator";
import MouthGenerator from "face_generators/mouth_generator";
// import HeadGenerator from "face_generators/head_generator";

class CreatureGenerator{

	constructor(){
		this.entities = [];
		this.createCreature();
		this.setupEntityHeirachy();
	}

	createCreature(){
		this.head = new HeadGenerator();
		this.eyes = new EyesGenerator();
		this.mouth = new MouthGenerator();

		this.entities = [];

		let head = this.head.create();
		let eyes = this.eyes.create();
		let mouth = this.mouth.create();

		this.entities.push(head);
		this.entities = this.entities.concat(eyes);
		this.entities = this.entities.concat(mouth);

	}

	setupEntityHeirachy(){

	}




}

export default CreatureGenerator;

