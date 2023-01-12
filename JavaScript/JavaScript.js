function showTime(){
    var date=new Date();
    var hour="00"+date.getHours();
    hour=hour.substr(hour.length-2);
    var minute="00"+date.getMinutes();
    minute=minute.substr(minute.length-2);
    var element=document.getElementById('time');
    element.innerHTML=hour+'<br/>'+minute;
  }
  setInterval('showTime()',10);
  function myFunction(){
      var element=document.body;
      element.classList.toggle("dark-mode");
    }