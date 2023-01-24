import { setTimer } from './setTimerTimeout'

const setInterval = () => {
  let interval = 3;
  return(interval);
}

function printNum(count) {
	console.log(count);
	return count < 3;
}

setTimer(printNum, setInterval); // 0 1 2 3 <= Each output is 100ms apart.













 