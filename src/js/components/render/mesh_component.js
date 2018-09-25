class MeshComponent{
	constructor(options){
		this.mesh = options.mesh;
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;