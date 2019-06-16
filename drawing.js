window.addEventListener("load", () => {
	let canvas = document.getElementById("drawing-board");
	let ctx = canvas.getContext("2d");

	let pageWidth = document.documentElement.clientWidth;
	let pageHeight = document.documentElement.clientHeight;

	let penColor = "#ff0000"
	let colorPicker = document.getElementById("colorpicker");

	let penPicked = false;
	canvas.width = 0.8 * pageWidth;
	canvas.height = 0.8 * pageHeight;



	function ontouchmove(e) {
		console.log("touched");
		let x = e.clientX;
		let y = e.clientY;
		if (penPicked === true) {
			drawRect(x - 15, y - 15, penColor)
		}
	};




	function presskey(e) {
		console.log("pressed");
		if (e.keyCode === 32) {
			console.log("space pressed");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
		} else if (e.keyCode === 66) {
			console.log("b pressed");
			penColor = "#0000ff";
		} else if (e.keyCode === 71) {
			console.log("g pressed");
			penColor = "#00ff00";
		} else if (e.keyCode === 89) {
			console.log("y pressed");
			penColor = "#ffff00";
		} else if (e.keyCode === 38) {
			console.log("arrowUp pressed");
			penPicked = true;
			document.getElementById('annotation').innerHTML = "pen picked";
		} else if (e.keyCode === 40) {
			console.log("arrowDown pressed");
			penPicked = false;
			document.getElementById('annotation').innerHTML = "Please pick a pen with up arrow First";
		}
	}
	colorPicker.addEventListener("input", e => penColor = colorPicker.value);
	window.onresize = resizeCanvas;



	canvas.addEventListener('mousemove', ontouchmove);
	canvas.addEventListener('keydown', presskey);


});

function resizeCanvas() {
	var currHeight = document.documentElement.clientHeight;
	var currWidth = document.documentElement.clientWidth;
	var canvasHeight = 0.8*currHeight;
	var canvasWidth = 0.8*currWidth;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function drawRect(x, y, color) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(x, y, 30, 30);
	ctx.fill(color);
};