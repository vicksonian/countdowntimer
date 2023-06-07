document.getElementById("start-btn").addEventListener("click", function () {
    var days = parseInt(document.getElementById("days").value) || 0;
    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;
  
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + days);
    targetDate.setHours(targetDate.getHours() + hours);
    targetDate.setMinutes(targetDate.getMinutes() + minutes);
    targetDate.setSeconds(targetDate.getSeconds() + seconds);
  
    function updateTimer() {
      var currentDate = new Date();
      var timeDifference = targetDate - currentDate;
  
      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        alert("Countdown is finished!");
        return;
      }
  
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById("days").value = days.toString();
      document.getElementById("hours").value = hours.toString().padStart(2, "0");
      document.getElementById("minutes").value = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").value = seconds.toString().padStart(2, "0");
    }
  
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
  });
  