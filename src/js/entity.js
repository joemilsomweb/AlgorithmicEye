//does this need to be a class?? can just be an object...

const Entity = class{

	constructor(options){
		this.generateId();
		this.components = {};
	}

	//not really utilised. probably more useful for hardout c++ programs
	generateId(){
		this.id = Math.random();
	}

	//add render component/geometry, make more specific maybe 
	addComponent(component){
		if(this.components[component.name]){
			//is this good or bad practice
			throw new Error("Already contains a component of type " + component.name); 
			return;
		}
		this.components[component.name] = component;
	}

	getComponent(name){
		return this.components[name];
	}

}

export default Entity;