class TimelineAnimComponent{
	
	constructor(options){
		this.posOffsetX = 0;
		this.posOffsetY = 0;
		this.animTween = new TimelineMax({repeat : -1});
		this.animTween.add(new TweenMax.set(this, 1, {posOffsetX : 0, posOffsetY : 0}));
		this.animTween.add(new TweenMax.to(this, 0.5, {posOffsetX : 70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 0.25, {posOffsetX : 70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 1, {posOffsetX : -70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 0.25, {posOffsetX : -70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 1, {posOffsetX : 0, posOffsetY : -70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 0.25, {posOffsetX : 0, posOffsetY : -70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 1, {posOffsetX : 0, posOffsetY : 70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 0.25, {posOffsetX : 0, posOffsetY : 70, ease : "Power2.easeOut"}));
		this.animTween.add(new TweenMax.to(this, 1, {posOffsetX : 0, posOffsetY : 0, ease : "Power2.easeOut"}));

		this.animTween.loop = true;
		this.progress = 0;
		this.animTween.pause();
	}    

	update(){
		this.progress += 0.001;
		this.animTween.progress(this.progress);
	}
}

TimelineAnimComponent.prototype.name = "TIMELINE_ANIM_COMPONENT";

export default TimelineAnimComponent;