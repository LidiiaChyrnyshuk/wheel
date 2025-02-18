document.addEventListener("DOMContentLoaded", function () {
	const wheel = document.getElementById("wheel");
	const spinButton = document.getElementById("spin-button");
	const popup = document.getElementById("popup");
	const prizeAmount = document.getElementById("prize-amount");
	const collectButton = document.getElementById("collect-button");

	const sectorAngles = [0, 45, 90, 135, 180, 225, 270, 315]; 
	const prizes = [1, 10, 20, 30, 40, 50, 100, 200]; 
	let spinCount = 0;
	let totalPrize = 0;
	let gameFinished = false;
	let currentRotation = 0;

	spinButton.addEventListener("click", function () {
		if (gameFinished) return;

		spinCount++;

		let selectedAngle;
		if (spinCount <= 1) {
			selectedAngle = 260; 
		}else if (1< spinCount <= 3) {
			selectedAngle = 360;
		} else {
			
			const randomIndex = Math.floor(Math.random() * sectorAngles.length);
			selectedAngle = sectorAngles[randomIndex];
		}

		
		const fullRotations = 5 * 360; // Додаткові оберти для ефекту
		currentRotation += fullRotations + selectedAngle;

		
		wheel.style.transition = "transform 3s ease-out";
		wheel.style.transform = `rotate(${currentRotation}deg)`;

		setTimeout(function () {
			/* const index = sectorAngles.indexOf(selectedAngle);
			const prize = prizes[index];

			totalPrize += prize; */

			if (spinCount < 3) {
				spinButton.textContent = "Вращать еще раз";
			} else {
				
				popup.style.display = "block";
				prizeAmount.textContent = `300$`;
				gameFinished = true;
			}
		}, 3000);
	});

	collectButton.addEventListener("click", function () {
		
		popup.style.display = "none";
		spinButton.textContent = "Вращать";
		totalPrize = 0;
		spinCount = 0;
		gameFinished = false;
		currentRotation = 0; 

		
		wheel.style.transition = "none";
		wheel.style.transform = "rotate(0deg)";
	});
});
