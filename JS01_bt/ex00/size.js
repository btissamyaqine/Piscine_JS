function display_time() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
  hours = x.getHours( ) % 12;
  hours = hours ? hours : 12;
  x1 = hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
  document.getElementById('ct').innerHTML = x1;
  display_ct();
   }
   function display_ct(){
   var refresh=1000; 
   mytime=setTimeout('display_time()',refresh)
  }
  display_ct()
  
  // const el1 = document.querySelector('[datetime]').innerHTML=display_time();
  const el1 = document.body.main.time.datetime.innerHTML=display_time();
  
  function getScreen() {
    return ("Screen: " + screen.width + "*" + screen.height);
  }
  function getWindowOuter(){
    var widthOuter = window.outerWidth;
    var heightOuter = window.outerHeight;
    return ("Window Outer :" + widthOuter + "*" + heightOuter)
  }
  function getWindowInner(){
    var widthInner = window.innerWidth;
    var heightInner = window.innerHeight;
    return ("Window Inner :" + widthInner + "*" + heightInner)
  }
  function getDocumentSize(){
    var element = document.getElementById('body');
    var documentWidth = element.clientWidth;
    var positionInfo = element.getBoundingClientRect();
    var documentHeight = positionInfo.height;
    return ("Document :" + documentWidth + "*" + documentHeight);
  }
  console.log(getScreen() );
  
    function AddElementtoDOM() {
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(getScreen()));
      li.appendChild(document.createTextNode(getWindowOuter()));
      li.appendChild(document.createTextNode(getWindowOuter()));
      li.appendChild(document.createTextNode(getWindowOuter()));
      ul.appendChild(li);
    }
    AddElementtoDOM();