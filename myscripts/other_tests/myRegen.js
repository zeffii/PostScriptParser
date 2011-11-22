			
	/*
	regen of triangles.
	this one is for you.
	written by Dealga McArdle 2011, November.
	MIT license
	
	The idea is:
	- semi random triangles, 
	- semi random gradient parameters 
	- semi distributed colours
	- all contained mostly in a circular boundary
	- white typography ontop. ( DigitalAphasia )
	- [optional, make it move.]
	
	12 Nov, exploration of paper.js
	13 Nov, bug tracking. maybe it's the random function..
	
	Milestsones.
	[x] place n triangles within a circular boundary.
	[x] random size 
	[x] random gradient 
	[x] random rotation
	[ ] add ability to save hires image.
	
	*/
	
	// Layer inits
	var layerMain = new Layer();
	
	// http://stackoverflow.com/questions/4959975/random-between-two-numbers-in-javascript/8063367#8063367
	function random_between(lowValue, highValue){
       return (Math.random() * highValue | lowValue) + 1;
	 }
	
		
	function get_random_gradient(){
		
		var reds = ['FA', 'FB', 'FC', 'FD', 'FE', 'FF'];
		var greens = ['00', '10', '34', '2A', 'A0', 'a0'];
		var blues = ['00', '10', '04', '2A', '40','6a'];
		var r1 = reds[random_between(0, reds.length)];
		var g1 = '00';
		var b1 = '00';
		var r2 = reds[random_between(0, reds.length)];
		var g2 = greens[random_between(0, greens.length)];
		var b2 = blues[random_between(0, blues.length)];
		var rgb1 = '#' + r1 + g1 + b1;
		var rgb2 = '#' + r2 + g2 + b2;
		
		return [rgb1, rgb2];
	}
	
	function get16ths(){
	
		var myArray = new Array();
		
		var degrees = 0;
		while (degrees < 360){
			myArray.push(degrees);
			degrees += 45/2;
				
		}
		return myArray;
	}
	
	function draw_triangle(point){
		/*
		point [is center]. let's build a triangle around it.
		*/
	
	
		var segments = [new Point(50, 75), new Point(100, 25),new Point(150, 75)]; 
		var myPath = new Path(segments);
		myPath.strokeColor = 'black';
		myPath.strokeColor.alpha = 0;
		myPath.closed = true;
		
		var topLeft = new Point(50, 25);
		var bottomLeft = new Point(50, 75);
				
		var myGradient = new Gradient(get_random_gradient());
		myPath.fillColor = new GradientColor(myGradient, topLeft, bottomLeft);
		
		var rotateDegrees = get16ths();
		var rotationalAmount = rotateDegrees[random_between(0, rotateDegrees.length)];
		myPath.rotate(rotationalAmount);
				
		myPath.position = point;
		myPath.scale(Math.random()*Math.random()*5);
		myPath.opacity = Math.random();
		
	}

	
	function draw_text(){
	
		// #FAFAFA
		var text = new PointText(new Point(200, 270));
		text.content = 'randomTri';
		text.characterStyle = {
			fillColor:'#FAFAFA',
			fontSize: 30
		};
		
		
	}
	
	
	function main(){
	
		layerMain.activate();
		var numTris = 20; 
		for (i=0; i < numTris; i++){
			// var x = random_between(-1,1);
			// var y = random_between(-1,1);
			
			// var radiusPosX = Math.random(0,1);
			// var radiusPosY = Math.random(0,1);
			// var posX = (radiusPosX * Math.sin(x) * 200) + 200;
			// var posY= (radiusPosY * Math.cos(y) * 200) + 200;
			
			var pointOnCircle = 2.0 * 3.141592 * Math.random();
			var tRadius = random_between(0,200);
			var posX = Math.sin(pointOnCircle) * tRadius;
			var posY = Math.cos(pointOnCircle) * tRadius;
			posX += 300;
			posY += 300;
			
			var point = new Point(posX, posY);
			draw_triangle(point);
		
		}
		
		
	}
	
	main();


