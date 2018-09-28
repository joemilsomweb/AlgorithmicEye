class TimelineAnimComponent{
	
	constructor(options){
		this.scale = 1;
		this.sinOffset = 0;
	}

	updateScale(){
		this.sinOffset += 0.05;
		this.scale = (Math.sin(this.sinOffset) + 1)/2;
	}
}

TimelineAnimComponent.prototype.name = "TIMELINE_ANIM_COMPONENT";

export default TimelineAnimComponent;