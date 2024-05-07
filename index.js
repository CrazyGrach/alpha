var countDownDate2 = new Date("May 14, 2024 23:00:00").getTime();

    var countdownfunction2 = setInterval(function() {
    
    // Get todays date and time

    var now2 = new Date().getTime();
    // Find the distance between now an the count down date
    var distance2 = countDownDate2 - now2;
    
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"


    document.getElementById("demo2").innerHTML = days2 + ":" + hours2 + ":" + minutes2 + ":" + seconds2;

    if (days2 < 7) {
        document.getElementById("demo2").style.color = "darkgreen";
    }

    if (days2 < 3) {
        document.getElementById("demo2").style.color = "orange";
    }
    
    if (days2 < 1) {
        document.getElementById("demo2").style.color = "red";
    }

    // If the count down is over, write some text 
    if (distance2 < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo2").innerHTML = "Скоро.";
    }
}, 1000);
