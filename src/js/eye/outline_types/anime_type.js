const AnimeType = {
		
		//make it perfectly round for now
		generateOutline : function(){
				const size = {
					width : Math.random() * 100 + 150,
					height : Math.random() * 300 + 50 
				};

				let outlinePoints = [];
				
				//centre point of eye
				let centerX = size.width/2;
				
				let minX = 99999;
				let minY = 99999;

				let currentAngle = -180;

				const animeConst = Math.random() * 4 + 2;

				while(currentAngle < 0){
					let x = Math.cos(currentAngle * Math.PI/180) * size.width/animeConst;
					let y = Math.sin(currentAngle * Math.PI/180) * size.height/2;

					x += size.width/2;
					y += size.height/2 + size.height/4;
					
					outlinePoints.push({
						x : x,
						y : y
					});

					minX = x < minX ? x : minX;
					minY = y < minY ? y : minY;
						
					currentAngle += 1;		
				}

				//calculate offset from 0, so we can make a canvas
				//of width and height of the outline
				for (var p of outlinePoints){
					p.x -= minX;
					p.y -= minY;
				}

			//return geometry...
			return outlinePoints;
		}
};	

export default AnimeType;