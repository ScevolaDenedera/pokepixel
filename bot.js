var BOT = new function() {

this.x = new Array();
this.y = new Array();
this.bX = new Array();
this.bY = new Array();
this.tempLocation = new Array();
//this.map = $('.container');


this.ini = function(x,y) {
this.x.push(x);
this.y.push(y);
return this.checklast();
};

this.getLength = function() {
	return this.bY.length;
}


this.checklast= function(){
return Array(this.x[this.x.length-1],this.y[this.y.length-1]);
};

this.explore = function(x,y) {
this.bX.push(x);
this.bY.push(y); 
this.draw();
}

this.draw = function() {
	this.tempLocation = this.locatebot();
	var x = this.tempLocation[0];
	var y = this.tempLocation[1];
	//console.log("X: " +this.tempLocation[0] + " Y: "+ this.tempLocation[0]);
		var last = $('.obj');
		var xy = last.position();
		var lx = xy.left;
		var ly = xy.top;


		var elm = $('<div class="obj" onmouseover="tcatch()"></div>');
		elm.addClass('obj');
		elm.css({"left": lx, "top": ly});
		elm.animate({
			left: x,
			top: y
		});
		//elm.css({"left": x, "top": y});
		$('.container').html("");
	$('.container').html(elm);

}

this.locatebot= function() {
return Array(this.bX[this.bX.length-1], this.bY[this.bY.length-1]);
};



this.world = function(d) {
	var x = 0;
	while(x<d) {	
			for(y=0; y<d; y++){
				var n = this.ini(x,y);
			}
		x++;
	}

};

}