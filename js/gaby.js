

function simulateLoading() {
  const loadingBar = document.getElementById("loadingBar");
  let progress = 0;

  const updateProgress = () => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    loadingBar.style.width = progress + "%";

    if (progress < 100) {
      setTimeout(updateProgress, 100 + Math.random() * 200);
    } else {
      setTimeout(() => {
        // Cuando termina, redirige al index.html
        window.location.href = "index.html";
      }, 500);
    }
  };

  updateProgress();
}

window.addEventListener("load", simulateLoading);
