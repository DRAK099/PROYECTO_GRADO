let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStarValue = 0,
progressEndValue = 0,
speed =10;

let progress = setInterval(() => {
    progressStarValue++;

    progressValue.textContent = `${progressStarValue}`
})
