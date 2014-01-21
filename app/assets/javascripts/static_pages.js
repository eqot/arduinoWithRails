
var blink = function(value) {
    var arduino = document.arduino;
    arduino.analogWrite(13, value);
    if (value == 255) {
        $("#blink-label").addClass("blinking");
    } else {
        $("#blink-label").removeClass("blinking");
    }
    setTimeout(blink, 1000, value == 0 ? 255 : 0);
}

$(document).ready(function() {
    var arduino = document.arduino;
    arduino.open("/dev/cu.usbserial-09LP8212");
    arduino.pinMode(13, true);
    //start blinking
    blink(0);
});
