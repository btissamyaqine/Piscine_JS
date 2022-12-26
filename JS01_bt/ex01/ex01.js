
const bars = document.getElementsByClassName('progressBars');

function startProgress(bars, index = 0) {
  const bar = bars[index];
  if (!bar) return;

  const id = setInterval(() => {

    if (bar.value < bar.max){
      bar.value++;
    } else if(bar.value < 10) {
      bars.style.color = 'red'
      } else {
      clearInterval(id);
      startProgress(bars, index + 1);
    }
  }, 5000);
}

startProgress(bars);