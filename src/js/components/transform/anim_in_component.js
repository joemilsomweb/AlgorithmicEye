class AnimInComponent{
	
	constructor(options){
		this.scale = 0;
		this.animTween = new TweenMax.to(this, 3, {scale : 1, ease : "Elastic.easeOut"});
		this.animTween.pause();

		this.progressSpeed = Math.random() * 0.01;
	}

	update(){
		if(this.animTween.progress() > 1){
			return;
		}
		this.animTween.progress(this.animTween.progress() + this.progressSpeed);
	}

}

AnimInComponent.prototype.name = "ANIM_IN";

export default AnimInComponent;