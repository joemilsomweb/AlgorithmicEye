class MeshComponent{
	constructor(options){
		this.mesh = options.mesh;
		this.mesh.renderOrder = options.renderOrder || 0;
	}

	addChild(child){
		this.mesh.add(child.mesh);
	}

	setRenderOrder(renderOrder){
		this.mesh.renderOrder = renderOrder;
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;