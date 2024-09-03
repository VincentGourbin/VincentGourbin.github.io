var $ = jQuery;
var animationTime = 30; // Total animation time in seconds

$(document).ready(function(){

    // Set the target date
    const countDownDate = new Date("Jan 12, 2025 00:00:00").getTime();

    $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

    var deadlineAnimation = function () {
        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1.5s'});
        },0);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1s'});
        },4000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.7s'});
        },8000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.3s'});
        },12000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.2s'});
        },15000);
    };

    function updateTimer() {
        // Get current time
        const now = new Date().getTime();
        
        // Calculate the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the deadline text
        $('.deadline-days .day').text(`${days}j ${hours}h ${minutes}m ${seconds}s`);
        
        // If the count down is finished, clear the interval and reset text
        if (distance < 0) {
            clearInterval(timerInterval);
            $('.deadline-days .day').text("Expired");
        }
    }

    var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
        $el.html(html);
    }

    deadlineText();

    deadlineAnimation();

    // Update the timer every second
    var timerInterval = setInterval(updateTimer, 1000);

    setInterval(function(){
        deadlineAnimation();
        console.log('begin interval', animationTime * 1000);
    }, animationTime * 1000);
});
