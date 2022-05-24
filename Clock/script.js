/* ---------------------Clock----------------- */
setInterval(function () {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    session = "AM";
    function sessions(c) {
        if (c > 12) {
            return "PM";
        }
        
        else if (c < 0) {
            return "AM";
        }
    }

    function addLeadingZero(b) {
        if (b < 10) {
            return "0" + b;
        }
        else {
            return b;
        }
    }
    function tHourFormat(a) {

        if (a > 12) {
            a = a - 12;
            return a;
        } else {
            a = a;
            return a;
        }
    }
    
    
    document.getElementById("time").innerHTML = addLeadingZero(tHourFormat(hours)) +":"+addLeadingZero(minutes) +":"+addLeadingZero(seconds)+":"+sessions(hours);
    
    
    
}, 100);
