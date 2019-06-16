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


	function drawRect(x1, y1, color) {
		if (!penPicked) return;
		ctx.fillRect(x1, y1, 30, 30);
		ctx.strokeStyle = color;
	}

	function onmousemove (e) {
		console.log("move");
		var x = e.clientX;
		var y = e.clientY;
		if (penPicked === true) {
			drawRect(x - 15, y - 15, penColor);
		}
	}


	document.onkeydown = (e) => {
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
	};
	colorPicker.addEventListener("input", e => penColor = colorPicker.value);
	window.onresize = resizeCanvas;

	function resizeCanvas() {
		let currHeight = document.documentElement.clientHeight;
		let currWidth = document.documentElement.clientWidth;
		let canvasHeight = 0.8 * currHeight;
		let canvasWidth = 0.8 * currWidth;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
	}

	canvas.addEventListener("mousemove",onmousemove)
	

});