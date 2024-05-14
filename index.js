var countDownDate2 = new Date("Sep 1, 2024 00:00:00").getTime();

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


    document.getElementById("demo2").innerHTML = 'До 1 сентября осталось ' + days2 + " дней, " + hours2 + " часов, " + minutes2 + " минут, " + seconds2 + ' секунд';

    if (days2 < 90) {
        document.getElementById("demo2").style.color = "green";
    }

    if (days2 < 60) {
        document.getElementById("demo2").style.color = "orange";
    }
    
    if (days2 < 30) {
        document.getElementById("demo2").style.color = "red";
    }

    // If the count down is over, write some text 
    if (distance2 < 0) {
        clearInterval(countdownfunction2);
        document.getElementById("demo2").innerHTML = "1 сентября уже настало.";
    }
}, 1000);
