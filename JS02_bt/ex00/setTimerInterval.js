setTimerInterval = (func , mill_second) => {
  func()
  return setInterval(func, mill_second)
}