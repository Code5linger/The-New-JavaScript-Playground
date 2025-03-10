// var pixelsPerSecond = 200;
// var animation = gsap.timeline();

// animation
// .to('#star', { duration: 1, x: 1150 })
// .to('#circle', { duration: 1, x: 1150 })
// .to('#square', { duration: 1, x: 1150 })

// animation.eventCallback("onUpdate", movePlayhead).paused(true);
// gsap.to('svg', { autoAlpha: 1 })
// var time = document.getElementById('time');
// var maxX = animation.duration() * pixelsPerSecond;

// var children = animation.getChildren();

// for (var i = 0; i < children.length; i++) {
//   gsap.set("#tween" + i, { x: children[i].startTime() * pixelsPerSecond });
//   gsap.set("#rect" + i, { width: children[i].duration() * pixelsPerSecond })
// }

// var dragger = Draggable.create("#playhead", { // the playhead is the pink pill shaped draggable thing 
// 	type:"x", 
// 	cursor:"pointer",
// 	trigger:"#timeline",
// 	bounds: {minX:0, maxX:maxX},
// 	onDrag:function(){
// 		animation.pause();
// 		time.textContent=animation.time().toFixed(1);
// 		animation.progress(this.x/maxX);
// 	}
// });

// function movePlayhead() { // the playhead is the pink pill shaped draggable thingy 
// 	gsap.set("#playhead", {x:animation.progress() * maxX});
// 	time.textContent = animation.time().toFixed(1);	
// }

// document.getElementById("play").onclick = function() {
// 	animation.play();
// }

// document.getElementById("pause").onclick = function() {
// 	animation.pause();
// }

// document.getElementById("reverse").onclick = function() {
// 	animation.reverse();
// }



/* COMPLETE
var pixelsPerSecond = 200;
var animation = gsap.timeline();
animation
	  .to("#star", {duration:2, x:1150})
	  .to("#circle", {duration:1, x:1150})
     .to("#square", {duration:3, x:1150}, "<")


animation.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to("svg", {autoAlpha:1})
var time = document.getElementById("time")
var maxX = animation.duration() * pixelsPerSecond;

var children = animation.getChildren()
var numChildren = children.length;

for(var i = 0; i < numChildren; i++){
  gsap.set("#tween" + i, {x:children[i].startTime() * pixelsPerSecond})
  gsap.set("#rect" + i, {width:children[i].duration() * pixelsPerSecond})
}

var dragger = Draggable.create("#playhead", { // the pink pill
	type:"x", 
	cursor:"pointer",
	trigger:"#timeline",
	bounds: {minX:0, maxX:maxX},
	onDrag:function(){
		animation.pause();
		time.textContent = animation.time().toFixed(1);
		animation.progress(this.x/maxX);
	}

});

function movePlayhead() { // the playhead is the pink pill shaped draggable thingy 
	gsap.set("#playhead", {x:animation.progress() * maxX});
	time.textContent = animation.time().toFixed(1);	
}

document.getElementById("play").onclick = function() {
	animation.play();
}

document.getElementById("pause").onclick = function() {
	animation.pause();
}

document.getElementById("reverse").onclick = function() {
	animation.reverse();
}

*/



var pixelsPerSecond = 200;
var animation = gsap.timeline();

animation
.to('#star', { duration: 2, x: 1150 })
.to('#circle', { duration: 1, x: 1150 })
.to('#square', { duration: 2, x: 1150 })

animation.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to('svg', { autoAlpha: 1 })
var time = document.getElementById('time');
var maxX = animation.duration() * pixelsPerSecond;

var children = animation.getChildren()
var numChildren = children.length

for (var i = 0; i < numChildren; i++) {
	// gsap.set('#tween' + i, { x: children[i].startTime() * pixelsPerSecond })
	gsap.set("#tween" + i, { x: children[i].startTime() * pixelsPerSecond })
	
	// gsap.set('#rect' + i, { width: children[i].duration() * pixelsPerSecond })
	  gsap.set("#rect" + i, {width:children[i].duration() * pixelsPerSecond})


    // gsap.set(`#rect${i}`, { width: children[i].duration() * pixelsPerSecond });
    // console.log(`#rect${i} width:`, children[i].duration() * pixelsPerSecond); // Debugging
}

// for (var i = 0; i < numChildren; i++) {
//     gsap.set('#tween' + i, { x: children[i].startTime() * pixelsPerSecond })
//     // gsap.set('#rect' + i, { width: children[i].duration() * pixelsPerSecond })
//     var rect = document.getElementById(`#rect${i}`);
//     if (rect) {
//         gsap.set(rect, { width: children[i].duration() * pixelsPerSecond });
//     }
// }


var dragger = Draggable.create("#playhead", { // the playhead is the pink pill shaped draggable thingy 
	type:"x", 
	cursor:"pointer",
	trigger:"#timeline",
	bounds: {minX:0, maxX:maxX},
	onDrag:function(){
		animation.pause();
		time.textContent=animation.time().toFixed(1);
		animation.progress(this.x/maxX);
	}
});

function movePlayhead() { // the playhead is the pink pill shaped draggable thingy 
	gsap.set("#playhead", {x:animation.progress() * maxX});
	time.textContent = animation.time().toFixed(1);	
}

document.getElementById("play").onclick = function() {
	animation.play();
}

document.getElementById("pause").onclick = function() {
	animation.pause();
}

document.getElementById("reverse").onclick = function() {
	animation.reverse();
}



