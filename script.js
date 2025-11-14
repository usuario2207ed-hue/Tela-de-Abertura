const charge = document.getElementById("charge");
const percentText = document.getElementById("percent");


const percentInterval = setInterval(() => {
    const h = parseFloat(window.getComputedStyle(charge).height);
    const total = parseFloat(window.getComputedStyle(charge.parentNode).height);
    const percent = Math.round((h / total) * 100);
    percentText.innerText = percent + "%";

  
    if (percent >= 100) {
        clearInterval(percentInterval);
        setTimeout(() => {
            window.location.href = "https://usuario2207ed-hue.github.io/EDCELL-TECH/";
        }, 800);
    }
}, 100);
