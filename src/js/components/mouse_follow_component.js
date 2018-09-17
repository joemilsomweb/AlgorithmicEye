class MouseFollow{
	
	constructor(options){

	}

	getMouseVector(){
		return {
			x : 1, 
			y : 0 
		}
	}

}

MouseFollow.prototype.name = "MOUSE_FOLLOW";

export default MouseFollow;