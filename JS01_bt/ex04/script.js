var ScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  if(ScrollY < window.scrollY){
    alert("Down")
} else {
    alert("up")

}
  ScrollY = window.scrollY;
}); 



  

