var cols, rows;
var w = 3200;
var h = 1600;
var scl = 20;
var terrain = [];
var flying = 0;

function setup() {
	createCanvas(1000, 1000, WEBGL);
	cols = w/scl;
	rows = h/scl;
	for(let x = 0; x < cols; x++){
		terrain[x] = [];
		for(let y = 0; y < rows; y++){
			terrain[x][y] = 0;
		}
	}

}

function draw() {
	flying -= 0.25
	let yoff = flying;
	for(let y = 0; y < rows; y++){
		let xoff = 0;
		for(let x = 0; x < cols; x++){
			terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
			xoff += 0.2;
    }
    yoff += 0.2;
  }

	background(0);
	translate(0, 50);
	rotateX(PI/3);
	stroke(255, 20);
	fill(200, 200, 200, 15);

	translate(-w/2, -h/2);
	for(let y = 0; y < rows-1; y++){
		beginShape(TRIANGLE_STRIP);
		for(let x = 0; x < cols; x++){
			vertex(x*scl, y*scl, terrain[x][y]);
			vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
		}
		endShape();
	}
}
