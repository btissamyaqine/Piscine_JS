
export function setTimerInterval(callback, interval) {
  // wrap the original function, recursively call the wrapper function with setTimeout 
  
  const wrapper = () => {
    console.log(callback)
    return setTimeout(wrapper, interval)
  }
  setTimeout(wrapper, interval);
}
setTimerInterval('hello world', 1000);