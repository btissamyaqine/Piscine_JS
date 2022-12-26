
const box = document.getElementsByTagName('li');
// document.getElementsByTagName('li').value;
for (const boxes of box) {
  boxes.addEventListener('mouseover', function handleMouseOver(event) {
    boxes.style.color = 'red';
    
  });
  
  boxes.addEventListener('mouseout', function handleMouseOut() {
    boxes.style.color = 'black';
  });
}
const message = document.querySelectorAll("li");
for (const messages of message) {
  
  messages.addEventListener('click', function handelClick(e) {
    alert('alert')
    e.stopPropagation();
  });
}